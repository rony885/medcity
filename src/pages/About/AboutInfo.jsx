import React from "react";
import { Link } from "react-router-dom";

const AboutInfo = () => {
  return (
    <>
      <section
        className="page-title page-title-layout5 bg-overlay bg-img"
        style={{
          backgroundImage: 'url("/assets/images/page-titles/8.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading">About Us</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="about-layout1 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="heading-layout2">
                <h3 className="heading__title mb-40">
                  Improving The Quality Of Your Life Through Better Health.
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="about__Text">
                <p className="mb-30">
                  Our goal is to deliver quality of care in Link courteous,
                  respectful, and compassionate manner. We hope you will allow
                  us to care for you and to be the first and best choice for
                  healthcare.
                </p>
                <p className="mb-30">
                  We will work with you to develop individualised care plans,
                  including management of chronic diseases. We are committed to
                  being the region’s premier healthcare network providing
                  patient centered care that inspires clinical and service
                  excellence.
                </p>
                <div className="d-flex align-items-center mb-30">
                  <Link
                    to="/doctors-grid"
                    className="btn btn__primary btn__outlined btn__rounded mr-30"
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

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="video-banner">
                <img src="assets/images/about/1.jpg" alt="about" />
                <Link
                  className="video__btn video__btn-white popup-video"
                  to="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  <div className="video__player">
                    <i className="fa fa-play"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInfo;
