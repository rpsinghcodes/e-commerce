import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import banner from "../../banner.webp";
import Slider from "react-slick";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="slider-container " id ="carousel-container">
        <Slider {...settings}>
          <div className="carousel">
            <div className="carousel-content d-flex">
              <div className="carousel-content-text">
                <p>WINTER 2024 OFFER</p>
                <h2>
                  Grab the best <br />
                  fashion deals <br />
                  in this winter.
                </h2>
                <button className="carousel-btn card-btn">Get Deals</button>
              </div>
              <div className="carousel-content-img">
                <img className="carouselImg" src={banner} alt="banner" />
              </div>
            </div>
          </div>
          <div className="carousel">
            <div className="carousel-content d-flex">
              <div className="carousel-content-text">
                <p>WINTER 2024 OFFER</p>
                <h2>
                  Grab the best <br />
                  fashion deals <br />
                  in this winter.
                </h2>
                <button className="carousel-btn card-btn">Get Deals</button>
              </div>
              <div className="carousel-content-img">
                <img className="carouselImg" src={banner} alt="banner" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;