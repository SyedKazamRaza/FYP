import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserUpdate } from "../userContext";

const AdminNavbar = () => {
  const { logOut } = useUserUpdate();
  const [activeNav, setActiveNav] = useState("dashboard");

  useEffect(() => {
    document.getElementById("dashboard").classList.add("active");
    setActiveNav("dashboard");
  }, []);

  function changeActive(id) {
    document.getElementById(activeNav).classList.remove("active");
    document.getElementById(id).classList.add("active");
    setActiveNav(id);
  }

  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <img src="../images/logoo-removebg-preview.png" alt="" />
        </div>
        <ul className="nav-links">
          <li>
            <Link
              to="/admin/home"
              id="dashboard"
              onClick={() => {
                changeActive("dashboard");
              }}
            >
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/orders"
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
              to="/admin/customers"
              id="customers"
              onClick={() => {
                changeActive("customers");
              }}
            >
              <i className="bx bx-user"></i>
              <span className="links_name">Customers</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/stores"
              id="stores"
              onClick={() => {
                changeActive("stores");
              }}
            >
              <i className="bx bx-store"></i>
              <span className="links_name">Stores</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/blogs"
              id="blogs"
              onClick={() => {
                changeActive("blogs");
              }}
            >
              <i className="bx bx-customize"></i>
              <span className="links_name">Blogs</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/services"
              id="services"
              onClick={() => {
                changeActive("services");
              }}
            >
              <i className="bx bx-spa"></i>
              <span className="links_name">Services</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/earnings"
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
              to="/admin/pendingrequests"
              id="requests"
              onClick={() => {
                changeActive("requests");
              }}
            >
              <i className="bx bx-analyse"></i>
              <span className="links_name">Pending Requests</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/messages"    id="messages"
              onClick={() => {
                changeActive("messages");
              }}>
              <i className="bx bx-message"></i>
              <span className="links_name">Messages</span>
            </Link>
          </li>

          <li className="log_out">
            <Link
              to="/"
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
    </div>
  );
};

export default AdminNavbar;
