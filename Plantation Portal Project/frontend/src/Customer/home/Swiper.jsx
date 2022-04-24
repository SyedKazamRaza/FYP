import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavbarUpdate } from "../userContext";


const Swiper = () => {
  const {changeNavBold} = useNavbarUpdate();
  const navigate = useNavigate();
  return (
    <section
      className="section swiper-container swiper-slider swiper-slider-modern"
      data-loop="true"
      data-autoplay="5000"
      data-simulate-touch="true"
      data-nav="true"
      data-slide-effect="fade"
    >
      <div className="swiper-wrapper text-left">
        <div
          className="swiper-slide context-dark"
          data-slide-bg={"/images/organic-food-slider.jpg"}
        >
          <div className="swiper-slide-caption">
            <div className="container">
              <div className="row justify-content-center justify-content-xxl-start">
                <div className="col-md-10 col-xxl-6">
                  <div className="slider-modern-box">
                    <h1 className="slider-modern-title">
                      <span
                        data-caption-animate="slideInDown"
                        data-caption-delay="0"
                      >
                        Welcome to Fine Living Plantation and Gardens
                      </span>
                    </h1>
                    <p
                      data-caption-animate="fadeInRight"
                      data-caption-delay="400"
                    >
                      Reconnecting with the nature.
                    </p>
                    <div className="oh button-wrap">
                      <div
                        className="button button-primary button-ujarak"
                        onClick={()=>{
                          changeNavBold('about');
                          navigate('/aboutus')
                        }}
                        data-caption-animate="slideInLeft"
                        data-caption-delay="400"
                      >
                        Read more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="swiper-slide context-dark"
          data-slide-bg={"/images/plants_for_people.jpg"}
        >
          <div className="swiper-slide-caption">
            <div className="container">
              <div className="row justify-content-center justify-content-xxl-start">
                <div className="col-md-10 col-xxl-6">
                  <div className="slider-modern-box">
                    <h1 className="slider-modern-title">
                      <span
                        data-caption-animate="slideInLeft"
                        data-caption-delay="0"
                      >
                        Plants for the the People
                      </span>
                    </h1>
                    <p
                      data-caption-animate="fadeInRight"
                      data-caption-delay="400"
                    >
                      We offer a curated selection of indoor and outdoor plants,
                      plant accesssories, pots, tools, guidelines and services
                      related to plants.
                    </p>
                    <div className="oh button-wrap">
                      <div
                        className="button button-primary button-ujarak"
                        // to="/shop"
                        onClick={()=>{
                          changeNavBold('shop');
                          navigate('/shop')
                        }}
                        data-caption-animate="slideInLeft"
                        data-caption-delay="400"
                      >
                        Shop Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide context-dark"
          data-slide-bg={"/images/plant_styling.jpg"}
        >
          <div className="swiper-slide-caption">
            <div className="container">
              <div className="row justify-content-center justify-content-xxl-start">
                <div className="col-md-10 col-xxl-6">
                  <div className="slider-modern-box">
                    <h1 className="slider-modern-title">
                      <span
                        data-caption-animate="slideInDown"
                        data-caption-delay="0"
                      >
                        We offer custom floral and plant styling
                      </span>
                    </h1>
                    <p
                      data-caption-animate="fadeInRight"
                      data-caption-delay="400"
                    >
                      We love to bring living plants and floral into any space,
                      making strange places feel more familiar and cold places
                      more comfortable.
                    </p>
                    <div className="oh button-wrap">
                      <div
                        className="button button-primary button-ujarak"
                        data-caption-animate="slideInUp"
                        data-caption-delay="400"
                        onClick={()=>{
                          changeNavBold('about');
                          navigate('/aboutus')
                        }}
                      >
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination swiper-pagination-style-2"></div>
    </section>
  );
};
export default Swiper;
