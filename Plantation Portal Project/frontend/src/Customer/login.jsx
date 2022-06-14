import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserUpdate } from "../userContext";
import validator from 'validator';

function Login() {
  const { setLoginUser } = useUserUpdate();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassErrors] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    var flag = false;

    if(validator.isEmpty(email)){
      setEmailError("This field is required") 
    }
    else {
      setEmailError("") 
    }
    if(validator.isEmpty(password)){
      setPassErrors("This field is required") 
    }
    else {
      setPassErrors("") 
    }

    e.preventDefault();

    if(!validator.isEmpty(email) && !validator.isEmpty(password)){
      const user = { email, password };
      console.log("login user: ", user);
      axios
        .post("http://localhost:5000/login", user)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.user)
            setLoginUser(res.data.user);
            flag = true
            if(res.data.user.type==="admin")
            {
              navigate("/admin");
            }
            else{
              navigate("/");
            }
          } 
        })
        .catch((error) => {
          console.log(error);
        });

        axios
        .post("http://localhost:5000/loginStore", user)
        .then((res) => {
          
          if (res.status === 200) {
            flag = true
            console.log("Hi"+res.data.user)
            
            setLoginUser(res.data.user);
              navigate("/seller/home");
          } 
        })
        .catch((error) => {
          
          console.log(error);
        });
    }
    if(!flag){
      setEmailError("Invalid email")
    }
    else{
      setEmailError("")
    } 
  

  };
  return (
    <div>
      <h2 className="text-primary">Login Your Account</h2>
      <div className="tab-pane fade show active" id="tabs-4-1">
        <form
          className="rd-form rd-form-variant-2 rd-mailform"
          data-form-output="form-output-global"
          data-form-type="contact"
          onSubmit={handleSubmit}
        >
          <div className="row row-14 gutters-14">
            <div className="col-md-8">
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-email-2"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                  value={email}
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <label className="form-label" htmlFor="contact-email-2">E-mail</label> */}
              </div>
              <span className='form-validation'>{emailError}</span>
            </div>
            <div className="col-md-8">
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-password"
                  type="password"
                  name="password"
                  data-constraints="@AlphaNumeric"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <label className="form-label" htmlFor="contact-password">Password</label> */}
              </div>
              <span className='form-validation'>{passError}</span>
            </div>
          </div>
          <p>
            <Link to="#" style={{ color: `dodgerblue` }}>
              Forgot Your Password?
            </Link>
          </p>
          <div className="group-md group-middle">
            <button className="button button-width-xl-230 button-primary button-pipaluk">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
