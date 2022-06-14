import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import useFetch from "../useFetch";
import TopBar from "./TopBar";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const PendingRequests = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const { error, isPending, data: stores } = useFetch('http://localhost:5000/store/')
    const navigate = useNavigate();

    const handleDelete = (id)=>{   
        confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h2 style={{color:"red"}}>Are you sure?</h2>
              <p>You want to remove this request?</p>
              <button className="button button-primary button-pipaluk"
              onClick={onClose}>No</button>
              {'    '}
              <button className="button button-primary button-pipaluk"
                onClick={() => {
    
                  axios.delete('http://localhost:5000/store/'+id)
                  .then((response) => {

                      window.location.reload()
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

    const handleAccept = (id)=>{   
        confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h2 style={{color:"red"}}>Are you sure?</h2>
              <p>You want to accept this request?</p>
              <button className="button button-primary button-pipaluk"
              onClick={onClose}>No</button>
              {'    '}
              <button className="button button-primary button-pipaluk"
                onClick={() => {
    
                  axios.post('http://localhost:5000/store/update/'+id)
                  .then((response) => {
                    if (response.status!==200) { // if response failed to fetch data from server
                        throw Error('could not post the data for that resource');  //this error is catched by catch block
                    }  
                    navigate('/admin/pendingrequests');
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
      <div className="page">
        <section className="home-section">
            <div className="home-content">
                < TopBar/>
                <div className="order-container">
                    <div className="row row-50 justify-content-center">
                        <div className="col-md-10 col-lg-1 col-xl-7">
                            <h2 className="text-primary">Manage Requests</h2>
                            <div className="tab-content">              
                                <div className="tab-pane fade show active">
                                    <div className="table-responsive" style={{marginTop:"40px"}}>
                                        <table className="table">
                                            <tr>
                                                <th>Store Name</th>
                                                <th>Email</th>
                                                <th>Ph #</th>
                                                <th>Add/Remove</th>
                                            </tr>
                                            {stores.slice().map((store) =>(
                                                store.status==="pending" &&
                                                <tr key={store._id}>
                                                    <td>{store.storeName}</td>
                                                    <td>{store.username}</td>
                                                    <td>{store.phno}</td>
                                                    <td>
                                                    <span></span>
                                                    <Link className=" btn-success " to="/admin/pendingrequests" 
                                                     onClick={()=>{handleAccept(store._id)}}>
                                                        <i className=" fa-check"></i>
                                                    </Link>
                                                    <span></span>
                                                    <Link className="btn-success  " to="/admin/pendingrequests" 
                                                     onClick={()=>{handleDelete(store._id)}}>
                                                        <i className=" fa-remove"></i>
                                                    </Link>
                                                    </td>
                                                </tr>
                                                
                                            
                                            ))}
                                        </table>
                                    </div>  
                                </div>  
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </section>
        </div>
    );
}
 
export default PendingRequests;