import React, { useContext } from "react";
import "./topbar.css";
import Icons from "../Icons/Icons";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "../../helpers/utils";
import { CartContext } from "../../context/context";

const TopBar = () => {
  const { user } = useContext(CartContext);
  let display = true;
  if (user.isUserLogedIn) {
    const token = getCookie("token");
    if (token) {
      const decodedData = jwtDecode(token);
      if (decodedData?.data[0]?.userType === "buyer") {
        display = false;
      }
    }
  }
  return (
    <>
      {display && (
        <>
          <div className="container-fluid  navbar-background d-flex  justify-content-between  p-2 d-none   d-lg-block ">
            <div className="row">
              <div className="d-flex align-items-center col-lg-6">
                
              </div>

              <div className="col-lg-6">
                <HeaderLinks />
              </div>
            </div>
          </div>

          <div className="container-fluid  navbar-background d-flex  justify-content-between w-100  p-2 d-block  d-lg-none ">
            <div className="row">
              <div className="col-lg-6">
                <Icons />
              </div>

              <div className="col-lg-6">
                <HeaderLinks />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TopBar;
