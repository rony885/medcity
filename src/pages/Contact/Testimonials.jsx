import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Testimonials = () => {
  const testimonials = [
    {
      text: `“Their doctors include highly qualified practitioners who
      come from a range of backgrounds and bring with them a
      diversity of skills and special interests. They also have
      registered nurses on staff who are available to triage any
      urgent matters, and the administration and support staff
      all have exceptional people skills”`,
      author: "Sami Wade",
      role: "7oroof Inc",
      thumb: "assets/images/testimonials/thumbs/1.png",
    },
    {
      text: `“Their doctors include highly qualified practitioners who
      come from a range of backgrounds and bring with them a
      diversity of skills and special interests. They also have
      registered nurses on staff who are available to triage any
      urgent matters, and the administration and support staff
      all have exceptional people skills”`,
      author: "Ahmed",
      role: "Web Inc",
      thumb: "assets/images/testimonials/thumbs/2.png",
    },
    {
      text: `“Their doctors include highly qualified practitioners who
      come from a range of backgrounds and bring with them a
      diversity of skills and special interests. They also have
      registered nurses on staff who are available to triage any
      urgent matters, and the administration and support staff
      all have exceptional people skills”`,
      author: "Sonia Blake",
      role: "Web Inc",
      thumb: "assets/images/testimonials/thumbs/3.png",
    },
  ];

  return (
    <section className="testimonials-layout2 pt-40 pb-40">
      <div className="container">
        <div className="testimonials-wrapper">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="heading-layout2">
                <h3 className="heading__title">Inspiring Stories!</h3>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-7">
              {/* Main Slider */}
              <Swiper
                // modules={[Navigation, Thumbs]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
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

              {/* Navigation Thumbs */}
              <Swiper
                // modules={[Thumbs]}
                spaceBetween={10}
                slidesPerView={3}
                watchSlidesProgress
                className="slider-nav mb-60"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial__meta d-flex">
                      <div className="testimonial__thmb">
                        <img src={item.thumb} alt="author thumb" />
                      </div>
                      <div className="ms-3">
                        <h4 className="testimonial__meta-title">
                          {item.author}
                        </h4>
                        <p className="testimonial__meta-desc">{item.role}</p>
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
