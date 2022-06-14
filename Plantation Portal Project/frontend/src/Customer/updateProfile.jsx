import React, { useState, useEffect } from "react";

import useFetch from "../useFetch";
import axios from "axios";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

import "react-phone-input-2/lib/style.css";
import { useUserUpdate } from "../userContext";
import validator from "validator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  console.log("Updating user...........:");
  const user = useUser();
  console.log(user);
  const userid = user._id;
  const useremail = user.email;
  console.log(user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phError, setPhErrors] = useState("");
  const [passError, setPassErrors] = useState("");
  const [emailError, setEmailError] = useState("");
  const { setLoginUser } = useUserUpdate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/getLoginUser/" + userid)
      .then((response) => {
        if (response.status === 200) {
          setFname(response.data.fname);
          setLname(response.data.lname);
          setEmail(response.data.email);
          setPhno(response.data.phno);
          setPassword(response.data.password);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const {
    error,
    isPending,
    data: users,
  } = useFetch("http://localhost:5000/user/");

  const notifySuccess = (info) => {
    toast.success(`${info}`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      background: "#34A853",
    });
  };

  const handlePhErrors = () => {
    if (phno.length === 0) {
      setPhErrors("Phone Number is required");
      return false;
    } else if (phno.length !== 12) {
      setPhErrors("Phone Number must of 12 digits");
      return false;
    } else {
      return true;
    }
  };

  const handlePasswordErrors = () => {
    const regexLower = new RegExp("(?=.*[a-z])");
    const regexUpper = new RegExp("(?=.*[A-Z])");
    const regexNumeric = new RegExp("(?=.*[0-9])");

    if (validator.isEmpty(password)) {
      setPassErrors("This field is required");
      return false;
    } else if (!validator.isLength(password, { min: 8, max: 15 })) {
      setPassErrors("Password must contain at least 8 characters");
      return false;
    }
    if (!regexLower.test(password)) {
      setPassErrors("Password must contain at least one lowercase character");
      return false;
    } else if (!regexUpper.test(password)) {
      setPassErrors("Password must contain at least one uppercase character");
      return false;
    } else if (!regexNumeric.test(password)) {
      setPassErrors("Password must contain at least one numeric value");
      return false;
    } else {
      setPassErrors("");
      return true;
    }
  };

  const handleExistingUsers = (newUser) => {
    var check = false;
    users.slice().map((user) => {
      if (user.email === newUser.email && user.email !== useremail) {
        check = true;
      }
    });
    if (check) {
      setEmailError("Email already exist");
    } else {
      setEmailError("");
    }
    console.log("check " + check);
    console.log(emailError);
    return check;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passErrorResult = handlePasswordErrors();
    const phErrorResult = handlePhErrors();

    if (phErrorResult && passErrorResult && !validator.isEmpty(email)) {
      var result2;
      var data = { userid: user._id, email, password, fname, lname, phno };

      result2 = handleExistingUsers(data);
      //result = handleExistingEmails(user)

      if (!result2) {
        axios
          .post(`http://localhost:5000/user/updateUser`, data)
          .then((response) => {
            setLoginUser(response.data);
            if (response.status !== 200) {
              throw Error("could not post the data for that resource"); //this error is catched by catch block
            }
            setLoginUser(user);
            console.log("Login user: ", user);
            setPhErrors("");
            setPassErrors("");
            setEmailError("");
            notifySuccess("Profile successfully Updated.");
            navigate("/updateProfile"); //after the yser is added move to home page
          })

          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      alert("Validation erro");
    }
  };

  return (
    <section className="section section-sm section-last bg-default text-left">
      <div className="container">
        <article className="title-classNameic">
          <div className="title-classNameic-title">
            <h3>My Profile</h3>
          </div>
        </article>
        <form
          className="rd-form rd-form-variant-2 rd-mailform"
          data-form-output="form-output-global"
          data-form-type="contact"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="row row-14 gutters-14">
            <div className="col-md-6">
              <div className="form-wrap">
                <p>Frist Name</p>
                <input
                  className="form-input"
                  id="contact-your-className-2"
                  type="text"
                  name="fclassName"
                  data-constraints="@Required"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => {
                    if (validator.isAlpha(e.target.value))
                      setFname(e.target.value);
                  }}
                />
              </div>
              <span className="form-validation"></span>
            </div>

            <div className="col-md-6">
              <div className="form-wrap">
                <p>Last Name</p>

                <input
                  className="form-input"
                  id="contact-your-className-2"
                  type="text"
                  name="lclassName"
                  placeholder="Last Name"
                  data-constraints="@Required"
                  value={lname}
                  onChange={(e) => {
                    if (validator.isAlpha(e.target.value))
                      setLname(e.target.value);
                  }}
                />
              </div>
              <span className="form-validation"></span>
            </div>

            <div className="col-md-6">
              <div className="form-wrap">
                <p>Email</p>

                <input
                  className="form-input"
                  id="contact-email-2"
                  type="email"
                  name="email"
                  data-constraints="@Email @Required"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => {
                    if (validator.isEmail(e.target.value)) {
                      setEmail(e.target.value);
                    }
                  }}
                />
              </div>
              <span className="form-validation">{emailError}</span>
            </div>
            <div className="col-md-6">
              <div className="form-wrap">
                <p>Password</p>

                <input
                  className="form-input"
                  id="contact-password"
                  type="text"
                  name="password"
                  data-constraints="@AlphaNumeric"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <span className="form-validation">{passError}</span>
            </div>
            <div className="col-md-6">
              <div className="form-wrap">
                <p>Phone Number</p>

                <input
                  className="form-input"
                  id="contact-phone-2"
                  type="text"
                  name="phone"
                  data-constraints="@Numeric"
                  placeholder="Phone #"
                  value={phno}
                  onChange={(e) => {
                    setPhno(e.target.value);
                  }}
                />
              </div>
              <span className="form-validation">{phError}</span>
            </div>
          </div>
          <button
            className="button button-primary button-pipaluk"
            type="submit"
          >
            Update Profile
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;
