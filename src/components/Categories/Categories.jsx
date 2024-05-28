import React from "react";
import "./categories.css";
const Categories = () => {
  return (
    <div className="container mt-5">
      <h2>Our Services</h2> <hr />
      <div className="categories-content">
        <div className="container">
          <div className="row">
            
          <div className=" d-flex col-lg-4">
          <img
            src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/secure1699175042.svg"
            alt=""
          />
          <div className="categories-content-text">
            <h4>Secure Payment Gateways</h4>
            <p>Partnered with 48+ gateways for your safety </p>
          </div>
        </div>
        <div className="d-flex col-lg-4 ">
          <img
            src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/reviews1699175042.svg"
            alt=""
          />
          <div className="categories-content-text">
            <h4>Customer Reviews</h4>
            <p>Verified reviews are featured in our platforms </p>
          </div>
        </div>
        <div className="d-flex col-lg-4 ">
          <img
            src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/return1699175043.svg"
            alt=""
          />
          <div className="categories-content-text">
            <h4>30 Day No-Hassle Return</h4>
            <p>We guarantee happiness, If you’re not return it</p>
          </div>
        </div>
        <div className="d-flex col-lg-4">
          <img
            src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/support1699175043.svg"
            alt=""
          />
          <div className="categories-content-text">
            <h4>24/7 Customer Support</h4>
            <p>Questions? Our support team is available 24/7</p>
          </div>
        </div>
            
          </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default Categories;
