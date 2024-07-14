/* import React from 'react';
import './ProductCard.css'; // Custom CSS for styling
import { Link } from 'react-router-dom';

const ProductCard = ({title, description, id, user_id,   created_at, price, image, deleteProduct}) => {
  return (
    <div className="col-md-4 product-card-container">
      
          <div className=" product-card ">
            <div className="product-image image-fluid "  style={{backgroundImage: `url('${image}')`}}></div>
            <div className="product-details">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">Created At: {created_at}</p>
              <p className="card-text">Price: ${price}</p>
              <div className="text-center">
                <Link to={`/editproduct/${id}`}>
                <button className="btn btn-primary mr-2">Edit</button>
                </Link>
                <button className="btn btn-danger" onClick={() => deleteProduct(id, user_id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      
    
  );
}

export default ProductCard; */

import React from 'react';
import './ProductCard.css'; // Custom CSS for styling
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, id, user_id, created_at, price, image, deleteProduct }) => {
  return (
    // <div className="col-md-4 product-card-container">

    //       <div className="product-card">
    //         <div className="product-image" style={{backgroundImage: url('${image}')}}></div>
    //         <div className="product-details">
    //           <h5 className="card-title">{title}</h5>
    //           <p className="card-text">{description}</p>
    //           <p className="card-text">Created At: {created_at}</p>
    //           <p className="card-text">Price: ${price}</p>
    //           <div className="text-center">
    //             <Link to={/editproduct/${id}}>
    //             <button className="btn btn-primary mr-2">Edit</button>
    //             </Link>
    //             <button className="btn btn-danger" onClick={() => deleteProduct(id, user_id)}>Delete</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    <div key={id} className="col-lg-3">
      <div className="view-card border-0  " style={{ padding: "20px" }}>
        <div>

          <img
            className="product-image"
            src={image}
            alt={title}
          />
          {/* <p>Hellooooo</p> */}
        </div>
        <div className="niharika" >
          <p className="product-name" style={{ fontWeight: "500", position: "relative", top: "-20px" }}>
            {" "}
            {title}
          </p>
          <p style={{ textAlign: "center", position: "relative", top: "-20px" }}>{description}</p>

          <br />
          <p className="product-name" style={{ color: "#0088dd", textAlign: 'center', position: "relative", top: "-50px" }}>
            {" "}
            ${price}.00

          </p>
          <p
            style={{
              color: "gray",
              textDecoration: "line-through",
              textAlign: 'center',
              fontWeight: "400", position: "relative", top: "-50px"
            }}
          >
            ${price + (price*20/100)}.00
          </p>
        </div>
        <p className="card-text">Created At: {created_at}</p>
        <div className="card-bottom-btn w-100 d-flex justify-content-evenly ">
          <Link to={`/editproduct/${id}`}>
            <button className="btn btn-primary mr-2">Edit</button>
          </Link>

          <button className="btn btn-danger" onClick={() => deleteProduct(id, user_id)}>Delete</button>
        </div>

      </div>
    </div>


  );
}

export default ProductCard;
