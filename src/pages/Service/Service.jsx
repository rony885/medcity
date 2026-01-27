import React from "react";
import ServiceInfo from "./ServiceInfo";
// import Features from "./Features";
// import Team from "./DoctorTeam";
import BookingFrom from "./BookingFrom";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const Service = () => {
  return (
    <div>
      <ServiceInfo />
      {/* <Features /> */}
      {/* <Team /> */}
      <BookingFrom />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default Service;
