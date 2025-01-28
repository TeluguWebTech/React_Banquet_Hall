import React from "react";
import NavBarSection from "../components/NavBarSection";
import BannerSection from "../components/BannerSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import EventSection from "../components/EventSection";
import SliderSection from "../components/SliderSection";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavBarSection />
      <div id="home">
        <SliderSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServiceSection />
      </div>
      <div id="events">
        <EventSection />
      </div>
      <div id="updates">
        <FeatureSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
