import React, {  useContext } from "react";
import "./products.css";
 
import { CartContext } from "../../context/context";
import { Link } from "react-router-dom";

const Products = () => {
const {products, addToCart, addToWishList, user} =  useContext(CartContext);
console.log(products);

/* const dummydata = [
  {
    id:1,
    image:"https://safecart.bytesed.com/assets/uploads/media-uploader/macbook-pro-laptop-653e0c1326fcd1698846943.webp",
    title:"Macbook Pro",
    price:"40000",
    description:"An Apple Product"

  },
  {
    id:2,
    image:"https://safecart.bytesed.com/assets/uploads/media-uploader/51692277637-6542446c83e371698841719.webp",
    title:"GuardianEye HD Surveillance Camera",
    price:"30000",
    description:"GuardianEye HD Surveillance Camera"

  },
  {   
    id:3,
    image:"https://safecart.bytesed.com/assets/uploads/media-uploader/41692277636-654244b547d551698841794.webp",
    title:"SwiftGlide Precision Mouse",
    price:"300",
    description:"SwiftGlide Precision Mouse"

  },
  {
    id:4,
    image:"https://safecart.bytesed.com/assets/uploads/media-uploader/21692277634-654243f9e7edd1698841606.webp",
    title:"PhoenixTech Motherboard X7",
    price:"600",
    description:"PhoenixTech Motherboard X7"

  }

] */



  return (
    <div className="mt-5"> 
      <h2  style={{marginLeft:"20px"}}>View all products</h2>
      <div>
        <div className="container">
          <div className="row">
            {products.length === 0 && "No products found." }
          {products?.map((item, id) => {
          return (
            <div key={id} className="col-lg-3">
            <div className="view-card border-0  "  style ={{height:"450px"}}>
              <div>
                
                <img
                  className="product-image" 
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="niharika" >
                <p className="product-name" style={{ fontWeight: "500", position:"relative", top:"-20px" }}>
                  {" "}
                  {item.title}
                </p>
                <p style ={{textAlign:"center", position:"relative", top:"-20px"}}>{(item.description).substring(0,30)}...</p>
                
                <br />
                <p className="product-name" style={{ color: "#0088dd", textAlign:'center', position:"relative", top:"-50px" }}>
                  {" "}
                  ${item.price}.00
                 
                </p>
                <p
                  style={{
                    color: "gray",
                    textDecoration: "line-through",
                  textAlign:'center',
                    fontWeight: "400", position:"relative", top:"-50px"
                  }}
                >
                  ${item.price + (item.price*30/100)}.00
                </p>
              </div>

              <div className="card-bottom-btn w-100 d-flex justify-content-evenly ">
              {user.isSellerLogedIn ? undefined : <button
                  className=" add-cart-btn"
                  onClick={() => addToCart(item)}
               style ={{position:"relative", top:"-60px"}} >
                  Add to Cart
                </button> }
                
                {user.isSellerLogedIn ? undefined :  <button
                  className="product-card-btn-icon"
                  onClick={() => addToWishList(item)}
               style ={{position:"relative", top:"-60px"}} >
                  <i className="bi bi-heart"></i>
                </button>}
               
        
              </div>
              <p className="text-dark " style= {{margin:"20px", position:"relative", top:'-60px'}}><Link to={`/product/${item.sellerName}`} className="text-dark"> <span>Seller:</span>  {item.sellerName}  </Link></p>
            </div>
            </div>
          );
        })}
            
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Products;
