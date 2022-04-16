import React from "react";

const AboutUs= ()=>{
    return(
        <div>
            <section className="section">
        <div className="parallax-container" data-parallax-img={"images/count-back.jpg"}>
          <div className="parallax-content section-xl context-dark bg-overlay-68">
            <div className="container">
              <div className="row row-lg row-50 justify-content-center border-classNameic border-classNameic-big">
                <div className="col-sm-6 col-md-5 col-lg-3 wow fadeInLeft" data-wow-delay="0s">
                  <div className="counter-creative">
                    <div className="counter-creative-number"><span className="counter">40</span>
                    <span className="icon counter-creative-icon fas fa-shopping-basket"></span>
                    </div>
                    <h6 className="counter-creative-title">Stores</h6>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-3 wow fadeInLeft" data-wow-delay=".1s">
                  <div className="counter-creative">
                    <div className="counter-creative-number"><span className="counter">2</span><span className="symbol">k</span><span className="icon counter-creative-icon fl-bigmug-line-up104"></span>
                    </div>
                    <h6 className="counter-creative-title">Products</h6>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-3 wow fadeInLeft" data-wow-delay=".2s">
                  <div className="counter-creative">
                    <div className="counter-creative-number"><span className="counter">679</span><span className="icon counter-creative-icon fl-bigmug-line-sun81"></span>
                    </div>
                    <h6 className="counter-creative-title">Happy Clients</h6>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-3 wow fadeInLeft" data-wow-delay=".3s">
                  <div className="counter-creative">
                    <div className="counter-creative-number"><span className="counter">40</span><span className="icon counter-creative-icon fl-bigmug-line-user143"></span>
                    </div>
                    <h6 className="counter-creative-title">Farmers</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
        </div>
    )
}
export default AboutUs;