// import React from "react";
// import { Link } from "react-router-dom";

// const Features = () => {
//   return (
//     <section class="features-layout2 pt-130 bg-overlay bg-overlay-primary">
//       <div class="bg-img">
//         <img src="assets/images/backgrounds/2.jpg" alt="background" />
//       </div>
//       <div class="container">
//         <div class="row">
//           <div class="col-sm-12 col-md-12 col-lg-8 offset-lg-1">
//             <div class="heading__layout2 mb-50">
//               <h3 class="heading__title color-white">
//                 Medcity Has Touched The Lives Of Patients & Providing Care for
//                 The Sickest In Our Community.
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div class="row mb-100">
//           <div class="col-sm-3 col-md-3 col-lg-1 offset-lg-5">
//             <div class="heading__icon">
//               <i class="icon-insurance"></i>
//             </div>
//           </div>

//           <div class="col-sm-9 col-md-9 col-lg-6">
//             <p class="heading__desc font-weight-bold color-white mb-30">
//               Medcity has been present in Europe since 1990, offering innovative
//               solutions, specializing in medical services for treatment of
//               medical infrastructure. With over 100 professionals actively
//               participates in numerous initiatives aimed at creating sustainable
//               change for patients!
//             </p>
//             <Link to="#" class="btn btn__white btn__link">
//               <i class="icon-arrow-right icon-filled"></i>
//               <span>Our Core Values</span>
//             </Link>
//           </div>
//         </div>

//         <div class="row">
//           <div class="col-sm-6 col-md-6 col-lg-3">
//             <div class="feature-item">
//               <div class="feature__img">
//                 <img
//                   src="assets/images/services/1.jpg"
//                   alt="service"
//                   loading="lazy"
//                 />
//               </div>

//               <div class="feature__content">
//                 <div class="feature__icon">
//                   <i class="icon-heart"></i>
//                 </div>
//                 <h4 class="feature__title">Medical Advices & Check Ups</h4>
//               </div>

//               <Link to="#" class="btn__link">
//                 <i class="icon-arrow-right icon-outlined"></i>
//               </Link>
//             </div>
//           </div>

//           <div class="col-sm-6 col-md-6 col-lg-3">
//             <div class="feature-item">
//               <div class="feature__img">
//                 <img
//                   src="assets/images/services/2.jpg"
//                   alt="service"
//                   loading="lazy"
//                 />
//               </div>

//               <div class="feature__content">
//                 <div class="feature__icon">
//                   <i class="icon-doctor"></i>
//                 </div>
//                 <h4 class="feature__title">Trusted Medical Treatment</h4>
//               </div>

//               <Link to="#" class="btn__link">
//                 <i class="icon-arrow-right icon-outlined"></i>
//               </Link>
//             </div>
//           </div>

//           <div class="col-sm-6 col-md-6 col-lg-3">
//             <div class="feature-item">
//               <div class="feature__img">
//                 <img
//                   src="assets/images/services/3.jpg"
//                   alt="service"
//                   loading="lazy"
//                 />
//               </div>

//               <div class="feature__content">
//                 <div class="feature__icon">
//                   <i class="icon-ambulance"></i>
//                 </div>
//                 <h4 class="feature__title">Emergency Help Available 24/7</h4>
//               </div>

//               <Link to="#" class="btn__link">
//                 <i class="icon-arrow-right icon-outlined"></i>
//               </Link>
//             </div>
//           </div>

//           <div class="col-sm-6 col-md-6 col-lg-3">
//             <div class="feature-item">
//               <div class="feature__img">
//                 <img
//                   src="assets/images/services/4.jpg"
//                   alt="service"
//                   loading="lazy"
//                 />
//               </div>

//               <div class="feature__content">
//                 <div class="feature__icon">
//                   <i class="icon-drugs"></i>
//                 </div>
//                 <h4 class="feature__title">Medical Research Professionals</h4>
//               </div>

//               <Link to="#" class="btn__link">
//                 <i class="icon-arrow-right icon-outlined"></i>
//               </Link>
//             </div>
//           </div>

//           <div class="col-sm-6 col-md-6 col-lg-3">
//             <div class="feature-item">
//               <div class="feature__img">
//                 <img
//                   src="assets/images/services/5.jpg"
//                   alt="service"
//                   loading="lazy"
//                 />
//               </div>

//               <div class="feature__content">
//                 <div class="feature__icon">
//                   <i class="icon-first-aid-kit"></i>
//                 </div>
//                 <h4 class="feature__title">Only Qualified Doctors</h4>
//               </div>

//               <Link to="#" class="btn__link">
//                 <i class="icon-arrow-right icon-outlined"></i>
//               </Link>
//             </div>
//           </div>

//           <div class="col-sm-6 col-md-6 col-lg-3">
//             <div class="feature-item">
//               <div class="feature__img">
//                 <img
//                   src="assets/images/services/6.jpg"
//                   alt="service"
//                   loading="lazy"
//                 />
//               </div>

