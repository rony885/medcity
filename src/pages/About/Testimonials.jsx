// import React from "react";

// const Testimonials = () => {
//   return (
//     <section className="testimonials-layout1 pt-130 pb-80">
//       <div className="container">
//         <div className="testimonials-wrapper">
//           <div className="row">
//             <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-5">
//               <div className="heading-layout2">
//                 <h3 className="heading__title">Inspiring Stories!</h3>
//               </div>
//             </div>

//             <div className="col-sm-12 col-md-12 col-lg-5">
//               <div className="slider-nav mb-60">
//                 <div className="testimonial__meta">
//                   <div className="testimonial__thmb">
//                     <img
//                       src="assets/images/testimonials/thumbs/1.png"
//                       alt="author thumb"
//                     />
//                   </div>

//                   <div>
//                     <h4 className="testimonial__meta-title">Sami Wade</h4>
//                     <p className="testimonial__meta-desc">7oroof Inc</p>
//                   </div>
//                 </div>

//                 <div className="testimonial__meta">
//                   <div className="testimonial__thmb">
//                     <img
//                       src="assets/images/testimonials/thumbs/2.png"
//                       alt="author thumb"
//                     />
//                   </div>

//                   <div>
//                     <h4 className="testimonial__meta-title">Ahmed</h4>
//                     <p className="testimonial__meta-desc">Web Inc</p>
//                   </div>
//                 </div>

//                 <div className="testimonial__meta">
//                   <div className="testimonial__thmb">
//                     <img
//                       src="assets/images/testimonials/thumbs/3.png"
//                       alt="author thumb"
//                     />
//                   </div>

//                   <div>
//                     <h4 className="testimonial__meta-title">Sonia Blake</h4>
//                     <p className="testimonial__meta-desc">Web Inc</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-sm-12 col-md-12 col-lg-7">
//               <div className="slider-with-navs">
//                 <div className="testimonial-item">
//                   <h3 className="testimonial__title">
//                     “Their doctors include highly qualified practitioners who
//                     come from a range of backgrounds and bring with them a
//                     diversity of skills and special interests. They also have
//                     registered nurses on staff who are available to triage any
//                     urgent matters, and the administration and support staff all
//                     have exceptional people skills”
//                   </h3>
//                 </div>

//                 <div className="testimonial-item">
//                   <h3 className="testimonial__title">
//                     “Their doctors include highly qualified practitioners who
//                     come from a range of backgrounds and bring with them a
//                     diversity of skills and special interests. They also have
//                     registered nurses on staff who are available to triage any
//                     urgent matters, and the administration and support staff all
//                     have exceptional people skills”
//                   </h3>
//                 </div>

//                 <div className="testimonial-item">
//                   <h3 className="testimonial__title">
//                     “Their doctors include highly qualified practitioners who
//                     come from a range of backgrounds and bring with them a
//                     diversity of skills and special interests. They also have
//                     registered nurses on staff who are available to triage any
//                     urgent matters, and the administration and support staff all
//                     have exceptional people skills”
//                   </h3>
//                 </div>
//               </div>

//               <div className="testimonials__rating">
//                 <div className="testimonials__rating-inner d-flex align-items-center">
//                   <span className="total__rate">4.9</span>
//                   <div>
//                     <span className="overall__rate">Zocdoc Overall Rating</span>
//                     <span>, based on 7541 reviews.</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const navSlider = useRef(null);
//   const textSlider = useRef(null);

//   const testimonials = [
//     {
//       name: "Sami Wade",
//       company: "7oroof Inc",
//       thumb: "assets/images/testimonials/thumbs/1.png",
//       text: `Their doctors include highly qualified practitioners who
//       come from a range of backgrounds and bring with them a
//       diversity of skills and special interests. They also have
//       registered nurses on staff who are available to triage any
//       urgent matters, and the administration and support staff all
//       have exceptional people skills`,
//     },
//     {
//       name: "Ahmed",
//       company: "Web Inc",
//       thumb: "assets/images/testimonials/thumbs/2.png",
//       text: `Their doctors include highly qualified practitioners who
//       come from a range of backgrounds and bring with them a
//       diversity of skills and special interests. They also have
//       registered nurses on staff who are available to triage any
//       urgent matters, and the administration and support staff all
//       have exceptional people skills`,
//     },
//     {
//       name: "Sonia Blake",
//       company: "Web Inc",
//       thumb: "assets/images/testimonials/thumbs/3.png",
//       text: `Their doctors include highly qualified practitioners who
//       come from a range of backgrounds and bring with them a
//       diversity of skills and special interests. They also have
//       registered nurses on staff who are available to triage any
//       urgent matters, and the administration and support staff all
//       have exceptional people skills`,
//     },
//   ];

