import { useContext } from "react"
import { CartContext } from "../../context/context"
import { useNavigate } from "react-router-dom";

export default function MyOrder(){
    const {userOrder, products, user} = useContext(CartContext);
    const navigate = useNavigate();
    const imgAndDescription = {};
  userOrder.forEach((order) => {
    const product = products.find(
      (product) => product?.title === order?.product_name
    );
    if (product) {
      imgAndDescription[order.product_name] = {
        image: product.image,
        description: product.description,
      };
    }
  });


  if (!user.isUserLogedIn) {
    return navigate("/");
  }
return <section className="order">
<h1>Orders</h1>
{userOrder.length === 0 && <h2>No Orders</h2>}
{userOrder.map((order, index) => (
  <div key={index} className="d-flex justify-content-evenly bg-opacity-50 shadow-lg p-3 mb-5 bg-light-subtle rounded">
    <img
      src={imgAndDescription[order.product_name]?.image || "#"}
      alt={order.product_name || "Product image"}
    />
    <div>
      <h3>{order?.product_name}</h3>
      <p>
        {imgAndDescription[order.product_name]?.description ||
          "No description available"}
      </p>
      <p>Name: {order?.user_name}</p>
      <p>
        Quantity: <span>{order?.product_quantity}</span>
      </p>
      <p>
        MobileNumber: +91 <span>{order?.userMobileNumber}</span>
      </p>
      <p>
        Date:{" "}
        <span>
        {new Date(order.orderDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </p>
      <p>
        PaymentStatus: <span>{order?.modeOfPayment}</span>
      </p>
      <p>Address: {order?.address}</p>
      <p>Pincode: {order?.pincode}</p>
      <p>OrderStatus: {order?.orderStatus}</p>
    </div>
  </div>
))}
</section>

}