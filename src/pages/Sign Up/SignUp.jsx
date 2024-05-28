import React, { useContext, useState } from 'react';
import './signup.css';
import Footer from "../../components/Footer/Footer";
import { CartContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const { user, userRegistration } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    username: false,
    email: false,
    mobileNumber: false,
    password: false,
    confirmPassword: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== '') {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check for any empty fields
    const newErrors = {};
    for (const key in formData) {
      if (formData[key].trim() === '') {
        newErrors[key] = true;
      }
    }
    setErrors(newErrors);

    // If any field is empty, don't submit the form
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Form submission logic
    userRegistration(event);
  };

  if (user.isSellerLogedIn || user.isUserLogedIn) {
    return navigate('/');
  }

  return (
    <div className="container-fluid mt-4">
      <h2 className='text-center'>Register</h2>
      <div className="container justify-content-center d-flex">
        <form className="form-control log-form" onSubmit={handleFormSubmit} id='signup-form' style={{backgroundColor:'#f7f7f7'}}>
          <h3>Create Account</h3>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className={errors.name ? 'border error' : 'border'}
            placeholder="Name"
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <span style={{color:"red"}}>Enter Name</span>}
          <label htmlFor="">Username</label>
          <input
            type="text"
            className={errors.username ? 'border error' : 'border'}
            placeholder="Username"
            name='username'
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <span style={{color:"red"}}>Enter Username</span>}
          <label htmlFor="">Email</label>
          <input
            type="email"
            className={errors.email ? 'border error' : 'border'}
            placeholder="Email"
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <span style={{color:"red"}}>Enter Email</span>}
          <label htmlFor="">Mobile Number</label>
          <input
            type="number"
            className={errors.mobileNumber ? 'border error' : 'border'}
            placeholder="Mobile Number"
            name='mobileNumber'
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
          {errors.mobileNumber && <span style={{color:"red"}}>Enter Mobile Number</span>}
          <label htmlFor="">Password</label>
          <input
            type="password"
            className={errors.password ? 'border error' : 'border'}
            placeholder="Password"
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <span style={{color:"red"}}>Enter Password</span>}
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            className={errors.confirmPassword ? 'border error' : 'border'}
            placeholder="Confirm Password"
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errors.confirmPassword && <span style={{color:"red"}}>Confirm Password</span>}
        </form>
      </div>

      <div className="form-btm mt-5">
        <div className="form-bottom d-flex">
          <input type="checkbox" />{" "}
          <strong>Accept all  <span style={{color:"#006058"}}>Terms and Conditions & Privacy Policy.</span></strong>
        </div>
        <button className="form-btn" form='signup-form'> Register</button>
        <span>Already have an account?  <strong><a href='/login'  style={{color:"grey"}}>Log in</a></strong></span>
      </div>
     
      <Footer />
    </div>
  );
};

export default SignUp;
