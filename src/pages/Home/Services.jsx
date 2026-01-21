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
//                     a particular area of the fields, these training programs are
//                     called fellowships, and are one to two years.
//                   </p>
//                   <ul className="list-items list-items-layout1 list-unstyled">
//                     <li>Neurocritical Care</li>
//                     <li>Neuro Oncology</li>
//                     <li>Geriatric Neurology</li>
//                   </ul>
//                   <a
//                     href="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </a>
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
//                   <a
//                     href="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </a>
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
//                   <a
//                     href="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </a>
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
//                   <a
//                     href="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </a>
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
//                   <a
//                     href="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </a>
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
//                   <a
//                     href="services-single.html"
//                     className="btn btn__secondary btn__outlined btn__rounded"
//                   >
//                     <span>Read More</span>
//                     <i className="icon-arrow-right"></i>
//                   </a>
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

// const servicesData = [
//   {
//     icon: "icon-head",
//     title: "Neurology Clinic",
//     desc:
//       "Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs are called fellowships, and are one to two years.",
//     list: ["Neurocritical Care", "Neuro Oncology", "Geriatric Neurology"],
//   },
//   {
//     icon: "icon-heart",
//     title: "Cardiology Clinic",
//     desc:
//       "All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children and adult heart disease.",
//     list: ["Neurocritical Care", "Neuro Oncology", "Geriatric Neurology"],
//   },
//   {
//     icon: "icon-microscope",
//     title: "Pathology Clinic",
//     desc:
//       "Pathology is the study of disease, it is the bridge between science and medicine.",
//     list: ["Surgical Pathology", "Histopathology", "Cytopathology"],
//   },
//   {
//     icon: "icon-dropper",
//     title: "Laboratory Analysis",
//     desc:
//       "Analyzing the radon or radon progeny concentrations with passive devices.",
//     list: [
//       "Newborn Care",
//       "Umbilical Cord Appearance",
//       "Repositioning Techniques",
//     ],
//   },
//   {
//     icon: "icon-heart3",
//     title: "Pediatric Clinic",
//     desc:
//       "Pediatric providers see patients from birth into early adulthood.",
//     list: ["Clinical laboratory", "Research Analyst", "Quality Assurance"],
//   },
//   {
//     icon: "icon-heart2",
//     title: "Cardiac Clinic",
//     desc:
//       "Cardiac Clinic provides rapid access to professionals specialized in heart disease.",
//     list: [
//       "Macular degeneration",
//       "Diabetic retinopathy",
//       "Excessive tearing",
//     ],
//   },
// ];

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

//   return (
//     <section className="services-layout1 services-carousel">
//       <div className="bg-img">
//         <img src="assets/images/backgrounds/2.jpg" alt="background" />
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

//         <Slider {...settings} className="slick-carousel">
//           {servicesData.map((item, index) => (
//             <div className="service-item" key={index}>
//               <div className="service__icon">
//                 <i className={item.icon}></i>
//                 <i className={item.icon}></i>
//               </div>

//               <div className="service__content">
//                 <h4 className="service__title">{item.title}</h4>
//                 <p className="service__desc">{item.desc}</p>

//                 <ul className="list-items list-items-layout1 list-unstyled">
//                   {item.list.map((listItem, i) => (
//                     <li key={i}>{listItem}</li>
//                   ))}
//                 </ul>

//                 <a
//                   href="services-single.html"
//                   className="btn btn__secondary btn__outlined btn__rounded"
//                 >
//                   <span>Read More</span>
//                   <i className="icon-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const servicesData = [
    {
      title: "Neurology Clinic",
      icon: "icon-head",
      desc: "Some neurologists receive subspecialty training focusing on a particular area of the fields.",
      list: ["Neurocritical Care", "Neuro Oncology", "Geriatric Neurology"],
    },
    {
      title: "Cardiology Clinic",
      icon: "icon-heart",
      desc: "All cardiologists study the disorders of the heart, trained to care for children and adults.",
      list: ["Heart Checkup", "Cardiac Surgery", "ECG Monitoring"],
    },
    {
      title: "Pathology Clinic",
      icon: "icon-microscope",
      desc: "Pathology is the study of disease and forms the bridge between science and medicine.",
      list: ["Surgical Pathology", "Histopathology", "Cytopathology"],
    },
    {
      title: "Laboratory Analysis",
      icon: "icon-dropper",
      desc: "Analyzing samples using medical laboratory techniques for diagnosis.",
      list: [
        "Newborn Care",
        "Umbilical Cord Appearance",
        "Repositioning Techniques",
      ],
    },
    {
      title: "Pediatric Clinic",
      icon: "icon-heart3",
      desc: "Pediatric providers see patients from birth into early adulthood.",
      list: ["Clinical Laboratory", "Research Analyst", "Quality Assurance"],
    },
    {
      title: "Cardiac Clinic",
      icon: "icon-heart2",
      desc: "The Cardiac Clinic provides rapid access to specialists for heart disease.",
      list: [
        "Macular Degeneration",
        "Diabetic Retinopathy",
        "Excessive Tearing",
      ],
    },
  ];

  return (
    <section
      className="services-layout1 services-carousel"
      style={{ paddingBottom: "0" }}
    >
      <div className="bg-img">
        <img src="/assets/images/backgrounds/2.jpg" alt="background" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
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
            <Slider {...settings}>
              {servicesData.map((service, index) => (
                <div className="service-item" key={index}>
                  <div className="service__icon">
                    <i className={service.icon}></i>
                    <i className={service.icon}></i>
                  </div>

                  <div className="service__content">
                    <h4 className="service__title">{service.title}</h4>
                    <p className="service__desc">{service.desc}</p>

                    <ul className="list-items list-items-layout1 list-unstyled">
                      {service.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <a
                      href="services-single.html"
                      className="btn btn__secondary btn__outlined btn__rounded"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
