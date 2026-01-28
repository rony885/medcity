import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Autoplay } from "swiper/modules"; // ✅ use /modules
import "swiper/css";
// import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "icon-head",
      title: "Neurology Clinic",
      desc: "Some neurologists receive subspecialty training focusing on Link particular area of the fields, these training programs are called fellowships, and are one to two years.",
      items: ["Neurocritical Care", "Neuro Oncology", "Geriatric Neurology"],
    },
    {
      icon: "icon-heart",
      title: "Cardiology Clinic",
      desc: "All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children and adult heart disease.",
      items: ["Neurocritical Care", "Neuro Oncology", "Geriatric Neurology"],
    },
    {
      icon: "icon-microscope",
      title: "Pathology Clinic",
      desc: "Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing and treatment.",
      items: ["Surgical Pathology", "Histopathology", "Cytopathology"],
    },
    {
      icon: "icon-dropper",
      title: "Laboratory Analysis",
      desc: "Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progeny measurement devices.",
      items: [
        "Newborn Care",
        "Umbilical Cord Appearance",
        "Repositioning Techniques",
      ],
    },
    {
      icon: "icon-heart3",
      title: "Pediatric Clinic",
      desc: "Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups.",
      items: ["Clinical laboratory", "Research Analyst", "Quality Assurance"],
    },
    {
      icon: "icon-heart2",
      title: "Cardiac Clinic",
      desc: "For people requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in diagnosing and treating heart disease.",
      items: [
        "Macular degeneration",
        "Diabetic retinopathy",
        "Excessive tearing",
      ],
    },
  ];

  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <section
        className="services-layout1 services-carousel"
        style={{
          backgroundImage: 'url("/assets/images/backgrounds/2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-60">
                <h2 className="heading__subtitle">
                  The Best Medical And General Practice Care!
                </h2>
                <h3 className="heading__title">
                  Providing Medical Care For The Sickest In Our Community.
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Swiper
                // modules={[Pagination, Autoplay]}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={3} // default for large screens
                // pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1, // 320, 375, 425
                  },
                  768: {
                    slidesPerView: 2, // tablets
                  },
                  1024: {
                    slidesPerView: 3, // laptops & desktops (1024, 1440, 2560)
                  },
                }}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-item">
                      <div className="service__icon">
                        <i className={service.icon}></i>
                        <i className={service.icon}></i>
                      </div>
                      <div className="service__content">
                        <h4 className="service__title">{service.title}</h4>
                        <p className="service__desc">{service.desc}</p>
                        <ul className="list-items list-items-layout1 list-unstyled">
                          {service.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <Link
                          to="/services-details"
                          className="btn btn__secondary btn__outlined btn__rounded"
                        >
                          <span>Read More</span>
                          <i className="icon-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .swiper {
    width: 100%;
  }

  .swiper-slide {
    height: auto;
  }

  .member {
    width: 100%;
  }
`;

export default Services;
