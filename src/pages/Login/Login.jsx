import React, {useContext, useState} from "react";
import { CartContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


const Login = () => {
  const navigate = useNavigate();
  const { login, user, alertMessage} = useContext(CartContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ 
    email: false,
    password: false,
  });

  if(user.isUserLogedIn) {
    return navigate('/');
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleLogin = async (event) => {
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

    const fd = new FormData(event.target);
    const email = fd.get('email')
    const password = fd.get('password')

    login('buyer', email, password);
  }
  return (
    <>
  
    <div className="container-fluid ">
    <h2 style ={{marginTop:"60px"}}  className="text-center">Sign In</h2>
<div className="container d-flex justify-content-center mt-5">

      <form action="" className="form-control log-form" onSubmit={handleLogin}>
      {alertMessage?.userLoginError !== '' && <p style={{color: "red"}}> {alertMessage?.userLoginError} </p>}
        <h3>Sign In</h3>
        <label htmlFor="">Email Or User Name</label>
        <input
          type="text"
          placeholder="Email Or UserName"
          name="email"
          onChange={handleInputChange}
          
        />
        {errors.email && <span style={{color:"red"}}>Write Email</span>}
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          
        />
        {errors.password && <span style={{color:"red"}}>Write Password</span>}
        
        <button>Sign In</button>
      </form>
      </div>
     
    </div>
    <Footer />
    </>
  );
};

export default Login;
