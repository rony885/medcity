import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      image: "assets/images/blog/grid/1.jpg",
      category: ["Mental Health"],
      date: "Jan 30, 2022",
      author: "Martin King",
      title: "6 Tips to Protect Your Mental Health When You’re Sick",
      desc: "It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...",
    },
    {
      id: 2,
      image: "assets/images/blog/grid/2.jpg",
      category: ["Infectious", "Tips"],
      date: "Jan 30, 2022",
      author: "John Ezak",
      title: "Unsure About Wearing a Face Mask? Here’s How and Why",
      desc: "That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or hospital...",
    },
    {
      id: 3,
      image: "assets/images/blog/grid/3.jpg",
      category: ["Life Style", "Nutrition"],
      date: "Jan 28, 2022",
      author: "Saul Wade",
      title: "Tips for Eating Healthy When You’re Working From Home",
      desc: "It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...",
    },
  ];

  return (
    <section className="blog-grid pb-50 mt-0 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h2 className="heading__subtitle">Resource Library</h2>
              <h3 className="heading__title">Recent Articles</h3>
            </div>
          </div>
        </div>

        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="post-item">
                <div className="post__img">
                  <a href={post.link}>
                    <img src={post.image} alt="post imagee" loading="lazy" />
                  </a>
                </div>

                <div className="post__body">
                  <div className="post__meta-cat">
                    {post.category.map((cat, index) => (
                      <Link key={index} to="#">
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
      </div>
    </section>
  );
};

export default Blog;
