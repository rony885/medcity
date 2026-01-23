import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import ContactInfo from "./ContactInfo";
import Services from "./Services";
import Notses from "./Notses";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ContactInfo />
      <About />
      <Services />
      <Notses />
      <Blog />
    </div>
  );
};

export default Home;
