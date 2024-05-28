import React, { useState } from "react";
import axios from "axios";
import "./becomeseller.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate, Link } from "react-router-dom";

const BecomeSeller = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    owner_name: "",
    business_name: "",
    email: "",
    username: "",
    password: "",
    business_category: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    owner_name: false,
    business_name: false,
    email: false,
    username: false,
    password: false,
    business_category: false,
    description: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleFormData = async (event) => {
    event.preventDefault();

    const newErrors = {};
    for (const key in formData) {
      if (formData[key].trim() === "") {
        newErrors[key] = true;
      }
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/seller-signup', formData);
      if(response.status === 200) {
        console.log('SignUp successfully.')
        window.alert('User Created successfully.')
        navigate('/sellerlogin');
      }
    } catch(err) {
      console.log('Error in Seller Signup', err);
    }
    console.log(formData);
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center">Vendor Registration</h2>
      <Link to="/"> <span className="text-center"> Home</span></Link>
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleFormData} className="form-control log-form" id='seller-signup'>
          <h3>Basic Info</h3>
          <label htmlFor="">Owner Name</label>
          <input
            className={errors.owner_name ? "border error" : "border"}
            type="text"
            placeholder="Owner Name"
            name="owner_name"
            value={formData.owner_name}
            onChange={handleInputChange}
            
          />
          {errors.owner_name && <span style={{color:"red"}}>Write Name</span>}
          <label htmlFor="">Business Name</label>
          <input
            className={errors.business_name ? "border error" : "border"}
            type="text"
            placeholder="Business Name"
            name="business_name"
            value={formData.business_name}
            onChange={handleInputChange}
            
          />
          {errors.business_name && <span style={{color:"red"}}>Write Business Name</span>}
          <label htmlFor="">Email</label>
          <input
            className={errors.email ? "border error" : "border"}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            
          />
          {errors.email && <span style={{color:"red"}}>Enter Email</span>}
          <label htmlFor="">Username</label>
          <input
            className={errors.username ? "border error" : "border"}
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            
          />
          {errors.username && <span style={{color:"red"}}>Enter Username</span>}
          <label htmlFor="">Password</label>
          <input
            className={errors.password ? "border error" : "border"}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            
          />
          {errors.password && <span style={{color:"red"}}>Enter Password</span>}
          <label htmlFor="">Confirm Password</label>
          <input
            className="border"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            
          />
          <label htmlFor="">Business Category</label>
          <input
            className={errors.business_category ? "border error" : "border"}
            type="text"
            placeholder="Business Category"
            name="business_category"
            value={formData.business_category}
            onChange={handleInputChange}
            
          />
          {errors.business_category && <span style={{color:"red"}}>Enter Business Category</span>}
          <label htmlFor="">Description</label>
          <textarea
            className="border"
            rows="4"
            cols="50"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && <span style={{color:"red"}}>Enter Description</span>}
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className=" ">
          <input type="checkbox" />{" "}
          <strong>Accept all  <span style={{color:"#006058"}}>Terms and Conditions & Privacy Policy.</span></strong>
        </div>
        <div className=" ">
          <button className="form-btn" type="submit"> Submit For Registration</button>
          <p className="text-center">Already have account?  <strong className="ml-1"><Link to='/login'  style={{color:"grey"}}>Log in</Link></strong></p>
        </div>
      </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeSeller;
