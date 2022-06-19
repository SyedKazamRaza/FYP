import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../userContext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function SellerShop(props) {
  const user = useUser();
  let [updater, setUpdater] = useState(0);
  const navigate = useNavigate();

  if (!user._id) {
    navigate("/login");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const storeid = user._id;

  const [homeStats, setHomeStats] = useState({});

  const [shopProducts, setShopProducts] = useState([]);
  // const shopProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data = {
    id: storeid,
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

    axios
      .get(`http://localhost:5000/seller/sellerHome/${storeid}`)
      .then((response) => {
        if (response.status === 200) {
          // console.log("Stats: ", response.data);
          setHomeStats(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

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

    axios
      .get(`http://localhost:5000/seller/sellerHome/${storeid}`)
      .then((response) => {
        if (response.status === 200) {
          // console.log("Stats: ", response.data);
          setHomeStats(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, [updater]);

  const runCallback = (cb) => {
    return cb();
  };

  const confirmDelete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h2 style={{ color: "red" }}>Are you sure?</h2>
            <p>You want to delete this product?</p>
            <button
              className="button button-primary button-pipaluk"
              onClick={onClose}
            >
              No
            </button>
            {"    "}
            <button
              className="button button-primary button-pipaluk"
              onClick={() => {
                deleteProduct(id);
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      },
    });
  };

  function deleteProduct(prodId) {
    const url = `http://localhost:5000/products/deleteProduct/${prodId}`;
    axios
      .delete(url)
      .then((response) => {
        if (response.status === 200) {
          let t = updater + 1;
          setUpdater(t);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
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
                              <i
                                className="far fa-edit"
                                onClick={() => {
                                  navigate("/seller/editProduct", {
                                    state: { product: prod },
                                  });
                                }}
                              ></i>
                            </div>
                          </li>

                          <li>
                            <div className="btn btn-success text-white mt-2">
                              <i
                                className="fas fa-trash"
                                onClick={() => {
                                  confirmDelete(prod._id);
                                  // deleteProduct(prod._id);
                                }}
                              ></i>
                            </div>
                          </li>

                          <li>
                            <div className="btn btn-success text-white mt-2">
                              <i
                                class="fa-solid fa-eye"
                                onClick={() => {
                                  navigate("/seller/single", {
                                    state: { product: prod },
                                  });
                                }}
                              ></i>
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

          {shopProducts.length === 0 ? <h3>No product in Store</h3> : ""}
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
        <div style={{ height: "50px" }}></div>
      </section>
    </div>
  );
}

export default SellerShop;
