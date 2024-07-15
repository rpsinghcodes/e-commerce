import Footer from '../../components/Footer/Footer';


const About = () => {
  return (
    <>
      <h2 style={{backgroundColor:"#f7f7f7", padding:"40px", textAlign:'center'}}>About</h2>
      <div className="container-fluid">
        <div className="container">
          <div className="row about-card mt-4">
            <div className="col-md-7 d-flex flex-column justify-content-center about-card-text">
              <h2>This is how we do. Learn something about us and our services</h2>
              <p>There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on. Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.</p>
            </div>
            <div className="col-md-5">
              <img src="https://safecart.bytesed.com/assets/uploads/media-uploader/rectangle-2301700027105.png" className="img-fluid w-100" alt="About us"/>
            </div>
          </div>

          <div className="row about-card mb-4">
            <div className="col-md-5">
              <img src="https://safecart.bytesed.com/assets/uploads/media-uploader/rectangle-2331700027103.png" className="img-fluid w-100" alt="About us"/>
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-center about-card-text">
              <h2>This is how we do. Learn something about us and our services</h2>
              <p>There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on. Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.</p>
            </div>
          </div>

          <div className="row about-card about-card-bottom">
            <div className="col-md-7 d-flex flex-column justify-content-center about-card-text">
              <h2>Our Advantages</h2>
              <div className="row about-card-icons">
                <div className="col-6 col-md-3 icon-container">
                  <div className="icon">
                    <i className="bi bi-truck"></i>
                  </div>
                  <div className="about-card-icon-text">
                    <h5>Free Shipping</h5>
                    <p>Free Shipping on all online orders</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 icon-container">
                  <div className="icon">
                    <i className="bi bi-shield-lock"></i>
                  </div>
                  <div className="about-card-icon-text">
                    <h5>100% Secure Payment</h5>
                    <p>We Ensure Secure Transactions</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 icon-container">
                  <div className="icon">
                    <i className="bi bi-percent"></i>
                  </div>
                  <div className="about-card-icon-text">
                    <h5>Fresh Product</h5>
                    <p>We Provide 100% Original items</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 icon-container">
                  <div className="icon">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="about-card-icon-text">
                    <h5>24/7 Support Center</h5>
                    <p>We are available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src="https://safecart.bytesed.com/assets/uploads/media-uploader/rectangle-2311700027103.png" className="img-fluid w-100" alt="Our advantages"/>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default About;

