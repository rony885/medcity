import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  // Array of feature items
  const featureItems = [
    { title: "Medical Advices & Check Ups", icon: "icon-heart" },
    { title: "Trusted Medical Treatment", icon: "icon-doctor" },
    { title: "Emergency Help Available 24/7", icon: "icon-ambulance" },
  ];

  return (
    <section
      className="features-layout1 pt-130 pb-50 mt--90"
      style={{
        backgroundImage: 'url("/assets/images/backgrounds/1.jp")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row mb-40">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <div className="heading__layout2">
              <h3 className="heading__title">
                Providing Care for The Sickest In Community.
              </h3>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
            <p className="heading__desc font-weight-bold">
              Medcity has been present in Europe since 1990, offering innovative
              solutions, specializing in medical services for treatment of
              medical infrastructure. With over 100 professionals actively
              participates in numerous initiatives aimed at creating sustainable
              change for patients!
            </p>
            <div className="d-flex flex-wrap align-items-center mt-40 mb-30">
              <Link
                to="/appointment"
                className="btn btn__primary btn__rounded mr-30"
              >
                <span>Make Appointment</span>
                <i className="icon-arrow-right"></i>
              </Link>
              <Link to="#" className="btn btn__secondary btn__link">
                <i className="icon-arrow-right icon-filled"></i>
                <span>Our Core Values</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {featureItems.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-6 col-lg-4">
              <div className="feature-item">
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className={item.icon}></i>
                    <i className={`${item.icon} feature__overlay-icon`}></i>
                  </div>
                  <h4 className="feature__title mb-4">{item.title}</h4>
                  <p className="service__desc" style={{ textAlign: "justify" }}>
                    All cardiologists study the disorders of the heart, but the
                    study of adult and child heart disorders are trained to take
                    care of small children and adult heart disease.
                  </p>
                </div>

                <Link to="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-6 offset-lg-3 text-center">
            <p className="font-weight-bold mb-0">
              Serve the community by improving the quality of life through
              better health. We have put protocols to protect our patients and
              staff while continuing to provide medically necessary care.
              <Link to="#" className="color-secondary">
                <span>Contact Us For More Information</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
