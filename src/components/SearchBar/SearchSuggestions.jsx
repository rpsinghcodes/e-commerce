import React from "react";
import { Search } from "lucide-react";

const SearchSuggestions = ({ suggestions, onItemClick, visible }) => {
  if (!visible) return null;

  if (suggestions.length === 0) {
    return (
      <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 z-50 p-6 text-center text-sm text-gray-500 animate-in fade-in slide-in-from-top-2 duration-200">
        <p>No results found.</p>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
      <ul className="max-h-[300px] overflow-y-auto divide-y divide-gray-50">
        {suggestions.slice(0, 8).map((item, index) => (
          <li
            key={item.id || index}
            className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-4 transition-colors group"
            onClick={() => onItemClick(item)}
          >
            {/* Thumbnail */}
            <div className="w-10 h-10 bg-gray-100 rounded-md flex-shrink-0 overflow-hidden border border-gray-100">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain mix-blend-multiply p-1"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Search size={16} />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 truncate mt-0.5">
                {item.category || "Product"}
              </p>
            </div>

            {/* Price */}
            <div className="text-sm font-bold text-gray-900">
              ${item.price}
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-gray-50 px-4 py-2 text-xs text-gray-400 text-center border-t border-gray-100">
         Showing top results
      </div>
    </div>
  );
};

export default SearchSuggestions;
