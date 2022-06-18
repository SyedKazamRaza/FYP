import React, { useState, useEffect } from "react";
// import './css/admin-services.css'
// import './css/orders.css'
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import {storage} from '../firebase';
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useUser } from "../userContext";


const AddBlog = () => {
  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const { id } = useParams();   //id is the route parameter name we want to fetch  
    const { data: blog, error, isPending } = useFetch('http://localhost:5000/blogs/' + id);
    console.log(blog)

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [file, setFile] = useState('');
    const [progresspercent, setProgresspercent] = useState(0);

    var heading = "Add New"
    var imageText = "Upload"
    if(blog.length!==0){
      heading = "Update"
      imageText = "Update"
    }else{
      heading = "Add New"
      imageText = "Upload"
    }

    useEffect(()=>{
      if(blog.length!==0){
        setContent(blog.content)
        setTitle(blog.title)
        
      }
      else {
        setTitle("")
        setContent ("")
      }
    }, [blog])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(blog.length!==0){
          const pictureRef = ref(storage, `${blog.image.toLocaleString()}`);
      
          deleteObject(pictureRef).then(() => {
            console.log("File deleted from firebase")
          }).catch((error) => {
            console.log("Error deleteing file from firebase "+error)
          });
          }
        
        const storageRef = ref(storage, `blog/${file.name+Date().toLocaleString()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", 
        (snapshot) => {
            const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
        },
        (error) => {
            console.log(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
                setImage(downloadURL)
                const newblog = { title, content, image: downloadURL };
                console.log(blog)
                if(blog.length===0){
                axios.post('http://localhost:5000/blogs/add', newblog)
                .then((response) => {
                if (response.status!==200) { // if response failed to fetch data from server
                    throw Error('could not post the data for that resource');  //this error is catched by catch block
                }       
                navigate('/admin/blogs');   //after the yser is added move to home page
                })
                .catch((error) => {
                    console.log(error)       
                }) }
                else{
                  axios.post('http://localhost:5000/blogs/update/'+blog._id, newblog)
                  .then((response) => {
                  if (response.status!==200) { // if response failed to fetch data from server
                      throw Error('could not post the data for that resource');  //this error is catched by catch block
                  }       
                  navigate('/admin/blogs'); //after the yser is added move to home page
                  })
                  .catch((error) => {
                      console.log(error)       
                  }) 

                }
        
            });     
        })       

    }

    return (  
        <section className="home-section">
        <div className="home-content">
          <TopBar/>
          <div className="order-container">

            <section className="section section-md section-last bg-default">
              <div className="container">
                <h2 className="text-primary">{heading} Blog</h2>
                <form className="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact"
                  method="post" onSubmit={handleSubmit}>
                  <div className="row row-14 gutters-14">
                    <div className="col-12">
                      {blog.length!==0 && 
                        <img alt="" src={blog.image} style={{height:"500px", width:"100%"}}/>}
                      </div>
                    <div className="col-12">
                      <div className="form-wrap">
                        <input className="form-input" 
                        required
                        id="contact-first-name" 
                        type="text" name="name"
                        data-constraints="@Required"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-wrap">
                        <textarea className="form-input" 
                        placeholder="Description"
                        id="contact-message" name="message"
                        required
                        value={content}
                        data-constraints="@Required"
                        onChange={(e) => setContent(e.target.value)}>
                        </textarea>
                      </div>
                    </div>
                    <div className="upload-image">
                      <h6>{imageText} Image</h6>
                      <input type="file" id="image-input" 
                      accept="image/jpeg, image/png, image/jpg" 
                      data-constraints="@Required"
                      required
                      onChange={(e)=>{setFile(e.target.files[0])}}/>
                      <div id="display-image">{progresspercent}%</div>
                      
                    </div>
                  </div>
                

                  <button className="button button-primary button-pipaluk" >{heading} Blog</button>
                </form>
              </div>
            </section>
          </div>
          </div>
      </section>
    );
    
}
 
export default AddBlog;