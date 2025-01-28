import React from "react";
import { Link as ScrollLink } from "react-scroll";

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
              <img src="/banner/images/logo.jpg" alt="Logo" />
            </div>
            <div
              className="navbar-brand"
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
                  <ScrollLink
                    className="nav-link"
                    to="home"
                    smooth={true}
                    duration={500}
                    style={{ color: "#BD8F24", cursor: "pointer" }}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="about"
                    smooth={true}
                    duration={500}
                    style={{ color: "#BD8F24", cursor: "pointer" }}
                  >
                    About
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="services"
                    smooth={true}
                    duration={500}
                    style={{ color: "#BD8F24", cursor: "pointer" }}
                  >
                    Events
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="updates"
                    smooth={true}
                    duration={500}
                    style={{ color: "#BD8F24", cursor: "pointer" }}
                  >
                    Services
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="contact"
                    smooth={true}
                    duration={500}
                    style={{ color: "#BD8F24", cursor: "pointer" }}
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <div className="d-none d-lg-block">
              <ScrollLink
                className="nav-link"
                to="contact"
                smooth={true}
                duration={500}
              >
                <button
                  type="button"
                  className="custom-btn btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#BookingModal"
                >
                  Reservation
                </button>
              </ScrollLink>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBarSection;
