import React from "react";
import HomeNavbar from "./homeNavbar/homeNavbar";
import ShowProducts from "./showProducts/showProducts";
import Blogs from "./blogs";

function Homepage(props) {
  return (
    <div>
      <HomeNavbar />
      {props.category === "blogs" ? (
        <Blogs />
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
    </div>
  );
}

export default Homepage;
