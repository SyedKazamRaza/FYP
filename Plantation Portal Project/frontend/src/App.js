import { BrowserRouter, Route, Routes } from "react-router-dom";  //make routing easy
import Homepage from "./homeComponent/homepage";
import AdminHome from "./adminComponents/adminHome";
import SellerHome from "./sellerComponents/sellerHome";
import CustomerHome from "./customerComponents/customerHome";
import SignUp from "./authenticationComp/Register";
import React from "react";
import SingleProduct from "./homeComponent/singleProduct";
import {useState} from 'react'
import {ReactSession} from 'react-client-session';


function App(props) {
  const [user,setLoginUser] = useState({});
  ReactSession.setStoreType("localStorage");
  ReactSession.set('user','a')
  
  return (
    <BrowserRouter>
     

      <Routes>    
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/admin" exact element={<AdminHome />} />
        <Route path="/seller" exact element={<SellerHome />} />
        <Route path="/customer" exact element={<CustomerHome />} />

        <Route path="/" exact element={<Homepage category="home" user={user} />} />
        <Route path="/login" exact element={<Homepage category="login" setLoginUser={setLoginUser}/>} />
        <Route path="/register" exact element={<Homepage category="register" setLoginUser={setLoginUser}/>} />
        <Route path="/aboutus" exact element={<Homepage category="aboutus" />} />
        <Route path="/plants" exact element={<Homepage category="plants" />} />
        <Route path="/seeds" exact element={<Homepage category="seeds" />} />
        <Route path="/tools" exact element={<Homepage category="tools" />} />
        <Route path="/fertilizers" exact element={<Homepage category="fertilizers" />} />
        <Route path="/services" exact element={<Homepage category="services" />} />
        <Route path="/blogs" exact element={<Homepage category="blogs"/>} />
        <Route path="/blogs/:id" exact element={<Homepage category="blogDetails"/>} />

        <Route path="/products/:_id" exact element={<SingleProduct />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
