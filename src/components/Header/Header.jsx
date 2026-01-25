import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ menuOpen, toggleMenu, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDepartment, setIsOpenDepartment] = useState(false);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="header header-layout1">
      <div className="header-topbar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <ul className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                  <li className={isOpen ? "active" : ""}>
                    <button
                      type="button"
                      className={`miniPopup-emergency-trigger ${
                        isOpen ? "active" : ""
                      }`}
                      onClick={togglePopup}
                    >
                      24/7 Emergency
                    </button>

                    <div
                      id="miniPopup-emergency"
                      className={`miniPopup miniPopup-emergency text-center ${
                        isOpen ? "active" : ""
                      }`}
                    >
                      <div className="emergency__icon">
                        <i className="icon-call3"></i>
                      </div>

                      <Link to="tel:+201061245741" className="phone__number">
                        <i className="icon-phone"></i>
                        <span> +2 01061245741</span>
                      </Link>

                      <p>
                        Please feel free to contact our friendly reception staff
                        with any general or medical enquiry.
                      </p>

                      <Link
                        to="/appointment"
                        className="btn btn__secondary btn__link btn__block"
                      >
                        <span>Make Appointment</span>
                        <i className="icon-arrow-right"></i>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <i className="icon-phone"></i>
                    <Link to="tel:+5565454117">
                      Emergency Line: (002) 01061245741
                    </Link>
                  </li>
                  <li>
                    <i className="icon-location"></i>
                    <Link to="#">Location: Brooklyn, New York</Link>
                  </li>
                  <li>
                    <i className="icon-clock"></i>
                    <Link to="contact-us">Mon - Fri: 8:00 am - 7:00 pm</Link>
                  </li>
                </ul>

                <div className="d-flex">
                  <ul className="social-icons list-unstyled mb-0 mr-30">
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
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>

                  <form className="header-topbar__search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <button className="header-topbar__search-btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.header-top --> */}
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/assets/images/logo/logo-light.png"
              className="logo-light"
              alt="logo"
            />
            <img
              src="/assets/images/logo/logo-dark.png"
              className="logo-dark"
              alt="logo"
            />
          </Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="menu-lines">
              <span></span>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "menu-opened" : ""}`}
            id="mainNavigation"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav__item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Doctors
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/packages"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Packages
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Gallery
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Blog
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav__item-link ${isActive ? "active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>

            <button
              onClick={closeMenu}
              className="close-mobile-menu d-block d-lg-none"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="d-none d-xl-flex align-items-center position-relative ml-30">
            <div
              className="miniPopup-departments-trigger"
              onClick={() => setIsOpenDepartment(!isOpenDepartment)}
              style={{ cursor: "pointer" }}
            >
              <span
                className={`menu-lines ${isOpenDepartment ? "active" : ""}`}
                id="miniPopup-departments-trigger-icon"
              >
                <span></span>
              </span>

              <Link to="/departments">Departments</Link>
            </div>

            <ul
              id="miniPopup-departments"
              className={`miniPopup miniPopup-departments dropdown-menu ${
                isOpenDepartment ? "active" : ""
              }`}
            >
              <li className="nav__item">
                <Link to="/department" className="nav__item-link">
                  Neurology Clinic
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/department" className="nav__item-link">
                  Cardiology Clinic
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/department" className="nav__item-link">
                  Pathology Clinic
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/department" className="nav__item-link">
                  Laboratory Clinic
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/department" className="nav__item-link">
                  Pediatric Clinic
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/department" className="nav__item-link">
                  Cardiac Clinic
                </Link>
              </li>
            </ul>

            <Link
              to="/appointment"
              className="btn btn__primary btn__rounded ml-30"
            >
              <i className="icon-calendar"></i>
              <span>Appointment</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
