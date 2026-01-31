import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  // Array of feature items
  const featureItems = [
    {
      title: "Introduction",
      icon: "icon-heart",
      desc: "Over the last two decades, mental illness and substance abuse have increased significantly, affecting individuals, families, and communities. Unity Health Centre was established to respond to this growing need by offering professional, ethical, and compassionate mental healthcare services in Bangladesh.",
    },
    {
      title: "Objectives",
      icon: "icon-doctor",
      desc: "To provide high-quality psychiatric and addiction treatment. To support recovery through medical, psychological, and holistic care. To reduce stigma surrounding mental illness. To empower patients and families through education and support",
    },
    {
      title: "Excellence",
      icon: "icon-ambulance",
      desc: "Unity Health Centre follows international standards of treatment, supported by:. Qualified Psychiatrists & Physicians. Clinical Psychologists & Addiction Counselors. Trained Nurses & Skilled Attendants. Secure inpatient & residential facilities. Holistic wellness programs",
    },
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
        <div className="row">
          {featureItems.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-6 col-lg-4">
              <div className="feature-item" style={{ height: "400px" }}>
                <div className="feature__content">
                  <div className="feature__icon">
                    <i className={item.icon}></i>
                    <i className={`${item.icon} feature__overlay-icon`}></i>
                  </div>
                  <h4 className="feature__title mb-4 fs-3">{item.title}</h4>
                  <p className="service__desc" style={{ textAlign: "justify" }}>
                    {item.desc}
                  </p>
                </div>

                <Link to="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
