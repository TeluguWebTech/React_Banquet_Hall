import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-form section-padding30 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6">
            <div className="form-wrapper">
              <form id="contact-form">
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
    </div>
  );
};

export default ContactSection;
