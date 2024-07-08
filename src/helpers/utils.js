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


export function isUserLogedIn() {
  const token = getCookie("token");
  if (!token) {
    return false;
  }
  const data = jwtDecode(token);
  if (data?.data[0]?.seller_name) {
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
    if (data?.data[0]?.seller_name) {
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