//               <div class="feature__content">
//                 <div class="feature__icon">
//                   <i class="icon-hospital"></i>
//                 </div>
//                 <h4 class="feature__title">Cutting Edge Facility</h4>
//               </div>

//               <Link to="#" class="btn__link">
//                 <i class="icon-arrow-right icon-outlined"></i>
//               </Link>
//             </div>
//           </div>

//           <div class="col-sm-6 col-md-6 col-lg-3">
//             <div class="feature-item">
//               <div class="feature__img">
//                 <img
//                   src="assets/images/services/7.jpg"
//                   alt="service"
//                   loading="lazy"
//                 />
//               </div>

//               <div class="feature__content">
//                 <div class="feature__icon">
//                   <i class="icon-expenses"></i>
//                 </div>
//                 <h4 class="feature__title">
//                   Affordable Prices For All Patients
//                 </h4>
//               </div>

//               <Link to="#" class="btn__link">
//                 <i class="icon-arrow-right icon-outlined"></i>
//               </Link>
//             </div>
//           </div>

//           <div class="col-sm-6 col-md-6 col-lg-3">
//             <div class="feature-item">
//               <div class="feature__img">
//                 <img
//                   src="assets/images/services/8.jpg"
//                   alt="service"
//                   loading="lazy"
//                 />
//               </div>

//               <div class="feature__content">
//                 <div class="feature__icon">
//                   <i class="icon-bandage"></i>
//                 </div>
//                 <h4 class="feature__title">Quality Care For Every Patient</h4>
//               </div>

//               <Link to="#" class="btn__link">
//                 <i class="icon-arrow-right icon-outlined"></i>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div class="row">
//           <div class="col-md-12 col-lg-6 offset-lg-3 text-center">
//             <p class="font-weight-bold color-gray mb-0">
//               We hope you will allow us to care for you and strive to be the
//               first and best choice for healthcare.
//               <Link to="#" class="color-secondary">
//                 <span>Contact Us For More Information</span>
//                 <i class="icon-arrow-right"></i>
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React from "react";
import { Link } from "react-router-dom";

const featuresData = [
  {
    img: "assets/images/services/1.jpg",
    icon: "icon-heart",
    title: "Medical Advices & Check Ups",
  },
  {
    img: "assets/images/services/2.jpg",
    icon: "icon-doctor",
    title: "Trusted Medical Treatment",
  },
  {
    img: "assets/images/services/3.jpg",
    icon: "icon-ambulance",
    title: "Emergency Help Available 24/7",
  },
  {
    img: "assets/images/services/4.jpg",
    icon: "icon-drugs",
    title: "Medical Research Professionals",
  },
  {
    img: "assets/images/services/5.jpg",
    icon: "icon-first-aid-kit",
    title: "Only Qualified Doctors",
  },
  {
    img: "assets/images/services/6.jpg",
    icon: "icon-hospital",
    title: "Cutting Edge Facility",
  },
  {
    img: "assets/images/services/7.jpg",
    icon: "icon-expenses",
    title: "Affordable Prices For All Patients",
  },
  {
    img: "assets/images/services/8.jpg",
    icon: "icon-bandage",
    title: "Quality Care For Every Patient",
  },
];

const Features = () => {
  return (
    <section className="features-layout2 pt-130 bg-overlay bg-overlay-primary">
      {/* <div className="bg-img">
        <img src="/assets/images/backgrounds/2.jpg" alt="background" />
      </div> */}

      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-lg-8 offset-lg-1">
            <div className="heading__layout2 mb-50">
              <h3 className="heading__title color-white">
                Medcity Has Touched The Lives Of Patients & Providing Care for
                The Sickest In Our Community.
              </h3>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="row mb-100">
          <div className="col-lg-1 offset-lg-5">
            <div className="heading__icon">
              <i className="icon-insurance"></i>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="heading__desc font-weight-bold color-white mb-30">
              Medcity has been present in Europe since 1990, offering innovative
              solutions, specializing in medical services for treatment of
              medical infrastructure.
            </p>
            <Link to="#" className="btn btn__white btn__link">
              <i className="icon-arrow-right icon-filled"></i>
              <span>Our Core Values</span>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="row">
          {featuresData.map((item, index) => (
            <div className="col-sm-6 col-md-6 col-lg-3" key={index}>
              <div className="feature-item">
                <div className="feature__img">
                  <img src={item.img} alt="service" loading="lazy" />
                </div>

                <div className="feature__content">
                  <div className="feature__icon">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="feature__title">{item.title}</h4>
                </div>

                <Link to="#" className="btn__link">
                  <i className="icon-arrow-right icon-outlined"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <p className="font-weight-bold color-gray mb-0">
              We hope you will allow us to care for you and strive to be the
              first and best choice for healthcare.{" "}
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
