import React from "react";
import { Route, Routes } from "react-router-dom";
import SellerNavbar from "../Seller/sellerNavbar";
import SellerHome from "../Seller/sellerHome";
import SellerOrders from "../Seller/sellerOrders";
import SellerProfile from "../Seller/sellerProfile";
import SellerShop from "../Seller/sellerShop";
import AddProduct from "../Seller/addProduct";
import SingleOrder from "../Seller/singleOrder";
import SellerEarning from "../Seller/sellerEarning";
import EditProduct from "../Seller/editProduct";
import ShowSellerChat from "../Seller/showSellerChat";
import EditSellerProfile from "../Seller/editSellerProfile";
import SellerSearch from "../Seller/sellerSearch";
import SellerSingleProduct from "../Seller/sellerSingleProduct";
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
        <Route path="/addProduct" exact element={<AddProduct />} />
        <Route path="/singleOrder" exact element={<SingleOrder />} />
        <Route path="/sellerEarning" exact element={<SellerEarning />} />
        <Route path="/editProduct" exact element={<EditProduct />} />
        <Route path="/chatPanel" exact element={<ShowSellerChat />} />
        <Route path="/editProfile" exact element={<EditSellerProfile />} />
        <Route path="/search" exact element={<SellerSearch />} />
        <Route path="/single" exact element={<SellerSingleProduct />} />

      </Routes>
    </>
  );
}

export default SellerRoutes;
