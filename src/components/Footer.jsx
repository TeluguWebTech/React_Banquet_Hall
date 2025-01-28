import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="site-footer section-padding"
        style={{ marginTop: "-100px" }}
      >
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
              <h6 className="text-white mb-lg-4 mb-3">Booking Contact Hours</h6>
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
  );
};

export default Footer;
