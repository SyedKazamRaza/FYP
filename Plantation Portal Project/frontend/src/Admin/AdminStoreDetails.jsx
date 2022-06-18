import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import axios from "axios";
import useFetch from "../useFetch";
import { useUser } from "../userContext";
import { useNavigate, useParams } from "react-router-dom";

const AdminStoreDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }
        const { data: homeStats } = useFetch(
            "http://localhost:5000/seller/sellerHome/"+ id
          );
             
          const [shopProducts, setShopProducts] = useState([]);
         
          useEffect(() => {
            axios
              .post("http://localhost:5000/products/allStoreProducts/"+ id)
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
        
          const runCallback = (cb) => {
            return cb();
          };
        
          return (
            <div>
              <section className="home-section">
                <div className="home-content">
                  <TopBar />
        
                  <div className="overview-boxes">
                    <div className="box">
                      <div className="right-side">
                        <div className="box-topic">Total Orders</div>
                        <div className="number">{homeStats.totalOrders}</div>
                      </div>
                      <i className="bx bx-cart-alt cart"></i>
                    </div>
                    <div className="box">
                      <div className="right-side">
                        <div className="box-topic">Total Earnings</div>
                        <div className="number">Rs {homeStats.totalEarning}</div>
                      </div>
                      <i className="bx bxs-wallet-alt cart two"></i>
                    </div>
                    <div className="box">
                      <div className="right-side">
                        <div className="box-topic">Total Clients</div>
                        <div className="number"> {homeStats.numberOfClients}</div>
                      </div>
                      <i className="bx bxs-group cart three"></i>
                    </div>
                    <div className="box">
                      <div className="right-side">
                        <div className="box-topic">Total Products</div>
                        <div className="number">{homeStats.numberOfProducts}</div>
                      </div>
                      <i className="bx bxs-store-alt cart four"></i>
                    </div>
                  </div>
                </div>
        
                <div className="order-container">
                  <h2 className="text-primary">Manage Shop</h2>
                  <div className="row row-40 justify-content-center">
                    {shopProducts.map((prod) => {
                      return (
                        <div
                          className="col-md-4"
                          key={prod._id}
                          style={{ maxHeight: "450px", height: "450px" }}
                        >
                          <div className="card mb-4 product-wap rounded-0">
                            <div className="card rounded-0">
                              <img
                                className="card-img rounded-0 img-fluid"
                                src={prod.imageurl}
                                alt="plant"
                                style={{ maxHeight: "300px", minHeight: "300px" }}
                              />
                              <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul className="list-unstyled d-flex justify-content-center mb-1">
                                  <li>
                                    <div className="btn btn-success text-white mt-2">
                                      <i className="far fa-edit"></i>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="btn btn-success text-white mt-2">
                                      <i className="fas fa-trash"></i>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="text-decoration-none">
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {prod.productName}
                                </div>
                              </div>
                              <ul className="list-unstyled d-flex justify-content-center mb-1">
                                <li>
                                  {prod.rating === "0" ? (
                                    <div style={{ fontStyle: "italic", color: "gray" }}>
                                      Not rated yet
                                    </div>
                                  ) : (
                                    runCallback(() => {
                                      const row = [];
                                      for (var i = 0; i < 5; i++) {
                                        let rating = parseFloat(prod.rating).toFixed(0);
                                        if (i < rating) {
                                          row.push(
                                            <i
                                              key={i}
                                              className="text-warning fa fa-star"
                                            ></i>
                                          );
                                        } else {
                                          row.push(
                                            <i
                                              key={i}
                                              className="text-muted fa fa-star"
                                            ></i>
                                          );
                                        }
                                      }
                                      return row;
                                    })
                                  )}
                                </li>
                              </ul>
                              <p className="text-center mb-0">Rs {prod.price} /-</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          );
}
 
export default AdminStoreDetails;