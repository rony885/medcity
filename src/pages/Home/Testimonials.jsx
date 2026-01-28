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
//                       src="/assets/images/testimonials/thumbs/1.png"
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
//                       src="/assets/images/testimonials/thumbs/2.png"
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
//                       src="/assets/images/testimonials/thumbs/3.png"
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

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Sami Wade",
    company: "7oroof Inc",
    image: "/assets/images/testimonials/thumbs/1.png",
    text: `Their doctors include highly qualified practitioners who
    come from a range of backgrounds and bring with them a
    diversity of skills and special interests. They also have
    registered nurses on staff who are available to triage any
    urgent matters, and the administration and support staff all
    have exceptional people skills`,
  },
  {
    id: 2,
    name: "Ahmed",
    company: "Web Inc",
    image: "/assets/images/testimonials/thumbs/2.png",
    text: `Their doctors include highly qualified practitioners who
    come from a range of backgrounds and bring with them a
    diversity of skills and special interests. They also have
    registered nurses on staff who are available to triage any
    urgent matters, and the administration and support staff all
    have exceptional people skills`,
  },
  {
    id: 3,
    name: "Sonia Blake",
    company: "Web Inc",
    image: "/assets/images/testimonials/thumbs/3.png",
    text: `Their doctors include highly qualified practitioners who
    come from a range of backgrounds and bring with them a
    diversity of skills and special interests. They also have
    registered nurses on staff who are available to triage any
    urgent matters, and the administration and support staff all
    have exceptional people skills`,
  },
  {
    id: 4,
    name: "Ahmed",
    company: "Web Inc",
    image: "/assets/images/testimonials/thumbs/2.png",
    text: `Their doctors include highly qualified practitioners who
    come from a range of backgrounds and bring with them a
    diversity of skills and special interests. They also have
    registered nurses on staff who are available to triage any
    urgent matters, and the administration and support staff all
    have exceptional people skills`,
  },
  {
    id: 5,
    name: "Sonia Blake",
    company: "Web Inc",
    image: "/assets/images/testimonials/thumbs/3.png",
    text: `Their doctors include highly qualified practitioners who
    come from a range of backgrounds and bring with them a
    diversity of skills and special interests. They also have
    registered nurses on staff who are available to triage any
    urgent matters, and the administration and support staff all
    have exceptional people skills`,
  },
];

const Testimonials = () => {
  const leftSwiperRef = useRef(null);
  const rightSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials-layout1 pt-130 pb-80">
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="row">
            {/* LEFT AUTHORS SLIDER */}
            <div className="col-lg-5">
              <Swiper
                modules={[Controller]}
                slidesPerView={3}
                spaceBetween={30}
                onSwiper={(swiper) => (leftSwiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                  rightSwiperRef.current?.slideTo(swiper.activeIndex);
                }}
                className="slider-nav mb-60"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`testimonial__meta ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveIndex(index);
                        leftSwiperRef.current.slideTo(index);
                        rightSwiperRef.current.slideTo(index);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="testimonial__thmb">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div>
                        <h4 className="testimonial__meta-title">{item.name}</h4>
                        <p className="testimonial__meta-desc">{item.company}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* RIGHT TEXT SLIDER */}
            <div className="col-lg-7">
              <Swiper
                modules={[Controller]}
                slidesPerView={1}
                spaceBetween={30}
                onSwiper={(swiper) => (rightSwiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.activeIndex);
                  leftSwiperRef.current?.slideTo(swiper.activeIndex);
                }}
                className="slider-with-navs"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="testimonial-item">
                      <h3 className="testimonial__title">“{item.text}”</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Rating */}
              <div className="testimonials__rating">
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
