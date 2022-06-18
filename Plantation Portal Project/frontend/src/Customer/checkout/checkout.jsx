import React, { useEffect, useState } from "react";
import "./checkout.css";
import { useUser } from "../../userContext";
import { useCart } from "../CartContext";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout(props) {
  const user = useUser();
  const { cartProducts, cartServices } = useCart();

  const navigate = useNavigate();

  const [totalBill, setTotalBill] = useState(0);
  const [shippingEmail, setEmail] = useState(user.email);
  const [fname, setFname] = useState(user.fname);
  const [lname, setLname] = useState(user.lname);
  const [phoneNo, setPhone] = useState(user.phno);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [TandC, setTandC] = useState(false);

  useEffect(() => {
    let ProductsSum = cartProducts.reduce((accumulator, item) => {
      return accumulator + item.total;
    }, 0);

    let servicesSum = cartServices.reduce((accumulator, item) => {
      return accumulator + item.totalPrice;
    }, 0);

    setTotalBill(ProductsSum + servicesSum);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notifyError = (msg) => {
    toast.error(`${msg}`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      background: "#34A853",
    });
  };

  function validateInput() {
    if (shippingEmail.length === 0) {
      notifyError("Shipping Email is required");
      return false;
    } else if (fname.length === 0) {
      notifyError("First Name is required");
      return false;
    } else if (lname.length === 0) {
      notifyError("Last Name is required");
      return false;
    } else if (address.length === 0) {
      notifyError("Complete Address is required");
      return false;
    } else if (city.length === 0) {
      notifyError("City/Town is required");
      return false;
    } else if (zipCode.length === 0) {
      notifyError("Zip Code of city is required");
      return false;
    } else if (phoneNo.length === 0) {
      notifyError("Last Name is required");
      return false;
    } else if (TandC === false) {
      notifyError("Please Accept Terms & conditions.");
      return false;
    }

    return true;
  }

  function submitShippingDetails() {
    if (!validateInput()) {
      return;
    }
    let shippingDetails = {
      email: shippingEmail,
      firstName: fname,
      lastName: lname,
      phoneNo: phoneNo,
      address: address,
      zipCode: zipCode,
      city: city,
    };
    if (orderNotes.length !== 0) {
      shippingDetails.orderNotes = orderNotes;
    }

    navigate("/shipping", {
      state: { shippingDetails: shippingDetails },
    });
  }

  // useEffect(() => {
  //   console.log(user);
  //   console.log(cartProducts);
  // }, []);

  return (
    <div>
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-46">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">Shipping Details</h2>
            <ul className="breadcrumbs-custom-path">
              <li>
                <div>Home</div>
              </li>
              <li>
                <div>Shop</div>
              </li>
              <li className="active">Checkout</li>
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
                      <div className="returning_customer">
                        <div className="row contact_form">
                          <div className="col-md-12 form-group p_star">
                            <input
                              type="text"
                              value={shippingEmail}
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Email"
                              style={{ color: "black" }}
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                            <span
                              className="placeholder"
                              data-placeholder="Email"
                            ></span>
                           
                          </div>
                        </div>
                      </div>
                      <h2>Shipping Details</h2>
                      <form className="row contact_form">
                        <div className="col-md-6 form-group p_star">
                          <input
                            type="text"
                            value={fname}
                            className="form-control"
                            id="first"
                            required
                            name="name"
                            onChange={(e) => {
                              setFname(e.target.value);
                            }}
                            style={{ color: "black" }}
                            placeholder="First name"
                          />
                          <span
                            className="placeholder"
                            data-placeholder="First name"
                          ></span>
                        </div>
                        <div className="col-md-6 form-group p_star">
                          <input
                            type="text"
                            value={lname}
                            className="form-control"
                            id="last"
                            required
                            name="name"
                            onChange={(e) => {
                              setLname(e.target.value);
                            }}
                            style={{ color: "black" }}
                            placeholder="Last name"
                          />
                          <span
                            className="placeholder"
                            data-placeholder="Last name"
                          ></span>
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="text"
                            className="form-control"
                            value={address}
                            required
                            id="add1"
                            name="add1"
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            placeholder="Address"
                          />
                          <span
                            className="placeholder"
                            data-placeholder="Address"
                          ></span>
                        </div>
                        <div className="col-md-6 form-group p_star">
                          <input
                            type="text"
                            className="form-control"
                            id="number"
                            value={city}
                            required
                            name="number"
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                            placeholder="Town/City"
                          />
                          <span
                            className="placeholder"
                            data-placeholder="Town/City"
                          ></span>
                        </div>
                        <div className="col-md-6 form-group p_star">
                          <input
                            type="text"
                            className="form-control"
                            required
                            id="zip"
                            value={zipCode}
                            name="zip"
                            onChange={(e) => {
                              setZipCode(e.target.value);
                            }}
                            placeholder="Postcode/Zip"
                          />
                          <span
                            className="placeholder"
                            data-placeholder="Town/City"
                          ></span>
                        </div>
                        <div className="col-md-12 form-group p_star">
                          <input
                            type="text"
                            value={phoneNo}
                            className="form-control"
                            id="number"
                            name="number"
                            required
                            onChange={(e) => {
                              setPhone(e.target.value);
                            }}
                            placeholder="Phone Number"
                          />
                          <span
                            className="placeholder"
                            data-placeholder="Phone number"
                          ></span>
                        </div>
                        <div className="col-md-12 form-group mb-0">
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            rows="1"
                            value={orderNotes}
                            onChange={(e) => {
                              setOrderNotes(e.target.value);
                            }}
                            placeholder="Order Notes"
                          ></textarea>
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <div className="order_box">
                        <h2>Your Order</h2>
                        <div className="table-responsive">
                          <table className="prodTabel table">
                            <thead>
                              <tr>
                                <th scope="col">Product/Service</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartProducts.map((singleProduct, index) => {
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

                              {cartServices.map((service, index) => {
                                return (
                                  <tr key={index}>
                                    <td style={{ maxWidth: "30px" }}>
                                      <p>{service.serviceTitle}</p>
                                    </td>
                                    <td>
                                      <p
                                        style={{
                                          textTransform:
                                            "capitalize !important",
                                        }}
                                      >
                                        Rs {service.totalPrice}
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
                        <div className="creat_account">
                          <input
                            type="checkbox"
                            id="f-option4"
                            value={TandC}
                            onChange={(value) => {
                              setTandC(!TandC);
                            }}
                            name="selector"
                          />
                          <label htmlFor="f-option4">
                            I’ve read and accept the
                          </label>
                          <label>terms and conditions</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="button-area">
                    {/* <div className="d-flex">
                      <Link
                        to={"/cart"}
                        className="button button-block button-cart fas fa-arrow-left"
                      >
                        Back to cart
                      </Link>
                    </div> */}

                    <div className="d-flex" style={{ marginRight: "2%" }}>
                      <button
                        className="button button-block button-payment fas fa-arrow-left"
                        onClick={() => {
                          navigate("/cart");
                        }}
                      >
                        Back to cart
                      </button>
                    </div>

                    <div className="d-flex">
                      <button
                        type="submit"
                        className="button button-block button-payment"
                        onClick={() => {
                          submitShippingDetails();
                        }}
                      >
                        Continue
                      </button>
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

export default Checkout;
