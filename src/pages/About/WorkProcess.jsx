import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WorkProcess = () => {
  const processSteps = [
    {
      number: "01",
      icon: "icon-health-report",
      title: "Fill In Our Medical Application",
      desc: "Medcity offers low-cost health coverage for adults with limited income, you can enroll.",
      btnText: "Doctors’ Timetable",
    },
    {
      number: "02",
      icon: "icon-dna",
      title: "Review Your Family Medical History",
      desc: "Regular health exams can help find all the problems, also can find it early chances.",
      btnText: "Start A Check Up",
    },
  ];

  return (
    <Wrapper>
      <section className="work-process pt-130 pb-0 bg-overlay bg-overlay-secondary">
        <div className="container">
          {/* Heading */}
          <div className="row heading-layout2">
            <div className="col-lg-5">
              <h2 className="heading__subtitle color-primary">
                Caring For The Health Of You And Your Family.
              </h2>
              <h3 className="heading__title color-white">
                Why Choose Unity Health Centre?
              </h3>
            </div>

            <div className="col-lg-6 offset-lg-1">
              <ul className="list-items list-items-layout2 list-items-light list-unstyled">
                <li>Experienced Psychiatrists & Specialists</li>
                <li>Evidence-Based Treatment Protocols</li>
                <li>Separate & Secure Units</li>
                <li>Confidential & Ethical Care</li>
                <li>Affordable Treatment Packages</li>
                <li>Family-Centered Recovery Approach</li>
              </ul>
            </div>
          </div>

          {/* Process Cards */}
          {/* <div className="row mt-90">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
              >
                <div className="process-item h-100">
                  <span className="process__number">{step.number}</span>

                  <div className="process__icon">
                    <i className={step.icon}></i>
                  </div>

                  <h4 className="process__title">{step.title}</h4>
                  <p className="process__desc">{step.desc}</p>

                  <Link to="#" className="btn btn__secondary btn__link">
                    <span>{step.btnText}</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div> */}
          <div className="row mt-90">
            {processSteps.map((step, idx) => (
              <div key={idx} className="col-12 col-md-6 mb-4">
                <div className="process-item h-100">
                  <span className="process__number">{step.number}</span>

                  <div className="process__icon">
                    <i className={step.icon}></i>
                  </div>

                  <h4 className="process__title">{step.title}</h4>
                  <p className="process__desc">{step.desc}</p>

                  <Link to="#" className="btn btn__secondary btn__link">
                    <span>{step.btnText}</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta bg-primary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img
                  src="/assets/images/icons/alert.png"
                  className="cta__img"
                  alt="alert"
                />
              </div>

              <div className="col-md-7">
                <h4 className="cta__title">True Healthcare For Your Family!</h4>
                <p className="cta__desc">
                  Serve the community by improving the quality of life through
                  better health.
                </p>
              </div>

              <div className="col-md-3">
                <Link
                  to="/appointment"
                  className="btn btn__secondary btn__secondary-style2 btn__rounded"
                >
                  <span>Healthcare Programs</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .process-item {
    height: 100%;
  }
`;

export default WorkProcess;
