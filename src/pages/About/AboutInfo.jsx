import React from "react";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <>
      <section class="page-title page-title-layout5 bg-overlay">
        <div class="bg-img">
          <img src="/assets/images/page-titles/8.jpg" alt="background" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="pagetitle__heading">About Us</h1>
              <nav>
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="about-layout1 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="heading-layout2">
                <h3 class="heading__title mb-40">
                  Improving The Quality Of Your Life Through Better Health.
                </h3>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="about__Text">
                <p class="mb-30">
                  Our goal is to deliver quality of care in Link courteous,
                  respectful, and compassionate manner. We hope you will allow
                  us to care for you and to be the first and best choice for
                  healthcare.
                </p>
                <p class="mb-30">
                  We will work with you to develop individualised care plans,
                  including management of chronic diseases. We are committed to
                  being the region’s premier healthcare network providing
                  patient centered care that inspires clinical and service
                  excellence.
                </p>
                <div class="d-flex align-items-center mb-30">
                  <Link
                    to="/doctors-grid"
                    class="btn btn__primary btn__outlined btn__rounded mr-30"
                  >
                    Meet Our Doctors
                  </Link>
                  <img
                    src="/assets/images/about/singnture.png"
                    alt="singnture"
                  />
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="video-banner">
                <img src="assets/images/about/1.jpg" alt="about" />
                <a
                  class="video__btn video__btn-white popup-video"
                  href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  <div class="video__player">
                    <i class="fa fa-play"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;
