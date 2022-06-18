import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavbarUpdate } from "../userContext";

function ServicesOffer(props) {
  const {
    error,
    isPending,
    data: services,
  } = useFetch("http://localhost:5000/services/");

  const { changeNavBold } = useNavbarUpdate();

  //Sample
  // const services = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-33">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">Services</h2>
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
              <li className="active">Services</li>
            </ul>
          </div>
          <div
            className="box-position"
            style={{
              backgroundImage: `url("images/our_services.jpg")`,
            }}
          ></div>
        </div>
      </section>
      <section className="section section-sm bg-default">
        <div className="container">
          <h3 className="oh-desktop">
            <span className="d-inline-block wow slideInDown">Our Services</span>
          </h3>
          <div className="row row-sm row-40 row-md-50">
            {services.slice().map((service) => (
              <div
                className="col-sm-6 col-md-12 wow fadeInRight"
                key={service._id}
              >
                <article className="product-big">
                  <div className="unit flex-column flex-md-row align-items-md-stretch">
                    <div className="unit-left">
                      <Link
                        className="product-big-figure"
                        to={`/services/${service._id}`}
                      >
                        <img
                          src={service.s_image}
                          alt=""
                          width="600"
                          height="366"
                        />
                      </Link>
                    </div>
                    <div className="unit-body">
                      <div className="product-big-body">
                        <h5 className="product-big-title text-primary">
                          <Link to={`/services/${service._id}`}>
                            {service.s_title}
                          </Link>
                        </h5>
                        <p className="product-big-text">{service.s_details} </p>
                        <div className="group-sm group-middle justify-content-center">
                          <h5>Starting from {service.s_price}</h5>
                        </div>
                        <Link
                          className="button button-black-outline button-ujarak"
                          to={`/services/${service._id}`}
                        >
                          Get a Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesOffer;
