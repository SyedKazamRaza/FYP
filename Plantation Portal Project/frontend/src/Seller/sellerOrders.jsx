import React from "react";
import TopBar from "./TopBar";

function SellerOrders(props) {
  return (
    <div>
      <section className="home-section">
        <div className="home-content">
          <TopBar />
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Orders</div>
                <div className="number">64</div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">New Orders</div>
                <div className="number">3</div>
              </div>
              <i className="bx bxs-message-alt-add cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Active Orders</div>
                <div className="number">12</div>
              </div>
              <i className="bx bxs-cart-add cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Delivered Orders</div>
                <div className="number">40</div>
              </div>
              <i className="bx bxs-home-circle cart four"></i>
            </div>
          </div>
        </div>

        <div className="order-container">
          <div className="row row-50 justify-content-center">
            <div className="col-md-10 col-lg-1 col-xl-7">
              <h2 className="text-primary">Manage Orders</h2>
              <div
                className="tabs-custom tabs-horizontal tabs-line"
                id="tabs-5"
              >
                <ul className="nav nav-tabs">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      href="#tabs-4-1"
                      data-toggle="tab"
                    >
                      Active
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-2" data-toggle="tab">
                      Late
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-3" data-toggle="tab">
                      Delivered
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-4" data-toggle="tab">
                      Completed
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-5" data-toggle="tab">
                      Cancelled
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs-4-1">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Seller</th>
                            <th>Store</th>
                            <th>Due on</th>
                            <th>Buyer</th>
                            <th>Total</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Active</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Active</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Active</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-4-2">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Seller</th>
                            <th>Store</th>
                            <th>Due on</th>
                            <th>Buyer</th>
                            <th>Total</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Late</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Late</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-4-3">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Seller</th>
                            <th>Store</th>
                            <th>Due on</th>
                            <th>Buyer</th>
                            <th>Total</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Delivered</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Delivered</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Delivered</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-4-4">
                    <div
                      className="table-responsive"
                      style={{ marginLeft: "-138px" }}
                    >
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Seller</th>
                            <th>Store</th>
                            <th>Due on</th>
                            <th>Delivered At</th>
                            <th>Buyer</th>
                            <th>Total</th>
                            <th>Ratng</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <i className="fa fa-star"></i> 5
                            </td>
                            <td>
                              <p className="status">Completed</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <i className="fa fa-star"></i> 5
                            </td>
                            <td>
                              <p className="status">Completed</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <i className="fa fa-star"></i> 5
                            </td>
                            <td>
                              <p className="status">Completed</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              Paradise Store
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <i className="fa fa-star"></i> 5
                            </td>
                            <td>
                              <p className="status">Completed</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-4-5">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Seller</th>
                            <th>Store</th>
                            <th>Due on</th>
                            <th>Buyer</th>
                            <th>Total</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Cancelled</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Cancelled</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="seller-dashboard.html">Peter</a>
                            </td>
                            <td>
                              <a href="order-detals.html">Paradise Store</a>
                              <br />
                              <p className="products">
                                (Sunflower + Seeds Pack)
                              </p>
                            </td>
                            <td>May 12</td>
                            <td>May 12</td>
                            <td>Peter</td>
                            <td>Rs 2000</td>
                            <td>
                              <p className="status">Cancelled</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SellerOrders;
