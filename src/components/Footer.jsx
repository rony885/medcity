import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Primary */}
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="footer-widget-about">
                <img
                  src="/assets/images/logo/logo-light.png"
                  alt="logo"
                  className="mb-30"
                />
                <p className="color-gray" style={{ textAlign: "justify" }}>
                  Unity Health Centre is Link professional mental health and
                  addiction treatment hospital dedicated to ethical care,
                  confidentiality, and long-term recovery. Our experienced team
                  ensures compassionate treatment following international
                  standards.
                </p>
                <Link
                  to="/appointment"
                  className="btn btn__primary btn__primary-style2 btn__link"
                >
                  <span>Make Appointment</span>
                  <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Departments */}
            <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Quick Links</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/doctors">Our Consultants</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Other Links</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/appointment">Appointment</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-widget-contact">
                <h6 className="footer-widget__title color-heading">
                  Quick Contacts
                </h6>

                <ul className="contact-list list-unstyled">
                  <li>
                    If you have any questions or need help, feel free to contact
                    our team.
                  </li>
                  {/* <li>
                    <Link to="tel:01061245741" className="phone__number mb-0">
                      <i className="icon-phone"></i>
                      <span>01061245741</span>
                    </Link>
                  </li>
                  <li className="d-none">
                    <Link
                      to="mailto:info@unityhealthcentre.com"
                      className="phone__number"
                    >
                      <i
                        className="icon-email"
                        style={{ fontSize: "14px" }}
                      ></i>
                      <span className="fs-5">info@unityhealthcentre.com</span>
                    </Link>
                  </li>

                  <li className="color-body d-none">
                    Near Circuit House, Gaital, Kishoreganj
                  </li> */}
                </ul>

                {/* <ul className="contact__list list-unstyled mb-30">
                    <li>
                      <i className="icon-phone"></i>
                      <Link to="tel:01936209467">01936209467</Link>
                    </li>
                    <li>
                      <i
                        className="icon-email"
                        style={{ fontSize: "12px" }}
                      ></i>
                      <Link to="mailto:info@unityhealthcentre.com">
                        info@unityhealthcentre.com
                      </Link>
                    </li>

                    <li>
                      <i className="icon-location"></i>
                      <Link to="#">
                        Near Circuit House, Gaital, Kishoreganj
                      </Link>
                    </li>
                    <li>
                      <i className="icon-clock"></i>
                      <Link to="/contact">SAT - THU : 8:00 am - 10:00 pm</Link>
                    </li>
                  </ul> */}

                <ul className="contact__list list-unstyled mb-30 w-bold">
                  <li
                    className="d-flex align-items-center gap-2"
                    style={{ color: "#1D2A4D" }}
                  >
                    <span style={{ width: "15px" }}>
                      <i className="icon-phone"></i>
                    </span>
                    <Link   className="fw-bold" style={{ color: "#1D2A4D" }} to="tel:01061245741">
                      01061245741
                    </Link>
                  </li>

                  <li
                    className="d-flex align-items-center gap-2"
                    style={{ color: "#1D2A4D" }}
                  >
                    <span style={{ width: "15px" }}>
                      <i
                        className="icon-email"
                        style={{ fontSize: "12px" }}
                      ></i>
                    </span>
                    <Link
                      className="fw-bold"
                      style={{ color: "#1D2A4D" }}
                      to="mailto:info@unityhealthcentre.com"
                    >
                      info@unityhealthcentre.com
                    </Link>
                  </li>

                  <li

                    className="d-flex align-items-center gap-2"
                    style={{ color: "#1D2A4D" }}
                  >
                    <span style={{ width: "15px" }}>
                      <i className="icon-location"></i>
                    </span>
                    <Link
                      className="fw-bold"
                     style={{ color: "#1D2A4D" }} to="#">
                      Near Circuit House, Gaital, Kishoreganj
                    </Link>
                  </li>

                  <li
                    className="d-flex align-items-center gap-2"
                    style={{ color: "#1D2A4D" }}
                  >
                    <span style={{ width: "15px" }}>
                      <i className="icon-clock"></i>
                    </span>
                    <Link   className="fw-bold" style={{ color: "#1D2A4D" }} to="/contact">
                      SAT - THU : 8:00 am - 10:00 pm
                    </Link>
                  </li>
                </ul>

                <div className="d-flex align-items-center">
                  <Link
                    to="/contact"
                    className="btn btn__primary btn__link mr-30"
                  >
                    <i className="icon-arrow-right"></i>
                    <span>Get Directions</span>
                  </Link>

                  <ul className="social-icons list-unstyled mb-0">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-x"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Secondary */}
      <div className="footer-secondary">
        <div className="container">
          <div className="row align-items-center">
            {/* <div className="col-md-12 d-flex justify-content-center align-items-center">
              <span className="fz-14 mr-1">
                © 2020 DataSoft, All Rights Reserved. With Love by
              </span>
              <Link to="#" className="fz-14 color-primary">
                7oroof.com
              </Link>
            </div> */}
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <span className="fz-14 mr-1">
                Copyright © 2026{" "}
                <span style={{ color: "#1D2A4D" }}>Unity Health Centre</span>.
                Developed By
              </span>
              <Link to="#" className="fz-14" style={{ color: "#1D2A4D" }}>
                ToxiCoder.
              </Link>
            </div>

            {/* <div className="col-md-6">
              <ul className="list-unstyled footer__copyright-links d-flex justify-content-end mb-0">
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Cookies</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
