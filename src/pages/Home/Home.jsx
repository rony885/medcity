import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import ContactInfo from "./ContactInfo";
import Services from "./Services";
import DoctorTeam from "./DoctorTeam";
import Notses from "./Notses";
import Blog from "./Blog";
import Packages from "./Packages";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ContactInfo />
      <About />
      <Packages />
      <Services />
      <Notses />
      <DoctorTeam />

      <Blog />
    </div>
  );
};

export default Home;
