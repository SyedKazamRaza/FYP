import React from "react";
import Blogs from "./blogs";
import Header from "./homeNavbar/Header";
import Footer from "./footer";
import Home from "./home/home";
import BlogDetails from "./BlogDetails";
import { userContext } from "./userContext";
import { ReactSession } from "react-client-session";
import Authentication from "./Authentication";
import AboutUs from "../AboutUs";
import ShowProducts from "./showProducts";

function Homepage(props) {
  return (
    <div>
      {/* <userContext.Provider value={ReactSession.get('user')}> */}
      {/* <Header/>    */}
      {/* </userContext.Provider> */}
      {props.category === "login" ? (
        <Authentication setLoginUser={props.setLoginUser} form="login" />
      ) : props.category === "register" ? (
        <Authentication setLoginUser={props.setLoginUser} form="register" />
      ) : props.category === "aboutus" ? (
        <AboutUs />
      ) : props.category === "blogs" ? (
        <Blogs />
      ) : props.category === "home" ? (
        <Home />
      ) : props.category === "blogDetails" ? (
        <BlogDetails />
      ) : (
        <h1>null</h1>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
