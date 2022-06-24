import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavbarUpdate } from "../userContext";

const Blogs = ({ count }) => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:5000/blogs/");
  const { changeNavBold } = useNavbarUpdate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/*conditional render if left is false, do not render */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {!count && (
        <section className="breadcrumbs-custom-inset">
          <div className="breadcrumbs-custom context-dark bg-overlay-33">
            <div className="container">
              <h2 className="breadcrumbs-custom-title">Blogs</h2>
              <ul className="breadcrumbs-custom-path">
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      changeNavBold("home");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="active">Blogs</li>
              </ul>
            </div>
            <div
              className="box-position"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/blogs.jpg"
                })`,
              }}
            ></div>
          </div>
        </section>
      )}
      <section className="section section-md bg-default">
        <div className="container">
          <div className="oh">
            <h2 className="text-primary">Blogs of the Week</h2>
          </div>
          <div className="row row-30 justify-content-center">
            {blogs.slice(0, count).map((blog) => (
              <div
                className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight"
                data-wow-delay="0s"
                key={blog._id}
              >
                <article className="team-classic">
                  <Link className="team-classic-figure" to="#">
                    <img
                      src={blog.image}
                      alt=""
                      style={{ width: "370px", height: "406px" }}
                    />
                  </Link>
                  <div className="team-classic-caption">
                    <h5 className="team-classic-name">
                      <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                    </h5>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blogs;
