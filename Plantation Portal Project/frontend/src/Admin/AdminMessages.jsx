import { useEffect } from "react";
import useFetch from "../useFetch";
import TopBar from "./TopBar";
import axios from 'axios';
import { useUser } from "../userContext";


import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminMessages = () => {
  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(refresh)
      }, []);

      const [messages, setMessages] = useState([])    //for any data
      var [refresh, setRefresh] = useState(0)
        
        //blogs is the dependency, when the blogs change, it triggers useEffect to run 
        useEffect(() => { 
          axios.get('http://localhost:5000/admin/messages')
            .then((response) => {
              if (response.status!==200) { // if response failed to fetch data from server
                  throw Error('could not fetch the data for that resource');  //this error is catched by catch block
              }   
              setMessages(response.data)
            })
            .catch((error) => {
    
            })
    
        }, [])
    
        useEffect(() => { 
          axios.get('http://localhost:5000/admin/messages')
            .then((response) => {
              if (response.status!==200) { // if response failed to fetch data from server
                  throw Error('could not fetch the data for that resource');  //this error is catched by catch block
              }   
              setMessages(response.data)
            })
            .catch((error) => {
              console.log(error)
            })
    
        }, [refresh])


    const handleMessage = (id, name, message, status)=>{   
        confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h4>Message from {name}</h4>
              <p>{message}</p>
                {status === "closed" &&
              <button className="button button-primary button-pipaluk"
              onClick={onClose}>Cancel</button>  }
            {status === "open" &&
              <button className="button button-primary button-pipaluk"
              onClick={() => {
                
                axios.post('http://localhost:5000/admin/messages/update/'+id)
                .then((response) => {
                    
                if (response.status!==200) { 
                    //setRefresh("refresh")// if response failed to fetch data from server
                    throw Error('could not post the data for that resource');  //this error is catched by catch block
                } 
                
                      
                  setRefresh(refresh+=1)
                 //after the yser is added move to home page
                })
                .catch((error) => {
                    console.log(error)       
                }) 
                  onClose();
                }}
            >
              Close ticket
            </button>
        }
          </div>
          );
        }
      })
        
    
      }



    return ( 
        <>
        <section className="home-section">
        <div className="home-content">
          <TopBar />
       

       <div className="order-container">
          <div className="row row-50 justify-content-center">
            <div className="col-md-10 col-lg-1 col-xl-7">
              <h2 className="text-primary">Messages</h2>
              <div
                className="tabs-custom tabs-horizontal tabs-line"
                id="tabs-5"
              >
                <ul className="nav nav-tabs">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      href="#tabs-4-1"
                      data-toggle="tab"
                    >
                      Active
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-3" data-toggle="tab">
                      Closed
                    </a>
                  </li>

                  
                </ul>
                

                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs-4-1">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                          <th>Message From</th>
                            <th>Email</th>
                            <th>Ph #</th>
                            <th>View</th>
                          </tr>
                          
                          {messages.slice().map((message) =>(
                            message.status === "open" &&
                                <tr key={message._id}>
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.phoneNo}</td>
                                    <td>
                                    <button className="btn btn-success  mt-2" to="/admin/blogs" 
                                        onClick={()=>{handleMessage(message._id, message.name, message.message, message.status)}}>
                                        View Message
                                    </button>
                                    </td>
                                   
                                </tr>
                                
                            
                            ))}
                           
                                
                              
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tabs-4-3">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                          <th>Message From</th>
                            <th>Email</th>
                            <th>Ph #</th>
                            <th>View</th>
                          </tr>
                          {messages.slice().map((message) =>(
                            message.status === "closed" &&
                                <tr key={message._id}>
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.phoneNo}</td>
                                    <td>
                                    <button className="btn btn-success  mt-2" to="/admin/blogs" 
                                        onClick={()=>{handleMessage(message._id, message.name, message.message,  message.status)}}>
                                        View Message
                                    </button>
                                    </td>
                                </tr>
                                
                            
                            ))}
                          
                        </tbody>
                      </table>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
     
        </>
     );

}
 
export default AdminMessages;