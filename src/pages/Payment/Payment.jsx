import { useContext,  useEffect,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";

import { CartContext } from "../../context/context";
import "./payment.css";
import { Order } from "../../http/http";

export default function Payment() {
  const {user, billing, updateCart, setUserOrder} = useContext(CartContext)


  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if(!user.isUserLogedIn) {
      navigate('/');
    }
  }, [user, navigate]);
  

  const handleSubmit = async (e) => { 
       
    e.preventDefault();

    if(user.length === 0 && expiryDate.length === 0 && expiryDate.length === 0 && cvv.length === 0 && cardHolder.length === 0 ){
      toast.error("Fill all the fields.")
    } else {

      billing.modeOfPayment = 'Prepaid';

      const isSended = await Order(billing, 2);

      updateCart(1, "delete");

      if(isSended) {
        setUserOrder(isSended.userOrders);
        toast.success("Your Order placed..");
        navigate('/success');
      }
      
      // navigate('/')
    }
    // Handle payment processing logic here
    // console.log("Payment Details:", {
    //   cardNumber,
    //   expiryDate,
    //   cvv,
    //   cardHolder,
    // });
  };


  if (!user.isUserLogedIn) {
    navigate("/");
  }


  // on the basis of product id make a request on /product/productId then there you will get all the detail
  return (
    <>
      <div className="payment-container">
        <h2>Payment Details</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => {setCardNumber(e.target.value)}}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => {setExpiryDate(e.target.value)}}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => {setCvv(e.target.value)}}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder Name</label>
            <input
              type="text"
              id="cardHolder"
              value={cardHolder}
              onChange={(e) => {setCardHolder(e.target.value)}}
              required
            />
          </div>
          <button
            type="submit"
            className="payment-button"
          >
            <Link style={{color:"black"}} to="/success">Submit Payment </Link>
          </button>
         
          
        </form>
      </div>
    </>
  );
}
