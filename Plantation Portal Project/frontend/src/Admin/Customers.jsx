import useFetch from "../useFetch";
import TopBar from "./TopBar";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Link } from "react-router-dom";

const Customers = () => {
    const { error, isPending, data: users } = useFetch('http://localhost:5000/user/')
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
    
                  axios.delete('http://localhost:5000/user/'+id)
                  .then((response) => {
                   
                   console.log("user deleted")
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

    return ( 
        <div className="page">
            <section className="home-section">
                <div className="home-content">
                    <TopBar/>
                    <div className="order-container">
                        <div className="row row-50 justify-content-center">
                            <div className="col-md-10 col-lg-1 col-xl-7">
                                    <h2 className="text-primary">Manage Customers</h2>
                                
                                    <div className="tab-content">
                                    
                                        <div className="tab-pane fade show active">
                                        <div className="table-responsive" style={{marginTop:"40px"}}>
                                            <table className="table">
                                            <tr>
                                                <th>Customer</th>
                                                <th>Email</th>
                                                <th>Ph #</th>
                                                <th style={{textAlign:"center"}} >Remove</th>
                                            </tr>
                                            {users.slice().map(user => (
                                                user.type==="customer" &&
                                            <tr>
                                                <td>{user.fname+" "+user.lname}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phno}</td>
                                                <td style={{textAlign:"center"}}  >
                                                <Link  className=" btn-success" to="#"
                                                
                                                onClick={()=>{handleDelete(user._id)}} >
                                                    <i className=" fa-trash-o"></i>
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
 
export default Customers;