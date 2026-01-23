import React from "react";
import { Link } from "react-router-dom";

const PackagesDetails = () => {
  return (
    <>
      <section
        className="page-title page-title-layout5"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/6.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading">Ahmed Abdallah</h1>

              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Doctors</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Ahmed Abdallah
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <aside className="sidebar has-marign-right">
                <div className="widget widget-member">
                  <div className="member mb-0">
                    <div className="member__img">
                      <img src="assets/images/team/2.jpg" alt="member img" />
                    </div>

                    <div className="member__info">
                      <h5 className="member__name">
                        <Link to="/doctors-single-doctor1">Ahmed Abdallah</Link>
                      </h5>
                      <p className="member__job">Cardiology Specialist</p>
                      <p className="member__desc">
                        Brian specializes in treating skin, hair, nail, and
                        mucous membrane. He also address cosmetic issues,
                        helping to revitalize the appearance of the skin
                      </p>
                      <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
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
                </div>

                <div className="widget widget-help bg-overlay bg-overlay-primary-gradient">
                  <div className="bg-img">
                    <img src="assets/images/banners/5.jpg" alt="background" />
                  </div>
                  <div className="widget-content">
                    <div className="widget__icon">
                      <i className="icon-call3"></i>
                    </div>
                    <h4 className="widget__title">Emergency Cases</h4>
                    <p className="widget__desc">
                      Please feel welcome to contact our friendly reception
                      staff with any general or medical enquiry call us.
                    </p>
                    <Link to="tel:+201061245741" className="phone__number">
                      <i className="icon-phone"></i> <span>01061245741</span>
                    </Link>
                  </div>
                </div>

                <div className="widget widget-schedule">
                  <div className="widget-content">
                    <div className="widget__icon">
                      <i className="icon-charity2"></i>
                    </div>
                    <h4 className="widget__title">Opening Hours</h4>
                    <ul className="time__list list-unstyled mb-0">
                      <li>
                        <span>Monday - Friday</span>
                        <span>8.00 - 7:00 pm</span>
                      </li>
                      <li>
                        <span>Saturday</span>
                        <span>9.00 - 10:00 pm</span>
                      </li>
                      <li>
                        <span>Sunday</span>
                        <span>10.00 - 12:00 pm</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget widget-reports">
                  <Link to="#" className="btn btn__primary btn__block">
                    <i className="icon-pdf-file"></i>
                    <span>2020 Patient Reports</span>
                  </Link>
                </div>
              </aside>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="text-block mb-50">
                <h5 className="text-block__title">Biography</h5>
                <p className="text-block__desc mb-20 font-weight-bold color-secondary">
                  A neurologist is Link medical doctor with specialized training
                  in diagnosing, treating, and managing disorders of the brain
                  and nervous system including, but not limited to, Alzheimer’s
                  disease, amyotrophic lateral sclerosis (ALS), concussion,
                  epilepsy, migraine, multiple sclerosis, Parkinson’s disease,
                  and stroke.
                </p>
                <p className="text-block__desc mb-20">
                  He then traveled to Philadelphia, Pennsylvania to complete
                  Link Fellowship in Intervention Cardiology at Hahnemann
                  Hospital in conjunction with Drexel University, where he
                  received extensive training in coronary as well as peripheral
                  interventions and limb salvage procedures. He actively
                  participates in clinical research trials and has been
                  published in peer reviewed journals such as the Journal of the
                  State Medical Society and Baylor University Medical Center's
                  Proceedings.
                </p>
                <p className="text-block__desc mb-20">
                  In his spare time, watches college and professional football
                  and enjoys traveling, swimming and playing chess. He is
                  currently Board Certified in Cardiovascular Disease and
                  Interventional Cardiology. He moved to California where he
                  completed both his Internship ('85-'86) and Residency
                  ('87-'89) at the University of California.
                </p>
              </div>

              <ul className="details-list list-unstyled mb-60">
                <li>
                  <h5 className="details__title">Speciality</h5>
                  <div className="details__content">
                    <p className="mb-0">Cardiology</p>
                  </div>
                </li>
                <li>
                  <h5 className="details__title">Degrees</h5>
                  <div className="details__content">
                    <p className="mb-0">M.D. of Medicine</p>
                  </div>
                </li>
                <li>
                  <h5 className="details__title">Areas of Expertise</h5>
                  <div className="details__content">
                    <ul className="list-items list-items-layout2 list-unstyled mb-0">
                      <li>Cardiac Imaging – Non-invasive.</li>
                      <li>Cardiac Rehabilitation and Exercise.</li>
                      <li>Hypertrophic Cardiomyopathy.</li>
                      <li>Inherited Heart Diseases.</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <h5 className="details__title">Office</h5>
                  <div className="details__content">
                    <p className="mb-0">
                      2307 Beverley Rd Brooklyn, New York 11226 United States.
                    </p>
                  </div>
                </li>
                <li>
                  <h5 className="details__title">University</h5>
                  <div className="details__content">
                    <p className="mb-0">Harvard University</p>
                  </div>
                </li>
              </ul>
              <div className="text-block mb-50">
                <h5 className="text-block__title">Doctor’s Services</h5>
                <p className="text-block__desc mb-20">
                  He actively participates in clinical research trials and has
                  been published in peer reviewed journals such as the Journal
                  of the State Medical Society and Baylor University Medical
                  Center’s Proceedings. At Hahnemann Hospital in conjunction
                  with Drexel University, where he received extensive training
                  in coronary as well as peripheral interventions and limb
                  salvage procedures.
                </p>
              </div>

              <div className="pricing-widget-layout3 mb-70">
                <h5 className="pricing__title">Treatments Price List</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="pricing__list list-unstyled mb-0">
                      <li>
                        <span>Umbilical Cord Appearance</span>
                        <span className="price">$50</span>
                      </li>
                      <li>
                        <span>Cardiac Electrophysiology</span>
                        <span className="price">$45</span>
                      </li>
                      <li>
                        <span>Repositioning Techniques</span>
                        <span className="price">$60</span>
                      </li>
                      <li>
                        <span>Geriatric Neurology</span>
                        <span className="price">$65</span>
                      </li>
                      <li>
                        <span>Nuclear Cardiology</span>
                        <span className="price">$40</span>
                      </li>
                      <li>
                        <span>Nuclear Cardiology</span>
                        <span className="price">$55</span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <ul className="pricing__list list-unstyled mb-0">
                      <li>
                        <span>Umbilical Cord Appearance</span>
                        <span className="price">$50</span>
                      </li>
                      <li>
                        <span>Cardiac Electrophysiology</span>
                        <span className="price">$45</span>
                      </li>
                      <li>
                        <span>Repositioning Techniques</span>
                        <span className="price">$60</span>
                      </li>
                      <li>
                        <span>Geriatric Neurology</span>
                        <span className="price">$65</span>
                      </li>
                      <li>
                        <span>Nuclear Cardiology</span>
                        <span className="price">$40</span>
                      </li>
                      <li>
                        <span>Nuclear Cardiology</span>
                        <span className="price">$55</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-block mb-50">
                <h5 className="text-block__title">Awards And Honours</h5>
                <p className="text-block__desc mb-20">
                  Today the hospital is recognised as Link world renowned
                  institution, not only providing outstanding care and
                  treatment, but improving the outcomes for all through Link
                  comprehensive medical research. For over 20 years, our
                  hospital has touched lives of millions of people, and provide
                  care and treatment for the sickest in our community including
                  rehabilitation and aged care.
                </p>
              </div>

              <div className="fancybox-layout2">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="fancybox-item d-flex">
                      <div className="fancybox__icon">
                        <i className="icon-diploma"></i>
                      </div>

                      <div className="fancybox__content">
                        <h4 className="fancybox__title">Edison Awards</h4>
                        <p className="fancybox__desc">
                          Honoring excellence in innovation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="fancybox-item d-flex">
                      <div className="fancybox__icon">
                        <i className="icon-diploma"></i>
                      </div>

                      <div className="fancybox__content">
                        <h4 className="fancybox__title">Edwin Grant Medal</h4>
                        <p className="fancybox__desc">
                          Research in developmental biology
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="fancybox-item d-flex">
                      <div className="fancybox__icon">
                        <i className="icon-diploma"></i>
                      </div>

                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          Robert L. Noble Prize
                        </h4>
                        <p className="fancybox__desc">
                          Canadian Cancer Society
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="fancybox-item d-flex">
                      <div className="fancybox__icon">
                        <i className="icon-diploma"></i>
                      </div>

                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          National Prize for Medicine
                        </h4>
                        <p className="fancybox__desc">
                          Chilean Academy of Medicine etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-block mb-40">
                <h5 className="text-block__title">Medical Education</h5>
                <p className="text-block__desc mb-20">
                  She then went to LSU Medical School in New Orleans where she
                  was an Honors Program Graduate and finished in the top
                  quartile of his graduating class. She completed his Internal
                  Medicine Residency at the University of Alabama in Birmingham,
                  AL where he was selected as Link Chief Internal Medicine
                  Resident.
                </p>
              </div>

              <div className="timeline-wrapper mb-60">
                <div className="timeline-item d-flex">
                  <span className="timeline__year">2020</span>
                  <div className="timeline__body">
                    <h4 className="timeline__title">
                      Royal College of Surgeons of Harvard
                    </h4>
                    <p className="timeline__desc mb-0">
                      We partner with you to enable your technology so that you
                      can focus on your organization’s mission leverage our
                      talent, and creativity to help your business succeed above
                      all your business competitors.
                    </p>
                  </div>
                </div>

                <div className="timeline-item d-flex">
                  <span className="timeline__year">2015</span>
                  <div className="timeline__body">
                    <h4 className="timeline__title">
                      Fellowship, Royal College of Physicians of Harvard
                    </h4>
                    <p className="timeline__desc mb-0">
                      After relocating to Louisiana she served as Director of
                      the Cardiac Catheterization Lab at Regional Medical Center
                      of Acadiana. She was honored by the Medical Association
                      for Physician's Recognition Award from March of 2015
                      through May 2016.
                    </p>
                  </div>
                </div>

                <div className="timeline-item d-flex">
                  <span className="timeline__year">2015</span>
                  <div className="timeline__body">
                    <h4 className="timeline__title">
                      Residency, St. Harvard University Hospital
                    </h4>
                    <p className="timeline__desc mb-0">
                      Dr has also had professional accomplishments at the
                      University of Southern California School of Medicine and
                      Medical Center including Instructor of Medicine, Chief
                      Administrative Fellow, Division of Cardiology University
                      of Southern California.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-block mb-40">
                <h5 className="text-block__title">Doctor’s Skills</h5>
                <p className="text-block__desc mb-20">
                  He completed his Internal Medicine Residency at the University
                  of Alabama in Birmingham, AL where he was selected as Link
                  Chief Internal Medicine Resident. He then went to LSU Medical
                  School in New Orleans where he was an Honors Program Graduate
                  and finished in the top quartile of his graduating class.
                </p>
              </div>

              <div className="animated-Progressbars mb-60">
                <div className="progress-item">
                  <h5 className="progress__title">Cardiac Rehabilitation</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      role="progressbar"
                    >
                      <span className="progress__percentage"></span>
                    </div>
                  </div>
                </div>

                <div className="progress-item">
                  <h5 className="progress__title">Nuclear Cardiology</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      aria-valuenow="87"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      role="progressbar"
                    >
                      <span className="progress__percentage"></span>
                    </div>
                  </div>
                </div>

                <div className="progress-item">
                  <h5 className="progress__title">Neurocritical Care</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      aria-valuenow="81"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      role="progressbar"
                    >
                      <span className="progress__percentage"></span>
                    </div>
                  </div>
                </div>
              </div>

              <section className="contact-layout4 bg-overlay bg-overlay-secondary-gradient pb-50 pb-50">
                <div className="bg-img">
                  <img src="assets/images/banners/3.jpg" alt="banner" />
                </div>
                <div className="contact-panel mb-0">
                  <form className="contact-panel__form" id="contactForm">
                    <div className="row">
                      <div className="col-sm-12">
                        <h4 className="contact-panel__title">
                          Book An Appointment
                        </h4>
                        <p className="contact-panel__desc mb-30">
                          Please feel welcome to contact our friendly reception
                          staff with any general or medical enquiry. Our doctors
                          will receive or return any urgent calls.
                        </p>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-widget form-group-icon"></i>
                          <select className="form-control">
                            <option value="0">Choose Clinic</option>
                            <option value="1">Pathology Clinic</option>
                            <option value="2">Pathology Clinic</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-user form-group-icon"></i>
                          <select className="form-control">
                            <option value="0">Choose Doctor</option>
                            <option value="1">Ahmed Abdallah</option>
                            <option value="2">Mahmoud Begha</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-news form-group-icon"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            id="contact-name"
                            name="contact-name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-email form-group-icon"></i>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            id="contact-email"
                            name="contact-email"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group">
                          <i className="icon-phone form-group-icon"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            id="contact-Phone"
                            name="contact-phone"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group form-group-date">
                          <i className="icon-calendar form-group-icon"></i>
                          <input
                            type="date"
                            className="form-control"
                            id="contact-date"
                            name="contact-date"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="form-group form-group-date">
                          <i className="icon-clock form-group-icon"></i>
                          <input
                            type="time"
                            className="form-control"
                            id="contact-time"
                            name="contact-time"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn__primary btn__rounded btn__block btn__xhight mt-10"
                        >
                          <span>Book Appointment</span>
                          <i className="icon-arrow-right"></i>
                        </button>
                        <div className="contact-result"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesDetails;
