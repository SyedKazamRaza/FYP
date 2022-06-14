import TopBar from "./TopBar";
import React, { useEffect } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const AdminStores = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const { error, isPending, data: stores } = useFetch('http://localhost:5000/store/')

    return ( 
        <section className="home-section">
        <div className="home-content">
          <TopBar />
                <div className="order-container">
                  <h2 className="text-primary">Manage Stores</h2>
                  <section className="section section-md section-first bg-default">
                    <div className="container">
                      <div className="row row-30 justify-content-center">
                      {stores.slice().map((store) =>(
                        <div className="col-sm-8 col-md-6 col-lg-4" key={store._id}>
                          <div className="card">
                            <div className="card_img">
                                <a href="shop.html"><img src="images/plants.jpeg" alt=""/></a>
                            </div>
                            <div className="card_info">
                                <h4><Link to="/admin/storesproducts">{store.storeName}</Link></h4>
                                <ul
                                    className="list-unstyled d-flex justify-content-center mb-1"
                                  >
                                    <li>
                                      <i className="text-warning fa fa-star"></i>
                                      <i className="text-warning fa fa-star"></i>
                                      <i className="text-warning fa fa-star"></i>
                                      <i className="text-warning fa fa-star"></i>
                                      <i className="text-muted fa fa-star"></i>
                                    </li>
                                  </ul>
                            </div>
                        </div>
                        </div>
                     ))}
                      </div>
                    </div>
                  </section>
                    </div>
                </div>
            </section>
     );
}
 
export default AdminStores;