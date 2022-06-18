// import "./css/admin-blogs.css"
import TopBar from "./TopBar";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { ref, deleteObject } from "firebase/storage";
import {storage} from '../firebase';
import { useUser } from "../userContext";

const AdminBlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }

  const { id } = useParams();   //id is the route parameter name we want to fetch
  const { data: blog, error, isPending } = useFetch('http://localhost:5000/blogs/' + id);

  const handleDelete = (id)=>{   
    confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='custom-ui'>
          <h2 style={{color:"red"}}>Are you sure?</h2>
          <p>You want to delete this blog?</p>
          <button className="button button-primary button-pipaluk"
          onClick={onClose}>No</button>
          {'    '}
          <button className="button button-primary button-pipaluk"
            onClick={() => {

              axios.delete('http://localhost:5000/blogs/'+id)
              .then((response) => {
               
                const pictureRef = ref(storage, `${response.data.toLocaleString()}`);

                deleteObject(pictureRef).then(() => {
                  console.log("File deleted from firebase")
                }).catch((error) => {
                  console.log("Error deleteing file from firebase "+error)
                });

                  navigate("/admin/blogs")
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
      <>
     
      <section className="home-section">
            <div className="home-content">
                < TopBar/>
                { blog && (
                    <div className="order-container">
                        <section>	
                            <div className="container marg50">
                                <div className="row row-50 justify-content-center">
                                    <h2 className="text-primary">{blog.title}</h2>
                                    <br/>
                                    <div className="team-classic-icons">
                                        <Link className="btn btn-success  mt-2" to={`/admin/addblog/${blog._id}`}><i className="fa fa-edit"></i></Link>{'    '}
                                        <Link className="btn btn-success  mt-2" to="#"
                                        onClick={()=>{handleDelete(blog._id)}} >
                                            <i className="fa fa-trash-o"></i>
                                        </Link>
                                    </div>
                                    <div className="col-md-10 col-lg-5 col-xl-6 single-service">
                                        <div className="bs-blog-img "><img alt="" src={blog.image}/></div>
                                    </div>
                                    
                                    <div className="col-md-10 col-lg-7 col-xl-6">
                                        <p style={{textAlign: "left"}}>{blog.content}</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </section>
            
                    </div>
                )}
            </div>
        </section>
      </>
     );
}
 
export default AdminBlogDetails;