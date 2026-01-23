import React from "react";
import { Link } from "react-router-dom";

const Notses = () => {
  return (
    <section className="notes border-top pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="note font-weight-bold">
              <i className="far fa-file-alt color-primary"></i>
              <span>Delivering tomorrow’s health care for your family.</span>
              <Link
                to="/doctors-timetable"
                className="btn btn__link btn__secondary"
              >
                <span>View Doctors’ Timetable</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
          {/* <!-- /.col-sm-6 --> */}
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="info__meta d-flex flex-wrap justify-content-between align-items-center">
              <div className="testimonials__rating">
                <div className="testimonials__rating-inner d-flex align-items-center">
                  <span className="total__rate">4.9</span>
                  <div>
                    <span className="overall__rate">Zocdoc Overall Rating</span>
                    <span>, based on 7541 reviews.</span>
                  </div>
                </div>
                {/* <!-- /.testimonials__rating-inner --> */}
              </div>
              {/* <!-- /.testimonials__rating --> */}
              <Link to="/appointment" className="btn btn__primary btn__rounded">
                <span>Make Appointment</span>{" "}
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
            {/* <!-- /.info__meta --> */}
          </div>
          {/* <!-- /.col-sm-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
};

export default Notses;
