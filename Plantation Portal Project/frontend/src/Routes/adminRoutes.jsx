import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminBlogs from "../Admin/AdminBlogs";
import AdminHome from "../Admin/adminHome";
import AdminNavbar from "../Admin/AdminNavbar";
import Orders from "../Admin/Orders";
import SellerHome from "../Seller/sellerHome";
//import "../Admin/css/adminHome.css"
import AddBlog from "../Admin/AddBlog";
import AdminServices from "../Admin/AdminServices";
import AddService from "../Admin/AddService";
import PendingRequests from "../Admin/PendingRequests";
import AdminBlogDetails from "../Admin/AdminBlogDetails";
import AdminServiceDetails from "../Admin/AdminServiceDetails";
import "../Admin/css/admin.css";
import AdminStores from "../Admin/AdminStores";
import AdminStoreDetails from "../Admin/AdminStoreDetails";
import Customers from "../Admin/Customers";
import Search from "../Admin/Search";
//import '../Admin/css/style.css'
//import '../Admin/css/bootstrap.css'
//import '../Admin/css/bootstrap.min.css'
//import '../Admin/css/fonts.css'
//import "../Admin/js/core.min.js";
//import "./js/script.js";

function AdminRoutes(props) {
  return (
    <div>
      <section className="section">
        <AdminNavbar />
        <Routes>
          <Route path="/" exact element={<AdminHome />} />
          <Route path="/orders" exact element={<Orders />} />
          <Route path="/customers" exact element={<Customers />} />
          <Route path="/blogs" exact element={<AdminBlogs />} />
          <Route path="/blogs/:id" exact element={<AdminBlogDetails />} />
          <Route path="/addblog" exact element={<AddBlog />} />
          <Route path="/addblog/:id" exact element={<AddBlog />} />
          <Route path="/services" exact element={<AdminServices />} />
          <Route path="/services/:id" exact element={<AdminServiceDetails />} />
          <Route path="/addservice" exact element={<AddService />} />
          <Route path="/addservice/:id" exact element={<AddService />} />
          <Route path="/pendingrequests" exact element={<PendingRequests />} />
          <Route path="/stores" exact element={<AdminStores />} />
          <Route path="/storesproducts" exact element={<AdminStoreDetails />} />
          <Route path="/search" exact element={<Search />} />

          <Route path="/seller" exact element={<SellerHome />} />
        </Routes>
      </section>
    </div>
  );
}

export default AdminRoutes;
