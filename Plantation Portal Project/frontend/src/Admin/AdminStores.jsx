import TopBar from "./TopBar";
import React, { useEffect } from "react";
import useFetch from "../useFetch";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../userContext";
import { useState } from "react";

const AdminStores = () => {
  const navigate = useNavigate();
  const user = useUser();
  var [count, setCount] = useState({})
  var [productImg, setProductImg] = useState({})
  if (!user._id) {
    navigate("/login");
  }
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const { error, isPending, data: stores } = useFetch('http://localhost:5000/store/')

    const {  data: images } = useFetch('http://localhost:5000/store/productImage')
    //console.log(images)
    useEffect(()=>{
      {stores.slice().map((store) =>(
        setCount(count++)
      ))}
    },[])

    // useEffect(()=>{
    //   {images.slice().map((image) =>(
    //     setProductImg({
    //       productImg: productImg.concat([image.imageurl])
    //     })))}
    //   console.log(productImg)
    // }, [])
   


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
                          <div style={{
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            maxWidth: "350px",
                            textAlign: "center",
                            marginTop: "60px"
                          }}>
                            <div style={{
                              width: "120px",
                              height: "120px",
                              overflow: "hidden",
                              borderRadius: "100%",
                              margin:" -60px auto 0"
                            }}>
                               
                              <img src="../images/plants.jpeg" alt=""
                               style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                               }}/>
                               
                            </div>
                            
                            <div className="card_info">
                                <h4><Link to={`/admin/storesproducts/${store._id}`}>{store.storeName}</Link></h4>
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