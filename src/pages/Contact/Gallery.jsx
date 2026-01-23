// import React from "react";

// const Gallery = () => {
//   return (
//     <section className="gallery pt-0 pb-90">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div
//               className="slick-carousel"
//               data-slick='{"slidesToShow": 4, "slidesToScroll": 1, "autoplay": true, "arrows": true, "dots": false, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1}}]}'
//             >
//               <a className="popup-gallery-item" href="assets/images/gallery/1.jpg">
//                 <img src="assets/images/gallery/1.jpg" alt="gallery img" />
//               </a>
//               <a className="popup-gallery-item" href="assets/images/gallery/2.jpg">
//                 <img src="assets/images/gallery/2.jpg" alt="gallery img" />
//               </a>
//               <a className="popup-gallery-item" href="assets/images/gallery/3.jpg">
//                 <img src="assets/images/gallery/3.jpg" alt="gallery img" />
//               </a>
//               <a className="popup-gallery-item" href="assets/images/gallery/4.jpg">
//                 <img src="assets/images/gallery/4.jpg" alt="gallery img" />
//               </a>
//               <a className="popup-gallery-item" href="assets/images/gallery/5.jpg">
//                 <img src="assets/images/gallery/5.jpg" alt="gallery img" />
//               </a>
//               <a className="popup-gallery-item" href="assets/images/gallery/6.jpg">
//                 <img src="assets/images/gallery/6.jpg" alt="gallery img" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// const Gallery = () => {
//   const galleryImages = [
//     "/assets/images/gallery/1.jpg",
//     "/assets/images/gallery/2.jpg",
//     "/assets/images/gallery/3.jpg",
//     "/assets/images/gallery/4.jpg",
//     "/ssets/images/gallery/5.jpg",
//     "/assets/images/gallery/6.jpg",
//   ];

//   return (
//     <section className="gallery pt-0 pb-90">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <Swiper
//                 modules={[Navigation, Autoplay]}
//               slidesPerView={4}
//               spaceBetween={20}
//               navigation
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               breakpoints={{
//                 480: { slidesPerView: 1 },
//                 767: { slidesPerView: 2 },
//                 992: { slidesPerView: 2 },
//                 1200: { slidesPerView: 4 },
//               }}
//             >
//               {galleryImages.map((img, index) => (
//                 <SwiperSlide key={index}>
//                   <a className="popup-gallery-item" href={img}>
//                     <img src={img} alt={`gallery img ${index + 1}`} />
//                   </a>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

// import React from "react";
// import styled from 'styled-components';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules"; // ✅ Correct import for v10+
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// const Gallery = () => {
//   const galleryImages = [
//     "/assets/images/gallery/1.jpg",
//     "/assets/images/gallery/2.jpg",
//     "/assets/images/gallery/3.jpg",
//     "/assets/images/gallery/4.jpg",
//     "/assets/images/gallery/5.jpg", // fixed typo
//     "/assets/images/gallery/6.jpg",
//   ];

//   return (
//     <Wrapper>
//     <section className="gallery pt-0 pb-90">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <Swiper
//               modules={[Navigation, Autoplay]} // ✅ use modules imported from swiper/modules
//               slidesPerView={4}
//               spaceBetween={20}
//               navigation
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               breakpoints={{
//                 480: { slidesPerView: 1 },
//                 767: { slidesPerView: 2 },
//                 992: { slidesPerView: 2 },
//                 1200: { slidesPerView: 4 },
//               }}
//             >
//               {galleryImages.map((img, index) => (
//                 <SwiperSlide key={index}>
//                   <a className="popup-gallery-item" href={img}>
//                     <img src={img} alt={`gallery img ${index + 1}`} />
//                   </a>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
// .gallery .slick-list {
//   margin: 0;
//   overflow: hidden;
//   border-radius: 12px;
// }
// .gallery .slick-slide {
//   margin: 0;
// }
// .gallery .slick-arrow.slick-next {
//   right: -50px;
// }
// .gallery .slick-arrow.slick-prev {
//   left: -50px;
// }

// .gallery-layout2 .gallery-img {
//   position: relative;
//   margin-bottom: 30px;
// }
// .gallery-layout2 .gallery-img img {
//   border-radius: 10px;
// }
// .gallery-layout2 .gallery-img .popup-gallery-item {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   z-index: 2;
//   width: 60px;
//   height: 60px;
//   font-size: 18px;
//   line-height: 60px;
//   border-radius: 50%;
//   text-align: center;
//   color: #213360;
//   background-color: #ffffff;
//   box-shadow: 0 0 0 9px rgba(0, 0, 0, 0.15);
//   transition: all 0.4s ease;
//   transform: translate(-50%, -50%);
// }
// .gallery-layout2 .gallery-img .popup-gallery-item:hover {
//   box-shadow: 0 0 0 11px rgba(0, 0, 0, 0.15);
// }

// @media (min-width: 320px) and (max-width: 575px) {
//   .gallery .slick-arrow.slick-next {
//     right: 0;
//   }
//   .gallery .slick-arrow.slick-prev {
//     left: 0;
//   }
// }
// `;

// export default Gallery;



import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Only Navigation needed for popup
import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const galleryImages = [
    "/assets/images/gallery/1.jpg",
    "/assets/images/gallery/2.jpg",
    "/assets/images/gallery/3.jpg",
    "/assets/images/gallery/4.jpg",
    "/assets/images/gallery/5.jpg",
    "/assets/images/gallery/6.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper>
      <section className="gallery pt-0 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={20}
                navigation
                breakpoints={{
                  480: { slidesPerView: 1 },
                  767: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 4 },
                }}
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <a
                      className="popup-gallery-item"
                      onClick={() => {
                        setActiveIndex(index);
                        setIsOpen(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={img} alt={`gallery img ${index + 1}`} />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Popup Slider */}
        {isOpen && (
          <div className="popup-overlay">
            <button className="popup-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <Swiper
              modules={[Navigation]}
              initialSlide={activeIndex}
              navigation
              slidesPerView={1}
              className="popup-swiper"
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`gallery img ${index + 1}`} className="popup-img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.gallery .popup-gallery-item img {
  width: 100%;
  border-radius: 12px;
  transition: transform 0.3s ease;
}
.gallery .popup-gallery-item:hover img {
  transform: scale(1.05);
}

/* Popup Overlay */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.popup-close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10000;
}

.popup-swiper {
  width: 80%;
  max-width: 900px;
}

.popup-img {
  width: 100%;
  border-radius: 12px;
}
`;

export default Gallery;

