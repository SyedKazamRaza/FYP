import React from "react";
import TopBar from "./TopBar";

function SellerShop(props) {
  return (
    <div>
      <section className="home-section">
        <div className="home-content">
         <TopBar />
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Orders</div>
                <div className="number">45</div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Earnings</div>
                <div className="number">Rs 38,876</div>
              </div>
              <i className="bx bxs-wallet-alt cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Clients</div>
                <div className="number">42</div>
              </div>
              <i className="bx bxs-group cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Products</div>
                <div className="number">86</div>
              </div>
              <i className="bx bxs-store-alt cart four"></i>
            </div>
          </div>
        </div>
        <div className="order-container">
          <h2 className="text-primary">Manage Shop</h2>
          <div className="row row-40 justify-content-center">
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={`/images/red-rose.jpg`}
                    alt="plant"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-edit"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-trash"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="text-decoration-none">
                    <h6>
                      <centre>Crochet Pots</centre>
                    </h6>
                  </a>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={`/images/red-rose.jpg`}
                    alt="plant"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-edit"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-trash"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="text-decoration-none">
                    <h6>
                      <centre>Red Rose</centre>
                    </h6>
                  </a>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={`/images/red-rose.jpg`}
                    alt="plant"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-edit"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-trash"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="text-decoration-none">
                    <h6>
                      <centre>Red Rose</centre>
                    </h6>
                  </a>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={`/images/red-rose.jpg`}
                    alt="plant"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-edit"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-trash"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="text-decoration-none">
                    <h6>
                      <centre>Red Rose</centre>
                    </h6>
                  </a>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={`/images/red-rose.jpg`}
                    alt="plant"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-edit"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-trash"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="text-decoration-none">
                    <h6>
                      <centre>Red Rose</centre>
                    </h6>
                  </a>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={`/images/red-rose.jpg`}
                    alt="plant"
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-edit"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-trash"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a href="shop-single.html" className="text-decoration-none">
                    <h6>
                      <centre>Red Rose</centre>
                    </h6>
                  </a>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="oh button-wrap">
          <a
            className="button button-primary button-ujarak"
            href="add-product.html"
            data-caption-animate="slideInUp"
            data-caption-delay="400"
          >
            Add New Product
          </a>
        </div>
      </section>
    </div>
  );
}

export default SellerShop;
