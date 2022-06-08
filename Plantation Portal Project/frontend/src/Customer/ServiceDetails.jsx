//useParams allow us to grab route parameters (changable) from the url
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import { useState, useEffect } from "react";
// import { useCartUpdate } from "./CartContext";
// import {useUser} from "./userContext";

import { useCartUpdate } from "./CartContext";

const ServiceDetails = () => {
  const { id } = useParams(); //id is the route parameter name we want to fetch
  const {
    data: service,
    error,
    isPending,
  } = useFetch("http://localhost:5000/services/" + id);
  const [price, setPrice] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);

  const { handleAddServicesToCart } = useCartUpdate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrice(service.s_price * length * width);
  };

  const handleAddToCartBuy = () => {};

  const addServiceToCart = () => {
    if (length === 0) {
      alert("Enter valid length");
    }
    if (width === 0) {
      alert("Enter valid width");
    }
    handleAddServicesToCart(service, length, width, price);
  };

  return (
    <div className="page">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {service && (
        <div>
          <section className="breadcrumbs-custom-inset">
            <div className="breadcrumbs-custom context-dark bg-overlay-39">
              <div className="container">
                <h2 className="breadcrumbs-custom-title">{service.s_title}</h2>
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <Link to="/">Services</Link>
                  </li>
                  <li className="active">{service.s_title}</li>
                </ul>
              </div>
              <div
                className="box-position"
                style={{ backgroundImage: `url(${service.s_image})` }}
              ></div>
            </div>
          </section>
          <section className="section section-md section-first bg-default text-md-left">
            <div className="container">
              <div className="row row-50 justify-content-center">
                <div className="col-md-10 col-lg-5 col-xl-6">
                  <h3>{service.s_title}</h3>
                  <br />
                  <h4>What it'll include</h4>
                  <br />

                  <p>{service.s_details}</p>
                </div>
                <div className="col-md-10 col-lg-7 col-xl-6">
                  <h2 className="text-primary">
                    Make Your Own {service.s_title}
                  </h2>
                  <div className="tabs-custom tabs-horizontal tabs-line">
                    <ul className="nav nav-tabs">
                      <li className="nav-item" role="presentation">
                        <div className="nav-link active" data-toggle="tab">
                          Tell Us Your Dimensions
                        </div>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="tabs-4-1">
                        <form
                          className="rd-form rd-form-variant-2 rd-mailform"
                          data-form-output="form-output-global"
                          data-form-type="contact"
                          method="post"
                          onSubmit={handleSubmit}
                        >
                          <div className="row row-14 gutters-14">
                            <h6>
                              Dimensions of the area on which Fairy Garden is to
                              be built
                            </h6>
                            <div className="col-md-12">
                              <div className="form-wrap">
                                <label htmlFor="length">
                                  Length (in inches)
                                </label>
                                <input
                                  className="form-input"
                                  id="length"
                                  type="text"
                                  name="length"
                                  placeholder={length}
                                  data-constraints="@Numeric @Required"
                                  onChange={(e) =>
                                    setLength(parseInt(e.target.value))
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-wrap">
                                <label htmlFor="width">Width (in inches)</label>
                                <input
                                  className="form-input"
                                  id="width"
                                  type="text"
                                  name="width"
                                  placeholder={width}
                                  data-constraints="@Numeric @Required"
                                  onChange={(e) =>
                                    setWidth(parseInt(e.target.value))
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-md group-middle">
                            <p className="button-width-xl-230 button-pipaluk">
                              Price = {price}
                            </p>
                            <button
                              className="button button-width-xl-230 button-primary button-pipaluk"
                              onClick={handleAddToCartBuy}
                            >
                              Calculate Price
                            </button>
                          </div>
                        </form>
                        {price !== 0 && (
                          <div className="row pb-3">
                            <div className="col d-grid">
                              <button
                                className="button button-primary button-ujarak wow fadeInUp"
                                onClick={() => {}}
                              >
                                Buy
                              </button>
                            </div>
                            <div className="col d-grid">
                              <button
                                className="button button-primary button-ujarak wow fadeInUp"
                                onClick={() => {
                                  addServiceToCart();
                                }}
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
