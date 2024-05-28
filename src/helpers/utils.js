import axios from "axios";
import { jwtDecode } from "jwt-decode";

export function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

export async  function  getUserCartProduct(token) {
  try {
    const decodedData = jwtDecode(token);
    const user_id = decodedData.data[0].id;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post("http://localhost:4000/cart", { user_id }, config);
    if (!response.data.products) {
      return [];
    } else {
      console.log(response.data.products);
      return response.data.products;
    }
  }catch(err) {
    console.log('err', err)
    }
   
}

export async  function getUserWishListProducts(token) {
  
  try {
    const decodedData = jwtDecode(token);
    const user_id = decodedData.data[0].id;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post("http://localhost:4000/wishlist", { user_id }, config);

    if (!response.data.products) {
      return [];
    } else {
      console.log(response.data.products);
      return response.data.products;
    }
  }catch(err) {
    console.log('err', err);
    return [];
  }
  
}

export function isUserLogedIn() {
  const token = getCookie("token");
  if (!token) {
    return false;
  }
  const data = jwtDecode(token);
  if (data?.data[0]?.owner_name) {
    return false;
  }

  return isTokenValid();
}

export function isTokenValid() {
  const token = getCookie("token");
  if (!token) {
    return false;
  }
  const decodedToken = jwtDecode(token);
  const expirationTime = new Date(decodedToken.exp * 1000);
  const currentTime = new Date();
  return currentTime < expirationTime;
}

export function setCookie(name, value) {
  if (name === "token") {
    const decodedToken = jwtDecode(value);
    const expirationTime = new Date(decodedToken.exp * 1000); // Convert Unix timestamp to milliseconds
    document.cookie = `${name}=${value}; expires=${expirationTime.toUTCString()}; path=/`;
    isTokenValid();
  } else {
    document.cookie = `${name}=${value}; path=/`;
  }
}

export function deleteCookie(name, value) {
  document.cookie = `${name}=${value}; expires=Thu, 01 Jan 2001 00:00:00 GMT  `;
}

export function isSellerLogedIn() {
  const token = getCookie("token");
  if (isTokenValid()) {
    const data = jwtDecode(token);
    if (data?.data[0]?.owner_name) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}



export function getStringSize(string) {
  // Get the byte length of the string
  const byteSize = new Blob([string]).size;

  // Convert bytes to KB
  const kilobytes = byteSize / 1024;

  // Convert KB to MB
  const megabytes = kilobytes / 1024;
  return megabytes

  // return {
  //     bytes: byteSize,
  //     kilobytes: kilobytes.toFixed(2), // Round to 2 decimal places
  //     megabytes: megabytes.toFixed(2) // Round to 2 decimal places
  // };
}