import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"; 
import {ReactSession} from 'react-client-session';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Regsiter({setLoginUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phno, setPhno] = useState('');
    const [type, setType] = useState('customer');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password, fname, lname, phno, type };
        
        axios.post('http://localhost:5000/user/add', user)
            .then((response) => {
                setLoginUser(user)
                ReactSession.set("user", user);
                console.log(user)
              if (response.status!==200) { // if response failed to fetch data from server
                  throw Error('could not post the data for that resource');  //this error is catched by catch block
              } 
              
            navigate('/');  //after the yser is added move to home page
            })
            .catch((error) => {
              console.log(error)       
            })
    }
    return (
        <div>
             <div className="tab-pane fade show active" id="tabs-4-2">
                <form className="rd-form rd-form-variant-2 rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" onSubmit={handleSubmit}>
                    <div className="row row-14 gutters-14">
                    <div className="col-md-8">
                            <div className="form-wrap">
                                <input className="form-input" 
                                id="contact-email-2" 
                                type="email" name="email" 
                                data-constraints="@Email @Required"
                                onChange={(e) => setEmail(e.target.value)}/>
                                <label className="form-label" htmlFor="contact-email-2">E-mail</label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-wrap">
                                <input className="form-input" id="contact-your-name-2" 
                                type="text" 
                                name="name" 
                                data-constraints="@Required"
                                onChange={(e) => setFname(e.target.value)} />
                                <label className="form-label" htmlFor="contact-your-name-2">First Name</label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-wrap">
                                <input className="form-input" 
                                id="contact-your-name-2" 
                                type="text" name="name" 
                                data-constraints="@Required"
                                onChange={(e) => setLname(e.target.value)}/>
                                <label className="form-label" htmlFor="contact-your-name-2">Last Name</label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-wrap">
                                <PhoneInput 
                                inputClass="form-input" 
                                country={'pk'}
                                data-constraints="@Required"
                                inputStyle={{
                                    background: "#f1efeb",
                                    width: "100%"
                                  }}
                                onChange={(e) => {setPhno(e)}}/>
                            </div>
                            {console.log(phno)}
                        </div>
                        <div className="col-md-8">
                            <div className="form-wrap">
                                <input className="form-input" id="contact-password" 
                                type="password" name="password" 
                                data-constraints="@AlphaNumeric"
                                onChange={(e) => setPassword(e.target.value)} />
                                <label className="form-label" htmlFor="contact-password">Password</label>
                            </div>
                        </div>
                    </div>
                    <label><input type="radio"
                    checked={type ==="customer"} 
                    name="customer"
                    onChange={(e)=>setType(e.target.name)}/>I am a customer</label> 
                    <label><input type="radio" 
                    checked={type==="vendor"}
                    name="vendor"
                    onChange={(e)=>setType(e.target.name)}/>I am a vendor</label>
                    <p>By creating an account you agree to our <Link to="#" style={{color:`dodgerblue`}}>Terms & Conditions</Link>.</p>
                    <div className="group-md group-middle">
                        <button className="button button-width-xl-230 button-primary button-pipaluk">Register</button>
                    </div>  
                </form>
            </div> 
        </div>
    );
}

export default Regsiter;