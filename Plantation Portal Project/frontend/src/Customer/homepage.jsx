import React from "react";
import Blogs from "./blogs";

import Home from "./home/home";
import BlogDetails from "./BlogDetails";
import Authentication from "./Authentication";
import AboutUs from "./AboutUs";

function Homepage(props) {
  return (
    <div>
  
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
