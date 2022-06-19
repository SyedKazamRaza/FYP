import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import useFetch from "../useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../userContext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function SellerOrders(props) {
  const user = useUser();
  const navigate = useNavigate();
  if (!user._id) {
    navigate("/login");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const storeid = user._id;

  const [shopOrderProducts, setShopOrderProducts] = useState([]);
  const [shopOrderStats, setShopOrderStats] = useState({});
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/seller/sellerOrders/${storeid}`)
      .then((response) => {
        if (response.data.length > 0) {
          setShopOrderProducts(
            response.data.map((prod) => {
              return prod;
            })
          );
        }
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:5000/seller/sellerOrdersStats/${storeid}`)
      .then((response) => {
        if (response.status === 200) {
          setShopOrderStats(response.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/seller/sellerOrders/${storeid}`)
      .then((response) => {
        if (response.data.length > 0) {
          setShopOrderProducts(
            response.data.map((prod) => {
              return prod;
            })
          );
        }
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:5000/seller/sellerOrdersStats/${storeid}`)
      .then((response) => {
        if (response.status === 200) {
          setShopOrderStats(response.data);
        }
      })
      .catch((err) => console.log(err));
  }, [temp]);

  // useEffect(()=>{

  // },[temp])

  let activeCounter = 0;
  function increment(params) {
    activeCounter = activeCounter + 1;
    return activeCounter;
  }

  function getactiveCounter(params) {
    return activeCounter;
  }

  let completedCounter = 0;
  function incrementCompleted(params) {
    completedCounter = completedCounter + 1;
    return completedCounter;
  }

  function getCompleteCounter(params) {
    return completedCounter;
  }

  let cancelCounter = 0;
  function incrementCancel(params) {
    cancelCounter = cancelCounter + 1;
    return cancelCounter;
  }

  function getCancelCounter(params) {
    return cancelCounter;
  }

  let keyCounter = 0;
  function getKey(params) {
    keyCounter = keyCounter + 1;
    return keyCounter;
  }

  function changeOrderStatus(orderId, prodId, newStatus) {
    const dataToSend = {
      orderId: orderId,
      productId: prodId,
      newStatus: newStatus,
    };
    console.log(dataToSend);
    axios
      .post("http://localhost:5000/seller/changeOrderStatus", dataToSend)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTemp(temp + 1);
  }

  const changeStatusConfirmation = (orderid, prodId, msg, newStatus) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h2 style={{ color: "red" }}>Are you sure?</h2>
            <p>{msg}</p>
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
                changeOrderStatus(orderid, prodId, newStatus);

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

  return (
    <section className="section">
      <section className="home-section">
        <div className="home-content">
          <TopBar />
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Orders</div>
                <div className="number">
                  {shopOrderStats.numberOfActiveOrders +
                    shopOrderStats.numberOfDeliverOrders +
                    shopOrderStats.numberOfCancelledrOrders}
                </div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Active Orders</div>
                <div className="number">
                  {shopOrderStats.numberOfActiveOrders}
                </div>
              </div>
              <i className="bx bxs-message-alt-add cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Completed</div>
                <div className="number">
                  {shopOrderStats.numberOfDeliverOrders}
                </div>
              </div>
              <i className="bx bxs-cart-add cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Cancelled</div>
                <div className="number">
                  {shopOrderStats.numberOfCancelledrOrders}
                </div>
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
                    <a className="nav-link" href="#tabs-4-3" data-toggle="tab">
                      Delivered
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
                            <th>Order#</th>
                            <th>Buyer</th>
                            <th>Email</th>
                            <th>Date&Time</th>
                            <th>Order Details</th>
                            <th></th>
                          </tr>

                          {shopOrderProducts
                            .reverse()
                            .map((singleOrder, index1) => {
                              return singleOrder.productsDetail.map(
                                (single, index2) => {
                                  return single.sellerId === storeid &&
                                    single.status === "active" ? (
                                    <tr
                                      key={singleOrder._id + getactiveCounter()}
                                    >
                                      <td>{increment()}</td>
                                      <td>
                                        <div>
                                          {singleOrder.userInfo[0].fname +
                                            " " +
                                            singleOrder.userInfo[0].lname}
                                        </div>
                                      </td>
                                      <td>
                                        <div>
                                          {singleOrder.userInfo[0].email}
                                        </div>
                                      </td>

                                      <td>{singleOrder.dateTime}</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-success"
                                          onClick={() => {
                                            navigate("/seller/singleOrder", {
                                              state: {
                                                product: singleOrder,
                                                status: single.status,
                                              },
                                            });
                                          }}
                                        >
                                          View
                                        </button>
                                      </td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-success"
                                          onClick={() => {
                                            changeStatusConfirmation(
                                              singleOrder._id,
                                              single.productId,
                                              "You want to mark this order as Complete?",
                                              "delivered"
                                            );
                                          }}
                                        >
                                          Complete
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          onClick={() => {
                                            changeStatusConfirmation(
                                              singleOrder._id,
                                              single.productId,
                                              "You want to mark this order as Cancel?",
                                              "canceled"
                                            );
                                          }}
                                        >
                                          Cancel
                                        </button>
                                      </td>
                                    </tr>
                                  ) : (
                                    <tr key={getKey()}></tr>
                                  );
                                }
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tabs-4-3">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Order#</th>
                            <th>Buyer</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                          </tr>

                          {shopOrderProducts.map((singleOrder) => {
                            return singleOrder.productsDetail.map((single) => {
                              return single.sellerId === storeid &&
                                single.status === "delivered" ? (
                                <tr
                                  key={singleOrder._id + getCompleteCounter()}
                                >
                                  <td>{incrementCompleted()}</td>
                                  <td>
                                    <div>
                                      {singleOrder.userInfo[0].fname +
                                        " " +
                                        singleOrder.userInfo[0].lname}
                                    </div>
                                  </td>
                                  <td>{single.productName}</td>
                                  <td>{singleOrder.dateTime}</td>
                                  <td>Rs {single.total}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() => {
                                        navigate("/seller/singleOrder", {
                                          state: {
                                            product: singleOrder,
                                            status: single.status,
                                          },
                                        });
                                      }}
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              ) : (
                                <tr key={getKey()}></tr>
                              );
                            });
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tabs-4-5">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Order#</th>
                            <th>Buyer</th>
                            <th>Product</th>
                            <th>Date & Time</th>
                            <th>Total</th>
                            <th></th>
                          </tr>

                          {shopOrderProducts.map((singleOrder) => {
                            return singleOrder.productsDetail.map((single) => {
                              return single.sellerId === storeid &&
                                single.status === "canceled" ? (
                                <tr key={singleOrder._id + getCancelCounter()}>
                                  <td>{incrementCancel()}</td>
                                  <td>
                                    <div>
                                      {singleOrder.userInfo[0].fname +
                                        " " +
                                        singleOrder.userInfo[0].lname}
                                    </div>
                                  </td>
                                  <td>{single.productName}</td>
                                  <td>{singleOrder.dateTime}</td>
                                  <td>Rs {single.total}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() => {
                                        navigate("/seller/singleOrder", {
                                          state: {
                                            product: singleOrder,
                                            status: single.status,
                                          },
                                        });
                                      }}
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              ) : (
                                <tr key={getKey()}></tr>
                              );
                            });
                          })}
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
    </section>
  );
}

export default SellerOrders;
