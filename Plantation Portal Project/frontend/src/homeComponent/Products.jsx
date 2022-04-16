import React from "react";
import { Link } from "react-router-dom"; 
const Products = () => {
    return ( 
      <section className="section section-md bg-default">
        <div className="container">
          <h2 className="text-primary">Our current favorites</h2>
          <div className="row row-40 justify-content-center">
            <div className="col-sm-6 col-md-12 col-lg-6 wow fadeInLeft" data-wow-delay="0s">
              <div className="oh-desktop">
                <article className="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
                  <div className="unit flex-row flex-lg-column">
                    <div className="unit-left">
                      <div className="product-figure">
                        <img src="images/lavender.jpg" alt="" width="570" height="655"/>
                        <div className="product-button">
                          <Link className="button button-md button-white button-ujarak" to="#">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="unit-body">
                      <h6 className="product-title"><Link to="#">Avocados</Link></h6>
                      <div className="product-price-wrap">
                        <div className="product-price product-price-old">$59.00</div>
                        <div className="product-price">$28.00</div>
                      </div><Link className="button button-sm button-secondary button-ujarak" to="#">Add to cart</Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-md-5 col-lg-6">
              <div className="row row-30 justify-content-center">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <div className="oh-desktop">
                    <article className="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
                      <div className="unit flex-row flex-lg-column">
                        <div className="unit-left">
                          <div className="product-figure"><img src="images/aocado-seeds.jpg" alt="" width="270" height="280"/>
                            <div className="product-button"><Link className="button button-md button-white button-ujarak" to="#">Add to cart</Link></div>
                          </div>
                        </div>
                        <div className="unit-body">
                          <h6 className="product-title"><Link to="#">Avocados</Link></h6>
                          <div className="product-price-wrap">
                            <div className="product-price product-price-old">$59.00</div>
                            <div className="product-price">$28.00</div>
                          </div><Link className="button button-sm button-secondary button-ujarak" to="#">Add to cart</Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <div className="oh-desktop">
                    <article className="product product-2 box-ordered-item wow slideInLeft" data-wow-delay="0s">
                      <div className="unit flex-row flex-lg-column">
                        <div className="unit-left">
                          <div className="product-figure"><img src="images/corn-plant.jpg" alt="" width="270" height="280"/>
                            <div className="product-button"><Link className="button button-md button-white button-ujarak" to="#">Add to cart</Link></div>
                          </div>
                        </div>
                        <div className="unit-body">
                          <h6 className="product-title"><Link to="#">Corn</Link></h6>
                          <div className="product-price-wrap">
                            <div className="product-price">$27.00</div>
                          </div><Link className="button button-sm button-secondary button-ujarak" to="#">Add to cart</Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <div className="oh-desktop">
                    <article className="product product-2 box-ordered-item wow slideInLeft" data-wow-delay="0s">
                      <div className="unit flex-row flex-lg-column">
                        <div className="unit-left">
                          <div className="product-figure"><img src="images/artichoke-plant.jpg" alt="" width="270" height="280"/>
                            <div className="product-button"><Link className="button button-md button-white button-ujarak" to="#">Add to cart</Link></div>
                          </div>
                        </div>
                        <div className="unit-body">
                          <h6 className="product-title"><Link to="#">Artichokes</Link></h6>
                          <div className="product-price-wrap">
                            <div className="product-price">$23.00</div>
                          </div><Link className="button button-sm button-secondary button-ujarak" to="#">Add to cart</Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <div className="oh-desktop">
                    <article className="product product-2 box-ordered-item wow slideInRight" data-wow-delay="0s">
                      <div className="unit flex-row flex-lg-column">
                        <div className="unit-left">
                          <div className="product-figure"><img src="images/broccoli-plant.jpg" alt="" width="270" height="280"/>
                            <div className="product-button"><Link className="button button-md button-white button-ujarak" to="#">Add to cart</Link></div>
                          </div>
                        </div>
                        <div className="unit-body">
                          <h6 className="product-title"><Link to="#">Broccoli</Link></h6>
                          <div className="product-price-wrap">
                            <div className="product-price">$25.00</div>
                          </div><Link className="button button-sm button-secondary button-ujarak" to="#">Add to cart</Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default Products;