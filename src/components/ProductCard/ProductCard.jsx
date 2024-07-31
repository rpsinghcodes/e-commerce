import React from 'react';
import './ProductCard.css'; // Custom CSS for styling
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, seller_id, id, created_at, price, image, deleteProduct }) => {
  const date = new Date(created_at);
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    
    <div key={seller_id} className="col-lg-3">
      <div className="view-card border-0  " style={{ padding: "20px" }}>
        <div>

          <img
            className="product-image"
            src={image}
            alt={title}
          />
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
        <p className="card-text">Created At: {formattedDate}</p>
        <div className="card-bottom-btn w-100 d-flex justify-content-evenly ">
          <Link to={`/editproduct/${id}`}>
            <button className="btn btn-primary mr-2">Edit</button>
          </Link>

          <button className="btn btn-danger" onClick={() => deleteProduct(id, seller_id)}>Delete</button>
        </div>

      </div>
    </div>


  );
}

export default ProductCard;
