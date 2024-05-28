import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/context";

export default function Billing() {
  const { user } = useContext(CartContext);
  const navigate = useNavigate()
  if (!user.isUserLogedIn) {
    navigate('/');
  }
  const handleForm = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const Fdata = Object.fromEntries(fd.entries());
    console.log(Fdata);
    navigate(Fdata.modeOfPayment === 'prepaid' ? '/order' : '/success');

  };
  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form className="payment-form" onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="cardNumber" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input type="" name="mobileNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="textArea"
            rows="2"
            cols="50"
            name="address"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input type="number" name="pincode" required />
        </div>
        <div className="form-group">
          <label htmlFor="modeOfPayment">Mode Of Payment</label>

        <select id="pet-select" name="modeOfPayment" style ={{border:"1.5px solid #006048", borderRadius:"5px"}}>
            <option value="prepaid">Online</option>
            <option value="postpaid">COD</option>
          </select> 

            </div>
            <button type="submit" className="payment-button"  >Proceed</button>

          </form>
        </div>
        );
}
