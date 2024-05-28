/* import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { CartContext } from "../../context/context";

const Navbar = ({ isAuthenticated }) => {

  const {cartProducts,  wishListLength, wishListProducts, user, logout} =  useContext(CartContext); 
  return (
    <>
    <nav classNameName="navbar  ">
        <div classNameName="navbar-left">
          <ul classNameName="nav-items">
            <div classNameName="dropdown ">
              <Link to="/" classNameName="text-dark">
                {" "}
                <i classNameName="bi bi-list"></i>Categories
              </Link>
              <div classNameName="dropdown-content">
                <Link to="#example">Link 1</Link>
                <Link to="#example">Link 2</Link>
                <Link to="#example">Link 3</Link>
              </div>
            </div>

            <div classNameName="dropdown">
              <Link classNameName="text-dark" to="/">
                {" "}
                Home Pages <i classNameName="bi bi-chevron-down"></i>
              </Link>
              <div classNameName="dropdown-content">
                <Link to="#example">Link 1</Link>
                <Link to="#example">Link 2</Link>
                <Link to="#example">Link 3</Link>
              </div>
            </div>
            <div classNameName="dropdown">
              <Link to="/about" classNameName="text-dark"> About</Link>
            </div>
            <div classNameName="dropdown">
              <Link to="/" classNameName="text-dark">
                Shop Page <i classNameName="bi bi-chevron-down"></i>
              </Link>
              <div classNameName="dropdown-content">
                <Link to="#sdf">Link 1</Link>
                <Link to="#sdf">Link 2</Link>
                <Link to="#sdf">Link 3</Link>
              </div>
            </div>
            <div classNameName="dropdown">
              <Link to="/" classNameName="text-dark">
                Pages <i classNameName="bi bi-chevron-down"></i>
              </Link>
              <div classNameName="dropdown-content">
                <Link to="#sdf">Link 1</Link>
                <Link to="#sdf">Link 2</Link>
                <Link to="#sdf">Link 3</Link>
              </div>
            </div>
            <div classNameName="dropdown">
              <Link to="/" classNameName="text-dark">
                {" "}
                Blog <i classNameName="bi bi-chevron-down"></i>
              </Link>
              <div classNameName="dropdown-content">
                <Link to="/blog">Blog Grid List</Link>
                <Link to="#sdf">Blog List</Link>
              </div>
            </div>
            <div classNameName="dropdown">
              <Link to="/contact" classNameName="text-dark" style ={{color:"black"}}> Contact</Link>
            </div>
          </ul>
        </div>
        <div classNameName="navbarRight ">
          <ul classNameName="nav-items-right">
            {user.isUserLogedIn && <><li style={{ background: "white" }}>
              <Link to="/wishlist">
                <i classNameName="bi bi-heart-fill "></i>
                <span classNameName= "count">{wishListProducts.length }</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">                
                <i classNameName="bi bi-cart-fill "></i>
                <span classNameName="count">{cartProducts.length}</span>
              </Link>
            </li></> }
            
            {user.isUserLogedIn || user.isSellerLogedIn ? (
              <li style={{background:"white"}}>
                <p style={{fontWeight:"600"}}>
                  {user.userName}{" "}
                  
                  <button onClick={() => logout()} classNameName="arrow-btn">
                    {" "}
                    <i classNameName="bi bi-box-arrow-left"></i>{" "}
                  </button>
                  
                </p >{" "}
              </li>
            ) : (
              <li classNameName="dropdown  login-link" style ={{padding:"5px"}} >
                <Link  
                  to="/login"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  {" "}
                  <i classNameName="bi bi-person"></i>Login/Register
                </Link>

                <div classNameName="dropdown-content">
                  <Link to="/login" >Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav> 
      </>
      )

    }
export default Navbar; */



