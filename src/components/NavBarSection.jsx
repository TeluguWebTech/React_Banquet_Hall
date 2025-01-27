import React from "react";

const NavBarSection = () => {
  return (
    <div>
      <section className="navSection">
        <nav className="navbar navbar-expand-lg bg-white shadow-lg fixed-top">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="logo">
              <img src="/banner/images/logo.jpg" alt="" />
            </div>
            <div
              className="navbar-brand"
              href="index.html"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Avika Grand
            </div>

            <div className="d-lg-none">
              <button
                type="button"
                className="custom-btn btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#BookingModal"
              >
                Reservation
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="index.html"
                    style={{ color: "#BD8F24" }}
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="about.html"
                    style={{ color: "#BD8F24" }}
                  >
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="menu.html"
                    style={{ color: "#BD8F24" }}
                  >
                    Events
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="news.html"
                    style={{ color: "#BD8F24" }}
                  >
                    Our Updates
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="contact.html"
                    style={{ color: "#BD8F24" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-none d-lg-block">
              <button
                type="button"
                className="custom-btn btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#BookingModal"
              >
                Reservation
              </button>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBarSection;
