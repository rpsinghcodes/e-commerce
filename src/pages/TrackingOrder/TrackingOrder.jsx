import React from 'react'
/* import './trackingorder.css' */
import Footer from'../../components/Footer/Footer'
const TrackingOrder = () => {
  return (
    <div className=" container-fluid">
    <h2 className='text-center mt-4 ' >Order Tracking</h2>
    <div className="container d-flex justify-content-center mt-4" >
   
    <form action="" className="form-control log-form">
      <h3 className=''>Order Tracking</h3>
      <label htmlFor="">Order Id</label>
      <input  type="text" placeholder='Order Id' />
      <label htmlFor="">Billing Email</label>
      <input  type="email" placeholder='Billing Email' />
      <button >Track your order</button>
    </form>
    
    </div>
{/*     <img  className =""src="https://safecart.bytesed.com/assets/img/tracking/treaking-image.webp" alt="" /> */}
   
    <Footer/>
  </div>
  )
}

export default TrackingOrder
