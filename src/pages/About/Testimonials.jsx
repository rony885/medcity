

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
