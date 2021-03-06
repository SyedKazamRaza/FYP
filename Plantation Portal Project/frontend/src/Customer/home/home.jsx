import React, { useEffect } from "react";
import Swiper from "./Swiper";
import Blogs from "../blogs";
import AboutUs from "./AboutUs";
import Stores from "../Stores";
import Services from "../Services";
import Products from "../Products";
import IconsRuby from "./IconsRuby";
import { Link } from "react-router-dom";

export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Link className="section section-banner d-none d-xl-block" to=""></Link>
      <Swiper />
      <IconsRuby />
      <Products />
      <Services />
      <Blogs count={3} />
      <AboutUs />
      <Stores />
    </div>
  );
}
