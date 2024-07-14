import { useContext } from "react"
import { CartContext } from "../../context/context"
import './success.css';
import pay from '../../assets/pay.png'
import { useNavigate } from "react-router-dom";

export default function Success(){
    const {user} = useContext(CartContext);
    const navigate = useNavigate();
    console.log('!user.isSellerLogedIn: ', user.isSellerLogedIn);
    if(!user.isUserLogedIn) {
        navigate('/');
    }
   
return(
    <>
    <div className="success-container">
        <div className="success-card">
            <img src={pay} alt="" /> 
        <h4>Thankyou {user.userName} For Shopping with us.</h4>
        </div>
    </div>
    </>
) 

}