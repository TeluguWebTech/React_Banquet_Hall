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
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slider-item" key="slide-1">
          <div className="position-relative">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    {/* <h1 className="display-2  animated slideInDown mb-4">
                      Turn your Dreams into Magical Celebrations
                    </h1> */}
                  </div>
                </div>
              </div>
            </div>
            <img src="/banner/images/slider/b1.jpg" alt="Slide 1" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slider-item" key="slide-2">
          <div className="position-relative">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    {/* <h1 className="display-2  animated slideInDown mb-4">
                      Unforgettable Moments, Crafted with Perfection.
                    </h1> */}
                  </div>
                </div>
              </div>
            </div>
            <img src="/banner/images/slider/b2.jpg" alt="Slide 2" />
          </div>
        </div>

        {/* Slide 3 */}

        <div className="slider-item" key="slide-2">
          <div className="position-relative">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    {/* <h1 className="display-2  animated slideInDown mb-4">
                      Celebrate Life’s Special Moments in Style.
                    </h1> */}
                  </div>
                </div>
              </div>
            </div>
            <img src="/banner/images/slider/b3.jpg" alt="Slide 3" />
          </div>
        </div>
        {/* Slide 4 */}

        <div className="slider-item" key="slide-2">
          <div className="position-relative">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    {/* <h1 className="display-2  animated slideInDown mb-4">
                      Celebrate Life’s Special Moments in Style.
                    </h1> */}
                  </div>
                </div>
              </div>
            </div>
            <img src="/banner/images/slider/b4.jpg" alt="Slide 4" />
          </div>
        </div>
      </Slider>
      {/* <SlickSection /> */}
    </div>
  );
}

export default SliderSection;
