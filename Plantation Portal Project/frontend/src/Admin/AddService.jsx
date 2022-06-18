
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

const AddService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }

    const { id } = useParams();   //id is the route parameter name we want to fetch  
    const { data: service, error, isPending } = useFetch('http://localhost:5000/services/' + id);
    console.log(service)

    const [s_title, setTitle] = useState('');
    const [s_price, setPrice] = useState('');
    const [s_details, setDetails] = useState('')
    const [s_image, setImage] = useState('');
    const [file, setFile] = useState('');
    const [progresspercent, setProgresspercent] = useState(0);

    var heading = "Add New"
    var imageText = "Upload"
    if(service.length!==0){
      heading = "Update"
      imageText = "Update"
    }else{
      heading = "Add New"
      imageText = "Upload"
    }

    useEffect(()=>{
      if(service.length!==0){
        setDetails(service.s_details)
        setTitle(service.s_title)
        setPrice(service.s_price)
        
      }
      else {
        setTitle("")
        setDetails ("")
        setPrice("")
      }
    }, [service])

    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(service.length!==0){
        const pictureRef = ref(storage, `${service.s_image.toLocaleString()}`);
    
        deleteObject(pictureRef).then(() => {
          console.log("File deleted from firebase")
        }).catch((error) => {
          console.log("Error deleteing file from firebase "+error)
        });
        }
        
        
        const storageRef = ref(storage, `services/${file.name+Date().toLocaleString()}`);
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
                const newservice = { s_title, s_price, s_details, s_image: downloadURL };
                console.log(newservice)
                if(service.length===0){
                  axios.post('http://localhost:5000/services/add', newservice)
                  .then((response) => {
                  if (response.status!==200) { // if response failed to fetch data from server
                      throw Error('could not post the data for that resource');  //this error is catched by catch block
                  }       
                  navigate('/admin/services');   //after the yser is added move to home page
                  })
                  .catch((error) => {
                      console.log(error)       
                  }) }
                else{
                  axios.post('http://localhost:5000/services/update/'+service._id, newservice)
                  .then((response) => {
                  if (response.status!==200) { // if response failed to fetch data from server
                      throw Error('could not post the data for that resource');  //this error is catched by catch block
                  }       
                  navigate('/admin/services');   //after the yser is added move to home page
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
                    <h2 className="text-primary">{heading} Service</h2>
                    <form className="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" 
                    method="post" onSubmit={handleSubmit}>
                        <div className="row row-14 gutters-14">
                          <div className="col-12">
                          {service.length!==0 && 
                            <img alt="" src={service.s_image} style={{height:"500px", width:"100%"}}/>}
                          </div>
                          <div className="col-12">
                            <div className="form-wrap">
                              <input className="form-input" 
                              id="contact-first-name" 
                              type="text" name="name" 
                              data-constraints="@Required"
                              required
                              placeholder="Title"
                              value={s_title}
                              onChange={(e) => setTitle(e.target.value)} />
                              
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-wrap">
                              <input className="form-input" 
                              id="contact-last-name" 
                              type="text" name="name" 
                              data-constraints="@Required" 
                              required
                              placeholder="Starting Price"
                              value={s_price}
                              onChange={(e) => setPrice(e.target.value)}/>
                             

                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-wrap">
                           
                              <textarea className="form-input" 
                              id="contact-message" name="message" 
                              data-constraints="@Required"
                              required
                              placeholder="Details"
                              value={s_details}
                              onChange={(e) => setDetails(e.target.value)}></textarea>
                            </div>
                          </div>
                          <div className="upload-image">
                            <h6>{imageText} Image</h6>
                            <input type="file" 
                            id="image-input" 
                            accept="image/jpeg, image/png, image/jpg" 
                            data-constraints="@Required"
                            required
                            onChange={(e)=>{setFile(e.target.files[0])}}/>
                            
                            <div id="display-image">
                            {progresspercent}%
                             
                            </div>
                          </div>
                          </div>
                            
                        <button className="button button-primary button-pipaluk" type="submit">{heading} Service</button>
                      </form>
                </div>
              </section>
          </div>
          </div>
      </section>
    );
}
 
export default AddService;