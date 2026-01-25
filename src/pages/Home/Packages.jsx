import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ v11+
import "swiper/css";
import "swiper/css/navigation";

const Packages = () => {
  const members = [
    {
      name: "Mike Dooley",
      job: "Cardiology Specialist",
      desc: "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George's University School of Medicine",
      img: "assets/images/team/1.jpg",
    },
    {
      name: "Dermatologists",
      job: "Cardiology Specialist",
      desc: "Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the appearance of the skin",
      img: "assets/images/team/2.jpg",
    },
    {
      name: "Maria Andaloro",
      job: "Pediatrician",
      desc: "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed rigorous exams by the American Board of Pediatrics.",
      img: "assets/images/team/3.jpg",
    },
    {
      name: "Dupree Black",
      job: "Urologist",
      desc: "Black diagnose and treat diseases of the urinary tract in both men and women. He also diagnose and treat anything involving the reproductive tract in men.",
      img: "assets/images/team/4.jpg",
    },
    {
      name: "Markus skar",
      job: "Laboratory",
      desc: "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests that provide crucial information.",
      img: "assets/images/team/5.jpg",
    },
    {
      name: "Kiano Barker",
      job: "Pathologist",
      desc: "Barker help care for patients every day by providing their doctors with the information needed to ensure appropriate care. He also valuable resources for other physicians.",
      img: "assets/images/team/6.jpg",
    },
  ];

  return (
    <section className="team-layout1 pb-80 mb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h3 className="heading__title">Our Packages</h3>
              <p className="heading__desc">
                Our administration and support staff all have exceptional people
                skills and trained to assist you with all medical enquiries.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={4} // 4 slides on large screens
              breakpoints={{
                480: { slidesPerView: 1 },
                767: { slidesPerView: 1 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {members.map((member, idx) => (
                <SwiperSlide key={idx}>
                  <div className="member">
                    <div className="member__img">
                      <img src={member.img} alt={member.name} />
                    </div>
                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="#">{member.name}</Link>
                      </h5>
                      <p className="member__job">{member.job}</p>
                      <p className="member__desc">{member.desc}</p>
                      <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                        <Link
                          to="#"
                          className="btn btn__secondary btn__link btn__rounded"
                        >
                          <span>Read More</span>
                          <i className="icon-arrow-right"></i>
                        </Link>
                        <ul className="social-icons list-unstyled mb-0">
                          <li>
                            <Link to="#" className="facebook">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="twitter">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="phone">
                              <i className="fas fa-phone-alt"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
