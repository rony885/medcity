import React from "react";

const Notses = () => {
  return (
    <section className="notes border-top pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="note font-weight-bold">
              <i className="far fa-file-alt color-primary"></i>
              <span>Delivering tomorrow’s health care for your family.</span>
              <a
                href="doctors-timetable.html"
                className="btn btn__link btn__secondary"
              >
                <span>View Doctors’ Timetable</span>
                <i className="icon-arrow-right"></i>
              </a>
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
              <a
                href="appointment.html"
                className="btn btn__primary btn__rounded"
              >
                <span>Make Appointment</span>{" "}
                <i className="icon-arrow-right"></i>
              </a>
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
