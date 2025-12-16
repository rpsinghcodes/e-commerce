import { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/context";
import { fetchProducts } from "../../http/http";
import { Search, X } from "lucide-react";

import SearchSuggestions from "./SearchSuggestions";

const SearchBar = () => {
  const { products, setProducts } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [allProductsCache, setAllProductsCache] = useState([]); 
  const wrapperRef = useRef(null);

  // Cache all products on mount so we don't need to re-fetch constantly
  useEffect(() => {
    const loadProducts = async () => {
       const data = await fetchProducts();
       setAllProductsCache(data || []);
    };
    loadProducts();
  }, []);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);


  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      // Filter from our local cache, NOT the potentially modified global state
      const filtered = allProductsCache.filter((item) =>
        item?.title?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
      setShowPopup(true);
    } else {
      setFilteredData([]);
      setShowPopup(false);
      // Restore original products if cleared
      setProducts(allProductsCache);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredData.length > 0) {
      setProducts(filteredData);
    }
    setShowPopup(false);
  };
  
  const handleItemClick = (item) => {
    setProducts([item]);
    setSearchQuery(item.title);
    setShowPopup(false);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setProducts(allProductsCache);
    setShowPopup(false);
  }

  const isVisible = showPopup && searchQuery.length > 0;

  return (
    <div className="relative w-full max-w-xl mx-auto" ref={wrapperRef}>
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <div className="absolute left-3 text-gray-400">
           <Search size={18} />
        </div>
        <input
          type="text"
          className="w-full pl-10 pr-10 py-2 bg-gray-100 border-none rounded-full text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => searchQuery.length > 0 && setShowPopup(true)}
        />
        {searchQuery && (
          <button 
            type="button" 
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full bg-transparent"
          >
            <X size={14} />
          </button>
        )}
      </form>

      <SearchSuggestions 
        suggestions={filteredData}
        onItemClick={handleItemClick}
        visible={isVisible}
      />
    </div>
  );
};

export default SearchBar;
