import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./sellerSingleProd.css";
import TopBar from "./TopBar";

function SellerSingleProduct(props) {
  const location = useLocation();
  console.log(location.state.relatedProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.state]);

  const runCallback = (cb) => {
    return cb();
  };

  return (
    <div>
      {/* <Header /> */}

      <section className=" home-section">
        <div
          className="home-content"
          style={{
            background: "#FFFFFF",
          }}
        >
          <TopBar />
          <div className="smb-3">
            <img
              src={location.state.product.imageurl}
              alt="Card cap"
              //   id="product-detail"
              height="500"
              width="500"
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="card"
              style={{ width: "70%", background: "#E0E0E0" }}
            >
              <div className="card-body">
                <div className="productNamePrice">
                  <h1 className="h1" style={{ color: "#4682B4" }}>
                    {location.state.product.productName}
                  </h1>
                  <p className="h3 py-2">
                    Rs {location.state.product.price} /-
                  </p>
                </div>

                <p className="py-2">
                  {location.state.product.rating === "0" ? (
                    <span style={{ fontStyle: "italic", color: "gray" }}>
                      Not rated yet
                    </span>
                  ) : (
                    runCallback(() => {
                      const row = [];
                      for (var i = 0; i < 5; i++) {
                        let rating = parseFloat(
                          location.state.product.rating
                        ).toFixed(0);
                        if (i < rating) {
                          row.push(
                            <i key={i} className="text-warning fa fa-star"></i>
                          );
                        } else {
                          row.push(
                            <i key={i} className="text-muted fa fa-star"></i>
                          );
                        }
                      }
                      return row;
                    })
                  )}
                </p>
                <br />

                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h5>Category:</h5>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>{location.state.product.category}</strong>
                    </p>
                  </li>
                  <br />
                  {location.state.product.category === "plants" ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <li className="list-inline-item">
                        <p>
                          <strong style={{ color: "#4682B4" }}> Place: </strong>
                          {location.state.product.place} plant
                        </p>
                      </li>
                      <li className="list-inline-item">
                        <p>
                          <strong style={{ color: "#4682B4" }}> Type: </strong>
                          {location.state.product.type}
                        </p>
                      </li>
                      <li className="list-inline-item">
                        <p>
                          <strong style={{ color: "#4682B4" }}>Season:</strong>
                          {location.state.product.season}
                        </p>
                      </li>
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
                <br />
                <h5>About {location.state.product.productName}:</h5>
                <p style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                  {location.state.product.details}
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
    </div>
  );
}

export default SellerSingleProduct;
