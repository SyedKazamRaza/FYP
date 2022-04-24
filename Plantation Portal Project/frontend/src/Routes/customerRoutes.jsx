import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SampleLogin from "../Customer/sampleLogin";
import Shop from "../Customer/shop/shop"; //1
import Footer from "../Customer/footer";
import SingleProduct from "../Customer/singleProduct/singleProduct"; //3
import Chatpanel from "../Customer/chatpanel/chatpanel";
import Home from "../Customer/home/home";
import Header from "../Customer/homeNavbar/Header";
import ShowCart from "../Customer/showCart/showCart";

import Homepage from "../Customer/homepage";

import { CartProvider } from "../Customer/CartContext";
import { UserProvider } from "../Customer/userContext";



function CustomerRoutes(props) {

  return (
    <CartProvider>
      <UserProvider>  
        <Header />
        <Routes>
          {/* <Route path="/login" exact element={<SampleLogin />} /> */}
          {/* <Route path="/shop" exact element={<Shop />} />
          <Route path="/single" exact element={<SingleProduct />} />
          
        <Route path="/" exact element={<Home />} /> */}

          <Route path="/shop" exact element={<Shop />} />
          <Route path="/single" exact element={<SingleProduct />} />
          <Route path="/cart" exact element={<ShowCart />} />

          <Route
            path="/chat"
            exact
            element={
              <Chatpanel userId="61d9354e52dbabae9bd6053f" role="seller" />
            }
          />

          <Route
            path="/chat"
            exact
            element={
              <Chatpanel userId="61d9354e52dbabae9bd6053f" role="seller" />
            }
          />
          <Route
            path="/"
            exact
            element={<Homepage category="home" />}
          />
          <Route
            path="/login"
            exact
            element={<Homepage category="login"  />}
          />
          <Route
            path="/register"
            exact
            element={
              <Homepage category="register"  />
            }
          />

          <Route
            path="/aboutus"
            exact
            element={<Homepage category="aboutus" />}
          />
          <Route path="/blogs" exact element={<Homepage category="blogs" />} />
          <Route
            path="/blogs/:id"
            exact
            element={<Homepage category="blogDetails" />}
          />
        </Routes>
        <Footer />
      </UserProvider>
    </CartProvider>
  );
}

export default CustomerRoutes;
