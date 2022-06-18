import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

const ShowCustomerOrders = () => {
  const user = useUser();
  const navigate = useNavigate();

  if (!user._id) {
    navigate("/login");
  }

  const userid = user._id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let Counter = 0;
  function incrementCounter(params) {
    Counter = Counter + 1;
    return Counter;
  }

  function getCounter(params) {
    return Counter;
  }

  const {
    error,
    isPending,
    data: customerOrders,
  } = useFetch(`http://localhost:5000/order/getCustomerOrders/${userid}`);
  console.log("I am customer orders", customerOrders);
  return (
    <div>
      <div
        className="row-50 justify-content-center"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          marginTop: "2%",
          marginBottom: "2%"
        }}
      >
        <div className="col-md-10 col-lg-1 col-xl-9">
          <h3>My Orders</h3>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <th>Order no</th>
                  <th>Date&Time</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Order Details</th>
                  {/* <th>Feedback</th> */}
                </tr>
                {customerOrders.reverse().map((order) => {
                  return (
                    <tr key={getCounter()}>
                      <td>{incrementCounter()}</td>
                      <td>{order.dateTime}</td>
                      <td>{order.totalBill}</td>

                      <td>{order.paymentMethod}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => {
                            navigate("/showSingleOrder", {
                              state: {
                                singleOrder: order,
                              },
                            });
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCustomerOrders;
