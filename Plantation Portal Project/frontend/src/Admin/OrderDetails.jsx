import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../userContext";

const OrderDetails = () => {
  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }
  let location = useLocation();
  let order = location.state.order;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [totalBill, setTotalBill] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let total = 0;
    order.productsDetail.map((prod) => {
      total = total + prod.total;
    });
    order.servicesDetails.map((serv) => {
      total = total + serv.totalPrice;
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
                          {order.shippingDetails.firstName +
                            " " +
                            order.shippingDetails.lastName}
                        </td>
                      </tr>
                      <tr>
                        <td>Phone#</td>
                        <td>: {order.shippingDetails.phoneNo}</td>
                      </tr>
                      <tr>
                        <td>Date & Time</td>
                        <td>:{order.dateTime}</td>
                      </tr>

                      <tr>
                        <td>Payment method</td>
                        <td>: {order.paymentMethod}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
                <div className="confirmation-card">
                  <h3 className="billing-title">Billing Address</h3>
                  <table className="order-rable">
                    {order.billingAddress === "same" ? (
                      <tbody>
                        <tr>
                          <td>Address</td>
                          <td>: {order.shippingDetails.address}</td>
                        </tr>
                        <tr>
                          <td>City</td>
                          <td>: {order.shippingDetails.city}</td>
                        </tr>
                        <tr>
                          <td>Country</td>
                          <td>: Pakistan</td>
                        </tr>
                        <tr>
                          <td>Postcode</td>
                          <td>: {order.shippingDetails.zipCode}</td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <td>Address</td>
                          <td>: {order.billingAddress}</td>
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
                        <td>: {order.shippingDetails.address}</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>: {order.shippingDetails.city}</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>: Pakistan</td>
                      </tr>
                      <tr>
                        <td>Postcode</td>
                        <td>: {order.shippingDetails.zipCode}</td>
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
                      <th scope="col">Service Title</th>
                      <th scope="col">Price</th>
                      <th scope="col">Length</th>
                      <th scope="col">Width</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.servicesDetails.map((service, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <p>{service.serviceTitle}</p>
                          </td>
                          <td>
                            <p>{service.price}</p>
                          </td>
                          <td>
                            <p>{service.length}</p>
                          </td>
                          <td>
                            <p>{service.width}</p>
                          </td>
                          <td>
                            <p>Rs {service.totalPrice}.00</p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Store</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log(order.productsDetail)}
                    {order.productsDetail.map((product, index) => {
                      return product.sellerId ? (
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
                          <td>
                            <p>{product.status}</p>
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
};

export default OrderDetails;
