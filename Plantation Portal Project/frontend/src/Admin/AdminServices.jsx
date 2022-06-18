import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import useFetch from "../useFetch";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { ref, deleteObject } from "firebase/storage";
import {storage} from '../firebase';
// import './css/admin-services.css'
// import './css/orders.css'
import TopBar from "./TopBar";
import { useUser } from "../userContext";
import { useState } from "react";
import { useEffect } from "react";

const AdminServices = () => {
  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }
  const [services, setServices] = useState([])    //for any data
  var [refresh, setRefresh] = useState(0)
    
    //blogs is the dependency, when the blogs change, it triggers useEffect to run 
    useEffect(() => { 
      axios.get('http://localhost:5000/services/')
        .then((response) => {
          if (response.status!==200) { // if response failed to fetch data from server
              throw Error('could not fetch the data for that resource');  //this error is catched by catch block
          }   
          setServices(response.data)
        })
        .catch((error) => {

        })

    }, [])

    useEffect(() => { 
      axios.get('http://localhost:5000/services/')
        .then((response) => {
          if (response.status!==200) { // if response failed to fetch data from server
              throw Error('could not fetch the data for that resource');  //this error is catched by catch block
          }   
          setServices(response.data)
        })
        .catch((error) => {
          console.log(error)
        })

    }, [refresh])


  

    const handleDelete = (id)=>{   
        confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h2 style={{color:"red"}}>Are you sure?</h2>
              <p>You want to delete this service?</p>
              <button className="button button-primary button-pipaluk"
              onClick={onClose}>No</button>
              {'    '}
              <button className="button button-primary button-pipaluk"
                onClick={() => {
    
                  axios.delete('http://localhost:5000/services/'+id)
                  .then((response) => {
                   
                    const pictureRef = ref(storage, `${response.data.toLocaleString()}`);
    
                    deleteObject(pictureRef).then(() => {
                      console.log("File deleted from firebase")
                    }).catch((error) => {
                      console.log("Error deleteing file from firebase "+error)
                    });
    
                    setRefresh(refresh+=1)
                    }) 
                  .catch((error) => {
                      console.log(error)       
                  }) 
                    onClose();
                  }}
              >
                Yes
              </button>
            </div>
          );
        }
      })
        
    
      }
      
    return ( 
        <section className="home-section">
            <div className="home-content">
                <TopBar/>
                <div className="order-container">
                    <section className="section section-sm bg-default">
                        <div className="container">
                            <h2 className="text-primary" style={{marginTop: "5px"}}>
                                Manage Services
                                <Link to="/admin/addservice"><i className="fa fa-pencil-square-o"></i></Link>
                            </h2>
                            <div className="row row-sm row-40 row-md-50">
                            {services.slice().map(service => (
                            <div className="col-sm-6 col-md-12 wow fadeInRight"  key={service._id}>
                                <article className="product-big">
                                    <div className="unit flex-column flex-md-row align-items-md-stretch">
                                        <div className="unit-left"><Link className="product-big-figure" to={`/admin/services/${service._id}`}><img src={service.s_image} alt="" width="600" height="366"/></Link></div>

                                        <div className="unit-body">
                                            <div className="product-big-body">
                                                <h5 className="product-big-title text-primary"><Link to={`/admin/services/${service._id}`}>{ service.s_title }</Link></h5>
                                                <p className="product-big-text">{ service.s_details} </p>
                                                <div className="group-sm group-middle justify-content-center">
                                                    <h5>Starting from {service.s_price}</h5>
                                                </div>
                                                <br/>
                                                <div className="team-classic-icons">
                                                <Link className="btn btn-success  mt-2" to={`/admin/services/${service._id}`}><i className="fa fa-eye"></i></Link>{'     '}
                                                <Link className="btn btn-success  mt-2" to={`/admin/addservice/${service._id}`}><i className="fa fa-edit"></i></Link>{'    '}
                                                <Link className="btn btn-success  mt-2" to="#"
                                                onClick={()=>{handleDelete(service._id)}} >
                                                    <i className="fa fa-trash-o"></i>
                                                </Link>
                                                </div>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </article>
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
 
export default AdminServices;