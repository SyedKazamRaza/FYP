import React, { useEffect, useState } from "react";
import "./shipping.css";
import { useCart } from "../CartContext";
import { useCartUpdate } from "../CartContext";
import { useUser } from "../userContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ariaLabel = { "aria-label": "description" };

function Shipping(props) {
  let location = useLocation();
  const user = useUser();

  console.log(location.state.shippingDetails);

  const productsInCart = useCart();
  const { EmptyCart } = useCartUpdate();

  const navigate = useNavigate();

  const [totalBill, setTotalBill] = useState(0);
  const [billingAddress, setbillingAddress] = useState("same");
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const [billing, setBilling] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let sum = productsInCart.reduce((accumulator, item) => {
      return accumulator + item.total;
    }, 0);
    setTotalBill(sum);
  }, [totalBill, productsInCart]);

  const notifySuccess = () => {
    // Calling toast method by passing string
    toast.dark("Order Successfully Placed.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      background: "#34A853",
    });
  };

  function placeOrder(params) {
    let billingAd = "same";
    if (paymentMethod === "stripe") {
      alert("Payment through Stripe is Not available Yet.");
      return;
    } else if (billingAddress === "different") {
      billingAd = billing;
    }
    const shippingDetails = location.state.shippingDetails;

    const dataToSend = [
      user,
      totalBill,
      productsInCart,
      shippingDetails,
      paymentMethod,
      billingAd,
    ];

    axios
      .post("http://localhost:5000/order/newOrder", dataToSend)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          notifySuccess();
          EmptyCart();
          console.log("response data is here");
          console.log(response.data);
          navigate("/confirmation", {
            state: { orderDetails: response.data },
          });
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-46">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">Shipping Details</h2>
            <ul className="breadcrumbs-custom-path">
              <li>
                <div>Checkout</div>
              </li>
              <li className="active">Shipping</li>
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
          <div className="row">
            <section className="checkout_area section-margin--small">
              <div className="container_checkout">
                <div className="shipping_details">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="table-responsive">
                        <table className="table-payment">
                          <tbody>
                            <tr>
                              <td className="col1">
                                <h5>Contact</h5>
                              </td>
                              <td className="col2">
                                <p>{location.state.shippingDetails.email}</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="col1">
                                <h5>Ship To</h5>
                              </td>
                              <td className="col2">
                                <p>
                                  {location.state.shippingDetails.address +
                                    ", " +
                                    location.state.shippingDetails.city +
                                    " " +
                                    location.state.shippingDetails.zipCode +
                                    ", " +
                                    "Pakistan"}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h4
                        style={{
                          float: "left",
                        }}
                      >
                        Payment
                      </h4>
                      <div className="table-responsive">
                        <div className="method">
                          <table className="table-payment">
                            <tbody>
                              <tr>
                                <td>
                                  <div style={{ float: "left", width: "50%" }}>
                                    <input
                                      value="COD"
                                      type="radio"
                                      name="selector"
                                      // checked
                                      defaultChecked={paymentMethod === "COD"}
                                      onClick={() => {
                                        setPaymentMethod("COD");
                                      }}
                                    />
                                    <label style={{ marginLeft: "3%" }}>
                                      Cash on Delivery (COD)
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>
                                  <div style={{ float: "left", width: "50%" }}>
                                    <input
                                      type="radio"
                                      value="stripe"
                                      name="selector"
                                      defaultChecked={
                                        paymentMethod === "stripe"
                                      }
                                      onClick={() => {
                                        setPaymentMethod("stripe");
                                      }}
                                    />
                                    <label style={{ marginLeft: "3%" }}>
                                      Payment with Stripe
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <h4 style={{ float: "left" }}>Billing Address</h4>
                      <div className="table-responsive">
                        <div className="method">
                          <table className="table-payment">
                            <tbody>
                              <tr>
                                <td>
                                  <div style={{ float: "left", width: "50%" }}>
                                    <input
                                      type="radio"
                                      defaultChecked={billingAddress === "same"}
                                      value="same"
                                      name="billingAddress"
                                      // checked
                                      onClick={() => {
                                        setbillingAddress("same");
                                      }}
                                    />
                                    <label style={{ marginLeft: "3%" }}>
                                      Same as Shipping Address
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>
                                  <div style={{ float: "left", width: "50%" }}>
                                    <input
                                      type="radio"
                                      defaultChecked={
                                        billingAddress === "different"
                                      }
                                      value="different"
                                      name="billingAddress"
                                      onClick={() => {
                                        setbillingAddress("different");
                                      }}
                                    />
                                    <label style={{ marginLeft: "3%" }}>
                                      Use different Billing Address
                                    </label>
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                              </tr>

                              <tr style={{ borderBottom: "None !important" }}>
                                <td>
                                  {billingAddress === "different" ? (
                                    <Box
                                      sx={{
                                        // width: 550,
                                        maxWidth: "100%",
                                        minHeight: "70px",
                                        maxHeight: "70px",
                                      }}
                                    >
                                      <Input
                                        placeholder="Enter Billing Address here"
                                        inputProps={ariaLabel}
                                        sx={{
                                          width: "140%",
                                        }}
                                        value={billing}
                                        onChange={(e) => {
                                          setBilling(e.target.value);
                                        }}
                                      />
                                    </Box>
                                  ) : (
                                    <Box
                                      sx={{
                                        // width: 550,
                                        maxWidth: "100%",
                                        minHeight: "70px",
                                        maxHeight: "70px",
                                      }}
                                    ></Box>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="order_box">
                        <h2>Your Order</h2>
                        <div className="table-responsive">
                          <table className="prodTabel table">
                            <thead>
                              <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {productsInCart.map((singleProduct, index) => {
                                return (
                                  <tr key={index}>
                                    <td style={{ maxWidth: "30px" }}>
                                      <p>{singleProduct.productName}</p>
                                    </td>
                                    <td>
                                      <p
                                        style={{
                                          textTransform:
                                            "capitalize !important",
                                        }}
                                      >
                                        Rs {singleProduct.productPrice}
                                      </p>
                                    </td>
                                  </tr>
                                );
                              })}

                              <tr>
                                <td>
                                  <h4 style={{ color: "green" }}>Subtotal</h4>
                                </td>
                                <td>
                                  <h4 style={{ color: "green" }}>
                                    Rs {totalBill}.00
                                  </h4>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h4 style={{ color: "green" }}>Shipping</h4>
                                </td>
                                <td>
                                  <h4 style={{ color: "green" }}>Rs 200.00</h4>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h4 style={{ color: "green" }}>Total</h4>
                                </td>
                                <td>
                                  <h4 style={{ color: "green" }}>
                                    Rs {totalBill + 200}.00
                                  </h4>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="button-area">
                    <div className="d-flex">
                      <div
                        className="button button-block button-cart fas fa-arrow-left"
                        onClick={() => {
                          navigate("/checkout");
                        }}
                      >
                        Return to details
                      </div>
                    </div>

                    <div className="d-flex">
                      <div
                        className="button button-block button-payment"
                        onClick={() => {
                          placeOrder();
                        }}
                      >
                        Complete Order
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shipping;
