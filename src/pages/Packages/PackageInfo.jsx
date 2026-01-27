import React from "react";
import { Link } from "react-router-dom";

const PackageInfo = () => {
  const teamMembers = [
    {
      id: 1,
      img: "/assets/images/team/1.jpg",
      name: "Mike Dooley",
      job: "Cardiology Specialist",
      desc: "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George's University School of Medicine",
    },
    {
      id: 2,
      img: "/assets/images/team/2.jpg",
      name: "Richard Muldoone",
      job: "Cardiology Specialist",
      desc: "Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the appearance of the skin",
    },
    {
      id: 3,
      img: "/assets/images/team/3.jpg",
      name: "Maria Andaloro",
      job: "Pediatrician",
      desc: "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed rigorous exams by the American Board of Pediatrics.",
    },
    {
      id: 4,
      img: "/assets/images/team/4.jpg",
      name: "Dupree Black",
      job: "Urologist",
      desc: "Black diagnose and treat diseases of the urinary tract in both men and women. He also diagnose and treat anything involving the reproductive tract in men.",
    },
    {
      id: 5,
      img: "/assets/images/team/5.jpg",
      name: "Markus Skar",
      job: "Laboratory",
      desc: "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests that provide crucial information.",
    },
    {
      id: 6,
      img: "/assets/images/team/6.jpg",
      name: "Kiano Barker",
      job: "Pathologist",
      desc: "Barker help care for patients every day by providing their doctors with the information needed to ensure appropriate care. He also valuable resources for other physicians.",
    },
  ];

  return (
    <>
      <section
        className="page-title page-title-layout5 bg-overlay bg-img"
        style={{
          backgroundImage: 'url("/assets/images/page-titles/8.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading">Packages</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Packages
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="team-layout1 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="member">
                <div className="member__img">
                  <img src="/assets/images/team/1.jpg" alt="member img" />
                  <div className="member__hover">
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

                <div className="member__info">
                  <h5 className="member__name">
                    <Link to="doctors-single-doctor1.html">Mike Dooley</Link>
                  </h5>
                  <p className="member__job">Cardiology Specialist</p>
                  <p className="member__desc">
                    Muldoone obtained his undergraduate degree in Biomedical
                    Engineering at Tulane University prior to attending St
                    George's University School of Medicine
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="member">
                <div className="member__img">
                  <img src="assets/images/team/2.jpg" alt="member img" />
                  <div className="member__hover">
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

                <div className="member__info">
                  <h5 className="member__name">
                    <Link to="doctors-single-doctor1.html">
                      Richard Muldoone
                    </Link>
                  </h5>
                  <p className="member__job">Cardiology Specialist</p>
                  <p className="member__desc">
                    Brian specializes in treating skin, hair, nail, and mucous
                    membrane. He also address cosmetic issues, helping to
                    revitalize the appearance of the skin
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="member">
                <div className="member__img">
                  <img src="assets/images/team/3.jpg" alt="member img" />
                  <div className="member__hover">
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

                <div className="member__info">
                  <h5 className="member__name">
                    <Link to="doctors-single-doctor1.html">Maria Andaloro</Link>
                  </h5>
                  <p className="member__job">Pediatrician</p>
                  <p className="member__desc">
                    Andaloro graduated from medical school and completed 3 years
                    residency program in pediatrics. She passed rigorous exams
                    by the American Board of Pediatrics.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="member">
                <div className="member__img">
                  <img src="assets/images/team/4.jpg" alt="member img" />
                  <div className="member__hover">
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

                <div className="member__info">
                  <h5 className="member__name">
                    <Link to="doctors-single-doctor1.html">Dupree Black</Link>
                  </h5>
                  <p className="member__job">Urologist</p>
                  <p className="member__desc">
                    Black diagnose and treat diseases of the urinary tract in
                    both men and women. He also diagnose and treat anything
                    involving the reproductive tract in men.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="member">
                <div className="member__img">
                  <img src="assets/images/team/5.jpg" alt="member img" />
                  <div className="member__hover">
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

                <div className="member__info">
                  <h5 className="member__name">
                    <Link to="doctors-single-doctor1.html">Markus skar</Link>
                  </h5>
                  <p className="member__job">Laboratory</p>
                  <p className="member__desc">
                    Skar play Link very important role in your health care.
                    People working in the clinical laboratory are responsible
                    for conducting tests that provide crucial information.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="member">
                <div className="member__img">
                  <img src="assets/images/team/6.jpg" alt="member img" />
                  <div className="member__hover">
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

                <div className="member__info">
                  <h5 className="member__name">
                    <Link to="doctors-single-doctor1.html">Kiano Barker</Link>
                  </h5>
                  <p className="member__job">Pathologist</p>
                  <p className="member__desc">
                    Barker help care for patients every day by providing their
                    doctors with the information needed to ensure appropriate
                    care. He also valuable resources for other physicians.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <nav className="pagination-area">
                <ul className="pagination justify-content-center">
                  <li>
                    <Link className="current" to="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section> */}
      <section className="team-layout1 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
              <div className="heading text-center mb-40">
                <h3 className="heading__title">Our Packages</h3>
                <p className="heading__desc">
                  Our administration and support staff all have exceptional
                  people skills and trained to assist you with all medical
                  enquiries.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-sm-6 col-md-4 col-lg-4" key={member.id}>
                <div className="member">
                  <div className="member__img">
                    <img src={member.img} alt={member.name} />

                    {/* <div className="member__hover">
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
                    </div> */}
                  </div>

                  <div className="member__info">
                    <h5 className="member__name">
                      <Link to="/package-details">{member.name}</Link>
                    </h5>
                    <p className="member__job">{member.job}</p>
                    {/* <p className="member__desc">{member.desc}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row d-none">
            <div className="col-12 text-center">
              <nav className="pagination-area">
                <ul className="pagination justify-content-center">
                  <li>
                    <Link className="current" to="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageInfo;
