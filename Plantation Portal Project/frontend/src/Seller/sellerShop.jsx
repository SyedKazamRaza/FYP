import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import axios from "axios";

function SellerShop(props) {
  const [shopProducts, setShopProducts] = useState([]);
  // const shopProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data = {
    id: "61d9354e52dbabae9bd60541",
  };
  useEffect(() => {
    axios
      .post("http://localhost:5000/products/allStoreProducts", data)
      .then((response) => {
        if (response.status === 200) {
          setShopProducts(
            response.data.map((prod) => {
              return prod;
            })
          );
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const runCallback = (cb) => {
    return cb();
  };

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
            {shopProducts.map((prod) => {
              return (
                <div
                  className="col-md-4"
                  key={prod._id}
                  style={{ maxHeight: "450px", height: "450px" }}
                >
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src={prod.imageurl}
                        alt="plant"
                        style={{ maxHeight: "300px", minHeight: "300px" }}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                          <li>
                            <div className="btn btn-success text-white mt-2">
                              <i className="far fa-edit"></i>
                            </div>
                          </li>
                          <li>
                            <div className="btn btn-success text-white mt-2">
                              <i className="fas fa-trash"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="text-decoration-none">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                          }}
                        >
                          {prod.productName}
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                          {prod.rating === "0" ? (
                            <div style={{ fontStyle: "italic", color: "gray" }}>
                              Not rated yet
                            </div>
                          ) : (
                            runCallback(() => {
                              const row = [];
                              for (var i = 0; i < 5; i++) {
                                let rating = parseFloat(prod.rating).toFixed(0);
                                if (i < rating) {
                                  row.push(
                                    <i
                                      key={i}
                                      className="text-warning fa fa-star"
                                    ></i>
                                  );
                                } else {
                                  row.push(
                                    <i
                                      key={i}
                                      className="text-muted fa fa-star"
                                    ></i>
                                  );
                                }
                              }
                              return row;
                            })
                          )}
                        </li>
                      </ul>
                      <p className="text-center mb-0">Rs {prod.price} /-</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="oh button-wrap">
          <Link
            className="button button-primary button-ujarak"
            data-caption-animate="slideInUp"
            data-caption-delay="400"
            to="/seller/addProduct"
          >
            Add New Product
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SellerShop;
