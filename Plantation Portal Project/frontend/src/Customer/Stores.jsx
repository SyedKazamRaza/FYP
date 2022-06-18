import React from "react";
import useFetch from "../useFetch";

const Stores = () => {
  const {
    error,
    isPending,
    data: stores,
  } = useFetch("http://localhost:5000/store/");
  console.log("All stores: ", stores);
  return (
    <div>
      <section className="section section-md bg-default section-top-image">
        <div className="container">
          <div className="oh h2-title">
            <h2 className="text-primary">
              Buy Premium Quality Plants and Tools from Our Stores
            </h2>
          </div>
          <div className="row row-30" data-lightgallery="group">
            {stores.slice(0,6).map((store, index) => {
              return (
                <div className="col-sm-6 col-lg-4" key={index}>
                  <div className="oh-desktop">
                    <article
                      className="thumbnail thumbnail-mary thumbnail-sm wow slideInLeft"
                      data-wow-delay="0s"
                    >
                      <div className="thumbnail-mary-figure">
                        <img
                          src={store.image}
                          alt=""
                          width="370"
                          height="303"
                        />
                      </div>
                      <div className="thumbnail-mary-caption">
                        <div
                          to="stores/gardeningmiracle.html"
                          data-lightgallery="item"
                        ></div>
                        <h4 className="thumbnail-mary-title">
                          <div to="stores/gardeningmiracle.html">
                            {store.storeName}
                          </div>
                        </h4>
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Stores;
