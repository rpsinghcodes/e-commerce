import React, { useContext, useEffect } from "react";

import Footer from "../../components/Footer/Footer";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/context";


const SellerLogin = () => {
  const { user, login,  alertMessage} = useContext(CartContext); 
  const navigate =  useNavigate()

  useEffect(() => {
   if(user.isSellerLogedIn) {
     navigate('/seller');
   }
  })

  const handleLogin = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const email = fd.get('email')
    const password = fd.get('password')

    login('seller', email, password);
  }


  return (
    <div className=" container">
      <h2 className="text-center" style={{marginTop:"50px"}}>Sign In</h2>
      <div className="container-fluid d-flex justify-content-center">
      <form action="" className="form-control log-form" onSubmit={handleLogin}>
        <h3>Sign In</h3>
        {alertMessage?.sellerLoginError !== '' && <p style={{color: "red"}}> {alertMessage?.sellerLoginError} </p>}
        <label htmlFor="">Email Or User Name</label>
        <input
          type="text"
          placeholder="Email Or UserName"
          name="email"
          required
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button>Sign In</button>
      </form>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLogin;
