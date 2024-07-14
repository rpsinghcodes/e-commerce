import React, { useState } from 'react'
/* import './trackingorder.css' */
import Footer from'../../components/Footer/Footer'
import { trackOrder } from '../../http/http';
import { toast } from 'react-toastify';
const TrackingOrder = () => {
  const [details, setDetails] = useState({
    orderId: '',
    mobileNumber: '',
  })
  const [status, setStatus] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    setDetails((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(details.orderId.length === 0 && details.mobileNumber.length === 0) {
      toast.error('Fill all the fields.');
    }else {
      const message = await trackOrder(details.orderId, details.mobileNumber);
      if(message.success) {
        setStatus(message.message);
      }

    }

  }
  return (
    <div className=" container-fluid">
    <h2 className='text-center mt-4 ' >Order Tracking</h2>
    <div className="container d-flex justify-content-center mt-4" >
   
    <form  className="form-control log-form" onSubmit={handleSubmit}>
      <h3 className=''>Order Tracking</h3>
      <label htmlFor="">Order Id</label>
      <input  type="number" placeholder='Order Id' name='orderId' onChange={handleChange} required />
      <label htmlFor="">Mobile Number</label>
      <input  type="number" name='mobileNumber' onChange={handleChange} placeholder='Mobile Number' required/>
      <button >Track your order</button>
    {status}
    </form>

    
    </div>   
    <Footer/>
  </div>
  )
}

export default TrackingOrder
