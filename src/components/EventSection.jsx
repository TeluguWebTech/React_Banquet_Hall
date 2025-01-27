import React from "react";
import FeatureSection from "./FeatureSection";
import SlickSection from "./SlickSection";

const EventSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <FeatureSection />
      <div className="contact-form section-padding30 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="form-wrapper">
                <form id="contact-form" onSubmit={handleSubmit}>
                  {/* Section Title */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-tittle tittle-form text-center mb-30">
                        <h2>Are you attending?</h2>
                        <img
                          src="paper/img/gallery/tittle_img2.png"
                          alt="Section title decoration"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-box mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box subject-icon mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-12 mb-30">
                      <div className="select-itms">
                        <select name="guests" id="select2" required>
                          {[1, 2, 3, 4].map((guest) => (
                            <option key={guest} value={guest}>
                              {guest} Guest{guest > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div> */}
                    <div className="col-lg-12">
                      <div className="form-box message-icon mb-30">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="submit-info">
                        <button
                          className="btn"
                          type="submit"
                          style={{ background: "blue", color: "white" }}
                        >
                          Confirm now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* Shape Inner Flower */}
                <div className="shape-inner-flower">
                  <img
                    src="paper/img/gallery/shape2.png"
                    className="shpe2"
                    alt="Inner flower shape"
                  />
                </div>
                {/* Shape Outer Flower */}
                <div className="shape-outer-flower">
                  <img
                    src="paper/img/flower/from-top.png"
                    className="outer-top"
                    alt="Top flower shape"
                  />
                  <img
                    src="paper/img/flower/from-bottom.png"
                    className="outer-bottom"
                    alt="Bottom flower shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Brand Area */}
        <section className="brand-area section-padding-b">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="section-tittle text-center mb-80">
                  <h2>Registry Gift</h2>
                  <img
                    src="paper/img/gallery/tittle_img.png"
                    alt="Registry Gift section decoration"
                  />
                  <p>
                    Quisque nec facilisis sem. In at commodo velit. Aliquam
                    tempor volutpat laoreet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SlickSection />
        </section>

        {/* Footer */}
        <footer className="site-footer section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="text-white mb-4 me-5">Avika Grand</h4>
              </div>

              <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                <h6 className="text-white mb-lg-4 mb-3">Location</h6>
                <div className="barCode">
                  <img src="/banner/images/barcode.jpg" alt="location" />
                </div>
                <p>Hyderabad</p>
                <a
                  href="https://goo.gl/maps/wZVGLA7q64uC1s886"
                  className="custom-btn btn btn-dark mt-2"
                >
                  Directions
                </a>
              </div>

              <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                <h6 className="text-white mb-lg-4 mb-3">
                  Booking Contact Hours
                </h6>
                <p className="mb-2">Monday - Friday</p>
                <p>10:00 AM - 08:00 PM</p>
                <p>
                  Tel:{" "}
                  <a href="tel:010-02-0340" className="tel-link">
                    010-02-0340
                  </a>
                </p>
              </div>

              <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                <h6 className="text-white mb-lg-4 mb-3">Social</h6>
                <ul className="social-icon">
                  {["facebook", "instagram", "twitter", "youtube"].map(
                    (social) => (
                      <li key={social}>
                        <a
                          href="#"
                          className={`social-icon-link bi-${social}`}
                        ></a>
                      </li>
                    )
                  )}
                </ul>
                <p className="copyright-text tooplate-mt60">
                  Copyright © 2022 Banquet Co., Ltd. <br />
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EventSection;
