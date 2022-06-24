import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

const SearchCustomer = () => {
  const { data: blogs } = useFetch("http://localhost:5000/blogs/");
  const { data: services } = useFetch("http://localhost:5000/services/");
  const { data: products } = useFetch(
    "http://localhost:5000/products/allProducts/"
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let categoryProducts = [];

  const location = useLocation();
  const searchkey = location.state.searchkey.toLowerCase();

  let MatchProducts = products.filter((st) => {
    return st.productName.toLowerCase().includes(searchkey);
  });

  let MatchServices = services.filter((src) => {
    return src.s_title.toLowerCase().includes(searchkey);
  });

  let MatchBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(searchkey);
  });

  function getCategoryProds(category) {
    categoryProducts = products.filter((item) => {
      return item.category === category;
    });
  }

  const navigate = useNavigate();
  const NavigateToSingleProduct = (item) => {
    getCategoryProds(item.category);

    navigate("/single", {
      state: { product: item, relatedProducts: categoryProducts },
    });
  };

  return (
    <section className="section section-md bg-default">
      <div className="container">
        <h2 className="text-primary">Search Results for "{searchkey}"</h2>

        <div className="row row-30 justify-content-center">
          {MatchProducts.length !== 0 && (
            <>
              <h4 style={{ textAlign: "left" }} className="text-primary">
                {MatchProducts.length} Products found related to "{searchkey}"{" "}
              </h4>
              <br />
              {MatchProducts.map((product, index) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight"
                    style={{
                      maxHeight: "400px",
                      height: "400px",
                      width: "300px",
                      maxWidth: "300px",
                    }}
                    key={index}
                  >
                    <div className="card mb-4 product-wap rounded-0">
                      <div className="card rounded-0">
                        <img
                          className="card-img rounded-0 img-fluid"
                          alt="product"
                          src={product.imageurl}
                          style={{ maxHeight: "250px", minHeight: "250px" }}
                        />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li>
                              <div
                                className="btn btn-success text-white mt-2"
                                onClick={() => {
                                  NavigateToSingleProduct(product);
                                }}
                              >
                                <i className="far fa-eye"></i>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="text-decoration-none">
                          <h5>{product.productName}</h5>
                        </div>
                        <p className="text-center mb-0">Rs. {product.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {MatchServices.length !== 0 && (
            <>
              <h4 style={{ textAlign: "left" }} className="text-primary">
                {MatchServices.length} Services found related to "{searchkey}"{" "}
              </h4>
              {MatchServices.map((service, index) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight"
                    style={{
                      maxHeight: "400px",
                      height: "400px",
                      width: "300px",
                      maxWidth: "300px",
                    }}
                    key={index}
                  >
                    <div className="card mb-4 product-wap rounded-0">
                      <div className="card rounded-0">
                        <img
                          className="card-img rounded-0 img-fluid"
                          alt="service"
                          src={service.s_image}
                          style={{ maxHeight: "250px", minHeight: "250px" }}
                        />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="btn btn-success text-white mt-2"
                                to={`/services/${service._id}`}
                              >
                                <i className="far fa-eye"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <Link
                          to={`/services/${service._id}`}
                          className="text-decoration-none"
                        >
                          <h5>
                            <centre>{service.s_title}</centre>
                          </h5>
                        </Link>

                        <p className="text-center mb-0">
                          Rs. {service.s_price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {MatchBlogs.length !== 0 && (
            <>
              <h4 style={{ textAlign: "left" }} className="text-primary">
                {MatchBlogs.length} Blogs found related to "{searchkey}"{" "}
              </h4>
              <br />
              {MatchBlogs.map((blog, index) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight"
                    style={{
                      maxHeight: "400px",
                      height: "400px",
                      width: "300px",
                      maxWidth: "300px",
                    }}
                    key={index}
                  >
                    <div className="card mb-4 product-wap rounded-0">
                      <div className="card rounded-0">
                        <img
                          className="card-img rounded-0 img-fluid"
                          alt="blogs"
                          src={blog.image}
                          style={{ maxHeight: "250px", minHeight: "250px" }}
                        />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                className="btn btn-success text-white mt-2"
                                to={`/blogs/${blog._id}`}
                              >
                                <i className="far fa-eye"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <Link
                          to={`/blogs/${blog._id}`}
                          className="text-decoration-none"
                        >
                          <h5>
                            <centre>{blog.title}</centre>
                          </h5>
                        </Link>

                        <Link to={`/blogs/${blog._id}`}>
                          <p className="text-center mb-0">Read more...</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchCustomer;
