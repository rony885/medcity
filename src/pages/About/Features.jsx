import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section class="features-layout1 pt-130 pb-50 mt--90">
      <div class="bg-img">
        <img src="assets/images/backgrounds/1.jpg" alt="background" />
      </div>
      <div class="container">
        <div class="row mb-40">
          <div class="col-sm-12 col-md-12 col-lg-5">
            <div class="heading__layout2">
              <h3 class="heading__title">
                Providing Care for The Sickest In Community.
              </h3>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
            <p class="heading__desc font-weight-bold">
              Medcity has been present in Europe since 1990, offering innovative
              solutions, specializing in medical services for treatment of
              medical infrastructure. With over 100 professionals actively
              participates in numerous initiatives aimed at creating sustainable
              change for patients!
            </p>
            <div class="d-flex flex-wrap align-items-center mt-40 mb-30">
              <Link
                Link="/appointment"
                class="btn btn__primary btn__rounded mr-30"
              >
                <span>Make Appointment</span>
                <i class="icon-arrow-right"></i>
              </Link>
              <Link Link="#" class="btn btn__secondary btn__link">
                <i class="icon-arrow-right icon-filled"></i>
                <span>Our Core Values</span>
              </Link>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="feature-item">
              <div class="feature__content">
                <div class="feature__icon">
                  <i class="icon-heart"></i>
                  <i class="icon-heart feature__overlay-icon"></i>
                </div>
                <h4 class="feature__title">Medical Advices & Check Ups</h4>
              </div>

              <Link Link="#" class="btn__link">
                <i class="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="feature-item">
              <div class="feature__content">
                <div class="feature__icon">
                  <i class="icon-doctor"></i>
                  <i class="icon-doctor feature__overlay-icon"></i>
                </div>
                <h4 class="feature__title">Trusted Medical Treatment</h4>
              </div>

              <Link Link="#" class="btn__link">
                <i class="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="feature-item">
              <div class="feature__content">
                <div class="feature__icon">
                  <i class="icon-ambulance"></i>
                  <i class="icon-ambulance feature__overlay-icon"></i>
                </div>
                <h4 class="feature__title">Emergency Help Available 24/7</h4>
              </div>

              <Link Link="#" class="btn__link">
                <i class="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="feature-item">
              <div class="feature__content">
                <div class="feature__icon">
                  <i class="icon-drugs"></i>
                  <i class="icon-drugs feature__overlay-icon"></i>
                </div>
                <h4 class="feature__title">Medical Research Professionals</h4>
              </div>

              <Link Link="#" class="btn__link">
                <i class="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="feature-item">
              <div class="feature__content">
                <div class="feature__icon">
                  <i class="icon-first-aid-kit"></i>
                  <i class="icon-first-aid-kit feature__overlay-icon"></i>
                </div>
                <h4 class="feature__title">Only Qualified Doctors</h4>
              </div>

              <Link Link="#" class="btn__link">
                <i class="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="feature-item">
              <div class="feature__content">
                <div class="feature__icon">
                  <i class="icon-hospital"></i>
                  <i class="icon-hospital feature__overlay-icon"></i>
                </div>
                <h4 class="feature__title">Cutting Edge Facility</h4>
              </div>

              <Link Link="#" class="btn__link">
                <i class="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="feature-item">
              <div class="feature__content">
                <div class="feature__icon">
                  <i class="icon-expenses"></i>
                  <i class="icon-expenses feature__overlay-icon"></i>
                </div>
                <h4 class="feature__title">
                  Affordable Prices For All Patients
                </h4>
              </div>

              <Link Link="#" class="btn__link">
                <i class="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-3">
            <div class="feature-item">
              <div class="feature__content">
                <div class="feature__icon">
                  <i class="icon-bandage"></i>
                  <i class="icon-bandage feature__overlay-icon"></i>
                </div>
                <h4 class="feature__title">Quality Care For Every Patient</h4>
              </div>

              <Link Link="#" class="btn__link">
                <i class="icon-arrow-right icon-outlined"></i>
              </Link>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-6 offset-lg-3 text-center">
            <p class="font-weight-bold mb-0">
              Serve the community by improving the quality of life through
              better health. We have put protocols to protect our patients and
              staff while continuing to provide medically necessary care.
              <Link Link="#" class="color-secondary">
                <span>Contact Us For More Information</span>
                <i class="icon-arrow-right"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
