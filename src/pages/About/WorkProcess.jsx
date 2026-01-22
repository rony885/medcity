// import React from "react";
// import { Link } from "react-router-dom";

// const WorkProcess = () => {
//   return (
//     <section class="work-process work-process-carousel pt-130 pb-0 bg-overlay bg-overlay-secondary">
//       <div class="bg-img">
//         <img src="/assets/images/banners/1.jpg" alt="background" />
//       </div>
//       <div class="container">
//         <div class="row heading-layout2">
//           <div class="col-12">
//             <h2 class="heading__subtitle color-primary">
//               Caring For The Health Of You And Your Family.
//             </h2>
//           </div>

//           <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
//             <h3 class="heading__title color-white">
//               We Provide All Aspects Of Medical Practice For Your Whole Family!
//             </h3>
//           </div>

//           <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-xl-1">
//             <p class="heading__desc font-weight-bold color-gray mb-40">
//               We will work with you to develop individualised care plans,
//               including management of chronic diseases. If we cannot assist, we
//               can provide referrals or advice about the type of practitioner you
//               require. We treat all enquiries sensitively and in the strictest
//               confidence.
//             </p>
//             <ul class="list-items list-items-layout2 list-items-light list-horizontal list-unstyled">
//               <li>Fractures and dislocations</li>
//               <li>Health Assessments</li>
//               <li>Desensitisation injections</li>
//               <li>High Quality Care</li>
//               <li>Desensitisation injections</li>
//             </ul>
//           </div>
//         </div>

//         <div class="row">
//           <div class="col-12">
//             <div class="carousel-container mt-90">
//               <div
//                 class="slick-carousel"
//                 data-slick='{"slidesToShow": 4, "slidesToScroll": 1, "infinite":false, "arrows": false, "dots": false, "responsive": [{"breakpoint": 1200, "settings": {"slidesToShow": 3}}, {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
//               >
//                 <div class="process-item">
//                   <span class="process__number">01</span>
//                   <div class="process__icon">
//                     <i class="icon-health-report"></i>
//                   </div>

//                   <h4 class="process__title">
//                     Fill In Our Medical Application
//                   </h4>
//                   <p class="process__desc">
//                     Medcity offers low-cost health coverage for adults with
//                     limited income, you can enroll.
//                   </p>
//                   <Link to="#" class="btn btn__secondary btn__link">
//                     <span>Doctors’ Timetable</span>
//                     <i class="icon-arrow-right"></i>
//                   </Link>
//                 </div>

//                 <div class="process-item">
//                   <span class="process__number">02</span>
//                   <div class="process__icon">
//                     <i class="icon-dna"></i>
//                   </div>

//                   <h4 class="process__title">
//                     Review Your Family Medical History
//                   </h4>
//                   <p class="process__desc">
//                     Regular health exams can help find all the problems, also
//                     can find it early chances.
//                   </p>
//                   <Link to="#" class="btn btn__secondary btn__link">
//                     <span>Start A Check Up</span>
//                     <i class="icon-arrow-right"></i>
//                   </Link>
//                 </div>

//                 <div class="process-item">
//                   <span class="process__number">03</span>
//                   <div class="process__icon">
//                     <i class="icon-medicine"></i>
//                   </div>

//                   <h4 class="process__title">
//                     Choose Between Our Care Programs
//                   </h4>
//                   <p class="process__desc">
//                     We have protocols to protect our patients while continuing
//                     to provide necessary care.
//                   </p>
//                   <Link to="#" class="btn btn__secondary btn__link">
//                     <span>Explore Programs</span>
//                     <i class="icon-arrow-right"></i>
//                   </Link>
//                 </div>

//                 <div class="process-item">
//                   <span class="process__number">04</span>
//                   <div class="process__icon">
//                     <i class="icon-stethoscope"></i>
//                   </div>

//                   <h4 class="process__title">
//                     Introduce You To Highly Qualified Doctors
//                   </h4>
//                   <p class="process__desc">
//                     Our administration and support staff have exceptional skills
//                     and trained to assist you.
//                   </p>
//                   <Link to="#" class="btn btn__secondary btn__link">
//                     <span>Meet Our Doctors</span>
//                     <i class="icon-arrow-right"></i>
//                   </Link>
//                 </div>

