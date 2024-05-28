import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState, useEffect } from "react";
import {
  deleteCookie,
  getCookie,
  getUserCartProduct,
  getUserWishListProducts,
  isSellerLogedIn,
  isTokenValid,
  isUserLogedIn,
  setCookie,
} from "../helpers/utils";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import { fetchUserLogin, fetchProducts, fetchSellerProducts, signup, postAddToCart } from "../http/http";

export const CartContext = createContext({
  login: (userType, email, password) => {},
  userRegistration : (event) => {},
  user: {
    userName: "",
    isUserLogedIn: false,
    isSellerLogedIn: false,
  },
  products: [],
  setProducts: [],
  wishListProducts: [],
  cartProducts: [],
  updateCart: (product_id, update) => {},
  addToCart: (product) => {},
  addToWishList: (product) => {},
  wishListLength: 0,
  logout: () => {},
  removeFromWishList: (product_id) => {},
  deleteProduct: (id)  => {}, 
  sellerProducts: [],
  setSellerProducts: () => {},
  alertMessage: {},
  editProduct: (data) => {}
});

export default function CartProvider({ children }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [wishListProducts, setWishListProducts] = useState([]);
  const [wishListLength, setWishListLength] = useState(0);
  const [user, setUser] = useState({
    userName: "",
    isUserLogedIn: false,
    isSellerLogedIn: false,
  });
  const [alertMessage, setAlertMessage] = useState({});

  useEffect(() => {
    // get all the products
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
        }
        getProducts();

    const token = getCookie("token");
    if (isTokenValid()) {
      setUser((prevData) => ({ ...prevData, isUserLogedIn: true }));
    }

    if (isSellerLogedIn()) {
      if (isTokenValid()) {
        // Setting user state to seller.
        const decodedData = jwtDecode(token);
        const name = decodedData?.data[0]?.owner_name;
        setUser({
          isSellerLogedIn: true,
          userName: name,
          isUserLogedIn: false,
        });

        // fetch sellerProducts 
        const fetchSellerProductFn = async () => {
          const fetchSellerProduct = await fetchSellerProducts(name);
          console.log('fetchSellerProduct: ', fetchSellerProduct);
          setSellerProducts(fetchSellerProduct);
        }
        fetchSellerProductFn();
      }

      
    }
    // is User Loged In
    if (isUserLogedIn()) {
      const fetchUserData = async () => {
        const cartProducts = await  getUserCartProduct(token);
        setCartProducts(cartProducts);
        const wishListProducts = await getUserWishListProducts(token);
        setWishListProducts(wishListProducts)

      }
      fetchUserData();
      
    }
  }, []);

  const login = async (userType, email, password) => {
    if (userType === "buyer") {
      //for buyer;
      const data = await fetchUserLogin(email, password, 'buyer');
      console.log(data);
      if(data.success) {
        setCookie("token", data.token);
        const cartProducts = await  getUserCartProduct(data.token);
        setCartProducts(cartProducts);
                const wishListProducts = await getUserWishListProducts(data.token);
        setWishListProducts(wishListProducts)
              const userData = jwtDecode(data.token);
      toast.success(data.message);
      setUser({
              isSellerLogedIn: false,
              isUserLogedIn: true,
              userName: userData?.data[0].name,
            });
      navigate("/");
      } else {
        toast.error(data.message);
      }
      
    } else if (userType === "seller") {
      const data = await fetchUserLogin(email, password, 'seller');
      console.log(data);
      if(data.success) {
        setCookie("token", data.token);
              const userData = jwtDecode(data.token);
      toast.success(data.message);
      console.log(userData);
      setUser({
              isUserLogedIn: false,
              isSellerLogedIn: true,
              userName: userData.data[0].owner_name,
            });
            setSellerProducts(data?.sellerProducs);
      navigate("/seller");
      } else {
        toast.error(data.message);
      }
    } else {
      
      alert("Provide UserType");
    }
  };

  const userRegistration = async(event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
     data.userType = 'buyer';

     const signupResponse = await signup(data); // fetch signup api

     if(signupResponse.success) {
      toast.success(signupResponse?.message);
      navigate('/login')
     } else {
      toast.success(signupResponse?.message);
     }
     
  }


  const addToCart = async (product) => {
    if(!user.isUserLogedIn) {
      toast.error("You need to login first.")
      navigate('/login')
    }

    const data = await postAddToCart(product);

    if(data.success) {
      toast.success(data?.message);
      setCartProducts(data?.updatedCart);

    }else if(!data.success) {
      toast.error(data?.message);      
    }
  };

  const removeFromWishList = async (product_id) => {
    const token = getCookie("token");
    if (!token) {
      navigate("/");
    } else {
      const decodedData = jwtDecode(token);
      const user_id = decodedData.data[0].id;
      console.log(user_id);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
        },
      };

      axios
        .post(
          "http://localhost:4000/delete-wishlist",
          { user_id, product_id },
          config
        )
        .then((response) => {
          toast.success(response?.data?.message );
          // alert('delete.')
          console.log("delete-wishList: ", response.data);
          setWishListProducts(response?.data?.updatedWishList);
        })
        .catch((err) => {
          console.log("Error while delete from cart.");
          console.log(err);
        });
    }
  };

  const updateCart = async (product_id, update) => {
    const token = getCookie("token");
    if (!token) {
      navigate("/");
    } else {
      const decodedData = jwtDecode(token);
      const user_id = decodedData.data[0].id;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .post(
          "http://localhost:4000/add-to-cart",
          { user_id, product_id, update },
          config
        )
        .then((response) => {
          toast.success(response?.data?.message );
          console.log("updateCart: ", response?.data?.updatedCart);
          setCartProducts(response?.data?.updatedCart);
        })
        .catch((err) => {
          console.log("Error while updating the cart.");
          console.log(err);
        });
    }
  };

  const addToWishList = async (product) => {
    if(!user.isUserLogedIn) {
      toast.error("You need to login first.")
      navigate('/login')
    }
    const token = getCookie("token");
    if (token) {
      const tokenData = jwtDecode(token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
        },
      };
      const toSend = {
        user_id: tokenData.data[0].id,
        product_id: product.id,
      };
      axios
        .post("http://localhost:4000/add-to-whishlist", toSend, config)
        .then((response) => {
          // alert(response.data.message);
          toast.success(response?.data?.message  );
          console.log("add-to-wishList: ", response?.data?.updatedWishList);
          const updatedWishList = response?.data?.updatedWishList;
          setWishListProducts(updatedWishList);
          setWishListLength(updatedWishList.length);
        })
        .catch((err) => {

          alert("Try again later.");
          console.log(err);
        });
      console.log("userID: ", tokenData.data[0].id);

      console.log("id :", product);
    }
  };
  const logout = async () => {
    // empty everyting
    setUser({ isUserLogedIn: false,isSellerLogedIn: false, userName: '' });
    setCartProducts([]);
    setSellerProducts([]);
    setWishListLength(0)
    setWishListProducts([]);
    setCartProducts([]);
    deleteCookie("token", "delete-this");
    toast.success('User Logout successfully.');
  };



  const editProduct = async (data) => {
    const token = getCookie('token');
    const sellerData = jwtDecode(token);
    data.user_id = sellerData?.data[0]?.id; // seller id
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
      },
    };

    await axios.post('http://localhost:4000/addproduct', data, config )
    .then(response => {
      console.log(response?.data);
      setSellerProducts(response?.data?.updatedSellerProducts || response?.data?.sellerProducts);
      setProducts(response?.data?.data)
      toast.success(response?.data?.message);
      navigate('/seller');
    }).catch(err => {
      console.log('got an error', err)
    })
  }

  // Methods for seller
  const deleteProduct = async (id, user_id) => {
    const token = getCookie("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
      },
    };

    axios
      .post("http://localhost:4000/deleteproduct", { id, user_id }, config)
      .then((response) => {
        toast.success(response?.data?.message );
        setSellerProducts(response?.data?.updatedSellerProducts);
        setProducts(response?.data?.data)
      })
      .catch((err) => alert("Something Went Wrong."));
  };


  

  return (
    <CartContext.Provider
      value={{
        login,
        userRegistration,
        user,
        products,
        sellerProducts,
        setProducts,
        wishListProducts,
        cartProducts,
        updateCart,
        addToCart,
        addToWishList,
        wishListLength,
        logout,
        removeFromWishList,
        deleteProduct,
        setSellerProducts,
        alertMessage,
        editProduct
        
      }}
    >
    <ToastContainer  autoClose={2500}/>
      {children}
    </CartContext.Provider>
  );
}
