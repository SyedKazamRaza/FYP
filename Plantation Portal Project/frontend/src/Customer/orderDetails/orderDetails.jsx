import React, { useState, useEffect } from "react";
import "./orderDetails.css";
import { useLocation, useNavigate } from "react-router-dom";

function OrderDetails(props) {
  let location = useLocation();
  const navigate = useNavigate();


  const [orderDetails, setOrderDetails] = useState(location.state.orderDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("I am in customer details");
    console.log(location.state.orderDetails);
    console.log(orderDetails);
  }, []);
  return (
    <div>
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-46">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">Order Confirmation</h2>
            <ul className="breadcrumbs-custom-path">
              <li>
                <div>Checkout</div>
              </li>
              <li>
                <div>Shipping</div>
              </li>
              <li className="active">Confirmation</li>
            </ul>
          </div>
          <div
            className="box-position"
            style={{
              backgroundImage: `url("images/cart.jpg")`,
            }}
          ></div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <section className="order_details section-margin--small">
            <div className="container">
              <p className="text-center billing-alert">
                Thank you. Your order has been received.
              </p>
              <div className="row mb-5">
                <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
                  <div className="confirmation-card">
                    <h3 className="billing-title">Order Info</h3>
                    <table className="order-rable">
                      <tbody>
                        <tr>
                          <td>Order number</td>
                          <td>: 60235</td>
                        </tr>
                        <tr>
                          <td>Date & Time</td>
                          <td>: {orderDetails.dateTime}</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>: Rs {orderDetails.totalBill}</td>
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
                      {orderDetails.productsDetail.map((product) => {
                        return (
                          <tr>
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
                          <h4>Rs {orderDetails.totalBill - 200}.00</h4>
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
                          <h4>Rs {orderDetails.totalBill}.00</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="button-area"
          style={{ marginLeft: "70%", marginBottom: "3%" }}
        >
          <div className="d-flex">
            <div
              className="button button-block button-payment"
              onClick={() => {
                navigate("/shop")
              }}
            >
              Return to Shop
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderDetails;
