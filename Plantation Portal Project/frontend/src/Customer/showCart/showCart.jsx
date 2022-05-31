import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { useCartUpdate } from "../CartContext";
import { useUser } from "../userContext";
import { useNavbarUpdate } from "../userContext";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";


function ShowCart(props) {
  const cartProducts = useCart();
  const { increment, decrement, removeFromCart, EmptyCart } = useCartUpdate();
  const user = useUser();
  const navigate = useNavigate();

  const { changeNavBold } = useNavbarUpdate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [totalBill, setTotalBill] = useState(0);
  useEffect(() => {
    const sum = cartProducts.reduce((accumulator, item) => {
      return accumulator + item.total;
    }, 0);

    setTotalBill(sum);
  }, [cartProducts]);


  return (
    <div>
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-46">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">Shopping Cart</h2>
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Shopping Cart</li>
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
            <section className="cart_area">
              <div className="container">
                <div className="cart_inner">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Product Name</th>
                          <th scope="col">Store</th>
                          <th scope="col">Price per item</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts.length === 0 ? (
                          <tr>
                            <td>
                              <h3
                                style={{
                                  textAlign: "right",
                                  color: "#3c6a36",
                                }}
                              >
                                Cart is Empty
                              </h3>
                            </td>
                          </tr>
                        ) : (
                          cartProducts.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <div className="media">
                                    <div className="d-flex">
                                      <img
                                        src={item.productImage}
                                        alt="product"
                                        style={{
                                          minHeight: "70px",
                                          maxHeight: "70px",
                                          minWidth: "70px",
                                          maxWidth: "70px",
                                        }}
                                      />
                                    </div>
                                    <div
                                      className="media-body"
                                      style={{
                                        height: "60px",
                                        lineHeight: "60px",
                                      }}
                                    >
                                      <p
                                        style={{
                                          color: "#3c6a36",
                                          fontSize: "17px",
                                          maxWidth: "200px",
                                          maxHeight: "60px",
                                          overflow: "hidden",
                                        }}
                                      >
                                        {item.productName}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={{
                                      height: "60px",
                                      lineHeight: "60px",
                                    }}
                                  >
                                    <p>{item.storeName}</p>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={{
                                      height: "60px",
                                      lineHeight: "60px",
                                    }}
                                  >
                                    <p style={{ fontSize: "16px" }}>
                                      Rs {item.productPrice} /-
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    className="product_count"
                                    style={{
                                      height: "60px",
                                      lineHeight: "60px",
                                    }}
                                  >
                                    <li className="list-inline-item">
                                      <span
                                        className="btn btn-success"
                                        id="btn-minus"
                                        onClick={() => {
                                          if (item.quantity !== 1) {
                                            decrement(item);
                                          }
                                        }}
                                      >
                                        -
                                      </span>
                                    </li>
                                    <li className="list-inline-item">
                                      <span
                                        className="badge bg-secondary"
                                        id="var-value"
                                      >
                                        {item.quantity}
                                      </span>
                                    </li>
                                    <li className="list-inline-item">
                                      <span
                                        className="btn btn-success"
                                        id="btn-plus"
                                        onClick={() => {
                                          increment(item);
                                        }}
                                      >
                                        +
                                      </span>
                                    </li>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={{
                                      height: "60px",
                                      lineHeight: "60px",
                                      //   width: "200px"
                                    }}
                                  >
                                    <p style={{ fontSize: "20px" }}>
                                      Rs {item.total} /-
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    style={{
                                      height: "60px",
                                      lineHeight: "60px",
                                      //   width: "200px"
                                    }}
                                  >
                                    <CancelOutlinedIcon
                                      color="error"
                                      onClick={() => {
                                        removeFromCart(item);
                                      }}
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        )}

                        <tr className="total">
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <h5>Subtotal</h5>
                          </td>
                          <td>
                            <h5>Rs {totalBill}.00</h5>
                          </td>
                        </tr>
                        <tr className="shipping">
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <h5>Shipping</h5>
                          </td>
                          <td>
                            <h5>Rs 200.00</h5>
                          </td>
                        </tr>

                        <tr className="shipping">
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <h5>Total Bill</h5>
                          </td>
                          <td>
                            <h5>Rs {totalBill + 200}.00</h5>
                          </td>
                        </tr>

                        <tr className="out_button_area">
                          <td>
                            <div className="d-flex">
                              <div
                                className="button button-block button-shopping fas fa-arrow-left"
                                onClick={() => {
                                  changeNavBold("shop");
                                  navigate("/shop");
                                }}
                                style={{
                                  textDecoration: "none",
                                  color: "#3c6a36",
                                }}
                              >
                                Continue Shopping
                              </div>
                            </div>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>

                          <td>
                            <div className="d-flex">
                              <button
                                className="button button-block button-checkout"
                                style={{
                                  textDecoration: "none",
                                  color: "#3c6a36",
                                }}
                                onClick={() => {
                                  console.log(user);
                                  if (user._id) {
                                    // placeNewOrder(user);
                                    navigate("/checkout");
                                    console.log("Placing order");
                                  } else {
                                    navigate("/login", {
                                      state: { nextScreen: "checkout" },
                                    });
                                    // navigate("/login");
                                    console.log("User must be login first");
                                  }
                                }}
                              >
                                Proceed to checkout
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default ShowCart;
