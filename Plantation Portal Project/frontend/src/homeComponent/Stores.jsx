import React from "react";
import { Link } from "react-router-dom"; 

const Stores = ()=>{
return(
    <div>
    <section className="section section-md bg-default section-top-image">
        <div className="container">
          <div className="oh h2-title">
            <h2 className="text-primary">Buy Premium Quality Plants and Tools from Our Stores</h2>
          </div>
          <div className="row row-30" data-lightgallery="group">
            <div className="col-sm-6 col-lg-4">
              <div className="oh-desktop">
                <article className="thumbnail thumbnail-mary thumbnail-sm wow slideInLeft" data-wow-delay="0s">
                  <div className="thumbnail-mary-figure">
                      <img src="images/landscaping.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div className="thumbnail-mary-caption"><Link to="stores/gardeningmiracle.html" data-lightgallery="item"></Link>
                    <h4 className="thumbnail-mary-title"><Link to="stores/gardeningmiracle.html">Gardening Miracle</Link></h4>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="oh-desktop">
                <article className="thumbnail thumbnail-mary thumbnail-sm wow slideInUp" data-wow-delay=".1s">
                  <div className="thumbnail-mary-figure"><img src="images/indoor-plants.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div className="thumbnail-mary-caption"><Link to="stores/plantshub.html" data-lightgallery="item"></Link>
                    <h4 className="thumbnail-mary-title"><Link to="stores/plantshub.html">PlantsHub</Link></h4>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="oh-desktop">
                <article className="thumbnail thumbnail-mary thumbnail-sm wow slideInRight" data-wow-delay=".0s">
                  <div className="thumbnail-mary-figure"><img src="images/tools.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div className="thumbnail-mary-caption"><Link to="stores/gardeningtoolshub.html" data-lightgallery="item"></Link>
                    <h4 className="thumbnail-mary-title"><Link to="stores/gardeningtoolshub.html">Gardening Tools Hub</Link></h4>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="oh-desktop">
                <article className="thumbnail thumbnail-mary thumbnail-sm wow slideInUp" data-wow-delay=".1s">
                  <div className="thumbnail-mary-figure"><img src="images/planters.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div className="thumbnail-mary-caption"><Link to="stores/plantersheaven.html" data-lightgallery="item"></Link>
                    <h4 className="thumbnail-mary-title"><Link to="stores/plantersheaven.html">Planters Heaven</Link></h4>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="oh-desktop">
                <article className="thumbnail thumbnail-mary thumbnail-sm wow slideInLeft" data-wow-delay="0s">
                  <div className="thumbnail-mary-figure"><img src="images/seeds.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div className="thumbnail-mary-caption"><Link to="stores/ibrahimfarms.html" data-lightgallery="item"></Link>
                    <h4 className="thumbnail-mary-title"><Link to="stores/ibrahimfarms.html">Ibrahim Farms</Link></h4>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="oh-desktop">
                <article className="thumbnail thumbnail-mary thumbnail-sm wow slideInDown" data-wow-delay=".1s">
                  <div className="thumbnail-mary-figure"><img src="images/fertilizers.jpg" alt="" width="370" height="303"/>
                  </div>
                  <div className="thumbnail-mary-caption"><Link to="stores/moregreen.html" data-lightgallery="item"></Link>
                    <h4 className="thumbnail-mary-title"><Link to="stores/moregreen.html">More Green</Link></h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
)
}
export default Stores;