// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-primary">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12 col-md-12 col-lg-3">
//               <div className="footer-widget-about">
//                 <img
//                   src="/assets/images/logo/logo-light.png"
//                   alt="logo"
//                   className="mb-30"
//                 />
//                 <p className="color-gray">
//                   Our goal is to deliver quality of care in Link courteous,
//                   respectful, and compassionate manner. We hope you will allow
//                   us to care for you and strive to be the first and best choice
//                   for your family healthcare.
//                 </p>
//                 <Link
//                   to="appointment.html"
//                   className="btn btn__primary btn__primary-style2 btn__link"
//                 >
//                   <span>Make Appointment</span>
//                   <i className="icon-arrow-right"></i>
//                 </Link>
//               </div>
//               {/* <!-- /.footer-widget__content --> */}
//             </div>
//             {/* <!-- /.col-xl-2 --> */}
//             <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
//               <div className="footer-widget-nav">
//                 <h6 className="footer-widget__title">Departments</h6>
//                 <nav>
//                   <ul className="list-unstyled">
//                     <li>
//                       <Link to="#">Neurology Clinic</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Cardiology Clinic</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Pathology Clinic</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Laboratory Analysis</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Pediatric Clinic</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Cardiac Clinic</Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//               {/* <!-- /.footer-widget__content --> */}
//             </div>
//             {/* <!-- /.col-lg-2 --> */}
//             <div className="col-sm-6 col-md-6 col-lg-2">
//               <div className="footer-widget-nav">
//                 <h6 className="footer-widget__title">Links</h6>
//                 <nav>
//                   <ul className="list-unstyled">
//                     <li>
//                       <Link to="#">About Us</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Our CLinic</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Our Doctors</Link>
//                     </li>
//                     <li>
//                       <Link to="#">News & Media</Link>
//                     </li>
//                     <li>
//                       <Link to="#">Appointments</Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//               {/* <!-- /.footer-widget__content --> */}
//             </div>
//             {/* <!-- /.col-lg-2 --> */}
//             <div className="col-sm-12 col-md-6 col-lg-4">
//               <div className="footer-widget-contact">
//                 <h6 className="footer-widget__title color-heading">
//                   Quick Contacts
//                 </h6>
//                 <ul className="contact-list list-unstyled">
//                   <li>
//                     If you have any questions or need help, feel free to contact
//                     with our team.
//                   </li>
//                   <li>
//                     <Link to="tel:01061245741" className="phone__number">
//                       <i className="icon-phone"></i> <span>01061245741</span>
//                     </Link>
//                   </li>
//                   <li className="color-body">
//                     2307 Beverley Rd Brooklyn, New York 11226 United States.
//                   </li>
//                 </ul>
//                 <div className="d-flex align-items-center">
//                   <Link
//                     to="contact-us.html"
//                     className="btn btn__primary btn__link mr-30"
//                   >
//                     <i className="icon-arrow-right"></i>
//                     <span>Get Directions</span>
//                   </Link>
//                   <ul className="social-icons list-unstyled mb-0">
//                     <li>
//                       <Link to="#">
//                         <i className="fab fa-facebook-f"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#">
//                         <i className="fab fa-instagram"></i>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="#">
//                         <i className="fab fa-twitter"></i>
//                       </Link>
//                     </li>
//                   </ul>
//                   {/* <!-- /.social-icons --> */}
//                 </div>
//               </div>
//               {/* <!-- /.footer-widget__content --> */}
//             </div>
//             {/* <!-- /.col-lg-2 --> */}
//           </div>
//           {/* <!-- /.row --> */}
//         </div>
//         {/* <!-- /.container --> */}
//       </div>
//       {/* <!-- /.footer-primary --> */}
//       <div className="footer-secondary">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-sm-12 col-md-6 col-lg-6">
//               <span className="fz-14">
//                 &copy; 2020 DataSoft, All Rights Reserved. With Love by
//               </span>

//               <Link className="fz-14 color-primary" to="#">
//                 7oroof.com
//               </Link>
//             </div>
//             {/* <!-- /.col-lg-6 --> */}
//             <div className="col-sm-12 col-md-6 col-lg-6">
//               <nav>
//                 <ul className="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end mb-0">
//                   <li>
//                     <Link to="#">Terms & Conditions</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Privacy Policy</Link>
//                   </li>
//                   <li>
//                     <Link to="#">Cookies</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//             {/* <!-- /.col-lg-6 --> */}
//           </div>
//           {/* <!-- /.row --> */}
//         </div>
//         {/* <!-- /.container --> */}
//       </div>
//       {/* <!-- /.footer-secondary --> */}
//     </footer>
//   );
// };

// export default Footer;

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
                <p className="color-gray">
                  Our goal is to deliver quality of care in a courteous,
                  respectful, and compassionate manner. We hope you will allow
                  us to care for you and strive to be the first and best choice
                  for your family healthcare.
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
                <h6 className="footer-widget__title">Departments</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">Neurology Clinic</Link>
                  </li>
                  <li>
                    <Link to="#">Cardiology Clinic</Link>
                  </li>
                  <li>
                    <Link to="#">Pathology Clinic</Link>
                  </li>
                  <li>
                    <Link to="#">Laboratory Analysis</Link>
                  </li>
                  <li>
                    <Link to="#">Pediatric Clinic</Link>
                  </li>
                  <li>
                    <Link to="#">Cardiac Clinic</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Links</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Our Clinic</Link>
                  </li>
                  <li>
                    <Link to="#">Our Doctors</Link>
                  </li>
                  <li>
                    <Link to="#">News & Media</Link>
                  </li>
                  <li>
                    <Link to="#">Appointments</Link>
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
                  <li>
                    <a href="tel:01061245741" className="phone__number">
                      <i className="icon-phone"></i>
                      <span>01061245741</span>
                    </a>
                  </li>
                  <li className="color-body">
                    2307 Beverley Rd Brooklyn, New York 11226 United States.
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
                        <i className="fab fa-twitter"></i>
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
            <div className="col-md-6">
              <span className="fz-14">
                © 2020 DataSoft, All Rights Reserved. With Love by{" "}
              </span>
              <Link to="#" className="fz-14 color-primary">
                7oroof.com
              </Link>
            </div>

            <div className="col-md-6">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
