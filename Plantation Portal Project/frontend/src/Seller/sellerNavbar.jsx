import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./seller.css";
import { useUserUpdate } from "../userContext";

function SellerNavbar(props) {
  const [activeNav, setActiveNav] = useState("home");
  const { logOut } = useUserUpdate();

  useEffect(() => {
    document.getElementById("home").classList.add("active");
    setActiveNav("home");
  }, []);

  function changeActive(id) {
    document.getElementById(activeNav).classList.remove("active");
    document.getElementById(id).classList.add("active");
    setActiveNav(id);
  }

  return (
    <div className="sidebar">
      <div className="logo-details">
        <img
          src={"/images/logo.jpg"}
          alt="logo"
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
          }}
        />
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/seller/home"
            id="home"
            onClick={() => {
              changeActive("home");
            }}
          >
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/seller/sellerorders"
            id="orders"
            onClick={() => {
              changeActive("orders");
            }}
          >
            <i className="bx bx-list-ul"></i>
            <span className="links_name">Orders</span>
          </Link>
        </li>
        <li>
          <Link
            to="/seller/sellerprofile"
            id="profile"
            onClick={() => {
              changeActive("profile");
            }}
          >
            <i className="bx bx-user"></i>
            <span className="links_name">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/seller/sellershop"
            id="shop"
            onClick={() => {
              changeActive("shop");
            }}
          >
            <i className="bx bx-store"></i>
            <span className="links_name">Shop</span>
          </Link>
        </li>
        <li>
          <Link
            to="/seller/sellerEarning"
            id="earning"
            onClick={() => {
              changeActive("earning");
            }}
          >
            <i className="bx bx-wallet-alt"></i>
            <span className="links_name">Earnings</span>
          </Link>
        </li>
        <li>
          <Link
            to="/seller/chatPanel"
            id="chat"
            onClick={() => {
              changeActive("chat");
            }}
          >
            <i className="bx bx-message"></i>
            <span className="links_name">Chats</span>
          </Link>
        </li>
        {/* <li>
              <Link href="seller-notifications.html">
                <i className="bx bx-notification"></i>
                <span className="links_name">Notifications</span>
              </Link>
            </li> */}

        <li className="log_out">
          <Link
            to="/login"
            onClick={() => {
              logOut();
            }}
          >
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SellerNavbar;
