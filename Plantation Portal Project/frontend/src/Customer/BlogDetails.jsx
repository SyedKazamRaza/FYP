//useParams allow us to grab route parameters (changable) from the url
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React, { useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams(); //id is the route parameter name we want to fetch
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:5000/blogs/" + id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <section>
          <div className="container marg50">
            <div className="row">
              <div className="col-lg-12">
                <div className="classic-blog blog-single">
                  <div className="bs-blog-img">
                    <img alt="" src={blog.image} />
                  </div>
                  <div className="bs-blog-naz">
                    <div className="bs-blog-type"></div>
                    <h2 className="text-primary">
                      <Link to="#">{blog.title}</Link>
                    </h2>
                    <div className="bs-blog-detail">
                      8 February 2022 - 11:30 AM, by Admin
                    </div>
                    <div className="bs-blog-text">{blog.content}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;
