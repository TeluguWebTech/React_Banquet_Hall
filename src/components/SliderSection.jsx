import React from "react";
import Slider from "react-slick";
import SlickSection from "./SlickSection";

function SliderSection() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img src="/banner/images/h1.jpg" alt="" />
        </div>
        <div className="slider-item">
          <img src="/banner/images/h2.jpeg" alt="" />
        </div>
        <div className="slider-item">
          <img src="/banner/images/h4.jpg" alt="" />
        </div>
      </Slider>
      <SlickSection />
    </div>
  );
}

export default SliderSection;
