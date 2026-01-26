// import React from "react";

// const Services = () => {
//   return (
//     <section className="services-layout1 services-carousel">
//       <div className="bg-img">
//         <img src="assets/images/backgrounds/2.jpg" alt="background" />
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
//             <div className="heading text-center mb-60">
//               <h2 className="heading__subtitle">
//                 The Best Medical And General Practice Care!
//               </h2>
//               <h3 className="heading__title">
//                 Providing Medical Care For The Sickest In Our Community.
//               </h3>
//             </div>
//             {/* <!-- /.heading --> */}
//           </div>
//           {/* <!-- /.col-lg-6 --> */}
//         </div>
//         {/* <!-- /.row --> */}
//         <div className="row">
//           <div className="col-12">
//             <div
//               className="slick-carousel"
//               data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, "arrows": false, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 1}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
//             >
//               {/* <!-- service item #1 --> */}
//               <div className="service-item">
//                 <div className="service__icon">
//                   <i className="icon-head"></i>
//                   <i className="icon-head"></i>
//                 </div>
//                 {/* <!-- /.service__icon --> */}
//                 <div className="service__content">
//                   <h4 className="service__title">Neurology Clinic</h4>
//                   <p className="service__desc">
//                     Some neurologists receive subspecialty training focusing on
//                     Link particular area of the fields, these training programs are
//                     called fellowships, and are one to two years.
//                   </p>
//                   <ul className="list-items list-items-layout1 list-unstyled">
//                     <li>Neurocritical Care</li>
//                     <li>Neuro Oncology</li>
//                     <li>Geriatric Neurology</li>
//                   </ul>
//                   <Link
//                     to="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </Link>
//                 </div>
//                 {/* <!-- /.service__content --> */}
//               </div>
//               {/* <!-- /.service-item --> */}
//               {/* <!-- service item #2 --> */}
//               <div className="service-item">
//                 <div className="service__icon">
//                   <i className="icon-heart"></i>
//                   <i className="icon-heart"></i>
//                 </div>
//                 {/* <!-- /.service__icon --> */}
//                 <div className="service__content">
//                   <h4 className="service__title">Cardiology Clinic</h4>
//                   <p className="service__desc">
//                     All cardiologists study the disorders of the heart, but the
//                     study of adult and child heart disorders are trained to take
//                     care of small children and adult heart disease.
//                   </p>
//                   <ul className="list-items list-items-layout1 list-unstyled">
//                     <li>Neurocritical Care</li>
//                     <li>Neuro Oncology</li>
//                     <li>Geriatric Neurology</li>
//                   </ul>
//                   <Link
//                     to="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </Link>
//                 </div>
//                 {/* <!-- /.service__content --> */}
//               </div>
//               {/* <!-- /.service-item --> */}
//               {/* <!-- service item #3 --> */}
//               <div className="service-item">
//                 <div className="service__icon">
//                   <i className="icon-microscope"></i>
//                   <i className="icon-microscope"></i>
//                 </div>
//                 {/* <!-- /.service__icon --> */}
//                 <div className="service__content">
//                   <h4 className="service__title">Pathology Clinic</h4>
//                   <p className="service__desc">
//                     Pathology is the study of disease, it is the bridge between
//                     science and medicine. Also it underpins every aspect of
//                     patient care, from diagnostic testing and treatment.
//                   </p>
//                   <ul className="list-items list-items-layout1 list-unstyled">
//                     <li>Surgical Pathology</li>
//                     <li>Histopathology</li>
//                     <li>Cytopathology</li>
//                   </ul>
//                   <Link
//                     to="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </Link>
//                 </div>
//                 {/* <!-- /.service__content --> */}
//               </div>
//               {/* <!-- /.service-item --> */}
//               {/* <!-- service item #4 --> */}
//               <div className="service-item">
//                 <div className="service__icon">
//                   <i className="icon-dropper"></i>
//                   <i className="icon-dropper"></i>
//                 </div>
//                 {/* <!-- /.service__icon --> */}
//                 <div className="service__content">
//                   <h4 className="service__title">Laboratory Analysis</h4>
//                   <p className="service__desc">
//                     Analyzing the radon or radon progeny concentrations with
//                     passive devices, or the act of calibrating radon or radon
//                     progeny measurement devices.
//                   </p>
//                   <ul className="list-items list-items-layout1 list-unstyled">
//                     <li>Newborn Care</li>
//                     <li>Umbilical Cord Appearance</li>
//                     <li>Repositioning Techniques</li>
//                   </ul>
//                   <Link
//                     to="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </Link>
//                 </div>
//                 {/* <!-- /.service__content --> */}
//               </div>
//               {/* <!-- /.service-item --> */}
//               {/* <!-- service item #5 --> */}
//               <div className="service-item">
//                 <div className="service__icon">
//                   <i className="icon-heart3"></i>
//                   <i className="icon-heart3"></i>
//                 </div>
//                 {/* <!-- /.service__icon --> */}
//                 <div className="service__content">
//                   <h4 className="service__title">Pediatric Clinic</h4>
//                   <p className="service__desc">
//                     Pediatric providers see patients from birth into early
//                     adulthood to make sure children achieve stay healthy. Our
//                     care includes preventive health checkups.
//                   </p>
//                   <ul className="list-items list-items-layout1 list-unstyled">
//                     <li>Clinical laboratory</li>
//                     <li>Research Analyst</li>
//                     <li>Quality Assurance</li>
//                   </ul>
//                   <Link
//                     to="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </Link>
//                 </div>
//                 {/* <!-- /.service__content --> */}
//               </div>
//               {/* <!-- /.service-item --> */}
//               {/* <!-- service item #6 --> */}
//               <div className="service-item">
//                 <div className="service__icon">
//                   <i className="icon-heart2"></i>
//                   <i className="icon-heart2"></i>
//                 </div>
//                 {/* <!-- /.service__icon --> */}
//                 <div className="service__content">
//                   <h4 className="service__title">Cardiac Clinic</h4>
//                   <p className="service__desc">
//                     For people requiring additional follow up, the Cardiac
//                     Clinic provides rapid access to professionals specialized in
//                     diagnosing and treating heart disease.
//                   </p>
//                   <ul className="list-items list-items-layout1 list-unstyled">
//                     <li>Macular degeneration</li>
//                     <li>Diabetic retinopathy</li>
//                     <li>Excessive tearing</li>
//                   </ul>
//                   <Link
//                     to="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </Link>
//                 </div>
//                 {/* <!-- /.service__content --> */}
//               </div>
//               {/* <!-- /.service-item --> */}
//             </div>
//           </div>
//           {/* <!-- /.col-12 --> */}
//         </div>
//         {/* <!-- /.row --> */}
//       </div>
//       {/* <!-- /.container --> */}
//     </section>
//   );
// };

