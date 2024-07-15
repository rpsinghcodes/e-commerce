import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
