import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token is present in cookies
    const tokenCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (tokenCookie) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated };
};
