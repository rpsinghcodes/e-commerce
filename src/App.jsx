import React from "react";
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
import Seller from "./pages/Seller/Seller.jsx";
import AddProduct from "./pages/AddProduct/AddProduct.jsx";
import EditProduct from "./pages/EditProduct/EditProduct.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import SellerProduct from "./pages/SellerProduct/SellerProduct.jsx";
import ContactUs from "./pages/Contact/ContactUs.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Success from "./pages/SuccessfullPage/Success.jsx";
import About from "./pages/About/About.jsx";
import Billing from "./pages/Billing/Billing.jsx";
import Order from "./pages/Order/Order.jsx";

const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trackingorder" element={<TrackingOrder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/becomeseller" element={<BecomeSeller />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/sellerlogin" element={<SellerLogin />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product/:sellerName" element={<SellerProduct />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
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
