import useFetch from "../useFetch";
import TopBar from "./TopBar";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../userContext";
import { useState, useEffect } from 'react';

const Customers = () => {
  const [users, setUsers] = useState([])    //for any data
  var [refresh, setRefresh] = useState(0)
    
    //blogs is the dependency, when the blogs change, it triggers useEffect to run 
    useEffect(() => { 
      axios.get('http://localhost:5000/user/')
        .then((response) => {
          if (response.status!==200) { // if response failed to fetch data from server
              throw Error('could not fetch the data for that resource');  //this error is catched by catch block
          }   
          setUsers(response.data)
        })
        .catch((error) => {

        })

    }, [])

    useEffect(() => { 
      axios.get('http://localhost:5000/user/')
        .then((response) => {
          if (response.status!==200) { // if response failed to fetch data from server
              throw Error('could not fetch the data for that resource');  //this error is catched by catch block
          }   
          setUsers(response.data)
        })
        .catch((error) => {
          console.log(error)
        })

    }, [refresh])

  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }
    //const { error, isPending, data: users } = useFetch('http://localhost:5000/user/')

    const handleDelete = (id)=>{   
        confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui'>
              <h2 style={{color:"red"}}>Are you sure?</h2>
              <p>You want to delete this user?</p>
              <button className="button button-primary button-pipaluk"
              onClick={onClose}>No</button>
              {'    '}
              <button className="button button-primary button-pipaluk"
                onClick={() => {
    
                  axios.delete('http://localhost:5000/user/'+id)
                  .then((response) => {
                    setRefresh(refresh+=1)
                   
                    console.log("user deleted")
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
                                                <th>Phone #</th>
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
     );
}
 
export default Customers;