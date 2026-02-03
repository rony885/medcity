import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-layout2 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-1">
            <div className="heading-layout2">
              <h3 className="heading__title mb-60">
                Compassionate Mental Health & Addiction Recovery Care
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="text-with-icon">
              <div className="text__icon">
                <i className="icon-doctor"></i>
              </div>

              <div className="text__content">
                <p className="heading__desc font-weight-bold color-secondary mb-30">
                  Unity Health Centre is a specialized mental health,
                  psychiatric, and addiction treatment hospital committed to
                  ethical care, confidentiality, and long-term recovery through
                  evidence-based and holistic treatment approaches.
                </p>

                <Link
                  to="/appointment"
                  className="btn btn__secondary btn__rounded mb-70"
                >
                  <span>Make Appointment</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="video-banner-layout2 bg-overlay">
              <img
                src="/assets/images/about/2.jpg"
                alt="about"
                className="w-100"
              />

              <Link
                className="video__btn video__btn-white popup-video"
                to="https://www.youtube.com/watch?v=nrJtHemSPW4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="video__player">
                  <i className="fa fa-play"></i>
                </div>
                <span className="video__btn-title color-white">
                  Watch Our Video!
                </span>
              </Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="about__text bg-white">
              <p className="heading__desc mb-30">
                Unity Health Centre is a professional mental health and
                addiction treatment hospital dedicated to ethical care,
                confidentiality, and long-term recovery. Our experienced team
                ensures compassionate treatment following international
                standards.
              </p>

              <p className="heading__desc mb-30">
                Unity Health Centre provides comprehensive psychiatric care,
                addiction rehabilitation, and psychological counseling in a safe
                and supportive environment. Our multidisciplinary team ensures
                personalized treatment plans for every patient, promoting
                dignity, healing, and sustainable recovery.
              </p>

              <ul className="list-items list-unstyled">
                <li>Experienced Psychiatrists & Specialists</li>
                <li>Evidence-Based Treatment Protocols</li>
                <li>Separate & Secure Units</li>
                <li>Confidential & Ethical Care</li>
                <li>Affordable Treatment Packages</li>
                <li>Family-Centered Recovery Approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