// export default Services;

// import React from "react";
// import Slider from "react-slick";

// const Services = () => {
//   const settings = {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     arrows: false,
//     dots: true,
//     responsive: [
//       { breakpoint: 992, settings: { slidesToShow: 2 } },
//       { breakpoint: 767, settings: { slidesToShow: 1 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   const servicesData = [
//     {
//       title: "Neurology Clinic",
//       icon: "icon-head",
//       desc: "Some neurologists receive subspecialty training focusing on Link particular area of the fields.",
//       list: ["Neurocritical Care", "Neuro Oncology", "Geriatric Neurology"],
//     },
//     {
//       title: "Cardiology Clinic",
//       icon: "icon-heart",
//       desc: "All cardiologists study the disorders of the heart, trained to care for children and adults.",
//       list: ["Heart Checkup", "Cardiac Surgery", "ECG Monitoring"],
//     },
//     {
//       title: "Pathology Clinic",
//       icon: "icon-microscope",
//       desc: "Pathology is the study of disease and forms the bridge between science and medicine.",
//       list: ["Surgical Pathology", "Histopathology", "Cytopathology"],
//     },
//     {
//       title: "Laboratory Analysis",
//       icon: "icon-dropper",
//       desc: "Analyzing samples using medical laboratory techniques for diagnosis.",
//       list: [
//         "Newborn Care",
//         "Umbilical Cord Appearance",
//         "Repositioning Techniques",
//       ],
//     },
//     {
//       title: "Pediatric Clinic",
//       icon: "icon-heart3",
//       desc: "Pediatric providers see patients from birth into early adulthood.",
//       list: ["Clinical Laboratory", "Research Analyst", "Quality Assurance"],
//     },
//     {
//       title: "Cardiac Clinic",
//       icon: "icon-heart2",
//       desc: "The Cardiac Clinic provides rapid access to specialists for heart disease.",
//       list: [
//         "Macular Degeneration",
//         "Diabetic Retinopathy",
//         "Excessive Tearing",
//       ],
//     },
//   ];

//   return (
//     <section
//       className="services-layout1 services-carousel"
//       style={{ paddingBottom: "0" }}
//     >
//       <div className="bg-img">
//         <img src="/assets/images/backgrounds/2.jpg" alt="background" />
//       </div>

//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 offset-lg-3">
//             <div className="heading text-center mb-60">
//               <h2 className="heading__subtitle">
//                 The Best Medical And General Practice Care!
//               </h2>
//               <h3 className="heading__title">
//                 Providing Medical Care For The Sickest In Our Community.
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12">
//             <Slider {...settings}>
//               {servicesData.map((service, index) => (
//                 <div className="service-item" key={index}>
//                   <div className="service__icon">
//                     <i className={service.icon}></i>
//                     <i className={service.icon}></i>
//                   </div>

//                   <div className="service__content">
//                     <h4 className="service__title">{service.title}</h4>
//                     <p className="service__desc">{service.desc}</p>

//                     <ul className="list-items list-items-layout1 list-unstyled">
//                       {service.list.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>

//                     <Link
//                       to="services-single.html"
//                       className="btn btn__secondary btn__outlined btn__rounded"
//                     >
//                       <span>Read More</span>
//                       <i className="icon-arrow-right"></i>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

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
