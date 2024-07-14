import { useContext } from "react";
import { CartContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { updateOrderStatus } from "../../http/http";
import { toast } from "react-toastify";

export default function Order() {
  const { orders, user, products, setOrder } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(orders);
  const imgAndDescription = {};
  orders.forEach((order) => {
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
  const updateOrder = async (orderId) => {
    const data = await updateOrderStatus(orderId);
    if(data.success) {
      toast.success('Order Shipped Succesfully.')
      setOrder(data.data);
    }
    console.log(data);
  }

  if (!user.isSellerLogedIn) {
    return navigate("/");
  }

  return (
    <section className="order">
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <h2>No Orders</h2>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="d-flex justify-content-evenly bg-opacity-50 shadow-lg p-3 mb-5 bg-light-subtle rounded"
          >
            <img
              src={imgAndDescription[order.product_name].image || "#"}
              alt={order.product_name || "Product image"}
            />
            <div>
              <h3>{order.product_name}</h3>
              <p>
                {imgAndDescription[order.product_name].description ||
                  "No description available"}
              </p>
              <p>Name: {order.user_name}</p>
              <p>Order Status: {order.orderStatus}</p>
              <p>
                Quantity: <span>{order.product_quantity}</span>
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
                PaymentStatus: <span>{order.modeOfPayment}</span>
              </p>
              <p>
                Address: <span>{order.address} </span>
              </p>
              <p>{order?.pincode}</p>
              {console.log(order.orderStatus==='Shipped' && "notAllowed")}
              <button onClick={() => updateOrder(order?.order_id) } disabled={order.orderStatus==='Shipped'} style={{cursor: order.orderStatus==='Shipped' && "not-allowed"}}>{order.orderStatus==='Shipped' ? "Shipped" : "Ship"}</button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
