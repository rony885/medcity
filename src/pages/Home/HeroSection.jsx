// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="slider">
//       <div
//         className="slick-carousel m-slides-0"
//         data-slick='{"slidesToShow": 1, "arrows": true, "dots": false, "speed": 700,"fade": true,"cssEase": "linear"}'
//       >
//         <div className="slide-item align-v-h">
//           <div className="bg-img">
//             <img src="assets/images/sliders/1.jpg" alt="slide img" />
//           </div>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
//                 <div className="slide__content">
//                   <h2 className="slide__title">Providing Best Medical Care</h2>
//                   <p className="slide__desc">
//                     The health and well-being of our patients and their health
//                     care team will always be our priority, so we follow the best
//                     practices for cleanliness.
//                   </p>
//                   <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
//                     {/* <!-- feature item #1 --> */}
//                     <li className="feature-item">
//                       <div className="feature__icon">
//                         <i className="icon-heart"></i>
//                       </div>
//                       <h2 className="feature__title">Examination</h2>
//                     </li>
//                     {/* <!-- /.feature-item--> */}
//                     {/* <!-- feature item #2 --> */}
//                     <li className="feature-item">
//                       <div className="feature__icon">
//                         <i className="icon-medicine"></i>
//                       </div>
//                       <h2 className="feature__title">Prescription</h2>
//                     </li>
//                     {/* <!-- /.feature-item--> */}
//                     {/* <!-- feature item #3 --> */}
//                     <li className="feature-item">
//                       <div className="feature__icon">
//                         <i className="icon-heart2"></i>
//                       </div>
//                       <h2 className="feature__title">Cardiogram</h2>
//                     </li>
//                     {/* <!-- /.feature-item--> */}
//                     {/* <!-- feature item #4 --> */}
//                     <li className="feature-item">
//                       <div className="feature__icon">
//                         <i className="icon-blood-test"></i>
//                       </div>
//                       <h2 className="feature__title">Blood Pressure</h2>
//                     </li>
//                     {/* <!-- /.feature-item--> */}
//                   </ul>
//                   {/* <!-- /.features-list --> */}
//                 </div>
//                 {/* <!-- /.slide-content --> */}
//               </div>
//               {/* <!-- /.col-xl-7 --> */}
//             </div>
//             {/* <!-- /.row --> */}
//           </div>
//           {/* <!-- /.container --> */}
//         </div>
//         {/* <!-- /.slide-item --> */}
//         <div className="slide-item align-v-h">
//           <div className="bg-img">
//             <img src="assets/images/sliders/2.jpg" alt="slide img" />
//           </div>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
//                 <div className="slide__content">
//                   <h2 className="slide__title">
//                     All Aspects Of Medical Practice
//                   </h2>
//                   <p className="slide__desc">
//                     The health and well-being of our patients and their health
//                     care team will always be our priority, so we follow the best
//                     practices for cleanliness.
//                   </p>
//                   <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
//                     {/* <!-- feature item #1 --> */}
//                     <li className="feature-item">
//                       <div className="feature__icon">
//                         <i className="icon-heart"></i>
//                       </div>
//                       <h2 className="feature__title">Examination</h2>
//                     </li>
//                     {/* <!-- /.feature-item--> */}
//                     {/* <!-- feature item #2 --> */}
//                     <li className="feature-item">
//                       <div className="feature__icon">
//                         <i className="icon-medicine"></i>
//                       </div>
//                       <h2 className="feature__title">Prescription</h2>
//                     </li>
//                     {/* <!-- /.feature-item--> */}
//                     {/* <!-- feature item #3 --> */}
//                     <li className="feature-item">
//                       <div className="feature__icon">
//                         <i className="icon-heart2"></i>
//                       </div>
//                       <h2 className="feature__title">Cardiogram</h2>
//                     </li>
//                     {/* <!-- /.feature-item--> */}
//                     {/* <!-- feature item #4 --> */}
//                     <li className="feature-item">
//                       <div className="feature__icon">
//                         <i className="icon-blood-test"></i>
//                       </div>
//                       <h2 className="feature__title">Blood Pressure</h2>
//                     </li>
//                     {/* <!-- /.feature-item--> */}
//                   </ul>
//                   {/* <!-- /.features-list --> */}
//                 </div>
//                 {/* <!-- /.slide-content --> */}
//               </div>
//               {/* <!-- /.col-xl-7 --> */}
//             </div>
//             {/* <!-- /.row --> */}
//           </div>
//           {/* <!-- /.container --> */}
//         </div>
//         {/* <!-- /.slide-item --> */}
//       </div>
//       {/* <!-- /.carousel --> */}
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";
// import styled from "styled-components";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const slides = [
//   {
//     id: 1,
//     image: "/assets/images/sliders/1.jpg",
//     title: "Providing Best Medical Care",
//     desc: `The health and well-being of our patients and their health
//     care team will always be our priority, so we follow the best
//     practices for cleanliness.`,
//   },
//   {
//     id: 2,
//     image: "/assets/images/sliders/2.jpg",
//     title: "All Aspects Of Medical Practice",
//     desc: `The health and well-being of our patients and their health
//     care team will always be our priority, so we follow the best
//     practices for cleanliness.`,
//   },
// ];