import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/context";
import "./navbar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const { cartProducts, wishListProducts, user, logout } = useContext(CartContext);
  return (
    // <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
    //   <div classNameName="container-fluid">
    //     <Link classNameName="navbar-brand" to="/">
    //       Navbar
    //     </Link>
    //     <button
    //       classNameName="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span classNameName="navbar-toggler-icon"></span>
    //     </button>
    //     <div classNameName="collapse navbar-collapse" id="navbarNav">
    //       <ul classNameName="navbar-nav mr-auto">
    //         <li classNameName="nav-item dropdown">
    //           <Link classNameName="nav-link dropdown-toggle" to="/" id="categoriesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             <i classNameName="bi bi-list"></i> Categories
    //           </Link>
    //           <div classNameName="dropdown-menu" aria-labelledby="categoriesDropdown">
    //             <Link classNameName="dropdown-item" to="#example">Link 1</Link>
    //             <Link classNameName="dropdown-item" to="#example">Link 2</Link>
    //             <Link classNameName="dropdown-item" to="#example">Link 3</Link>
    //           </div>
    //         </li>
    //         <li classNameName="nav-item dropdown">
    //           <Link classNameName="nav-link dropdown-toggle" to="/" id="homeDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Home Pages
    //           </Link>
    //           <div classNameName="dropdown-menu" aria-labelledby="homeDropdown">
    //             <Link classNameName="dropdown-item" to="#example">Link 1</Link>
    //             <Link classNameName="dropdown-item" to="#example">Link 2</Link>
    //             <Link classNameName="dropdown-item" to="#example">Link 3</Link>
    //           </div>
    //         </li>
    //         <li classNameName="nav-item">
    //           <Link classNameName="nav-link" to="/about">About</Link>
    //         </li>
    //         <li classNameName="nav-item dropdown">
    //           <Link classNameName="nav-link dropdown-toggle" to="/" id="shopDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Shop Page
    //           </Link>
    //           <div classNameName="dropdown-menu" aria-labelledby="shopDropdown">
    //             <Link classNameName="dropdown-item" to="#sdf">Link 1</Link>
    //             <Link classNameName="dropdown-item" to="#sdf">Link 2</Link>
    //             <Link classNameName="dropdown-item" to="#sdf">Link 3</Link>
    //           </div>
    //         </li>
    //         <li classNameName="nav-item dropdown">
    //           <Link classNameName="nav-link dropdown-toggle" to="/" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Pages
    //           </Link>
    //           <div classNameName="dropdown-menu" aria-labelledby="pagesDropdown">
    //             <Link classNameName="dropdown-item" to="#sdf">Link 1</Link>
    //             <Link classNameName="dropdown-item" to="#sdf">Link 2</Link>
    //             <Link classNameName="dropdown-item" to="#sdf">Link 3</Link>
    //           </div>
    //         </li>
    //         <li classNameName="nav-item dropdown">
    //           <Link classNameName="nav-link dropdown-toggle" to="/" id="blogDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Blog
    //           </Link>
    //           <div classNameName="dropdown-menu" aria-labelledby="blogDropdown">
    //             <Link classNameName="dropdown-item" to="/blog">Blog Grid List</Link>
    //             <Link classNameName="dropdown-item" to="#sdf">Blog List</Link>
    //           </div>
    //         </li>
    //         <li classNameName="nav-item">
    //           <Link classNameName="nav-link" to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //       <ul classNameName="navbar-nav ml-auto">
    //         {user.isUserLogedIn && (
    //           <>
    //             <li classNameName="nav-item">
    //               <Link classNameName="nav-link" to="/wishlist">
    //                 <i classNameName="bi bi-heart-fill"></i>
    //                 <span classNameName="badge badge-pill badge-danger">{wishListProducts.length}</span>
    //               </Link>
    //             </li>
    //             <li classNameName="nav-item">
    //               <Link classNameName="nav-link" to="/cart">
    //                 <i classNameName="bi bi-cart-fill"></i>
    //                 <span classNameName="badge badge-pill badge-danger">{cartProducts.length}</span>
    //               </Link>
    //             </li>
    //           </>
    //         )}
    //         {user.isUserLogedIn || user.isSellerLogedIn ? (
    //           <li classNameName="nav-item">
    //             <p classNameName="nav-link mb-0">
    //               {user.userName}
    //               <button onClick={() => logout()} classNameName="btn btn-link p-0 ml-2">
    //                 <i classNameName="bi bi-box-arrow-left"></i>
    //               </button>
    //             </p>
    //           </li>
    //         ) : (
    //           <li classNameName="nav-item dropdown">
    //             <Link classNameName="nav-link dropdown-toggle" to="/login" id="loginDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //               <i classNameName="bi bi-person"></i> Login/Register
    //             </Link>
    //             <div classNameName="dropdown-menu" aria-labelledby="loginDropdown">
    //               <Link classNameName="dropdown-item" to="/login">Sign In</Link>
    //               <Link classNameName="dropdown-item" to="/signup">Sign Up</Link>
    //             </div>
    //           </li>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
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
              {/* <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
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
              {/* <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle text-dark" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop Page
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" href="/">Shop Here</Link></li>
              {/* <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>
          <li>
          <Link className="nav-link" aria-current="page" to="/categories">Categories</Link>
          </li>
           
        <li>
          <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
          </li>

          
        
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
        </ul>

        {/* Login */}

        <div className="navbarRight ">
          <ul className="nav-items-right d-flex">
            {user.isUserLogedIn && <><li style={{ background: "" }}>
              <Link to="/wishlist">
                <i className="bi bi-heart-fill "></i>
                <span className= "count">{wishListProducts.length }</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">                
                <i className="bi bi-cart-fill "></i>
                <span className="count">{cartProducts.length}</span>
              </Link>
            </li></> }
            
            {user.isUserLogedIn || user.isSellerLogedIn ? (
              <li style={{background:""}}>
                <p style={{fontWeight:"600", fontSize:'20px'}}>
                  {user.userName}{" "}
                  
                  <button onClick={() => logout()} className="arrow-btn">
                    {" "}
                    <i className="bi bi-box-arrow-left"></i>{" "}
                  </button>
                  
                </p >{" "}
              </li>
            ) : (
              <li className="dropdown  login-link" style ={{padding:"5px"}} >
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
