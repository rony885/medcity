import React from "react";
import AboutInfo from "./AboutInfo";
import Features from "./Features";
import WorkProcess from "./WorkProcess";
import DoctorTeam from "./DoctorTeam";
// import Testimonials from "./Testimonials";
import Blog from "./Blog";

const About = () => {
  return (
    <div>
      <AboutInfo />
      <Features />
      <WorkProcess />
      <DoctorTeam />
      {/* <Testimonials /> */}
      <Blog />
    </div>
  );
};

export default About;
