import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/context";
import { Order } from "../../http/http";

export default function Billing() {
  const { user, cartProducts, updateBilling, updateCart, setUserOrder } = useContext(CartContext);
  const navigate = useNavigate()
  if (!user.isUserLogedIn) {
    navigate('/');
  }
  const handleForm = async (event) => {
    event.preventDefault();
    
    
    const product =  cartProducts.map(products => (
      {product_id: products.id, quantity: products.quantity, seller_id: products.seller_id, product_name: products.title, price: products.price }
     
    ))


    const fd = new FormData(event.target);
    const Fdata = Object.fromEntries(fd.entries());
   
    let details;
    if(Fdata.modeOfPayment !== 'prepaid') {
      details = {
        product: product,
        info: Fdata,
        modeOfPayment: "COD"
      }
      
      const isSended = await Order(details, 2);

      console.log('isSended: ', isSended)
      updateCart(1, "delete");

    if(isSended) {
      setUserOrder(isSended?.userOrders);
      navigate(Fdata.modeOfPayment === 'prepaid' ? '/order' : '/success');
    }
    }
    updateBilling(product, Fdata, "COD");
    
    if(Fdata.modeOfPayment === 'prepaid') {
      navigate('/payment')
    }

  };
  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form className="payment-form" onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="cardNumber" defaultValue='rahul' name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input type="text" name="mobileNumber" defaultValue='92384729' required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="textArea"
            rows="2"
            cols="50"
            name="address"
            defaultValue='sldkjfsd'
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input type="number" name="pincode" defaultValue={249193} required />
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
