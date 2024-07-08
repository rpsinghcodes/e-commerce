import { useContext } from "react";
import { CartContext } from "../../context/context";

export default function Order() {
    const {orders} = useContext(CartContext);
    console.log(orders);
  return (
    <section className="order">
      {orders.length === 0 && <h2>No Orders</h2>}
      {orders.map(o => (
      <div>
        <img src="#" alt="#" />
        <div>
          <h3>{o?.product_name}</h3>
          <p>Product Description</p>
          <p>Name: {o?.user_name}</p>
          <p>
            Quantity: <span>{o?.product_quantity}</span>
          </p>
          <p>
            PaymentStatus: <span>{o?.modeOfPayment}</span>
          </p>
          <p>{o?.address}</p>
          <p>{o?.pincode}</p>
        </div>
        <button>Ship</button>
      </div>

      ))}
    </section>
  );
}
