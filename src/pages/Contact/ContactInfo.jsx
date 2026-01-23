// import React from "react";
// import { Link } from "react-router-dom";

// const ContactInfo = () => {
//   return (
//     <>
//       <section class="page-title page-title-layout5 bg-overlay">
//         <div class="bg-img">
//           <img src="/assets/images/page-titles/8.jpg" alt="background" />
//         </div>
//         <div class="container">
//           <div class="row">
//             <div class="col-12">
//               <h1 class="pagetitle__heading">Contact Us</h1>
//               <nav>
//                 <ol class="breadcrumb mb-0">
//                   <li class="breadcrumb-item">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li class="breadcrumb-item active" aria-current="page">
//                     Contact
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>

//             <section class="google-map py-0">
//         <iframe
//           frameborder="0"
//           height="500"
//           width="100%"
//           src="https://maps.google.com/maps?q=Suite%20100%20San%20Francisco%2C%20LA%2094107%20United%20States&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
//         ></iframe>
//       </section>
//     </>
//   );
// };

// export default ContactInfo;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <Wrapper style={{ paddingTop: "0", paddingBottom: "0" }}>
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
              <h1 className="pagetitle__heading">Contact Us</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map py-0 ">
        <iframe
          frameBorder="0"
          height="500"
          width="100%"
          src="https://maps.google.com/maps?q=Suite%20100%20San%20Francisco%2C%20LA%2094107%20United%20States&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
          title="Google Map"
        ></iframe>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ContactInfo;
