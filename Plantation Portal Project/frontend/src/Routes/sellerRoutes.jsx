import React from "react";
import { Route, Routes } from "react-router-dom";
import SellerNavbar from "../Seller/sellerNavbar";
import SellerHome from "../Seller/sellerHome";
import SellerOrders from "../Seller/sellerOrders";
import SellerProfile from "../Seller/sellerProfile";
import SellerShop from "../Seller/sellerShop";
// import Footer from "../Customer/footer";

import "../Seller/seller.css";

// require("../../public/css/style.css")

// import "../Seller/style.css";

function SellerRoutes(props) {
  return (
    <>
      <SellerNavbar />
      <Routes>
        <Route path="/home" exact element={<SellerHome />} />
        <Route path="/sellerorders" exact element={<SellerOrders />} />
        <Route path="/sellerprofile" exact element={<SellerProfile />} />
        <Route path="/sellershop" exact element={<SellerShop />} />
      </Routes>
    </>
  );
}

export default SellerRoutes;