// const features = [
//   { id: 1, icon: "icon-heart", title: "Examination" },
//   { id: 2, icon: "icon-medicine", title: "Prescription" },
//   { id: 3, icon: "icon-heart2", title: "Cardiogram" },
//   { id: 4, icon: "icon-blood-test", title: "Blood Pressure" },
// ];

// const NextArrow = ({ className, onClick }) => (
//   <button className={`custom-arrow next ${className}`} onClick={onClick}>
//     <i className="icon-right-arrow"></i>
//   </button>
// );

// const PrevArrow = ({ className, onClick }) => (
//   <button className={`custom-arrow prev ${className}`} onClick={onClick}>
//     <i className="icon-left-arrow"></i>
//   </button>
// );

// const HeroSection = () => {
//   const settings = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 700,
//     fade: true,
//     cssEase: "linear",
//     infinite: true,
//     arrows: true,
//     dots: false,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
//       <section className="slider">
//         <Slider {...settings} className="slick-carousel m-slides-0">
//           {slides.map((slide) => (
//             <div className="slide-item align-v-h" key={slide.id}>
//               <div className="bg-img">
//                 <img src={slide.image} alt="slide" />
//               </div>

//               <div className="container">
//                 <div className="row align-items-center">
//                   {/* <div className="col-xl-7 col-lg-12"> */}
//                   <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
//                     <div className="slide__content">
//                       <h2 className="slide__title">{slide.title}</h2>
//                       <p className="slide__desc">{slide.desc}</p>

//                       <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
//                         {features.map((feature) => (
//                           <li className="feature-item" key={feature.id}>
//                             <div className="feature__icon">
//                               <i className={feature.icon}></i>
//                             </div>
//                             <h4 className="feature__title">{feature.title}</h4>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .slider .slick-prev:before,
//   .slider .slick-next:before {
//     font-size: 50px;
//     color: #000;
//     transition: color 0.3s ease;
//   }
//   /* hover arrow */
//   .slider .slick-prev:hover:before,
//   .slider .slick-next:hover:before {
//     color: #21cdc0;
//   }
//   /* ===== CUSTOM ARROWS ===== */
//   .custom-arrow {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     z-index: 10;
//     width: 50px;
//     height: 50px;
//     /* background: #ffffff; */
//     border-radius: 50%;
//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); */
//     transition: all 0.3s ease;
//     color: #000 !important;

//     i {
//       font-size: 20px;
//       color: #000;
//     }

//     &:hover {
//       /* background: #21cdc0; */
//       color: #21cdc0;

//       i {
//         /* color: #fff; */
//         color: #21cdc0;
//       }
//     }
//   }

//   .custom-arrow.prev {
//     left: 40px;
//   }

//   .custom-arrow.next {
//     right: 40px;
//   }

//   /* ===== TABLET ===== */
//   @media (max-width: 991px) {
//     .custom-arrow {
//       width: 44px;
//       height: 44px;

//       i {
//         font-size: 18px;
//       }
//     }

//     .custom-arrow.prev {
//       left: 20px;
//     }

//     .custom-arrow.next {
//       right: 20px;
//     }
//   }

//   /* ===== MOBILE ===== */
//   @media (max-width: 575px) {
//     .slider .slick-prev:before,
//     .slider .slick-next:before {
//       font-size: 40px;
//     }
//     .custom-arrow {
//       width: 38px;
//       height: 38px;
//     }

//     .custom-arrow.prev {
//       left: 10px;
//     }

//     .custom-arrow.next {
//       right: 10px;
//     }
//   }
// `;

// export default HeroSection;

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Slide data array
const slides = [
  {
    image: "/assets/images/sliders/1.jpg",
    title: "Providing Best Medical Care",
    desc: "The health and well-being of our patients and their care team will always be our priority, so we follow best practices for cleanliness.",
    features: [
      { icon: "icon-heart", title: "Examination" },
      { icon: "icon-medicine", title: "Prescription" },
      { icon: "icon-heart2", title: "Cardiogram" },
      { icon: "icon-blood-test", title: "Blood Pressure" },
    ],
  },
  {
    image: "/assets/images/sliders/2.jpg",
    title: "All Aspects Of Medical Practice",
    desc: "The health and well-being of our patients and their care team will always be our priority, so we follow best practices for cleanliness.",
    features: [
      { icon: "icon-heart", title: "Examination" },
      { icon: "icon-medicine", title: "Prescription" },
      { icon: "icon-heart2", title: "Cardiogram" },
      { icon: "icon-blood-test", title: "Blood Pressure" },
    ],
  },
];

const HeroSection = () => {
  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
      <section className="slider">
        <Swiper
          // modules={[Navigation, Autoplay, EffectFade]}
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          // navigation={true}
          effect="fade"
          speed={700}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="m-slides-0"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide-item align-v-h"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                      <div className="slide__content">
                        <h2 className="slide__title">{slide.title}</h2>
                        <p className="slide__desc">{slide.desc}</p>
                        <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
                          {slide.features.map((feature, i) => (
                            <li className="feature-item" key={i}>
                              <div className="feature__icon">
                                <i className={feature.icon}></i>
                              </div>
                              <h2 className="feature__title">
                                {feature.title}
                              </h2>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (max-width: 375px) {
    .slide-item {
      min-height: 400px !important;
      background-position: center top;
    }
  }
`;

export default HeroSection;
