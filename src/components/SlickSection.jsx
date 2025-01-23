import React from "react";
import Slider from "react-slick";

function SlickSection() {
  var settings = {
    dots: false, // Remove dots if not needed
    infinite: true, // Enable infinite scrolling
    speed: 5000, // Speed of transition
    slidesToShow: 4,
    slidesToScroll: 1, // Scroll one slide at a time for smoother effect
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 0.5, // Continuous scrolling effect
    cssEase: "linear", // Smooth linear scrolling
    arrows: false, // Remove previous and next buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    slide: ".slick-item",
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "20px",
  };

  return (
    <div className="slick-container">
      <Slider {...settings}>
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="slick-item">
            <img
              src={`paper/img/gallery/gallery0${index + 1}.png`}
              alt={`Gallery ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickSection;