//   const navSettings = {
//     slidesToShow: 3,
//     swipeToSlide: true,
//     focusOnSelect: true,
//     arrows: false,
//     vertical: true,
//     asNavFor: textSlider.current,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           vertical: false,
//         },
//       },
//     ],
//   };

//   const textSettings = {
//     slidesToShow: 1,
//     fade: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     asNavFor: navSlider.current,
//   };

//   return (
//     <section className="testimonials-layout1 pt-130 pb-80">
//       <div className="container">
//         <div className="testimonials-wrapper">
//           <div className="row">
//             <div className="col-lg-7 offset-lg-5">
//               <div className="heading-layout2">
//                 <h3 className="heading__title">Inspiring Stories!</h3>
//               </div>
//             </div>

//             {/* Thumbnail Navigation */}
//             <div className="col-lg-5">
//               <Slider ref={navSlider} {...navSettings} className="slider-nav mb-60">
//                 {testimonials.map((item, index) => (
//                   <div key={index}>
//                     <div className="testimonial__meta">
//                       <div className="testimonial__thmb">
//                         <img src={item.thumb} alt={item.name} />
//                       </div>
//                       <div>
//                         <h4 className="testimonial__meta-title">{item.name}</h4>
//                         <p className="testimonial__meta-desc">{item.company}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>

//             {/* Text Slider */}
//             <div className="col-lg-7">
//               <Slider ref={textSlider} {...textSettings} className="slider-with-navs">
//                 {testimonials.map((item, index) => (
//                   <div key={index} className="testimonial-item">
//                     <h3 className="testimonial__title">“{item.text}”</h3>
//                   </div>
//                 ))}
//               </Slider>

//               <div className="testimonials__rating">
//                 <div className="testimonials__rating-inner d-flex align-items-center">
//                   <span className="total__rate">4.9</span>
//                   <div>
//                     <span className="overall__rate">Zocdoc Overall Rating</span>
//                     <span>, based on 7541 reviews.</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// ✅ Correct module imports for Swiper v10+
// import { Navigation } from "swiper/modules/navigation/navigation";
// import { Thumbs } from "swiper/modules/thumbs/thumbs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Testimonials = () => {
  const thumbsSwiper = useRef(null);

  const testimonials = [
    {
      name: "Sami Wade",
      company: "7oroof Inc",
      image: "assets/images/testimonials/thumbs/1.png",
      quote: `“Their doctors include highly qualified practitioners ...”`,
    },
    {
      name: "Ahmed",
      company: "Web Inc",
      image: "assets/images/testimonials/thumbs/2.png",
      quote: `“Their doctors include highly qualified practitioners ...”`,
    },
    {
      name: "Sonia Blake",
      company: "Web Inc",
      image: "assets/images/testimonials/thumbs/3.png",
      quote: `“Their doctors include highly qualified practitioners ...”`,
    },
  ];

  return (
    <section className="testimonials-layout1 pt-130 pb-80">
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-5">
              <div className="heading-layout2">
                <h3 className="heading__title">Inspiring Stories!</h3>
              </div>
            </div>

            {/* Thumbnail Swiper */}
            <div className="col-sm-12 col-md-12 col-lg-5">
              <Swiper
                onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
                spaceBetween={10}
                slidesPerView={1}
                direction="vertical"
                // modules={[Thumbs]}
                className="slider-nav mb-60"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial__meta d-flex align-items-center">
                      <div className="testimonial__thmb me-3">
                        <img src={t.image} alt={t.name} />
                      </div>
                      <div>
                        <h4 className="testimonial__meta-title">{t.name}</h4>
                        <p className="testimonial__meta-desc">{t.company}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Main Testimonial Swiper */}
            <div className="col-sm-12 col-md-12 col-lg-7">
              <Swiper
                spaceBetween={30}
                navigation
                thumbs={{ swiper: thumbsSwiper.current }}
                // modules={[ Thumbs]}
                className="slider-with-navs"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="testimonial-item">
                      <h3 className="testimonial__title">{t.quote}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="testimonials__rating mt-4">
                <div className="testimonials__rating-inner d-flex align-items-center">
                  <span className="total__rate">4.9</span>
                  <div>
                    <span className="overall__rate">Zocdoc Overall Rating</span>
                    <span>, based on 7541 reviews.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
