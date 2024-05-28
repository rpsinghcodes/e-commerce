import React, {  useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Cart from "./pages/Cart/Cart.jsx";
import WishList from "./pages/WishList/WishList.jsx";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TrackingOrder from "./pages/TrackingOrder/TrackingOrder";
import BecomeSeller from "./pages/Seller Sign Up/BecomeSeller.jsx";
import FaqPage from "./pages/FAQ/FaqPage.jsx";
import SignUp from "./pages/Sign Up/SignUp.jsx";
import SellerLogin from "./pages/Seller Login/SellerLogin.jsx";
import { useAuth } from "./Authenication";
import Seller from "./pages/Seller/Seller.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import EditProduct from "./pages/EditProduct/EditProduct.jsx";
import { getCookie, isSellerLogedIn } from "./helpers/utils.js";
import { jwtDecode } from "jwt-decode";
import Order from "./pages/Order/Order.jsx";
import SellerProduct from "./pages/SellerProduct/SellerProduct.jsx";
import ContactUs from "./pages/Contact/ContactUs.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Success from "./pages/SuccessfullPage/Success.jsx";
import About from "./pages/About/About.jsx";
import Billing from "./pages/Billing/Billing.jsx";


const App = () => {
  const [items, setItems] = useState([]);

  const { isAuthenticated } = useAuth(); // Get authentication status from custom hook
  
  let sellerLogedIn = false;
  if(isAuthenticated) {
    const token = getCookie('token');
    const isToken = jwtDecode(token)
    console.log('istoken: ', isToken)
    sellerLogedIn  = isSellerLogedIn(token);
  }

  return (
    <>
            <TopBar isAuthenticated={isAuthenticated}/>
            <Header setData={setItems} data={items} />
            <Navbar  isAuthenticated={isAuthenticated}/>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    isAuthenticated={isAuthenticated}
                    setData={setItems}
                    data={items}
                  />
                }
              />
              <Route
                path="/login"
                element={<Login isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/trackingorder"
                element={<TrackingOrder isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/cart"
                element={<Cart isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/becomeseller"
                element={<BecomeSeller isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/faq"
                element={<FaqPage isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/signup"
                element={<SignUp isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/wishlist"
                element={<WishList isAuthenticated={isAuthenticated} />}
              />
              <Route
              path='/sellerlogin'
              element= {
                <SellerLogin />
              }
               />
               <Route
              path='/seller'
              element= {
                <Seller isAuthenticated={sellerLogedIn} />
              }
               />
               <Route 
                path='/addproduct'
                element= {
                  <AddProduct  isAuthenticated={sellerLogedIn}/>
                }
               />
               <Route path='/billing' element={<Billing />} />
               <Route 
                path='/seller'
                element= {
                  <Seller  isAuthenticated={sellerLogedIn}/>
                }
               />
               <Route 
               path="/editproduct/:id"
               element={
                <EditProduct isAuthenticated={sellerLogedIn} />
               }
               />
               <Route 
               path="/order"
               element={
                <Order isAuthenticated={isAuthenticated} />
               }
               />
               <Route 
               path='/product/:sellerName'
               element = {
                  <SellerProduct  />
               }
               />
               <Route path ="/contact" element ={<ContactUs/>}/>
               <Route path ='/blog' element ={<Blog/>}/>
               <Route path="/success" element ={<Success />} />
               <Route path ="/about" element ={<About/>}/>
            </Routes>
    </>
  );
};

export default App;


/* import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from './components/Navbar/NavbarComponent'

const App = () => {
  return (
    <div>
      <NavbarComponent/>
    </div>
  )
}

export default App */
