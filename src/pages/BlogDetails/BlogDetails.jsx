import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <>
      <section
        className="page-title page-title-layout5 bg-overlay"
        style={{
          backgroundImage: 'url("/assets/images/page-titles/8.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading">Blog Details</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="blog blog-single pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="post-item mb-0">
                <div className="post__img">
                  <Link to="#">
                    <img
                      src="assets/images/blog/single/1.jpg"
                      alt="post imagee"
                      loading="lazy"
                    />
                  </Link>
                </div>

                <div className="post__body pb-0">
                  <div className="post__meta-cat">
                    <Link to="#">Consulting</Link>
                    <Link to="#">Sales</Link>
                  </div>

                  <div className="post__meta d-flex align-items-center mb-20">
                    <span className="post__meta-date">Jan 20, 2022</span>
                    <Link className="post__meta-author" to="#">
                      Martin King
                    </Link>
                    <Link className="post__meta-comments" to="#">
                      2 coments
                    </Link>
                  </div>

                  <h1 className="post__title mb-30">
                    6 Tips to Protect Your Mental Health When You’re Sick
                  </h1>
                  <div className="post__desc">
                    <p>
                      Vast numbers of employees now work remotely, and it’s too
                      late to develop Link set of remote-work policies if you
                      didn’t already have one. But there are ways to make the
                      remote-work experience productive and engaging — for
                      employees and the organization.
                    </p>
                    <p>
                      “At most organizations, scenario planning focuses on the
                      necessary operational responses to ensure business
                      continuity. Few of these plans address the ability or
                      bandwidth of employees to focus on their work,” says Brian
                      Kropp, Distinguished Vice President, Research, Gartner.
                    </p>
                    <p>
                      Use both direct conversations and indirect observations to
                      get visibility into employees’ challenges and concerns.
                      Use every opportunity to make clear to employees that you
                      support and care for them. To facilitate regular
                      conversations between managers and employees, provide
                      managers with guidance on how best to broach sensitive
                      subjects arising from the COVID-19 pandemic, including
                      alternative work models, job security and prospects,
                      impact on staffing and tension in the workplace.
                    </p>
                    <p>
                      Make sure employees have the technology they need to be
                      successful, which may be more than just Link mobile phone
                      and laptop. For example, if you expect employees to attend
                      virtual meetings, do they have adequate cameras?
                    </p>
                    <p>
                      Even if you don’t have an extensive set of technology and
                      collaborative tools available, you can equip employees to
                      function effectively when remote. But don’t just assume
                      that people know how to operate with virtual
                      communications — or are comfortable in that environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-between border-top border-bottom pt-30 pb-30 mb-40">
                <div className="blog-share d-flex flex-wrap align-items-center">
                  <strong className="mr-20 color-heading">Share</strong>
                  <ul className="list-unstyled social-icons d-flex mb-0">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-google"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="widget-tags">
                  <ul className="list-unstyled d-flex flex-wrap mb-0">
                    <li>
                      <Link to="#">Consulting</Link>
                    </li>
                    <li>
                      <Link to="#">Tech</Link>
                    </li>
                    <li>
                      <Link to="#">Employee</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-nav d-flex justify-content-between mb-40">
                <Link to="#" className="widget-nav__prev d-flex flex-wrap">
                  <div className="widget-nav__img">
                    <img src="assets/images/blog/grid/2.jpg" alt="blog thumb" />
                  </div>
                  <div className="widget-nav__content">
                    <span>Previous Post</span>
                    <h5 className="widget-nav__ttile mb-0">
                      Unsure About Wearing Link Face Mask?
                    </h5>
                  </div>{" "}
                </Link>
                <Link to="#" className="widget-nav__next d-flex flex-wrap">
                  <div className="widget-nav__img">
                    <img src="assets/images/blog/grid/3.jpg" alt="blog thumb" />
                  </div>
                  <div className="widget-nav__content">
                    <span>Next Post</span>
                    <h5 className="widget-nav__ttile mb-0">
                      Tips for Eating Healthy When You’re Home
                    </h5>
                  </div>{" "}
                </Link>
              </div>
              <div className="blog-author d-flex flex-wrap mb-70">
                <div className="blog-author__avatar">
                  <img src="assets/images/blog/author/1.jpg" alt="avatar" />
                </div>

                <div className="blog-author__content">
                  <h6 className="blog-author__name">Mahmoud Baghagho</h6>
                  <p className="blog-author__bio">
                    Founded by Begha over many cups of tea at her kitchen table
                    in 2009, our brand promise is simple: to provide powerful
                    digital marketing solutions to small and medium businesses.
                  </p>
                  <ul className="social-icons list-unstyled mb-0">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-vimeo-v"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="blog-comments mb-70">
                <h5 className="blog-widget__title">2 comments</h5>
                <ul className="comments-list list-unstyled">
                  <li className="comment__item">
                    <div className="comment__avatar">
                      <img src="assets/images/blog/author/2.jpg" alt="avatar" />
                    </div>
                    <div className="comment__content">
                      <h5 className="comment__author">Richard Muldoone</h5>
                      <span className="comment__date">
                        Feb 28, 2017 - 08:07 pm
                      </span>
                      <p className="comment__desc">
                        The example about the mattress sizing page you mentioned
                        in the last WBF can be Link perfect example of new
                        keywords and content, and broadening the funnel as well.
                        I can only imagine the sale numbers if that was the site
                        of Link mattress selling company.
                      </p>
                      <Link className="comment__reply" to="#">
                        reply
                      </Link>
                    </div>
                    <ul className="nested__comment list-unstyled">
                      <li className="comment__item">
                        <div className="comment__avatar">
                          <img
                            src="assets/images/blog/author/3.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="comment__content">
                          <h5 className="comment__author">Mike Dooley</h5>
                          <span className="comment__date">
                            Feb 28, 2017 - 08:22 pm
                          </span>
                          <p className="comment__desc">
                            The example about the mattress sizing page you
                            mentioned in the last WBF can be Link perfect
                            example of new keywords and content, and broadening
                            the funnel as well. I can only imagine the sale
                            numbers if that was the site of Link mattress
                            selling company.
                          </p>
                          <Link className="comment__reply" to="#">
                            reply
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="blog-widget blog-comments-form mb-30">
                <h5 className="blog-widget__title">Leave A Reply</h5>
                <form>
                  <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name:"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email:"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website:"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Comment"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap align-items-center">
                      <button
                        type="submit"
                        className="btn btn__primary btn__rounded btn__xl"
                      >
                        <span>Submit Comment</span>
                        <i className="icon-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <aside className="sidebar">
                <div className="widget widget-search">
                  <h5 className="widget__title">Search</h5>
                  <div className="widget__content">
                    <form className="widget__form-search">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <button className="btn" type="submit">
                        <i className="icon-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="widget widget-posts">
                  <h5 className="widget__title">Recent Posts</h5>
                  <div className="widget__content">
                    <div className="widget-post-item d-flex align-items-center">
                      <div className="widget-post__img">
                        <Link to="#">
                          <img
                            src="assets/images/blog/grid/2.jpg"
                            alt="thumb"
                          />
                        </Link>
                      </div>

                      <div className="widget-post__content">
                        <span className="widget-post__date">Sep 19, 2022</span>
                        <h4 className="widget-post__title">
                          <Link to="#">
                            Succession Risks That Threaten Your Leadership
                          </Link>
                        </h4>
                      </div>
                    </div>

                    <div className="widget-post-item d-flex align-items-center">
                      <div className="widget-post__img">
                        <Link to="#">
                          <img
                            src="assets/images/blog/grid/3.jpg"
                            alt="thumb"
                          />
                        </Link>
                      </div>

                      <div className="widget-post__content">
                        <span className="widget-post__date">July 7, 2022</span>
                        <h4 className="widget-post__title">
                          <Link to="#">
                            Do Employee Surveys Tell About Employee?
                          </Link>
                        </h4>
                      </div>
                    </div>

                    <div className="widget-post-item d-flex align-items-center">
                      <div className="widget-post__img">
                        <Link to="#">
                          <img
                            src="assets/images/blog/grid/6.jpg"
                            alt="thumb"
                          />
                        </Link>
                      </div>

                      <div className="widget-post__content">
                        <span className="widget-post__date">
                          March 13, 2022
                        </span>
                        <h4 className="widget-post__title">
                          <Link to="#">
                            Succession Risks That Threaten Your Leadership
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget widget-categories">
                  <h5 className="widget__title">Categories</h5>
                  <div className="widget-content">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link to="#">
                          <span className="cat-count">4</span>
                          <span>Neurology</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="cat-count">0</span>
                          <span>Cardiology</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="cat-count">3</span>
                          <span>Pathology</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="cat-count">2</span>
                          <span>Laboratory</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="cat-count">4</span>
                          <span>Pediatric</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="cat-count">1</span>
                          <span>Cardiac Clinic</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget widget-tags">
                  <h5 className="widget__title">Tags</h5>
                  <div className="widget-content">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link to="#">Insights</Link>
                      </li>
                      <li>
                        <Link to="#">Industry</Link>
                      </li>
                      <li>
                        <Link to="#">Modern</Link>
                      </li>
                      <li>
                        <Link to="#">Corporate</Link>
                      </li>
                      <li>
                        <Link to="#">Business</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
