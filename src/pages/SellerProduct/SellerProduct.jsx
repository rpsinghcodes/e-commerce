import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { CartContext } from "../../context/context";

export default function SellerProduct(){
    const {sellerName} =  useParams();
    const { addToCart, addToWishList, user} =  useContext(CartContext);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/productby/${sellerName}`)
        .then(res => {
            console.log('data-by-ambani', res?.data)
            setData(res?.data?.productDetail);
        })
        .catch(err => {
            console.log(err);
        })

    }, [sellerName])
return <div className="container">
<h2>Products from {sellerName}</h2>
<div className="container">
  <div className="row">
  {data?.map((item, id) => {
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
                <p style ={{textAlign:"center", position:"relative", top:"-20px"}}>{item.description}</p>
                
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
                  ${item.price}.00
                </p>
              </div>

              <div className="card-bottom-btn w-100 d-flex justify-content-evenly ">
              {user.isSellerLogedIn ? undefined : <button
                  className=" add-cart-btn"
                  onClick={() => addToCart(item)}
               style ={{position:"relative", top:"-60px"}} >
                  Add to Cart
                </button> }
               {/*  <button  style={{marginLeft:'41px', position:"relative", top:"-60px"}}className="product-card-btn-icon" >
                  <i className="bi bi-repeat"></i>
                </button> */}
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

}