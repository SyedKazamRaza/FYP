import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import easyinvoice from "easyinvoice";

function ViewOrderDetails(props) {
  let location = useLocation();
  const navigate = useNavigate();
  let details = location.state.singleOrder;

  const [orderDetails, setOrderDetails] = useState(details);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let productsList = [];

  function createProductsList() {
    productsList = [];
    orderDetails.productsDetail.map((prod) => {
      const obj = {
        quantity: prod.quantity,
        description: prod.productName,
        "tax-rate": 0,
        price: prod.productPrice,
      };
      productsList.push(obj);
    });

    orderDetails.servicesDetails.map((prod) => {
      const obj = {
        quantity: 1,
        description: prod.serviceTitle,
        "tax-rate": 0,
        price: prod.totalPrice,
      };
      productsList.push(obj);
    });
  }

  function downloadInvoice() {
    createProductsList();

    var data = {
      //"documentTitle": "RECEIPT", //Defaults to INVOICE
      currency: "PKR",
      taxNotation: "vat", //or gst
      marginTop: 25,
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 25,
      // logo: "https://firebasestorage.googleapis.com/v0/b/plantationportal.appspot.com/o/logo.jpg?alt=media&token=f35dfb08-2a0c-4583-9e27-ae8e22a6811c", //or base64
      //"logoExtension": "png", //only when logo is base64

      images: {
        // The logo on top of your invoice
        logo: "https://firebasestorage.googleapis.com/v0/b/plantationportal.appspot.com/o/logo.jpg?alt=media&token=f35dfb08-2a0c-4583-9e27-ae8e22a6811c",
        // The invoice background
        // "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
      },
      sender: {
        company: "KAZIM RAZA",
        address: "Johar Town",
        zip: "54782",
        city: "Lahore",
        country: "Pakistan",
      },
      client: {
        company: `${
          orderDetails.shippingDetails.firstName +
          " " +
          orderDetails.shippingDetails.lastName
        }`,
        address: `${orderDetails.shippingDetails.address}`,
        zip: `${"Zip Code: " + orderDetails.shippingDetails.zipCode}`,
        city: `${orderDetails.shippingDetails.city}`,
        country: "Pakistan",
        custom1: `${"Mobile# " + orderDetails.shippingDetails.phoneNo}`,
        custom2: `${"Payment Method: " + orderDetails.paymentMethod}`,
        //"custom3": "custom value 3"
      },
      information: {
        date: `${orderDetails.dateTime}`,
        number: "5012",
        "due-date": `NILL`,
      },
      products: productsList,
      subtotal: 200,
      "bottom-notice": "Your order will be delivered with 7-10 days.",
    };
    //Create your invoice! Easy!
    easyinvoice.createInvoice(data, function (result) {
      //The response will contain a base64 encoded PDF file
      console.log(result.pdf);
      easyinvoice.download("myInvoice.pdf");
    });
  }

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row">
            <section className="order_details section-margin--small">
              <div className="container">
                <h3 className="text-center billing-alert">Order Details</h3>
                <div className="row mb-5">
                  <div className="col-md-6 col-xl-4 mb-4 mb-xl-0">
                    <div className="confirmation-card">
                      <h3 className="billing-title">Order Info</h3>
                      <table className="order-rable">
                        <tbody>
                          <tr>
                            <td>Order #</td>
                            <td>: 23</td>
                          </tr>
                          <tr>
                            <td>Date & Time</td>
                            <td>: {orderDetails.dateTime}</td>
                          </tr>
                          <tr>
                            <td>Total Bill</td>
                            <td>: Rs {orderDetails.totalBill}</td>
                          </tr>
                          <tr>
                            <td>Payment Mode</td>
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
                          <th scope="col">Service Title</th>
                          <th scope="col">Price</th>
                          <th scope="col">Length</th>
                          <th scope="col">Width</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderDetails.servicesDetails.map((service, index) => {
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
                          <th scope="col">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderDetails.productsDetail.map((product, index) => {
                          return (
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
                              <td>
                                {product.status === "delivered" ? (
                                  product.rating === "0" ? (
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() => {
                                        // getRating();
                                        // navigate("/rating");
                                        const data = {
                                          orderId: orderDetails._id,
                                          productId: product.productId,
                                          // orderDetails: orderDetails
                                        };
                                        navigate("/rating", {
                                          state: {
                                            orderData: data,
                                          },
                                        });
                                      }}
                                    >
                                      Give Rating
                                    </button>
                                  ) : (
                                    <div>
                                      <i className="text-warning fa fa-star"></i>
                                      {product.rating}
                                    </div>
                                  )
                                ) : (
                                  ""
                                )}
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
                            <h4>Rs {orderDetails.totalBill}.00</h4>
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
                            <h4>Rs {orderDetails.totalBill + 200}.00</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="button-area">
                  <div className="d-flex" style={{ marginRight: "2%" }}>
                    <button
                      className="button button-block button-payment fas fa-arrow-left"
                      onClick={() => {
                        navigate("/showOrders");
                      }}
                    >
                      Return to Orders Screen
                    </button>
                  </div>

                  <div className="d-flex">
                    <button
                      type="submit"
                      className="button button-block button-payment"
                      onClick={() => {
                        downloadInvoice();
                      }}
                    >
                      Download Receipt
                    </button>
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

export default ViewOrderDetails;
