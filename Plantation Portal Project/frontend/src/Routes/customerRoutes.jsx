import React from "react";
import { Route, Routes } from "react-router-dom";
// import SampleLogin from "../Customer/sampleLogin";
import Shop from "../Customer/shop/shop"; //1
import Footer from "../Customer/footer";
import SingleProduct from "../Customer/singleProduct/singleProduct"; //3
import Chatpanel from "../Customer/chatpanel/chatpanel";
import Header from "../Customer/homeNavbar/Header";
import ShowCart from "../Customer/showCart/showCart";
import Homepage from "../Customer/homepage";
import Checkout from "../Customer/checkout/checkout";
import Shipping from "../Customer/shipping/shipping";
import OrderDetails from "../Customer/orderDetails/orderDetails";
import ServicesOffer from "../Customer/servicesOffer";
import ContactUs from "../Customer/contactUs";
import ServiceDetails from "../Customer/ServiceDetails";
import ShowChat from "../Customer/showChat/ShowChat";
import UpdateProfile from "../Customer/updateProfile";
import ShowCustomerOrders from "../Customer/showCustomerOrders";

import { CartProvider } from "../Customer/CartContext";
// import { UserProvider } from "../userContext";

function CustomerRoutes(props) {
  return (
    <CartProvider>
      {/* <UserProvider> */}
        <Header />
        <Routes>
          {/* <Route path="/login" exact element={<SampleLogin />} /> */}
          {/* <Route path="/shop" exact element={<Shop />} />
          <Route path="/single" exact element={<SingleProduct />} />
          
        <Route path="/" exact element={<Home />} /> */}

          {/* <Route path="/sample" exact element={<SampleLogin />} /> */}

          <Route path="/shop" exact element={<Shop />} />
          <Route path="/single" exact element={<SingleProduct />} />
          <Route path="/cart" exact element={<ShowCart />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/shipping" exact element={<Shipping />} />
          <Route path="/confirmation" exact element={<OrderDetails />} />
          <Route path="/services" exact element={<ServicesOffer />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/services/:id" exact element={<ServiceDetails />} />
          {/* <Route path="/chat" exact element={<Chatpanel />} /> */}
          <Route path="/chatpanel" exact element={<ShowChat />} />
          <Route path="/updateprofile" exact element={<UpdateProfile />} />
          <Route path="/showOrders" exact element={<ShowCustomerOrders />} />

          <Route
            path="/chat"
            exact
            element={
              <Chatpanel userId="61d9354e52dbabae9bd6053f" role="seller" />
            }
          />

          <Route path="/" exact element={<Homepage category="home" />} />
          <Route path="/login" exact element={<Homepage category="login" />} />
          <Route
            path="/register"
            exact
            element={<Homepage category="register" />}
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
      {/* </UserProvider> */}
    </CartProvider>
  );
}

export default CustomerRoutes;
