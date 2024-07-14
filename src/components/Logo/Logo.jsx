/* import React from 'react'
import { Link } from "react-router-dom";
import './logo.css'
const Logo = () => {
    const logoImg = "https://safecart.bytesed.com/assets/uploads/media-uploader/logo1698825016.webp"
  return (
    <div className='logo'>
      <Link to ='/'> 
      <img src={logoImg} alt="SafeCart" />
      </Link>
      
    </div>
  )
}

export default Logo
 */

import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import './logo.css'; */

const Logo = () => {
  const logoImg = "my-cart.png";
  return (
    <div className='d-flex justify-content-center align-items-center logo' >
      <Link to='/'>
        <img src={logoImg} alt="SafeCart" className='image-fluid' />
      </Link>
    </div>
  );
}

export default Logo;
