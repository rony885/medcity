import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-layout5 pt-20">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="heading-layout2">
              <h3 className="heading__title mb-80">
                Helping Patients From Around the Globe!!
              </h3>
            </div>

            <div className="map-wrapper mb-50">
              <img src="/assets/images/backgrounds/map.png" alt="map" />

              <div className="tooltip-box">
                <div className="tooltip__icon">
                  <i className="fas fa-plus"></i>
                </div>
                <div className="tooltip__panel">
                  <p className="tooltip__title mb-0">
                    2307 Beverley Rd Brooklyn, New York 11226 U.S.
                  </p>
                </div>
              </div>

              <div className="tooltip-box tooltip-hover-left">
                <div className="tooltip__icon">
                  <i className="fas fa-plus"></i>
                </div>
                <div className="tooltip__panel">
                  <p className="tooltip__title mb-0">
                    2307 Beverley Rd Brooklyn, New York 11226 U.S.
                  </p>
                </div>
              </div>

              <div className="tooltip-box">
                <div className="tooltip__icon">
                  <i className="fas fa-plus"></i>
                </div>
                <div className="tooltip__panel">
                  <p className="tooltip__title mb-0">
                    2307 Beverley Rd Brooklyn, New York 11226 U.S.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <p className="heading__desc color-secondary font-weight-bold mb-30">
              We will work with you to develop individualised care plans,
              management of chronic diseases. If we cannot assist, we can
              provide referrals or advice about the type of practitioner you
              require.
            </p>

            <p className="heading__desc mb-30">
              We are committed to being the region’s premier healthcare network
              by providing patient-centered care that inspires clinical and
              service excellence, making us the first and best choice for our
              patients, employees, physicians, employers, volunteers and
              communities. We serve the community by improving the quality of
              life through better health.
            </p>

            <div className="d-flex align-items-center mb-60">
              <Link
                to="/contact-us"
                className="btn btn__secondary btn__rounded mr-30"
              >
                <i className="fas fa-heart"></i>
                <span> Make A Gift</span>
              </Link>

              <Link
                to="/contact-us"
                className="btn btn__secondary btn__outlined btn__rounded mr-30"
              >
                More About Us
              </Link>
            </div>

            <ul className="list-items list-items-layout3 list-unstyled">
              <li>
                We conduct Link range of tests to help us work out why you're
                not feeling well and determine the right treatment for you.
              </li>
              <li>
                Our expert doctors, nurses and allied health professionals
                manage patients with Link broad range of medical issues.
              </li>
              <li>
                We offer Link wide range of care and support to our patients,
                from diagnosis to treatment and rehabilitation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
