import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutUs = () => {
  const [records, setRecords] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/seller/indexPageStats")
      .then((response) => {
        if (response.status === 200) {
          setRecords(response.data);
          console.log("Stats");
          console.log(response.data);
        }
      });
  }, []);

  return (
    <div>
      <section className="section">
        <div
          className="parallax-container"
          data-parallax-img={"images/count-back.jpg"}
        >
          <div className="parallax-content section-xl context-dark bg-overlay-68">
            <div className="container">
              <div className="row row-lg row-50 justify-content-center border-classNameic border-classNameic-big">
                <div
                  className="col-sm-6 col-md-5 col-lg-3 wow fadeInLeft"
                  data-wow-delay="0s"
                >
                  <div className="counter-creative">
                    <div className="counter-creative-number">
                      <span className="counter">{records.totalStores}</span>
                      <span className="icon counter-creative-icon fas fa-shopping-basket"></span>
                    </div>
                    <p className="counter-creative-title">Stores</p>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-5 col-lg-3 wow fadeInLeft"
                  data-wow-delay=".1s"
                >
                  <div className="counter-creative">
                    <div className="counter-creative-number">
                      <span className="counter">{records.totalProds}</span>
                      <span className="icon counter-creative-icon fl-bigmug-line-up104"></span>
                    </div>
                    <p className="counter-creative-title">Products</p>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-5 col-lg-3 wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  <div className="counter-creative">
                    <div className="counter-creative-number">
                      <span className="counter">{records.totalClient}</span>
                      <span className="icon counter-creative-icon fl-bigmug-line-sun81"></span>
                    </div>
                    <p className="counter-creative-title">Happy Clients</p>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-md-5 col-lg-3 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="counter-creative">
                    <div className="counter-creative-number">
                      <span className="counter">{records.totalServices}</span>
                      <span className="icon counter-creative-icon fl-bigmug-line-user143"></span>
                    </div>
                    <p className="counter-creative-title">Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
