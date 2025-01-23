import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SlickSection from "./SlickSection";

const BannerSection = () => {
  return (
    <section className="bannerSection">
      <OwlCarousel
        className="owl-theme fade-carousel"
        loop
        margin={0}
        nav={false} // Disables navigation buttons
        autoplay
        autoplayTimeout={8000} // 5 seconds interval
        autoplayHoverPause={false}
        items={1} // Show only one item at a time
        animateOut="fadeOut" // Add fade-out animation
        animateIn="fadeIn" // Add fade-in animation
      >
        <div className="item">
          <img
            style={{ height: "100vh" }}
            src="/banner/images/h1.jpg"
            alt="Banner 1"
          />
        </div>
        <div className="item">
          <img
            style={{ height: "100vh" }}
            src="/banner/images/h2.jpeg"
            alt="Banner 2"
          />
        </div>
        <div className="item">
          <img
            style={{ height: "100vh" }}
            src="/banner/images/h4.jpg"
            alt="Banner 4"
          />
        </div>
      </OwlCarousel>
      <SlickSection />
    </section>
  );
};

export default BannerSection;
