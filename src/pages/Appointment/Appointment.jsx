import React from "react";
import AppointmentInfo from "./AppointmentInfo";
import DoctorTeam from "./DoctorTeam";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import About from "./About";

const Appointment = () => {
  return (
    <div>
      <AppointmentInfo />
      <DoctorTeam />
      <Testimonials />
      <ContactForm />
      <ContactForm />
      <About />
    </div>
  );
};

export default Appointment;
