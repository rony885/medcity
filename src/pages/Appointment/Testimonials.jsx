import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";

const testimonials = [
  {
    text: `“Their doctors include highly qualified practitioners who come from a range of backgrounds and bring with them a diversity of skills and special interests. They also have registered nurses on staff who are available to triage any urgent matters, and the administration and support staff all have exceptional people skills”`,
    name: "Sami Wade",
    company: "7oroof Inc",
    thumb: "/assets/images/testimonials/thumbs/1.png",
  },
  {
    text: `“Their doctors include highly qualified practitioners who come from a range of backgrounds and bring with them a diversity of skills and special interests. They also have registered nurses on staff who are available to triage any urgent matters, and the administration and support staff all have exceptional people skills”`,
    name: "Ahmed",
    company: "Web Inc",
    thumb: "/assets/images/testimonials/thumbs/2.png",
  },
  {
    text: `“Their doctors include highly qualified practitioners who come from a range of backgrounds and bring with them a diversity of skills and special interests. They also have registered nurses on staff who are available to triage any urgent matters, and the administration and support staff all have exceptional people skills”`,
    name: "Sonia Blake",
    company: "Web Inc",
    thumb: "/assets/images/testimonials/thumbs/3.png",
  },
];

const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      className="testimonials-layout3 pt-130 bg-overlay bg-overlay-secondary"
      //   style={{
      //     backgroundImage: 'url("/assets/images/banners/4.jpg")',
      //     backgroundSize: "cover",
      //     backgroundPosition: "center center",
      //   }}
    >
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="row">
            <div className="col-lg-5">
              <div className="heading-layout2">
                <h3 className="heading__title color-primary">
                  Inspiring Stories!
                </h3>
              </div>
            </div>

            <div className="col-lg-7">
              {/* TEXT SLIDER */}
              <Swiper
                modules={[Thumbs, Autoplay]}
                thumbs={{ swiper: thumbsSwiper }}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="slider-with-navs"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
                      <h3 className="testimonial__title">{item.text}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* THUMB SLIDER */}
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={3}
                watchSlidesProgress
                spaceBetween={30}
                className="slider-nav mb-60"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial__meta">
                      <div className="testimonial__thmb">
                        <img src={item.thumb} alt={item.name} />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
