import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import TopBar from "./TopBar";
import { useUser } from "../userContext";

const Orders = () => {
  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }
  const {
    error,
    isPending,
    data: orders,
  } = useFetch("http://localhost:5000/order/");
  let activeCounter = 0;
  function increment(params) {
    activeCounter = activeCounter + 1;
    return activeCounter;
  }

  function getactiveCounter(params) {
    return activeCounter;
  }

  useEffect(() => {});

  return (
    <section className="home-section">
      <div className="home-content">
        <TopBar />

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
                      All Orders
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-3" data-toggle="tab">
                      Service Orders
                    </a>
                  </li>

                  {/* <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-5" data-toggle="tab">
                      Cancelled
                    </a>
                  </li> */}
                </ul>

                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs-4-1">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Buyer</th>
                            <th>Email</th>
                            <th>Date&Time</th>
                            <th>Status</th>
                            <th>Order Details</th>
                          </tr>

                          {orders
                            .reverse()
                            .slice()
                            .map((order) =>
                              order.productsDetail.length > 0 ? (
                                <tr key={order._id + getactiveCounter()}>
                                  <td>
                                    <div>
                                      {order.shippingDetails.firstName +
                                        " " +
                                        order.shippingDetails.lastName}
                                    </div>
                                  </td>
                                  <td>
                                    <div>{order.shippingDetails.email}</div>
                                  </td>

                                  <td>{order.dateTime}</td>
                                  <td>{order.orderStatus}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() => {
                                        navigate("/admin/orderdetails", {
                                          state: {
                                            order: order,
                                          },
                                        });
                                      }}
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              ) : (
                                ""
                              )
                            )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tabs-4-3">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Buyer</th>
                            <th>Email</th>
                            <th>Date&Time</th>
                            <th>Order Details</th>
                          </tr>

                          {orders
                            .reverse()
                            .slice()
                            .map((order) =>
                              order.servicesDetails.length > 0 ? (
                                <tr key={order._id + getactiveCounter()}>
                                  <td>
                                    <div>
                                      {order.shippingDetails.firstName +
                                        " " +
                                        order.shippingDetails.lastName}
                                    </div>
                                  </td>
                                  <td>{order.shippingDetails.email}</td>
                                  <td>{order.dateTime}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() => {
                                        navigate("/admin/orderdetails", {
                                          state: {
                                            order: order,
                                          },
                                        });
                                      }}
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              ) : (
                                ""
                              )
                            )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <div className="tab-pane fade" id="tabs-4-5"> 
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                          <th>Buyer</th>
                            <th>Email</th>
                            <th>Date&Time</th>
                            <th>Order Details</th>
                          </tr>

                          {orders.slice().map(order => (
                           
                                <tr
                                key={order._id + getactiveCounter()}
                                >
                                  <td>
                                    <div>
                                    {order.shippingDetails.firstName+" "+order.shippingDetails.lastName}
                                    </div>
                                  </td>
                                  <td>{order.shippingDetails.email}</td>
                                  <td>{order.dateTime}</td>
                                  
                                  <td>
                                      <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => {
                                          // changeOrderStatus(
                                          //   singleOrder._id,
                                          //   single.productId,
                                          //   "delivered"
                                          // );
                                        }}
                                      >
                                        Complete
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => {
                                          // changeOrderStatus(
                                          //   singleOrder._id,
                                          //   single.productId,
                                          //   "canceled"
                                          // );
                                        }}
                                      >
                                        Cancel
                                      </button>
                                    </td>
                                </tr>
                            
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
