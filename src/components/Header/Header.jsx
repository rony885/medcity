import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header header-layout1">
      <div className="header-topbar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <ul className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                  <li>
                    <button
                      className="miniPopup-emergency-trigger"
                      type="button"
                    >
                      24/7 Emergency
                    </button>
                    <div
                      id="miniPopup-emergency"
                      className="miniPopup miniPopup-emergency text-center"
                    >
                      <div className="emergency__icon">
                        <i className="icon-call3"></i>
                      </div>
                      <Link to="tel:+201061245741" className="phone__number">
                        <i className="icon-phone"></i>{" "}
                        <span>+2 01061245741</span>
                      </Link>
                      <p>
                        Please feel free to contact our friendly reception staff
                        with any general or medical enquiry.
                      </p>
                      <Link
                        to="appointment"
                        className="btn btn__secondary btn__link btn__block"
                      >
                        <span>Make Appointment</span>
                        <i className="icon-arrow-right"></i>
                      </Link>
                    </div>
                    {/* <!-- /.miniPopup-emergency --> */}
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
                {/* <!-- /.contact__list --> */}
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
                  {/* <!-- /.social-icons --> */}
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
            {/* <!-- /.col-12 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
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
          <button className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav__item has-dropdown">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link active"
                >
                  Home
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link to="/" className="nav__item-link">
                      Home Main
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="home-modern" className="nav__item-link">
                      Home Modern
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="home-classic" className="nav__item-link">
                      Home Classic
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="home-dentist" className="nav__item-link">
                      Home Dentist
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="home-pharmacy" className="nav__item-link">
                      Home pharmacy
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item has-dropdown">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link to="/about" className="nav__item-link">
                      About Us
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/services" className="nav__item-link">
                      Our Services
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/services-single" className="nav__item-link">
                      single Services
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="pricing" className="nav__item-link">
                      Pricing & Plans
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/appointment" className="nav__item-link">
                      Appointments
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/faqs" className="nav__item-link">
                      Help & FAQs
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/gallery" className="nav__item-link">
                      Our Gallery
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item has-dropdown">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Doctors
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link to="/doctors-timetable" className="nav__item-link">
                      Doctors Timetable
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="doctors-standard" className="nav__item-link">
                      Our Doctors Standard
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/doctors-modern" className="nav__item-link">
                      Our Doctors Modern
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/doctors-grid" className="nav__item-link">
                      Our Doctors Grid
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link
                      to="/doctors-single-doctor1"
                      className="nav__item-link"
                    >
                      Single Doctor 01
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link
                      to="/doctors-single-doctor2"
                      className="nav__item-link"
                    >
                      Single Doctor 02
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item has-dropdown">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Blog
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link to="/blog" className="nav__item-link">
                      Blog Grid
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/blog-single-post" className="nav__item-link">
                      Single Blog Post
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item has-dropdown">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <Link to="/shop" className="nav__item-link">
                      Our Products
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/shop-single-product" className="nav__item-link">
                      Products Single
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                  <li className="nav__item">
                    <Link to="/cart" className="nav__item-link">
                      Cart
                    </Link>
                  </li>
                  {/* <!-- /.nav-item --> */}
                </ul>
                {/* <!-- /.dropdown-menu --> */}
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <Link to="/contact-us" className="nav__item-link">
                  Contacts
                </Link>
              </li>
              {/* <!-- /.nav-item --> */}
            </ul>
            {/* <!-- /.navbar-nav --> */}
            <button className="close-mobile-menu d-block d-lg-none">
              <i className="fas fa-times"></i>
            </button>
          </div>
          {/* <!-- /.navbar-collapse --> */}
          <div className="d-none d-xl-flex align-items-center position-relative ml-30">
            <div className="miniPopup-departments-trigger">
              <span
                className="menu-lines"
                id="miniPopup-departments-trigger-icon"
              >
                <span></span>
              </span>
              <Link to="/departments">Departments</Link>
            </div>
            <ul
              id="miniPopup-departments"
              className="miniPopup miniPopup-departments dropdown-menu"
            >
              <li className="nav__item">
                <Link to="/department-single" className="nav__item-link">
                  Neurology Clinic
                </Link>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <Link to="/department-single" className="nav__item-link">
                  Cardiology Clinic
                </Link>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <Link to="/department-single" className="nav__item-link">
                  Pathology Clinic
                </Link>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <Link to="/department-single" className="nav__item-link">
                  Laboratory Clinic
                </Link>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <Link to="/department-single" className="nav__item-link">
                  Pediatric Clinic
                </Link>
              </li>
              {/* <!-- /.nav-item --> */}
              <li className="nav__item">
                <Link to="/department-single" className="nav__item-link">
                  Cardiac Clinic
                </Link>
              </li>
              {/* <!-- /.nav-item --> */}
            </ul>
            {/* <!-- /.miniPopup-departments --> */}
            <Link
              to="/appointment"
              className="btn btn__primary btn__rounded ml-30"
            >
              <i className="icon-calendar"></i>
              <span>Appointment</span>
            </Link>
          </div>
        </div>
        {/* <!-- /.container --> */}
      </nav>
      {/* <!-- /.navabr --> */}
    </header>
  );
};

export default Header;
