import React from "react";
import { Link } from "react-router-dom";
import "./faqpage.css";

const FaqPage = () => {
  return (
    <>
      <div className="faq-text">
        <h1>FAQ</h1>
        <Link to="/">
          <span>FAQ</span>
        </Link>
      </div>
      <div className="container d-flex">
        {/* accordians*/}
        <div className="faq-container">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <p>Dashwood marianne in of entrance be on wondered</p>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <p>
                    Not attention say frankness intention out dashwoods now
                    curiosity. Stronger ecstatic as no judgment daughter
                    speedily thoughts. Worse downs nor might she court did nay
                    forth these.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Wondered sociable he carriage in speedily
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  Not attention say frankness intention out dashwoods now
                  curiosity. Stronger ecstatic as no judgment daughter speedily
                  thoughts. Worse downs nor might she court did nay forth these.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Worse downs nor might she court did nay forth
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Not attention say frankness intention out dashwoods
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  Not attention say frankness intention out dashwoods now
                  curiosity. Stronger ecstatic as no judgment daughter speedily
                  thoughts. Worse downs nor might she court did nay forth these.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Stronger ecstatic as no judgement daughter speedily
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  Not attention say frankness intention out dashwoods now
                  curiosity. Stronger ecstatic as no judgment daughter speedily
                  thoughts. Worse downs nor might she court did nay forth these.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Form */}

        <form action="" className="form-control form">
          <h2>Have Questions?</h2>
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Your Name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Your Email" />
          <label htmlFor="">Your Message</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default FaqPage;
