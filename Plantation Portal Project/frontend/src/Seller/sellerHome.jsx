import React, { useState } from "react";
import TopBar from "./TopBar";
import useFetch from "../useFetch";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

// import "./seller.css"

function SellerHome(props) {
  const [numberOfSales, setNumberOfSales] = useState(3);
  const user = useUser();
  const navigate = useNavigate();

  if (!user._id) {
    // alert("User is not login");
    navigate("/register");
  }

  const storeid = user._id;

  const { data: homeStats } = useFetch(
    `http://localhost:5000/seller/sellerHome/${storeid}`
  );

  console.log("Seller home stats: ", homeStats);

  const {
    error,
    isPending,
    data: products,
  } = useFetch(`http://localhost:5000/seller/topProducts/${storeid}`);

  console.log("Seller home prods: ", products);

  const { data: orders } = useFetch(
    `http://localhost:5000/seller/recentSales/${storeid}`
  );

  return (
    <section className="section">
      <section className="home-section">
        <div className="home-content">
          <TopBar />
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Orders</div>
                <div className="number">{homeStats.totalOrders}</div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Earnings</div>
                <div className="number">Rs {homeStats.totalEarning}</div>
              </div>
              <i className="bx bxs-wallet-alt cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Clients</div>
                <div className="number"> {homeStats.numberOfClients}</div>
              </div>
              <i className="bx bxs-group cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Products</div>
                <div className="number">{homeStats.numberOfProducts}</div>
              </div>
              <i className="bx bxs-store-alt cart four"></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date & Time</li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                </ul>
                <ul className="details">
                  <li className="topic">Status</li>
                </ul>
                <ul className="details">
                  <li className="topic">Total</li>
                </ul>
              </div>

              {orders
                .reverse()
                .slice(0, numberOfSales)
                .map((singleOrder) => {
                  return singleOrder.productsDetail.map((single) => {
                    return single.sellerId === "61d9354e52dbabae9bd60541" ? (
                      <div className="sales-details" key={singleOrder._id}>
                        <ul className="details">
                          <li>
                            <div>{singleOrder.dateTime}</div>
                          </li>
                        </ul>
                        <ul className="details">
                          <li>
                            <div>
                              {singleOrder.userInfo[0].fname +
                                " " +
                                singleOrder.userInfo[0].lname}
                            </div>
                          </li>
                        </ul>
                        <ul className="details">
                          <li>
                            <div>{single.status}</div>
                          </li>
                        </ul>
                        <ul className="details">
                          <li>
                            <div>Rs. {single.total}</div>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    );
                  });
                })}

              <div className="button-area ">
                <div className="d-flex">
                  <div
                    className="button button-block button-all"
                    onClick={() => {
                      setNumberOfSales(numberOfSales + 3);
                    }}
                  >
                    See More
                  </div>
                </div>
              </div>
            </div>

            <div className="top-sales box">
              <div className="title">Top Selling Product</div>
              <h3>( What's Trending This Week )</h3>
              {products.slice(0, 10).map((product) => (
                <ul className="top-sales-details" key={product._id}>
                  <li>
                    <a href="#">
                      <img src={product.imageurl} alt="" />
                      <span className="product">{product.productName}</span>
                    </a>
                    <span className="price">Rs. {product.price}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SellerHome;
