import { Link } from "react-router-dom";
import useFetch from "../useFetch";
// import"./css/orders.css"
import TopBar from "./TopBar";
import axios from 'axios';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { ref, deleteObject } from "firebase/storage";
import {storage} from '../firebase';

const AdminBlogs = ({count}) => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:5000/blogs/')
  //const navigate = useNavigate();

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

            <section className="section section-md bg-default">
              <div className="container">
                <h2 className="text-primary">Manage Blogs<Link to="/admin/addblog"><i className="fa fa-pencil-square-o"></i></Link></h2>
                <div className="row row-30 justify-content-center">
                {blogs.slice(0,count).map(blog => (
                  <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight" data-wow-delay="0s" key={blog._id}>
                    <article className="team-classic"><Link className="team-classic-figure" to={`/admin/blogs/${blog._id}`}>
                      <img src={blog.image} alt="" style={{width:"370px", height:"406px"}} /></Link>
                      <div className="team-classic-caption">
                        <h5 className="team-classic-name"><Link to={`/admin/blogs/${blog._id}`}>{ blog.title }</Link></h5>
                        <div className="team-classic-icons">
                          <Link className="btn btn-success  mt-2" to={`/admin/blogs/${blog._id}`}><i className="fa fa-eye"></i></Link>{'     '}
                          <Link className="btn btn-success  mt-2" to={`/admin/addblog/${blog._id}`}><i className="fa fa-edit"></i></Link>{'    '}
                          <Link className="btn btn-success  mt-2" to="/admin/blogs" 
                          onClick={()=>{handleDelete(blog._id)}}>
                            <i className="fa fa-trash-o"></i>
                          </Link>
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
      </div>

     );
}
 
export default AdminBlogs;