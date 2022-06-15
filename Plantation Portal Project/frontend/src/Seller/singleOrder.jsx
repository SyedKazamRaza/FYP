import React, { useState, useEffect } from "react";
import "./singleOrder.css";
import { useLocation } from "react-router-dom";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

function SingleOrder(props) {
  const user = useUser();
  const navigate = useNavigate();

  if (!user._id) {
    navigate("/login");
  }

  const storeid = user._id;

  let location = useLocation();
  let orderDetails = location.state.product;
  let status = location.state.status;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [totalBill, setTotalBill] = useState(0);
  useEffect(() => {
    let total = 0;
    orderDetails.productsDetail.map((prod) => {
      if (
        prod.sellerId === storeid &&
        prod.status === status
      ) {
        total = total + prod.total;
      }
    });
    setTotalBill(total);
  }, []);
  return (
    <section className="section">
      <section
        style={{
          position: "relative",
          background: "#FFFFFF",
          minHeight: "100vh",
          width: "calc(100% - 240px)",
          left: "240px",
          transition: "all 0.5s ease",
        }}
      >
        <div className="home-content">
          <div className="container">
            <h3 className="text-center billing-alert">Order Details</h3>
            <div className="row mb-5">
              <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
                <div className="confirmation-card">
                  <h3 className="billing-title">User & Order Info</h3>
                  <table className="order-rable">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>
                          :{" "}
                          {orderDetails.userInfo[0].fname +
                            " " +
                            orderDetails.userInfo[0].lname}
                        </td>
                      </tr>
                      <tr>
                        <td>Phone#</td>
                        <td>: {orderDetails.userInfo[0].phno}</td>
                      </tr>
                      <tr>
                        <td>Date & Time</td>
                        <td>: {orderDetails.dateTime}</td>
                      </tr>

                      <tr>
                        <td>Payment method</td>
                        <td>: {orderDetails.paymentMethod}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
                <div className="confirmation-card">
                  <h3 className="billing-title">Billing Address</h3>
                  <table className="order-rable">
                    {orderDetails.billingAddress === "same" ? (
                      <tbody>
                        <tr>
                          <td>Address</td>
                          <td>: {orderDetails.shippingDetails.address}</td>
                        </tr>
                        <tr>
                          <td>City</td>
                          <td>: {orderDetails.shippingDetails.city}</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td>: Pakistan</td>
                        </tr>
                        <tr>
                          <td>Postcode</td>
                          <td>: {orderDetails.shippingDetails.zipCode}</td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <td>Address</td>
                          <td>: {orderDetails.billingAddress}</td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
                <div className="confirmation-card">
                  <h3 className="billing-title">Shipping Address</h3>
                  <table className="order-rable">
                    <tbody>
                      <tr>
                        <td>Address</td>
                        <td>: {orderDetails.shippingDetails.address}</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>: {orderDetails.shippingDetails.city}</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>: Pakistan</td>
                      </tr>
                      <tr>
                        <td>Postcode</td>
                        <td>: {orderDetails.shippingDetails.zipCode}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="order_details_table">
              <h3>Order Details</h3>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Store</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails.productsDetail.map((product, index) => {
                      return product.sellerId === "61d9354e52dbabae9bd60541" &&
                        product.status === status ? (
                        <tr key={index}>
                          <td>
                            <p>{product.productName}</p>
                          </td>
                          <td>
                            <p>{product.storeName}</p>
                          </td>
                          <td>
                            <p>Rs {product.productPrice}.00</p>
                          </td>
                          <td>
                            <p>x 0{product.quantity}</p>
                          </td>
                          <td>
                            <p>Rs {product.total}.00</p>
                          </td>
                        </tr>
                      ) : (
                        <tr></tr>
                      );
                    })}

                    <tr>
                      <td></td>
                      <td></td>

                      <td></td>
                      <td>
                        <h4>Subtotal</h4>
                      </td>
                      <td>
                        <h4>Rs {totalBill}.00</h4>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>

                      <td>
                        <h4>Shipping</h4>
                      </td>
                      <td>
                        <h4>Rs 200.00</h4>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>

                      <td></td>
                      <td>
                        <h4>Total</h4>
                      </td>
                      <td>
                        <h4>Rs {totalBill + 200}.00</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SingleOrder;
