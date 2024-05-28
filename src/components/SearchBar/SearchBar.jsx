import { useState, useContext } from "react";
import "./searchbar.css";
import { CartContext } from "../../context/context";
import { fetchProducts } from "../../http/http";

const SearchBar = () => {
  const { products, setProducts } =  useContext(CartContext);
  
    const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [filteredData, setFilteredData] = useState([]); 


  const handleInputChange = async (event) => {
    const value = event.target.value;
    console.log("val", value)
    setSearchQuery(value);

    if (value) {
      const filtered = products?.filter((item) =>
        item?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
      );
      
      console.log(filtered);
      setFilteredData(filtered);
      setProducts(filtered);
      setShowPopup(true);
    } 
     if(value.length < 3){
      const allProducts = await fetchProducts()
      setProducts(allProducts);
      setFilteredData([]);
      setShowPopup(false);
    }
  };
  
  const handleItemClick = (item) => {
    setProducts([item]);
    setSearchQuery(item.title);
    setShowPopup(false);
  };



  return (
    <>
      <div className="searchBar d-flex">
        <form action="" className="d-flex form-control">
          <input
            type="text"
            className="input form-control"
            placeholder="Search For Products"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </form>
        <button className="btn">
          <i className="bi bi-search"></i>
        </button>

      </div>
<div className="popup-container  ">


      {showPopup && (
        <div className="popup">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="popup-item "
                onClick={() => handleItemClick(item)}
              >
              
                <p>{item?.title}
                </p>
              </div>
            ))
          ) : (
            <div className="popup-item">No results found</div>
          )}
        </div>
      )}
</div>
    </>
  );
};

export default SearchBar;





/* 
import { useState, useContext } from "react";
import { Form, InputGroup, Button } from 'react-bootstrap';
import "./searchbar.css";
import { CartContext } from "../../context/context";
import { fetchProducts } from "../../http/http";

const SearchBar = () => {
  const { products, setProducts } = useContext(CartContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value) {
      const filtered = products?.filter((item) =>
        item?.title?.toLowerCase().includes(value?.toLowerCase())
      );
      setFilteredData(filtered);
      setShowPopup(true);
    } else if (value && value.length < 3) {
      const allProducts = await fetchProducts();
      setProducts(allProducts);
      setFilteredData([]);
      setShowPopup(false);
    }
  };

  const handleItemClick = (item) => {
    setProducts([item]);
    setSearchQuery(item.title);
    setShowPopup(false);
  };

  return (
    <>
      <div className="searchBar d-flex">
        <Form className="d-flex form-control">
          <InputGroup>
            <Form.Control
              type="text"
              className="input form-control"
              placeholder="Search For Products"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <InputGroup.Append>
              <Button className="btn">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
      <div className="popup-container">
        {showPopup && (
          <div className="popup">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="popup-item"
                  onClick={() => handleItemClick(item)}
                >
                  <p>{item?.title}</p>
                </div>
              ))
            ) : (
              <div className="popup-item">No results found</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
 */