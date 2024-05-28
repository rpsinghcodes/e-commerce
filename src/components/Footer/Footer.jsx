import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="mt-5 container">
      <div className="footer-container">
        {/* footer-top start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 counter_item text-center">
              <div className="counter_item-icon">
                <img
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon1699176811.svg"
                  alt=""
                />
                <h4>1,900+ Vendors</h4>
                <p>1,900 Vendors are working with us around the US</p>
              </div>
            </div>
            <div className="col-lg-4 counter_item text-center">
              <div className="counter_item-icon">
                <img
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon-21699176810.svg"
                  alt=""
                />
                <h4>9,102+ Customers</h4>
                <p>
                  9,102+ Customers are making retained purchases every now &
                  then
                </p>
              </div>
            </div>
            <div className="col-lg-4 counter_item text-center">
              <div className="counter_item-icon">
                <img
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon-11699176810.svg"
                  alt=""
                />
                <h4>12 Awards</h4>
                <p>We won 12 awards for excellency in customer service</p>
              </div>
            </div>
          </div>
        </div>
        {/* footer-top-end */}

        {/* footer-bottom-start */}
        <div className="container footer-bottom mt-5">
          <div className="row ">
            <div className="col-lg-3 mt-3">
              <ul>
                <img
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/image-3601699785184.png"
                  alt=""
                />
                <p style={{fontWeight:"normal", color:"#f1f1f1", fontSize:'18px', marginTop:"20px"}}>
                  The best multi-vendor ecommerce website for you. You can
                  easily buy your product according to your choice.
                </p>
              </ul>

              
              <div className="footer-icons d-flex justify-content-evenly w-75 ">
                <button> <i className="bi bi-twitter"></i></button>
                <button> <i className="bi bi-facebook"></i></button>
                <button> <i className="bi bi-person-wheelchair"></i></button>
                <button> <i className="bi bi-instagram"></i></button>
              </div>
            </div>



            <div className="footer-links  col-lg-3 bottom mt-3">
              <ul>
                <p style={{ fontWeight: "600", fontSize:"18px" }}>Helpful Links</p>
                <p style ={{fontSize:"16px", fontWeight:"500"}}>Home</p>
                <p style ={{fontSize:"16px", fontWeight:"500"}}>Blog</p>
                <p style ={{fontSize:"16px", fontWeight:"500"}}>Contact</p>
                <p style ={{fontSize:"16px", fontWeight:"500"}}>Shop Page</p>
              </ul>
            </div>

            <div className="footer-info col-lg-3 bottom mt-3">
              <ul>
                <p style={{ fontWeight: "600", fontSize:"18px" }}>Store info</p>
                <p className="bi bi-geo-alt"style ={{fontWeight:"400"}}> &nbsp;Dhaka, Bangladesh</p>
                <p className="bi bi-phone-fill "style ={{fontWeight:"400"}}> 0113213131322</p>
                <p className="bi bi-envelope"style ={{fontWeight:"400"}}>  support@safecart.com</p>
              </ul>
            </div>

            <div className="footer-msg  col-lg-3 bottom mt-3">
              <ul>
                <p>GET IN TOUCH</p>
                <p>Sign up to our mailing list now!</p>
                <p>
                  <input type="text" placeholder="Your mail here" />{" "}
                  <button>
                    <i className="bi bi-send-fill"></i>
                  </button>
                </p>
              </ul>
            </div>

          </div><hr  className="hr"/>
        </div>
      </div>
      {/* footer-bottom-end */}
    
    </footer>
  );
};

export default Footer;
