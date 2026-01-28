import React from "react";
import { Link } from "react-router-dom";

const DoctorsTimetable = () => {
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
          <h1 className="pagetitle__heading">Doctor’s Timetable</h1>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Doctor’s Timetable</li>
            </ol>
          </nav>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="doctors-timetable w-100">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Sunday</th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>08.00</td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Neurology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>08.00</span>
                          <span>09.00</span>
                        </div>
                        <div className="doctor__name">Dr. Muldoone. R</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Cardiology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>08.00</span>
                          <span>09.00</span>
                        </div>
                        <div className="doctor__name">Dr. Brain.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Pathology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>08.00</span>
                          <span>09.00</span>
                        </div>
                        <div className="doctor__name">Dr. Andaloro.M</div>
                      </td>
                      <td className="event" rowspan="3">
                        <Link className="event__header" to="#">
                          Laboratory
                        </Link>
                        <div className="event__type">Analysis</div>
                        <div className="event__time">
                          <span>08.00</span>
                          <span>11.00</span>
                        </div>
                        <div className="doctor__name">Dr. Markus.S</div>
                        <hr />
                        <Link className="event__header" to="#">
                          Ophthalmology
                        </Link>
                        <div className="event__type">Analysis</div>
                        <div className="event__time">
                          <span>08.00</span>
                          <span>10.00</span>
                        </div>
                        <div className="doctor__name">Dr. Markus.S</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Pediatric
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>08.00</span>
                          <span>09.00</span>
                        </div>
                        <div className="doctor__name">Dr. Nicole. B</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Physiotherapy
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>08.00</span>
                          <span>09.00</span>
                        </div>
                        <div className="doctor__name">Dr. Alex.K</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Urology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>08.00</span>
                          <span>09.00</span>
                        </div>
                        <div className="doctor__name">Dr. Darlen.G</div>
                      </td>
                    </tr>
                    <tr>
                      <td>09.00</td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Maternity
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>10.00</span>
                        </div>
                        <div className="doctor__name">Dr. Muldoone. R</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Oncology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>10.00</span>
                        </div>
                        <div className="doctor__name">Dr. Brain.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Pathology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>10.00</span>
                        </div>
                        <div className="doctor__name">Dr. Andaloro.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Audiology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>10.00</span>
                        </div>
                        <div className="doctor__name">Dr. Nicole. B</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Cardiac
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>10.00</span>
                        </div>
                        <div className="doctor__name">Dr. Alex.K</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Urology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>10.00</span>
                        </div>
                        <div className="doctor__name">Dr. Darlen.G</div>
                      </td>
                    </tr>
                    <tr>
                      <td>10.00</td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Neurology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>11.00</span>
                        </div>
                        <div className="doctor__name">Dr. Muldoone. R</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Cardiology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>11.00</span>
                        </div>
                        <div className="doctor__name">Dr. Brain.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Pathology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>11.00</span>
                        </div>
                        <div className="doctor__name">Dr. Andaloro.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Maternity
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>11.00</span>
                        </div>
                        <div className="doctor__name">Dr. Nicole. B</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Oncology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>11.00</span>
                        </div>
                        <div className="doctor__name">Dr. Alex.K</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Urology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>09.00</span>
                          <span>11.00</span>
                        </div>
                        <div className="doctor__name">Dr. Darlen.G</div>
                      </td>
                    </tr>
                    <tr>
                      <td>11.00</td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Physiotherapy
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>11.00</span>
                          <span>12.00</span>
                        </div>
                        <div className="doctor__name">Dr. Muldoone. R</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Cardiology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>11.00</span>
                          <span>12.00</span>
                        </div>
                        <div className="doctor__name">Dr. Brain.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Maternity
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>11.00</span>
                          <span>12.00</span>
                        </div>
                        <div className="doctor__name">Dr. Andaloro.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Pediatric
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>11.00</span>
                          <span>12.00</span>
                        </div>
                        <div className="doctor__name">Dr. Nicole. B</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Cardiac
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>11.00</span>
                          <span>12.00</span>
                        </div>
                        <div className="doctor__name">Dr. Alex.K</div>
                      </td>
                      <td className="event" rowspan="3">
                        <Link className="event__header" to="#">
                          Laboratory
                        </Link>
                        <div className="event__type">Analysis</div>
                        <div className="event__time">
                          <span>11.00</span>
                          <span>13.00</span>
                        </div>
                        <div className="doctor__name">Dr. Markus.S</div>
                        <hr />
                        <Link className="event__header" to="#">
                          Physiotherapy
                        </Link>
                        <div className="event__type">Analysis</div>
                        <div className="event__time">
                          <span>12.00</span>
                          <span>14.00</span>
                        </div>
                        <div className="doctor__name">Dr. Markus.S</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Urology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>11.00</span>
                          <span>12.00</span>
                        </div>
                        <div className="doctor__name">Dr. Darlen.G</div>
                      </td>
                    </tr>
                    <tr>
                      <td>12.00</td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Neurology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>12.00</span>
                          <span>15.00</span>
                        </div>
                        <div className="doctor__name">Dr. Muldoone. R</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Ophthalmology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>12.00</span>
                          <span>15.00</span>
                        </div>
                        <div className="doctor__name">Dr. Brain.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Oncology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>12.00</span>
                          <span>15.00</span>
                        </div>
                        <div className="doctor__name">Dr. Andaloro.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Audiology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>12.00</span>
                          <span>15.00</span>
                        </div>
                        <div className="doctor__name">Dr. Nicole. B</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Physiotherapy
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>12.00</span>
                          <span>15.00</span>
                        </div>
                        <div className="doctor__name">Dr. Alex.K</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Urology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>12.00</span>
                          <span>15.00</span>
                        </div>
                        <div className="doctor__name">Dr. Darlen.G</div>
                      </td>
                    </tr>
                    <tr>
                      <td>13.00</td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Oncology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>13.00</span>
                          <span>14.00</span>
                        </div>
                        <div className="doctor__name">Dr. Muldoone. R</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Audiology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>13.00</span>
                          <span>14.00</span>
                        </div>
                        <div className="doctor__name">Dr. Brain.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Pathology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>13.00</span>
                          <span>14.00</span>
                        </div>
                        <div className="doctor__name">Dr. Andaloro.M</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Pediatric
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>13.00</span>
                          <span>14.00</span>
                        </div>
                        <div className="doctor__name">Dr. Nicole. B</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Maternity
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>13.00</span>
                          <span>14.00</span>
                        </div>
                        <div className="doctor__name">Dr. Alex.K</div>
                      </td>
                      <td className="event">
                        <Link className="event__header" to="#">
                          Ophthalmology
                        </Link>
                        <div className="event__type">Consultation</div>
                        <div className="event__time">
                          <span>13.00</span>
                          <span>14.00</span>
                        </div>
                        <div className="doctor__name">Dr. Darlen.G</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorsTimetable;
