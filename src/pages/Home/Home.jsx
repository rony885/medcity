import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import ContactInfo from "./ContactInfo";
import Services from "./Services";
import DoctorTeam from "./DoctorTeam";
import BookingForm from "./BookingForm";
import Blog from "./Blog";
import Packages from "./Packages";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ContactInfo />
      <About />
      <Packages />
      <Services />
      <BookingForm />
      <DoctorTeam />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;
