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
    title: "Compassionate Mental Health Care",
    desc: "The health and recovery of our patients and their families will always be our priority, so we follow ethical and evidence-based treatment practices.",
    features: [
      { icon: "icon-heart", title: "Psychiatry" },
      { icon: "icon-medicine", title: "Medication" },
      { icon: "icon-heart2", title: "Therapy" },
      { icon: "icon-blood-test", title: "Wellness" },
    ],
  },
  {
    image: "/assets/images/sliders/2.jpg",
    title: "Complete Psychiatric Treatment",
    desc: "The health and recovery of our patients and their families will always be our priority, so we ensure safe, confidential, and supportive care.",
    features: [
      { icon: "icon-heart", title: "Addiction" },
      { icon: "icon-medicine", title: "Counseling" },
      { icon: "icon-heart2", title: "Recovery" },
      { icon: "icon-blood-test", title: "Support" },
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
                        <h2 className="slide__title fs-1">{slide.title}</h2>
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
  @media (max-width: 425px) {
    .slide-item {
      min-height: 400px !important;
      background-position: center top;
    }
  }
`;

export default HeroSection;
