import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../pages/About/about.css";
import Footer from "../Footer/Footer";
const AboutCarousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="slider-container about-slider">
        <Slider {...settings}>
          <div className="slider-card">
            <div className="slider">
              <div className="slider-card-header">
                <p className="info">
                  Did shy say mention enabled through elderly improve. As at so
                  believe account evening behaved hearted is. House is tiled we
                  aware. Did shy say mention enabled.
                </p>
              </div>
              <img
                src="https://safecart.bytesed.com/assets/uploads/media-uploader/0216497321011700027581.png"
                alt=""
              />
              <div className="slider-card-body">
                <h6>Melinda Watson</h6>
                <p>Student, Oxford University</p>
              </div>
            </div>
          </div>

          <div className="slider-card">
            <div className="slider">
              <div className="slider-card-header">
                <p className="info">
                  Did shy say mention enabled through elderly improve. As at so
                  believe account evening behaved hearted is. House is tiled we
                  aware. Did shy say mention enabled.
                </p>
              </div>
              <img
                src="https://safecart.bytesed.com/assets/uploads/media-uploader/0116497321011700027581.png"
                alt=""
              />
              <div className="slider-card-body">
                <h6>Jeryy R.Khun</h6>
                <p>Student, Oxford University</p>
              </div>
            </div>
          </div>

          <div className="slider-card">
            <div className="slider">
              <div className="slider-card-header">
                <p className="info">
                  Did shy say mention enabled through elderly improve. As at so
                  believe account evening behaved hearted is. House is tiled we
                  aware. Did shy say mention enabled.
                </p>
              </div>
              <img
                src="https://safecart.bytesed.com/assets/uploads/media-uploader/0316497321021700027583.png"
                alt=""
              />
              <div className="slider-card-body">
                <h6>Graham Ortega</h6>
                <p>Student, Oxford University</p>
              </div>
            </div>
          </div>

          <div className="slider-card">
            <div className="slider" >
              <div className="slider-card-header">
                <p className="info">
                  Did shy say mention enabled through elderly improve. As at so
                  believe account evening behaved hearted is. House is tiled we
                  aware. Did shy say mention enabled.
                </p>
              </div>
              <img
                src="https://safecart.bytesed.com/assets/uploads/media-uploader/0216497321011700027581.png"
                alt=""
              />
              <div className="slider-card-body">
                <h6>Melinda Watson</h6>
                <p>Student, Oxford University</p>
              </div>
            </div>
          </div>
          <div className="slider-card">
            <div className="slider">
              <div className="slider-card-header">
                <p className="info">
                  Did shy say mention enabled through elderly improve. As at so
                  believe account evening behaved hearted is. House is tiled we
                  aware. Did shy say mention enabled.
                </p>
              </div>
              <img
                src="https://safecart.bytesed.com/assets/uploads/media-uploader/0216497321011700027581.png"
                alt=""
              />
              <div className="slider-card-body">
                <h6>Melinda Watson</h6>
                <p>Student, Oxford University</p>
              </div>
            </div>
          </div>
          <div className="slider-card">
            <div className="slider">
              <div className="slider-card-header">
                <p className="info">
                  Did shy say mention enabled through elderly improve. As at so
                  believe account evening behaved hearted is. House is tiled we
                  aware. Did shy say mention enabled.
                </p>
              </div>
              <img
                src="https://safecart.bytesed.com/assets/uploads/media-uploader/0216497321011700027581.png"
                alt=""
              />
              <div className="slider-card-body">
                <h6>Melinda Watson</h6>
                <p>Student, Oxford University</p>
              </div>
            </div>
          </div>
          <div className="slider-card">
            <div className="slider">
              <div className="slider-card-header">
                <p className="info">
                  Did shy say mention enabled through elderly improve. As at so
                  believe account evening behaved hearted is. House is tiled we
                  aware. Did shy say mention enabled.
                </p>
              </div>
              <img
                src="https://safecart.bytesed.com/assets/uploads/media-uploader/0216497321011700027581.png"
                alt=""
              />
              <div className="slider-card-body">
                <h6>Melinda Watson</h6>
                <p>Student, Oxford University</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    
    </div>
  );
};

export default AboutCarousel;
