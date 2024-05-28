import React from "react";
import "./cards.css";

const Cards = () => {
  const cardImg =
    "https://safecart.bytesed.com/assets/uploads/media-uploader/banner-card1-654756d8c47281699174142.webp";
  const cardImg1 =
    "https://safecart.bytesed.com/assets/uploads/media-uploader/banner-card2-654756d7f21061699174143.webp";
  return (
   
        <div className="container">
          <div className="row">
          <div className="col-lg-6 mt-3 h-100">
          <div className="banner border0">
          <div className="card-body d-flex align-items-center">
            {" "}
            <div className="card-body-text">
              {" "}
              <h4 className="card-body-p">
                {" "}
                NOVEMBERS GADGET <br /> MADNESS{" "}
              </h4>
               <h3 className="card-body-percentile">20% OFF</h3>{" "}
              <button className="  card-btn">GET Offer</button>{" "}
            </div>
            <div className="card-body-img">
              {" "}
              <img src={cardImg} alt="" />{" "}
            </div>{" "}
          </div>
        </div>

          </div>

          <div className="col-lg-6 mt-3 h-100">
          <div className="banner border0">
          <div className="card-body d-flex flex-column justify-content-between align-items-center w-100  "  style={{ background: "#f4f300" }}>
            {" "}
            <div className="card-body-text">
              {" "}
              <h4 className="card-body-p">
                {" "}
                NOVEMBERS GADGET <br /> MADNESS{" "}
              </h4>
            </div>
            <div className="card-body-img">
              {" "}
              <img src={cardImg1} alt="sdfsdf"/>{" "}
            </div>{" "}
          </div>
        </div>

          </div>

          </div>
         
        </div>
       
       







   
  );
};

export default Cards;

// return (
//   <>
//     <div className=" cards-container justify-content-between">
//       {/* banner-1 */}
//       <div className=" banner border0">
//         <div className="card-body d-flex align-items-center">
//           <div className="card-body-text">
//             <h4 className="card-body-p">
//               NOVEMBERS GADGET <br />
//               MADNESS
//             </h4>
//             <h3 className="card-body-percentile">20% OFF</h3>
//             <button className="  card-btn">GET Offer</button>
//           </div>

//           <div className="card-body-img">
//             <img src={cardImg} alt="Image" />
//           </div>
//         </div>
//       </div>

//       {/* banner-2 */}
//       <div className="banner">
//         <div
//           className="card-body d-flex flex-column"
//           style={{ background: "#f4f300" }}
//         >
//           <div className="card-body-text">
//             <h4 className="card-body-p text-center">HOME APPLIANCES</h4>
//             <p
//               style={{ fontWeight: "700" }}
//               className="text-center"
//             >
//               CYBER MONDAY SPECIAL
//             </p>
//           </div>

//           <div className="card-body-img">
//             <img src={cardImg1} alt="Image" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// );
