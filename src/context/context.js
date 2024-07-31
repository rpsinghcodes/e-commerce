import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useState, useEffect } from "react";
import {
  deleteCookie,
  getCookie,
  isSellerLogedIn,
  isTokenValid,
  isUserLogedIn,
  setCookie,
} from "../helpers/utils";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import {
  fetchUserLogin,
  getUserCartProduct,
  getUserWishListProducts,
  fetchProducts,
  fetchSellerProducts,
  signup,
  postAddToCart,
  deleteWishListProduct,
  updateUserCart,
  updateWishList,
  fetchdeleteProduct,
  getOrder,
  getUserOrder,
} from "../http/http";

export const CartContext = createContext({
  login: (userType, email, password) => {},
  userRegistration: (event) => {},
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
  deleteProduct: (id) => {},
  sellerProducts: [],
  setSellerProducts: () => {},
  alertMessage: {},
  editProduct: (data) => {},
  orders: [],
  billing: { product: [], info: {}, modeOfPayment: "" },
  updateBilling: (product, info, modeOfPayment) => {},
  userOrder: [],
  setOrder: () =>{},
  setUserOrder: () => {}

});

export default function CartProvider({ children }) {
  const navigate = useNavigate();
  const [billing, setBilling] = useState({});
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [wishListProducts, setWishListProducts] = useState([]);
  const [wishListLength, setWishListLength] = useState(0);
  const [orders, setOrder] = useState([]);
  const [userOrder, setUserOrder] = useState([]);
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
    };
    getProducts();

    const token = getCookie("token");
    if (isTokenValid()) {
      const decodedData = jwtDecode(token);

      setUser({
        isSellerLogedIn: false,
        isUserLogedIn: true,
        userName: decodedData.data[0].name,
      });
    }

    if (isSellerLogedIn()) {
      if (isTokenValid()) {
        // Setting user state to seller.
        const decodedData = jwtDecode(token);
        const name = decodedData?.data[0]?.seller_name;
        const seller_id = decodedData?.data[0]?.seller_id;
        setUser({
          isSellerLogedIn: true,
          userName: name,
          isUserLogedIn: false,
        });

        // fetch sellerProducts
        const fetchSellerProductFn = async () => {
          const fetchSellerProduct = await fetchSellerProducts(name);
          console.log("fetchSellerProduct: ", fetchSellerProduct);
          setSellerProducts(fetchSellerProduct);
        };
        fetchSellerProductFn();

        const fetchSellerOrder = async () => {
          const sellerOrders = await getOrder(seller_id);
          setOrder(sellerOrders?.data);
        };
        fetchSellerOrder();
      }
    }
    // is User Loged In
    if (isUserLogedIn()) {
      const fetchUserData = async () => {

        const cartProducts = await getUserCartProduct(token);
        setCartProducts(cartProducts);

        const wishListProducts = await getUserWishListProducts(token);
        setWishListProducts(wishListProducts);

        const data = await getUserOrder();
        setUserOrder(data?.data);
      };
      fetchUserData();

    }
  }, []);

  const updateBilling = (product, info, modeOfPayment) => {
    setBilling({
      product,info, modeOfPayment
    })
  }

  const login = async (userType, email, password) => {
    if (userType === "buyer") {
      //for buyer;
      const data = await fetchUserLogin(email, password, "buyer");
      console.log(data);
      if (data.success) {
        setCookie("token", data.token);
        const cartProducts = await getUserCartProduct(data.token);
        setCartProducts(cartProducts);
        const wishListProducts = await getUserWishListProducts(data.token);
        setWishListProducts(wishListProducts);
        const userData = jwtDecode(data.token);
        const userOrder = await getUserOrder();
        setUserOrder(userOrder?.data);
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
      const data = await fetchUserLogin(email, password, "seller");
      // console.log(data);

      if (data.success) {
        setCookie("token", data.token);
        const userData = jwtDecode(data.token);
        toast.success(data.message);
        setUser({
          isUserLogedIn: false,
          isSellerLogedIn: true,
          userName: userData.data[0].seller_name,
        });
        setSellerProducts(data?.sellerProducs);
        const fetchSellerOrder = async () => {
          const sellerOrders = await getOrder(
            data?.sellerProducs[0]?.seller_id
          );
          setOrder(sellerOrders?.data);
        };
        fetchSellerOrder();

        navigate("/seller");
      } else {
        toast.error(data.message);
      }
    } else {
      alert("Provide UserType");
    }
  };

  const userRegistration = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    data.userType = "buyer";

    const signupResponse = await signup(data); // fetch signup api

    if (signupResponse.success) {
      toast.success(signupResponse?.message);
      navigate("/login");
    } else {
      toast.success(signupResponse?.message);
    }
  };

  const addToCart = async (product) => {
    if (!user.isUserLogedIn) {
      toast.error("You need to login first.");
      navigate("/login");
    }

    const data = await postAddToCart(product);

    if (data?.success) {
      toast.success(data?.message);
      setCartProducts(data?.updatedCart);
    } else if (!data?.success) {
      toast.error(data?.message);
    }
  };

  const removeFromWishList = async (product_id) => {
    const data = await deleteWishListProduct(product_id);
    if (data.success) {
      toast.success(data?.message);
      setWishListProducts(data?.updatedWishList);
    } else if (!data.success) {
      toast.error(data.message);
    }
  };

  const updateCart = async (product_id, update) => {
    const data = await updateUserCart(product_id, update);
    if (data.success) {
      toast.success(data?.message);
      setCartProducts(data?.updatedCart);
    }
    if (!data?.success) {
      toast.error(data?.message);
    }
  };

  const addToWishList = async (product) => {
    if (!user.isUserLogedIn) {
      toast.error("You need to login first.");
      navigate("/login");
    }
    const data = await updateWishList(product);
    if (data?.success) {
      toast.success(data?.message);
      setWishListProducts(data?.updatedWishList);
    } else if (!data?.success) {
      toast.error(data?.message);
    }
  };
  const logout = async () => {
    // empty everyting
    setUser({ isUserLogedIn: false, isSellerLogedIn: false, userName: "" });
    setCartProducts([]);
    setSellerProducts([]);
    setWishListLength(0);
    setWishListProducts([]);
    setCartProducts([]);
    setUserOrder([]);
    setOrder([]);
    deleteCookie("token", "delete-this");
    toast.success("User Logout successfully.");
  };

  const editProduct = async (data) => {
    const token = getCookie("token");
    const sellerData = jwtDecode(token);
    data.user_id = sellerData?.data[0]?.seller_id; // seller id

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include user ID from JWT token in the Authorization header
      },
    };

    await axios
      .post("http://localhost:4000/addproduct", data, config)
      .then((response) => {
        console.log(response?.data);
        setSellerProducts(
          response?.data?.updatedSellerProducts ||
            response?.data?.sellerProducts
        );
        setProducts(response?.data?.data);
        toast.success(response?.data?.message);
        navigate("/seller");
      })
      .catch((err) => {
        console.log("got an error", err);
      });
  };

  // Methods for seller
  const deleteProduct = async (id, seller_id) => {
    const data = await fetchdeleteProduct(id, seller_id);
    if (data.success) {
      toast.success(data?.message);
      setSellerProducts(data?.sellerProducts);
      setProducts(data?.updatedProducts);
    } else {
      toast.error(data?.message);
    }
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
        editProduct,
        orders,
        setOrder,
        billing,
        updateBilling,
        userOrder,        
        setUserOrder
      }}
    >
      <ToastContainer autoClose={1000} />
      {children}
    </CartContext.Provider>
  );
}
