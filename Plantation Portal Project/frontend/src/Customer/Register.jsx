import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useUserUpdate } from "../userContext";
import validator from "validator";
import useFetch from "./useFetch";

function Regsiter() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phno, setPhno] = useState("");
  const [type, setType] = useState("customer");
  const [store, setStore] = useState("");
  const { setLoginUser } = useUserUpdate();
  const [phError, setPhErrors] = useState("");
  const [passError, setPassErrors] = useState("");
  const [emailError, setEmailError] = useState("");

  const {
    error,
    isPending,
    data: users,
  } = useFetch("http://localhost:5000/user/");
  const {
    error1,
    isPending1,
    data: stores,
  } = useFetch("http://localhost:5000/store/");

  const navigate = useNavigate();

  const handlePhErrors = () => {
    if (validator.isEmpty(phno)) {
      setPhErrors("This field is required");
      return false;
    } else if (!validator.isMobilePhone(phno)) {
      setPhErrors("Invalid phone number");
      return false;
    } else if (validator.isMobilePhone(phno) && !validator.isEmpty(phno)) {
      setPhErrors("");
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
      if (user.email === newUser.email) {
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
  const handleExistingStores = (newStore) => {
    var check = false;
    console.log(stores);
    stores.slice().map((store) => {
      if (store.username === newStore.email) {
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
      var user;
      var result1, result2;
      if (type === "vendor") {
        user = { email, password, store, phno };
      }
      if (type === "customer") {
        user = { email, password, fname, lname, phno, type };
      }
      result1 = handleExistingStores(user);
      result2 = handleExistingUsers(user);
      //result = handleExistingEmails(user)

      if (!result1 && !result2) {
        if (type === "customer") {
          axios
            .post("http://localhost:5000/add", user)
            .then((response) => {
              setLoginUser(response.data);
              if (response.status !== 200) {
                // if response failed to fetch data from server
                throw Error("could not post the data for that resource"); //this error is catched by catch block
              }

              navigate("/"); //after the yser is added move to home page
            })
            .catch((error) => {
              console.log(error);
            });
        }
        if (type === "vendor") {
          axios
            .post("http://localhost:5000/addStore", user)
            .then((response) => {
              setLoginUser(response.data);
              if (response.status !== 200) {
                // if response failed to fetch data from server
                throw Error("could not post the data for that resource"); //this error is catched by catch block
              }

              navigate("/seller/home"); //after the yser is added move to home page
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    }
  };
  return (
    <div>
      <h2 className="text-primary">Create Your Free Account Today</h2>
      <div className="tab-pane fade show active" id="tabs-4-2">
        <form
          className="rd-form rd-form-variant-2 rd-mailform"
          data-form-output="form-output-global"
          data-form-type="contact"
          method="post"
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
                  placeholder="E-mail"
                  onChange={(e) => {
                    if (validator.isEmail(e.target.value)) {
                      setEmail(e.target.value);
                    }
                  }}
                />
              </div>
              <span className="form-validation">{emailError}</span>
            </div>
            {type === "customer" && (
              <>
                <div className="col-md-8">
                  <div className="form-wrap">
                    <input
                      className="form-input"
                      id="contact-your-name-3"
                      type="text"
                      name="name"
                      data-constraints="@Alpha @Required"
                      placeholder="First Name"
                      required
                      onChange={(e) => {
                        if (validator.isAlpha(e.target.value))
                          setFname(e.target.value);
                      }}
                    />
                  </div>
                  <span className="form-validation"></span>
                </div>

                <div className="col-md-8">
                  <div className="form-wrap">
                    <input
                      className="form-input"
                      id="contact-your-name-2"
                      type="text"
                      name="name"
                      required
                      data-constraints="@Alpha @Required "
                      placeholder="Last Name"
                      onChange={(e) => {
                        if (validator.isAlpha(e.target.value))
                          setLname(e.target.value);
                      }}
                    />
                  </div>
                  <span className="form-validation"></span>
                </div>
              </>
            )}
            {type === "vendor" && (
              <div className="col-md-8">
                <div className="form-wrap">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Store Name"
                    data-constraints="@Alpha @Required "
                    required
                    onChange={(e) => setStore(e.target.value)}
                  />
                </div>
                <span className="form-validation">{passError}</span>
              </div>
            )}
            <div className="col-md-8">
              <div className="form-wrap">
                <PhoneInput
                  inputClass="form-input"
                  country={"pk"}
                  inputStyle={{
                    background: "#f1efeb",
                    width: "100%",
                  }}
                  onChange={(e) => {
                    if (!validator.isEmpty(e)) {
                      setPhno(e);
                    }
                  }}
                />
              </div>
              <span className="form-validation">{phError}</span>
            </div>
            <div className="col-md-8">
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span className="form-validation">{passError}</span>
            </div>
          </div>
          <label>
            <input
              type="radio"
              checked={type === "customer"}
              name="customer"
              onChange={(e) => setType(e.target.name)}
            />
            I am a customer
          </label>
          <label>
            <input
              type="radio"
              checked={type === "vendor"}
              name="vendor"
              onChange={(e) => setType(e.target.name)}
            />
            I am a vendor
          </label>

          <p>
            By creating an account you agree to our{" "}
            <Link to="#" style={{ color: `dodgerblue` }}>
              Terms & Conditions
            </Link>
            .
          </p>
          <div className="group-md group-middle">
            <button className="button button-width-xl-230 button-primary button-pipaluk">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Regsiter;
