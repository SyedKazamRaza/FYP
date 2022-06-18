import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import { useUser } from "../userContext";
import axios from "axios";
import TopBar from "./TopBar";

function SellerSearch(props) {
  const user = useUser();
  const navigate = useNavigate();

  if (!user._id) {
    navigate("/login");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const storeid = user._id;

  const [shopProducts, setShopProducts] = useState([]);
  const data = {
    id: storeid,
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/products/allStoreProducts", data)
      .then((response) => {
        if (response.status === 200) {
          setShopProducts(
            response.data.map((prod) => {
              return prod;
            })
          );
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const searchkey = location.state.searchkey.toLowerCase();

  let MatchProducts = shopProducts.filter((st) => {
    return st.productName.toLowerCase().includes(searchkey);
  });

  console.log("Matching products of seller");
  console.log(MatchProducts);

  return (
    <section
      className="home-section"
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
        <TopBar />
        <h2 className="text-primary">Search Results for "{searchkey}"</h2>

        <div className="row row-30 justify-content-center">
          {MatchProducts.length !== 0 && (
            <>
              <h4 style={{ textAlign: "left" }} className="text-primary">
                {MatchProducts.length} Products found related to "{searchkey}"{" "}
              </h4>
              <br />
              {MatchProducts.map((product, index) => {
                return (
                  <div
                    className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight"
                    style={{
                      maxHeight: "400px",
                      height: "400px",
                      width: "300px",
                      maxWidth: "300px",
                    }}
                    key={index}
                  >
                    <div className="card mb-4 product-wap rounded-0">
                      <div className="card rounded-0">
                        <img
                          className="card-img rounded-0 img-fluid"
                          alt="product"
                          src={product.imageurl}
                          style={{ maxHeight: "250px", minHeight: "250px" }}
                        />

                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                          <ul className="list-unstyled">
                            <li>
                              <div className="btn btn-success">
                                <i
                                  class="fa-solid fa-eye"
                                  onClick={() => {
                                    navigate("/seller/single", {
                                      state: { product: product },
                                    });
                                  }}
                                ></i>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="text-decoration-none">
                          <h5>{product.productName}</h5>
                        </div>
                        <p className="text-center mb-0">Rs. {product.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default SellerSearch;
