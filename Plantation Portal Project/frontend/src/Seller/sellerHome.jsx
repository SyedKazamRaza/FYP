import React from "react";
import TopBar from "./TopBar";
// import "./seller.css"

function SellerHome(props) {
  return (
    <section className="section">
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

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date</li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                  <li>
                    <div>20 March 2022</div>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                  <li>
                    <div>Customer's Name</div>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Sales</li>
                  <li>
                    <div>Delivered</div>
                  </li>
                  <li>
                    <div>Pending</div>
                  </li>
                  <li>
                    <div>Returned</div>
                  </li>
                  <li>
                    <div>Delivered</div>
                  </li>
                  <li>
                    <div>Pending</div>
                  </li>
                  <li>
                    <div>Returned</div>
                  </li>
                  <li>
                    <div>Delivered</div>
                  </li>
                  <li>
                    <div>Pending</div>
                  </li>
                  <li>
                    <div>Delivered</div>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Total</li>
                  <li>
                    <div>Rs 204.98</div>
                  </li>
                  <li>
                    <div>Rs 24.55</div>
                  </li>
                  <li>
                    <div>Rs 25.88</div>
                  </li>
                  <li>
                    <div>Rs 170.66</div>
                  </li>
                  <li>
                    <div>Rs 56.56</div>
                  </li>
                  <li>
                    <div>Rs 44.95</div>
                  </li>
                  <li>
                    <div>Rs 67.33</div>
                  </li>
                  <li>
                    <div>Rs 23.53</div>
                  </li>
                  <li>
                    <div>Rs 46.52</div>
                  </li>
                </ul>
              </div>
              <div className="button-area">
                <div className="d-flex">
                  <div className="button button-block button-all">See All</div>
                </div>
              </div>
            </div>
            <div className="top-sales box">
              <div className="title">Top Seling Product</div>
              <h3>( What's Trending This Week )</h3>
              <ul className="top-sales-details">
                <li>
                  <div>
                    <img src="images/product/prickly-cactus.jpg" alt="" />
                    <span className="product">Prickly Cactus</span>
                  </div>
                  <span className="price">Rs 107</span>
                </li>
                <li>
                  <div>
                    <img src="images/product/prickly-cactus.jpg" alt="" />
                    <span className="product">Prickly Cactus</span>
                  </div>
                  <span className="price">Rs 107</span>
                </li>

                <li>
                  <div>
                    <img src="images/product/prickly-cactus.jpg" alt="" />
                    <span className="product">Prickly Cactus</span>
                  </div>
                  <span className="price">Rs 107</span>
                </li>
                <li>
                  <div>
                    <img src="images/product/prickly-cactus.jpg" alt="" />
                    <span className="product">Prickly Cactus</span>
                  </div>
                  <span className="price">Rs 107</span>
                </li>
                <li>
                  <div>
                    <img src="images/product/prickly-cactus.jpg" alt="" />
                    <span className="product">Prickly Cactus</span>
                  </div>
                  <span className="price">Rs 107</span>
                </li>
                <li>
                  <div>
                    <img src="images/product/prickly-cactus.jpg" alt="" />
                    <span className="product">Prickly Cactus</span>
                  </div>
                  <span className="price">Rs 107</span>
                </li>
                <li>
                  <div>
                    <img src="images/product/prickly-cactus.jpg" alt="" />
                    <span className="product">Prickly Cactus</span>
                  </div>
                  <span className="price">Rs 107</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SellerHome;
