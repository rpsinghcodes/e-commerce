/* import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./headerlinks.css";
import { CartContext } from "../../context/context";
const HeaderLinks = () => {
  const {user} =  useContext(CartContext); 
  return (
    <div className="HeaderLinks">
      <ul className="Links d-flex">
        
        {user.isSellerLogedIn && !user.isUserLogedIn ? (
          <li>
            <Link to="/addProduct" style={{ color: "black" }}>
              Add Product
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/becomeseller" style={{ color: "black" }}>
                Become a seller
              </Link>
            </li>
            <li>
              <Link to="/sellerlogin"> Seller login</Link>
            </li>
            </>
        )}
        {user.isSellerLogedIn ? <li><Link to='/seller' >Update Products</Link></li> : undefined}
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
            <li>
              <Link to="/trackingorder">Tracking Order</Link>
            </li>
          
      </ul>
    </div>
  );
};

export default HeaderLinks;
 */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './headerlinks.css'

const HeaderLinks = () => {
  const { user } = useContext(CartContext); 
  return (
    <div className="HeaderLinks">
      <ul className="nav">
        
        {user.isSellerLogedIn && !user.isUserLogedIn ? (
          <li className="nav-item">
            <Link to="/addProduct" className="nav-link ">
              Add Product
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/becomeseller" className="nav-link bg-warning text-dark ">
                Become a seller
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sellerlogin" className="nav-link " >
                Seller login
              </Link>
            </li>
          </>
        )}
        {user.isSellerLogedIn && (
          <li className="nav-item">
            <Link to="/seller" className="nav-link">
              Update Products
            </Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="/faq" className="nav-link">
            FAQ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/trackingorder" className="nav-link">
            Tracking Order
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinks;
