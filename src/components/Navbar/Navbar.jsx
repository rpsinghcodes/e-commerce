import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/context";
import "./navbar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const { cartProducts, wishListProducts, user, logout, orders, userOrder } = useContext(CartContext);
  return (
   
    <nav className="navbar navbar-expand-lg navbar-warning bg-light">
    <div className="container-fluid">
    
      <div>
      
      <Link className="navbar-brand d-lg-none"  to="#">
        <span >Browse Category</span>


      </Link>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="d-lg-none">
        <SearchBar/>
        </div>
        <ul className="navbar-nav">
      
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle text-dark" to="/home" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Home Page
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" to="/">Home List</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" aria-current="page" to="/about">About</Link>
            </li>

            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle text-dark" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blog
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" href="/blog">Grid List</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle text-dark" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop Page
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

              <li><Link className="dropdown-item" href="/">Shop Here</Link></li>
              
            </ul>
          </li>
          <li>
          <Link className="nav-link" aria-current="page" to="/categories">Categories</Link>
          </li>
           
        <li>
          <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
          </li>
          
        </ul>
        

        <div className="navbarRight ">
          <ul className="nav-items-right d-flex">
            {user.isUserLogedIn && <><li style={{ background: "" }}>
              <Link to="/wishlist">
                <i className="bi bi-heart-fill "></i>
                <span className= "count">{wishListProducts?.length }</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">                
                <i className="bi bi-cart-fill " />
                <span className="count">{cartProducts?.length}</span>
              </Link>
            </li>
            <li>
              <Link to='my-orders'>
              <i class="bi bi-box-seam-fill" />
              <span className="count">{userOrder?.length}</span>
              </Link>
            </li>
            </> }
            
            {user.isUserLogedIn || user.isSellerLogedIn ? (
              <li style={{background:""}}>
                <p style={{fontWeight:"600", fontSize:'20px'}}>
                  {user.userName}{" "}
                    {user.isSellerLogedIn ?  <Link to='/order'>
                    <i className="bi bi-shop" />
                    <span className="count"> {orders?.length} </span>
                    </Link> : undefined }
                    
                  <button onClick={() => logout()} className="arrow-btn">
                    {" "}
                    <i className="bi bi-box-arrow-left"></i>{" "}
                  </button>
                  
                </p >{" "}
              </li>
            ) : (
              <li className="dropdown spacearound  login-link" style ={{padding:"5px"}} >
                <Link  
                  to="/login" className="bg-warning"
                  style={{ color: "black", fontWeight: "600" , padding:"10px"}}
                >
                  {" "}
                  <i className="bi bi-person"></i>Login/Register
                </Link>

                <div className="dropdown-content ">
                  <Link to="/login" >Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
              </li>
            )}
          </ul>
        </div>




      </div>
    </div>
    
    </nav>
  );
};

export default Navbar;
