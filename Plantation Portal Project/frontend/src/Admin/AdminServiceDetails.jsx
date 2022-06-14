import TopBar from "./TopBar";
import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { ref, deleteObject } from "firebase/storage";
import {storage} from '../firebase';

const AdminServiceDetails = () => {
    const { id } = useParams();   //id is the route parameter name we want to fetch
    const { data: service, error, isPending } = useFetch('http://localhost:5000/services/' + id);

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
        <section className="home-section">
            <div className="home-content">
                < TopBar/>
                { service && (
                    <div className="order-container">
                        <section>	
                            <div className="container marg50">
                                <div className="row row-50 justify-content-center">
                                    <h2 className="text-primary">{service.s_title}</h2>
                                    <br/>
                                    <div className="team-classic-icons">
                                        <Link className="btn btn-success  mt-2" to={`/admin/addservice/${service._id}`}><i className="fa fa-edit"></i></Link>{'    '}
                                        <Link className="btn btn-success  mt-2" to="#"
                                        onClick={()=>{handleDelete(service._id)}} >
                                            <i className="fa fa-trash-o"></i>
                                        </Link>
                                    </div>
                                    <div className="col-md-10 col-lg-5 col-xl-6 single-service">
                                        <div className="bs-blog-img "><img alt="" src={service.s_image}/></div>
                                    </div>
                                    
                                    <div className="col-md-10 col-lg-7 col-xl-6">
                                        <h4 style={{float: "left"}}>What it'll include</h4><br/><br/>
                                        <p style={{textAlign: "left"}}>{service.s_details}</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </section>
            
                    </div>
                )}
            </div>
        </section>

     );
}
 
export default AdminServiceDetails;