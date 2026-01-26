import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      img: "assets/images/blog/grid/1.jpg",
      categories: ["Mental Health"],
      date: "Jan 30, 2022",
      author: "Martin King",
      title: "6 Tips to Protect Your Mental Health When You’re Sick",
      desc: "It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...",
    },
    {
      id: 2,
      img: "assets/images/blog/grid/2.jpg",
      categories: ["Infectious", "Tips"],
      date: "Jan 30, 2022",
      author: "John Ezak",
      title: "Unsure About Wearing a Face Mask? Here’s How and Why",
      desc: "That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or hospital..",
    },
    {
      id: 3,
      img: "assets/images/blog/grid/3.jpg",
      categories: ["Life Style", "Nutrition"],
      date: "Jan 28, 2022",
      author: "Saul Wade",
      title: "Tips for Eating Healthy When You’re Working From Home",
      desc: "It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...",
    },
    {
      id: 4,
      img: "assets/images/blog/grid/4.jpg",
      categories: ["Disease", "Flu"],
      date: "Jan 30, 2022",
      author: "Mark Ezak",
      title: "Why Coronavirus Cases Among Adults Is Bad News",
      desc: "A new surge of coronavirus cases has spread across the country and while there’s still so much to learn about virus, how it’s transmitted and its long-term effects",
    },
    {
      id: 5,
      img: "assets/images/blog/grid/5.jpg",
      categories: ["Mental Health", "Sales"],
      date: "Jan 30, 2022",
      author: "Martin King",
      title: "Why Do People Get Kidney Stones in the Summer?",
      desc: "Summer may have just officially started, but kidney stone season began a couple of weeks ago. Doctors see an increase in kidney stone cases when the weather warms up...",
    },
    {
      id: 6,
      img: "assets/images/blog/grid/6.jpg",
      categories: ["Infectious", "Disease"],
      date: "Feb 07, 2022",
      author: "Marie Black",
      title: "Do Any Drugs Really Work to Treat Coronavirus?",
      desc: "While most people who get COVID-19 are able to recover at home, the rush is on to find a treatment that’s safe and effective against life-threatening cases of the disease...",
    },
  ];

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
              <h1 className="pagetitle__heading">Blogs</h1>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-grid">
        <div className="container">
          <div className="row">
            {blogPosts.map((post) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
                <div className="post-item">
                  <div className="post__img">
                    <Link to="/blog-details">
                      <img src={post.img} alt={post.title} loading="lazy" />
                    </Link>
                  </div>

                  <div className="post__body">
                    <div className="post__meta-cat">
                      {post.categories.map((cat, index) => (
                        <Link to="#" key={index}>
                          {cat}
                        </Link>
                      ))}
                    </div>

                    <div className="post__meta d-flex">
                      <span className="post__meta-date">{post.date}</span>
                      <Link className="post__meta-author" to="#">
                        {post.author}
                      </Link>
                    </div>

                    <h4 className="post__title">
                      <Link to="#">{post.title}</Link>
                    </h4>

                    <p className="post__desc">{post.desc}</p>

                    <Link
                      to="/blog-details"
                      className="btn btn__secondary btn__link btn__rounded"
                    >
                      <span>Read More</span>
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-12 text-center">
              <nav className="pagination-area">
                <ul className="pagination justify-content-center">
                  <li>
                    <Link className="current" to="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
