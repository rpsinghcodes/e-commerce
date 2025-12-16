import React, {  useContext } from "react";
import { Package, Heart, ShoppingCart } from "lucide-react";
 
import { CartContext } from "../../context/context";
import { Link } from "react-router-dom";

const Products = () => {
const {products, addToCart, addToWishList, user} =  useContext(CartContext);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-600 pl-4">Featured Products</h2>
        
        {products.length === 0 && (
           <div className="text-center py-20 text-gray-500 flex flex-col items-center">
             <Package className="w-16 h-16 mb-4 text-gray-400" />
             <p className="text-xl">No products found.</p>
           </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((item, id) => {
            return (
              <div key={item.id || id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 p-6 bg-gray-50 group-hover:bg-white transition-colors">
                   <img
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    src={item.image}
                    alt={item.title}
                  />
                  {!user.isSellerLogedIn && (
                    <button 
                      onClick={() => addToWishList(item)}
                      className="absolute top-4 right-4 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-2">
                     <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">{item.sellerName || 'SafeCart'}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight line-clamp-2 min-h-[3rem]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">
                     {item.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                     <div className="flex flex-col">
                       <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                       <span className="text-sm text-gray-400 line-through">${(item.price * 1.3).toFixed(2)}</span>
                     </div>
                     {!user.isSellerLogedIn && (
                       <button
                         onClick={() => addToCart(item)}
                         className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                       >
                         <ShoppingCart className="w-5 h-5" /> Add
                       </button>
                     )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
