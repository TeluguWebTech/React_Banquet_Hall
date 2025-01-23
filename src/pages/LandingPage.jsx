import React from "react";
import NavBarSection from "../components/NavBarSection";
import BannerSection from "../components/BannerSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import EventSection from "../components/EventSection";
import SliderSection from "../components/SliderSection";

const LandingPage = () => {
  return (
    <div>
      <NavBarSection />
      {/* <BannerSection /> */}
      <SliderSection />
      <AboutSection />
      <ServiceSection />
      <EventSection />
    </div>
  );
};

export default LandingPage;
