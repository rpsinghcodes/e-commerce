import { useNavigate } from "react-router-dom";
import { getCookie, getStringSize } from "../../helpers/utils";
import { jwtDecode } from "jwt-decode";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../../context/context";

export default function AddProduct() {
  const navigate = useNavigate();
  const imageUrl = useRef();
  const [image, setImage] = useState("");
  const [limitMessage] = useState("");
  const { user, editProduct } =
    useContext(CartContext);
  if (!user.isSellerLogedIn) {
    return navigate("/");
  }
  const handleImageChange = (event) => {
    setImage(imageUrl.current.value);
    if (image.length === 0) {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result;
        setImage(base64String);
        console.log('getStringSize(base64String): ', getStringSize(base64String))
      };
      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  };
  const handleFormData = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const token = getCookie("token");
    const sellerData = jwtDecode(token);
    data.user_id = sellerData.data[0].id;
    console.log("sellerData: ", sellerData);
    console.log("AddProductDetails: ", data);
    data.image = image;
    if (image.length === 0) {
      window.alert("Upload image");
    } else {
      data.sellerName = sellerData.data[0].owner_name;
      editProduct(data);
    }
  };
  return (
    <div className="container-fluid log-in-container seller-form">
      <div className="container d-flex justify-content-center">
        <form
          onSubmit={handleFormData}
          className="form-control log-form"
          id="form-btn-addProduct"
        >
          <h1>Add Product</h1>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Title" name="title" required />
          <label htmlFor="price">Price</label>
          <input type="number" placeholder="price" name="price" required />
          <label htmlFor="category">Category</label>
          <input type="text" placeholder="category" name="category" required />
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
          <span>{limitMessage}</span>
          <div className="mb-3">
            <label>Image Url</label>
            <input
              type="url"
              name="image"
              placeholder="Enter Image Url"
              className="form-control"
              onChange={handleImageChange}
              ref={imageUrl}
            />
          </div>
          <span>{limitMessage}</span>

          {image !== "" && ( // Check if image data is available
            <div className="mb-3">
              <label className="form-label">Uploaded Image:</label>
              <div className="uploaded-image-container">
                <img
                  src={image ? image : undefined}
                  alt="Uploaded"
                  className="img-fluid uploaded-image"
                />
              </div>
            </div>
          )}

          <label htmlFor="">Description</label>
          <textarea
            id="textArea"
            rows="4"
            cols="50"
            name="description"
            required
          ></textarea>
          <button className="form-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
