import React from "react";
import ShowProducts from "./showProducts/showProducts";
import Blogs from "./Blogs";
import Header from "./homeNavbar/Header";
import Footer from "./Footer";
import Home from "./home/Home";
import BlogDetails from "./BlogDetails";
import {userContext} from '../authenticationComp/userContext'
import {ReactSession} from 'react-client-session';
import Authentication from "../authenticationComp/Authentication";
import AboutUs from "../AboutUs";

function Homepage(props) {
  return (
    <div>
       <userContext.Provider value={ReactSession.get('user')}>
        <Header/>   
      </userContext.Provider>
      { props.category === "login" ? (
        <Authentication setLoginUser={props.setLoginUser} form="login"/>
      ) :props.category === "register" ? (
        <Authentication setLoginUser={props.setLoginUser} form="register"/>
      ) :props.category === "aboutus" ? (
        <AboutUs />
      ) :props.category === "blogs" ? (
        <Blogs />
      ) : props.category === "home" ? (
        <Home/>
      ) : props.category === "blogDetails" ? (
        <BlogDetails/>
      ) : props.category === "tools" ? (
        <ShowProducts category="tools" />
      ) : props.category === "seeds" ? (
        <ShowProducts category="seeds" />
      ) : props.category === "fertilizers" ? (
        <ShowProducts category="fertilizers" />
      ) : props.category === "services" ? (
        <ShowProducts category="services" />
      ) : (
        <ShowProducts category="plants" />
      )}
      <Footer/>
    </div>
  );
}

export default Homepage;
