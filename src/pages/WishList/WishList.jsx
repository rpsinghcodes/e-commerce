import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import './wishlist.css';
import { CartContext } from "../../context/context";

const WishList = ({ isAuthenticated }) => {
  const navigate =  useNavigate();
  const {wishListProducts, addToCart, user, removeFromWishList } =  useContext(CartContext); 

  if (!user.isUserLogedIn) {
    navigate("/");
  }
  return (
    <div className="container-fluid m-9">
      <div className="cart-items">
        <div className="cart-items-header">
          <h1
            id=""
            className="j-heading j-text-heading-xs sp--m pd--vertical ng-star-inserted"
            style={{ color: "var(--color-black)" }}
          >
            My Wishlist{" "}
          </h1>
        </div>
        {wishListProducts?.length === 0 && (
          <div className="cart-items-empty">No items are added</div>
        )}
        <div className=" wishlist-products">
          {wishListProducts?.map((item, id) => {
            return (
              <div className="card" style={{ width: "350px", height:"auto" }} key={item.id}>
                <div>
                  <div

                  >
                    <img
                      className="wishlistt-image" style={{ width: "300px",
                       height: "300px",
                        borderRadius: "10px", 
                        marginLeft:"2px",
                      marginTop:"20px"}}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div>
                  <span className="product-name"> {item.title}</span>
                </div>
                <button className="card-btn wishlist-btn" onClick={() => removeFromWishList(item.id)}>Remove</button>
                <button className="card-btn wishlist-btn" onClick={() => addToCart(item)}>Add to cart</button>
                <div className="card-bottom">
                  <p>{item.product_price}</p>
                  <span className=" orgPrice">₹{item.price}.00 </span>
                  <span className="offer"> 50%OFF</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishList;
