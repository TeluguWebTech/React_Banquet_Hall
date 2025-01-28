import React from "react";
import SlickSection from "./SlickSection";

const EventSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="contact-form section-padding30 fix event">
      <div>
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
      </div>
    </div>
  );
};

export default EventSection;
