import React from "react";

const ServiceSection = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 style={{ color: "#BD8F24" }} className="display-5 mb-5">
              Some Of Our Events
            </h1>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="0.3s"></div>
          <div className="row g-4 portfolio-container">
            {[
              {
                img: "service/img/e1.jpg",
                // title: "Landscaping",
                delay: "0.1s",
              },
              {
                img: "service/img/e2.jpeg",
                // title: "Pruning Plants",
                delay: "0.3s",
              },
              {
                img: "service/img/e4.jpg",
                // title: "Irrigation & Drainage",
                delay: "0.5s",
              },
              {
                img: "service/img/e5.jpg",
                // title: "Garden Maintenance",
                delay: "0.1s",
              },
              {
                img: "service/img/e6.jpg",
                // title: "Green Technology",
                delay: "0.3s",
              },
              {
                img: "service/img/e7.jpg",
                // title: "Urban Gardening",
                delay: "0.5s",
              },
            ].map((event, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item first wow fadeInUp`}
                data-wow-delay={event.delay}
              >
                <div className="portfolio-inner rounded">
                  <img
                    className="img-fluid"
                    src={event.img}
                    alt={event.title}
                  />
                  <div className="portfolio-text">
                    <h4 className="text-white mb-4">{event.title}</h4>
                    <div className="d-flex">
                      <a
                        className="btn btn-lg-square rounded-circle mx-2"
                        href={event.img}
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section class="CgImage"></section>
    </div>
  );
};

export default ServiceSection;
