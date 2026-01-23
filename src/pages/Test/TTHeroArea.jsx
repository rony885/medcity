import React from "react";

const HeroSection = () => {
  return (
    <section className="slider">
      <div
        className="slick-carousel m-slides-0"
        data-slick='{"slidesToShow": 1, "arrows": true, "dots": false, "speed": 700,"fade": true,"cssEase": "linear"}'
      >
        <div className="slide-item align-v-h">
          <div className="bg-img">
            <img src="assets/images/sliders/1.jpg" alt="slide img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div className="slide__content">
                  <h2 className="slide__title">Providing Best Medical Care</h2>
                  <p className="slide__desc">
                    The health and well-being of our patients and their health
                    care team will always be our priority, so we follow the best
                    practices for cleanliness.
                  </p>
                  <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
                    {/* <!-- feature item #1 --> */}
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart"></i>
                      </div>
                      <h2 className="feature__title">Examination</h2>
                    </li>
                    {/* <!-- /.feature-item--> */}
                    {/* <!-- feature item #2 --> */}
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-medicine"></i>
                      </div>
                      <h2 className="feature__title">Prescription</h2>
                    </li>
                    {/* <!-- /.feature-item--> */}
                    {/* <!-- feature item #3 --> */}
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart2"></i>
                      </div>
                      <h2 className="feature__title">Cardiogram</h2>
                    </li>
                    {/* <!-- /.feature-item--> */}
                    {/* <!-- feature item #4 --> */}
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-blood-test"></i>
                      </div>
                      <h2 className="feature__title">Blood Pressure</h2>
                    </li>
                    {/* <!-- /.feature-item--> */}
                  </ul>
                  {/* <!-- /.features-list --> */}
                </div>
                {/* <!-- /.slide-content --> */}
              </div>
              {/* <!-- /.col-xl-7 --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </div>
        {/* <!-- /.slide-item --> */}
        <div className="slide-item align-v-h">
          <div className="bg-img">
            <img src="assets/images/sliders/2.jpg" alt="slide img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div className="slide__content">
                  <h2 className="slide__title">
                    All Aspects Of Medical Practice
                  </h2>
                  <p className="slide__desc">
                    The health and well-being of our patients and their health
                    care team will always be our priority, so we follow the best
                    practices for cleanliness.
                  </p>
                  <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
                    {/* <!-- feature item #1 --> */}
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart"></i>
                      </div>
                      <h2 className="feature__title">Examination</h2>
                    </li>
                    {/* <!-- /.feature-item--> */}
                    {/* <!-- feature item #2 --> */}
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-medicine"></i>
                      </div>
                      <h2 className="feature__title">Prescription</h2>
                    </li>
                    {/* <!-- /.feature-item--> */}
                    {/* <!-- feature item #3 --> */}
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart2"></i>
                      </div>
                      <h2 className="feature__title">Cardiogram</h2>
                    </li>
                    {/* <!-- /.feature-item--> */}
                    {/* <!-- feature item #4 --> */}
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-blood-test"></i>
                      </div>
                      <h2 className="feature__title">Blood Pressure</h2>
                    </li>
                    {/* <!-- /.feature-item--> */}
                  </ul>
                  {/* <!-- /.features-list --> */}
                </div>
                {/* <!-- /.slide-content --> */}
              </div>
              {/* <!-- /.col-xl-7 --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </div>
        {/* <!-- /.slide-item --> */}
      </div>
      {/* <!-- /.carousel --> */}
    </section>
  );
};

export default HeroSection;