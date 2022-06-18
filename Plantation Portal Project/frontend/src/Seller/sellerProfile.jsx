import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../useFetch";

function SellerProfile(props) {
  const user = useUser();
  const navigate = useNavigate();
  if (!user._id) {
    navigate("/login");
  }
  const storeid = user._id;
  const [storeName, setStoreName] = useState("");
  const [storeEmail, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: homeStats } = useFetch(
    `http://localhost:5000/seller/sellerHome/${storeid}`
  );

  useEffect(() => {
    axios
      .get(`http://localhost:5000/seller/getStore/${storeid}`)
      .then((response) => {
        if (response.status === 200) {
          // console.log("I am store profile");
          // console.log(response.data);
          setStoreName(response.data.storeName);
          setEmail(response.data.username);
          setPhone(response.data.phno);
        }
      })
      .catch((error) => console.log(error));
  }, []);
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
          <div className="row row-30 justify-content-center">
            <div className="col xl-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <img src="images/icon.jpeg" alt="" width="70" height="100" />
                  <h6>Store Name</h6>
                  <span>
                    <Link to="/seller/editProfile">
                      <i className="bx bx-edit"></i>
                    </Link>
                  </span>
                  <div className="box-contacts-decor"></div>
                  <p className="box-contacts-link">
                    <i className="bx bx-user"></i>
                    <span className="links_name">{storeName}</span>
                  </p>
                </div>
              </article>
            </div>
            <div className="col xl-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <img src="images/icon.jpeg" alt="" width="70" height="100" />
                  <h6>Email Address</h6>
                  <span>
                    <Link to="/seller/editProfile">
                      <i className="bx bx-edit"></i>
                    </Link>
                  </span>
                  <div className="box-contacts-decor"></div>

                  <p className="box-contacts-link">
                    <i className="bx bx-envelope"></i>
                    <span className="links_name">{storeEmail}</span>
                  </p>
                </div>
              </article>
            </div>
            <div className="col xl-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <img src="images/icon.jpeg" alt="" width="70" height="100" />
                  <h6>Mobile Number</h6>
                  <span>
                    <Link to="/seller/editProfile">
                      <i className="bx bx-edit"></i>
                    </Link>
                  </span>
                  <div className="box-contacts-decor"></div>

                  <p className="box-contacts-link">
                    <i className="bx bx-phone"></i>
                    <span className="links_name">+{phone}</span>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="oh button-wrap">
          <Link
            className="button button-primary button-ujarak"
            data-caption-animate="slideInUp"
            data-caption-delay="400"
            to="/seller/editProfile"
          >
            Update Profile
          </Link>
        </div>
        <div style={{ height: "50px" }}></div>
      </section>
    </div>
  );
}

export default SellerProfile;
