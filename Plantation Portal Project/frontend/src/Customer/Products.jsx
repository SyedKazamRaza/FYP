import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCartUpdate } from "./CartContext";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { handleAddToCart } = useCartUpdate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/allProducts")
      .then((response) => {
        if (response.data.length > 0) {
          setAllProducts(
            response.data.map((prod) => {
              return prod;
            })
          );
          console.log("Home screen response is:", response.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="section section-md bg-default">
      <div className="container">
        <h2 className="text-primary">Our current favorites</h2>

        {allProducts.length !== 0 ? (
          <div className="row row-40 justify-content-center">
            <div
              className="col-sm-6 col-md-12 col-lg-6 wow fadeInLeft"
              data-wow-delay="0s"
            >
              <div className="oh-desktop">
                <article
                  className="product product-2 box-ordered-item wow slideInRight"
                  data-wow-delay="0s"
                >
                  <div className="unit flex-row flex-lg-column">
                    <div className="unit-left">
                      <div className="product-figure">
                        <img
                          src={allProducts[0].imageurl}
                          alt=""
                          width="570"
                          height="655"
                        />
                        <div className="product-button">
                          <div
                            className="button button-md button-white button-ujarak"
                            onClick={() => {
                              handleAddToCart(allProducts[0], 1);
                            }}
                          >
                            Add to cart
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="unit-body">
                      <h6 className="product-title">
                        <div>{allProducts[0].productName}</div>
                      </h6>
                      <div className="product-price-wrap">
                        <div className="product-price product-price-old">
                          Rs {allProducts[0].price + 200}
                        </div>
                        <div className="product-price">
                          Rs {allProducts[0].price} /-
                        </div>
                      </div>
                      <div
                        className="button button-sm button-secondary button-ujarak"
                        onClick={() => {
                          handleAddToCart(allProducts[0], 1);
                        }}
                      >
                        Add to cart
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-md-5 col-lg-6">
              <div className="row row-30 justify-content-center">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <div className="oh-desktop">
                    <article
                      className="product product-2 box-ordered-item wow slideInRight"
                      data-wow-delay="0s"
                    >
                      <div className="unit flex-row flex-lg-column">
                        <div className="unit-left">
                          <div className="product-figure">
                            <img
                              src={allProducts[1].imageurl}
                              alt=""
                              width="270"
                              height="280"
                              style={{
                                maxWidth:"270",
                                maxHeight:"280"
                              }}
                            />
                            <div className="product-button">
                              <div
                                className="button button-md button-white button-ujarak"
                                onClick={() => {
                                  handleAddToCart(allProducts[1], 1);
                                }}
                              >
                                Add to cart
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="unit-body">
                          <h6 className="product-title">
                            <div>{allProducts[1].productName}</div>
                          </h6>
                          <div className="product-price-wrap">
                            <div className="product-price product-price-old">
                              Rs {allProducts[1].price + 200}
                            </div>
                            <div className="product-price">
                              Rs {allProducts[1].price} /-
                            </div>
                          </div>
                          <div
                            className="button button-sm button-secondary button-ujarak"
                            onClick={() => {
                              handleAddToCart(allProducts[1], 1);
                            }}
                          >
                            Add to cart
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <div className="oh-desktop">
                    <article
                      className="product product-2 box-ordered-item wow slideInLeft"
                      data-wow-delay="0s"
                    >
                      <div className="unit flex-row flex-lg-column">
                        <div className="unit-left">
                          <div className="product-figure">
                            <img
                              src={allProducts[2].imageurl}
                              alt=""
                              width="270"
                              height="280"
                              style={{
                                "minWidth":"270",
                                minHeight:"280",
                                maxWidth:"270",
                                maxHeight:"280"
                              }}
                            
                            />
                            <div className="product-button">
                              <div
                                className="button button-md button-white button-ujarak"
                                onClick={() => {
                                  handleAddToCart(allProducts[2], 1);
                                }}
                              >
                                Add to cart
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="unit-body">
                          <h6 className="product-title">
                            <div>{allProducts[2].productName}</div>
                          </h6>
                          <div className="product-price-wrap">
                            <div className="product-price">
                              Rs {allProducts[2].price} /-
                            </div>
                          </div>
                          <div
                            className="button button-sm button-secondary button-ujarak"
                            onClick={() => {
                              handleAddToCart(allProducts[2], 1);
                            }}
                          >
                            Add to cart
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <div className="oh-desktop">
                    <article
                      className="product product-2 box-ordered-item wow slideInLeft"
                      data-wow-delay="0s"
                    >
                      <div className="unit flex-row flex-lg-column">
                        <div className="unit-left">
                          <div className="product-figure">
                            <img
                              src={allProducts[3].imageurl}
                              alt=""
                              width="320"
                              // height="280"
                              style={{
                                width: "320px",
                                maxHeight: "200px",
                                minHeight: "200px",
                              }}
                            />
                            <div className="product-button">
                              <div
                                className="button button-md button-white button-ujarak"
                                onClick={() => {
                                  handleAddToCart(allProducts[3], 1);
                                }}
                              >
                                Add to cart
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="unit-body">
                          <h6 className="product-title">
                            <div>{allProducts[3].productName}</div>
                          </h6>
                          <div className="product-price-wrap">
                            <div className="product-price">
                              Rs {allProducts[3].price} /-
                            </div>
                          </div>
                          <div
                            className="button button-sm button-secondary button-ujarak"
                            onClick={() => {
                              handleAddToCart(allProducts[3], 1);
                            }}
                          >
                            Add to cart
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <div className="oh-desktop">
                    <article
                      className="product product-2 box-ordered-item wow slideInRight"
                      data-wow-delay="0s"
                    >
                      <div className="unit flex-row flex-lg-column">
                        <div className="unit-left">
                          <div className="product-figure">
                            <img
                              src={allProducts[6].imageurl}
                              alt=""
                              width="270"
                              height="280"
                            />
                            <div className="product-button">
                              <div
                                className="button button-md button-white button-ujarak"
                                onClick={() => {
                                  handleAddToCart(allProducts[6], 1);
                                }}
                              >
                                Add to cart
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="unit-body">
                          <h6 className="product-title">
                            <div>{allProducts[6].productName}</div>
                          </h6>
                          <div className="product-price-wrap">
                            <div className="product-price">
                              Rs {allProducts[6].price} /-
                            </div>
                          </div>
                          <div
                            className="button button-sm button-secondary button-ujarak"
                            onClick={() => {
                              handleAddToCart(allProducts[6], 1);
                            }}
                          >
                            Add to cart
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default Products;
