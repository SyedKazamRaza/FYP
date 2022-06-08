import React from "react";
import { Link } from "react-router-dom";
// import "./seller.css";

function SellerNavbar(props) {
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
          <Link to="/seller/home" className="active">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/seller/sellerorders">
            <i className="bx bx-list-ul"></i>
            <span className="links_name">Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/seller/sellerprofile">
            <i className="bx bx-user"></i>
            <span className="links_name">Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/seller/sellershop">
            <i className="bx bx-store"></i>
            <span className="links_name">Shop</span>
          </Link>
        </li>
        <li>
          <Link to="/sellerEarning">
            <i className="bx bx-wallet-alt"></i>
            <span className="links_name">Earnings</span>
          </Link>
        </li>
        <li>
          <Link to="/sellerChat">
            <i className="bx bx-message"></i>
            <span className="links_name">Messages</span>
          </Link>
        </li>
        {/* <li>
              <Link href="seller-notifications.html">
                <i className="bx bx-notification"></i>
                <span className="links_name">Notifications</span>
              </Link>
            </li> */}

        <li className="log_out">
          <Link to="/sellerLogout">
            <i className="bx bx-log-out"></i>
            <span className="links_name">Log out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SellerNavbar;
