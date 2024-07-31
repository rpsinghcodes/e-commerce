import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../helpers/utils";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../context/context";

export default function EditProduct() {
  const navigate =  useNavigate()
  const {id} =  useParams();
  const imageUrl = useRef();
  const {user, sellerProducts, editProduct} = useContext(CartContext);
  if(!user.isSellerLogedIn) {
    navigate('/');
  }
  console.log(sellerProducts.find(p => p.id === id));
  const [defaultData, setDefaultData] = useState({})
  const [image, setImage] = useState('');


  const handleImageChange = (event) => {
    console.log(imageUrl.current.value);
    setImage(imageUrl.current.value);
    setDefaultData((prevData => ({...prevData, image:imageUrl.current.value})))

    if(image.length === 0 && imageUrl.current.value.length  === 0) {    
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;
      setImage(base64String);
      setDefaultData((prevData => ({...prevData, image:base64String})))
    };
    // Read the image file as a data URL
    reader.readAsDataURL(file);
  }
  }
  console.log('sellerProducts: ', sellerProducts);
  useEffect(() => {
    const filteredProduct = sellerProducts.find(p => p.id === parseInt(id));
    console.log('filteredProduct: ', filteredProduct);
    setDefaultData(filteredProduct)
  }, [id, sellerProducts])

  const handleFormData = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const token = getCookie('token');
    const sellerData = jwtDecode(token);
    console.log('sellerData: ', sellerData);
    data.seller_id = sellerData.data[0].seller_id;
    data.id = id;
    data.sellerName = user.userName

    data.image = image;
    if(image === '') {
      data.image = defaultData?.image
    }
      editProduct(data);
  };
  
  return (
    <div className="container log-in-container seller-form">
      
      <form
        onSubmit={handleFormData}
        className="form-control log-form"
      >
      <h1>Add Product</h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          defaultValue={defaultData?.title}          
          required
        />
        <label htmlFor="price">Price</label>
        <input type="number" placeholder="price" name="price" defaultValue={defaultData?.price} required />
        <label htmlFor="category">Category</label>
        <input type="text" placeholder="category" name="category" defaultValue={defaultData?.category} required />
        <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Images
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleImageChange}
              />
            </div>
              <p>Or</p>
            <div className="mb-3">
              <label>Image Url</label>
              <input type="url"  name="image" className="form-control" onChange={handleImageChange} ref={imageUrl}/>

            </div>

            {defaultData?.image !== "" && ( // Check if image data is available
              <div className="mb-3">
                <label className="form-label">Uploaded Image:</label>
                <div className="uploaded-image-container">
                  <img
                    src={defaultData?.image ? defaultData?.image : undefined}
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
          defaultValue={defaultData?.description}
          required
        ></textarea>
        <button className="form-btn">Update</button>
      </form>
    </div>
  );
}