//                 <div class="process-item">
//                   <span class="process__number">05</span>
//                   <div class="process__icon">
//                     <i class="icon-head"></i>
//                   </div>

//                   <h4 class="process__title">Your custom Next process</h4>
//                   <p class="process__desc">
//                     Our administration and support staff have exceptional skills
//                     to assist you.
//                   </p>
//                   <Link to="#" class="btn btn__secondary btn__link">
//                     <span>Meet Our Doctors</span>
//                     <i class="icon-arrow-right"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="cta bg-primary">
//         <div class="container">
//           <div class="row align-items-center">
//             <div class="col-sm-12 col-md-2 col-lg-2">
//               <img
//                 src="assets/images/icons/alert.png"
//                 class="cta__img"
//                 alt="alert"
//               />
//             </div>

//             <div class="col-sm-12 col-md-7 col-lg-7">
//               <h4 class="cta__title">True Healthcare For Your Family!</h4>
//               <p class="cta__desc">
//                 Serve the community by improving the quality of life through
//                 better health. We have put protocols to protect our patients and
//                 staff while continuing to provide medically necessary care.
//               </p>
//             </div>

//             <div class="col-sm-12 col-md-12 col-lg-3">
//               <Link
//                 to="appointment.html"
//                 class="btn btn__secondary btn__secondary-style2 btn__rounded mr-30"
//               >
//                 <span>Healthcare Programs</span>
//                 <i class="icon-arrow-right"></i>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkProcess;




import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

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
    {
      number: "03",
      icon: "icon-medicine",
      title: "Choose Between Our Care Programs",
      desc: "We have protocols to protect our patients while continuing to provide necessary care.",
      btnText: "Explore Programs",
    },
    {
      number: "04",
      icon: "icon-stethoscope",
      title: "Introduce You To Highly Qualified Doctors",
      desc: "Our administration and support staff have exceptional skills and trained to assist you.",
      btnText: "Meet Our Doctors",
    },
    {
      number: "05",
      icon: "icon-head",
      title: "Your custom Next process",
      desc: "Our administration and support staff have exceptional skills to assist you.",
      btnText: "Meet Our Doctors",
    },
  ];

  return (
    <section className="work-process work-process-carousel pt-130 pb-0 bg-overlay bg-overlay-secondary">
      <div className="bg-img">
        <img src="/assets/images/banners/1.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row heading-layout2">
          <div className="col-12">
            <h2 className="heading__subtitle color-primary">
              Caring For The Health Of You And Your Family.
            </h2>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5">
            <h3 className="heading__title color-white">
              We Provide All Aspects Of Medical Practice For Your Whole Family!
            </h3>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-xl-1">
            <p className="heading__desc font-weight-bold color-gray mb-40">
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
            <ul className="list-items list-items-layout2 list-items-light list-horizontal list-unstyled">
              <li>Fractures and dislocations</li>
              <li>Health Assessments</li>
              <li>Desensitisation injections</li>
              <li>High Quality Care</li>
              <li>Desensitisation injections</li>
            </ul>
          </div>
        </div>

        <div className="row mt-90">
          <div className="col-12">
            <div className="carousel-container">
              <Swiper
                // modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                  480: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                  1400: { slidesPerView: 4 },
                }}
              >
                {processSteps.map((step, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="process-item">
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="cta bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-2 col-lg-2">
              <img
                src="assets/images/icons/alert.png"
                className="cta__img"
                alt="alert"
              />
            </div>

            <div className="col-sm-12 col-md-7 col-lg-7">
              <h4 className="cta__title">True Healthcare For Your Family!</h4>
              <p className="cta__desc">
                Serve the community by improving the quality of life through
                better health. We have put protocols to protect our patients and
                staff while continuing to provide medically necessary care.
              </p>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
              <Link
                to="appointment.html"
                className="btn btn__secondary btn__secondary-style2 btn__rounded mr-30"
              >
                <span>Healthcare Programs</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

