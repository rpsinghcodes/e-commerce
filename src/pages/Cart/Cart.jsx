import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./cart.css";
import { CartContext } from "../../context/context";

const Cart = () => {
  const navigate =  useNavigate()
  const {cartProducts, updateCart, user} =  useContext(CartContext); 
  if(!user.isUserLogedIn) {
    navigate('/');
  }
  const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    products.forEach(product => {
        // Convert price to number
        const price = parseFloat(product?.price);
        // Multiply quantity with price and add to total price
        totalPrice += product?.quantity * price;
    });
    return totalPrice;
};
  return (
    <>
    <div className="container">
      <div className="cart-items">
        <div className="cart-items-header">
          <h1 className="j-heading">My Cart</h1>
        </div>
        <div className="">
          {cartProducts?.length > 0 ? (
            <div className="d-flex flex-wrap  card-container ">
              {cartProducts?.map((item, index) => (
                <div
                  key={index}
                  className=" d-flex  m-2"
                  style={{ display: "flex", flexWrap:"wrap",  }}
                >
                  <div className="card product-card" style={{ width: "350px", boxShadow:" 5px 0px 10px 0px" }} >
                    <img style ={{width:"270px", height:"220px"}}
                      src={item?.image}
                      className="product-image"
                      alt={item?.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item?.title}</h5>
                      <p className="card-text text-dark">Quantity: {item?.quantity}</p>
                      <p className="card-text text-dark">Price : {item?.price * item?.quantity}</p>
                      <div className="button-container">
                        <button
                          className="btn btn-secondary mr-2"
                          onClick={() => updateCart(item?.id, "decrease")}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-secondary mr-2"
                          onClick={() => updateCart(item?.id,)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => updateCart(item?.id, "delete")}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="check-btn">
                <Link to="/billing" className="text-dark">
                  CheckOut
                  <p className="card-text text-dark">TotalPrice: {calculateTotalPrice(cartProducts)}</p>
                </Link>
              </button>
            </div>
          ) : (
            <div className="col-md-12">
              <p>No Product In Your Cart.</p>
            </div>
          )}
        </div>
        
      </div>
    </div>
   
    </>
  );
};

export default Cart;
