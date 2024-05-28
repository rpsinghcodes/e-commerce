import axios from "axios";
import { getCookie } from "../helpers/utils";
import { jwtDecode } from "jwt-decode";

export async function fetchProducts(){

    try {
        const response = await axios.get('http://localhost:4000');
        if(response.status === 200) {
            return response?.data?.data
        } else {
            return []
        }
    }catch(err) {
        console.log(err);
        return [];
 }
}



export async function fetchSellerProducts(name) {
    try {
        const response = await axios.get(`http://localhost:4000/productby/${name}`)
        
        if(response.status === 200) {
            return response?.data?.productDetail
        } else {
            return []
        }
    }catch(err) {
        console.log(err);
        return [];
    }
}


export async function fetchUserLogin(email, password, userType) {
    try {
        let path;
        if(userType === 'buyer') {
            path = `http://localhost:4000/login`
        }
        if(userType === 'seller') {
            path = `http://localhost:4000/seller-login`
        }
        const response = await axios.post(path, {email, password});
        console.log(response);
        if(response?.data?.success) {
            return {
                success: response?.data?.success,
                token: response?.data?.token,
                message: response?.data?.message,
                sellerProducs: response?.data?.sellerProducts || []
            }
        }
        else {
            console.log('else: ', response);
        }
    }catch(err) {
        console.log(err?.response?.data);
        return {
            success: err?.response?.data?.success || false,
            message: err?.response?.data?.message || 'Failed to login.'
        }
    }
}

export async function signup(data) {
    try {
        const response = await axios.post('http://localhost:4000/signup', data);
        if(response?.data?.success) {
            return {
                success: response?.data?.success,
                message: response?.data?.message,
            }
        } else {
            return {
                success: false,
                message: 'Error creating user',
            }
        }
    }catch(err) {
        console.log(err);
        return {
            success: false,
            message: 'Error in signup.',
        }
    }
}


export async function postAddToCart(data) {
    try {
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
              product_id: data.id,
            };
            const response = await axios.post("http://localhost:4000/add-to-cart", toSend, config);
                        
            if(response?.data?.success) {
                return {
                    success: response?.data?.success,
                    message: response?.data?.message,
                    updatedCart: response?.data?.updatedCart
                }
            } else {
                return {
                    success: false,
                }
            }
        }
    }catch(err) {
        console.log(err);
        return {
            success: false,
            message: 'Somethning Went wrong.'
        }
    }
}


