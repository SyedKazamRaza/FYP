import React, { useState } from "react";
import axios from "axios";
import { useNavbarUpdate } from "./userContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserUpdate } from "../Customer/userContext";

function Login(props) {
  const { setLoginUser } = useUserUpdate();
  const {changeNavBold} = useNavbarUpdate();

  let location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    axios
      .post("http://localhost:5000/user/login", user)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.message);
          setLoginUser(res.data.user);
          // ReactSession.set("user", res.data.user);
          // console.log(ReactSession.get("user"));
          // alert(location.state)
          if (location.state && (location.state.nextScreen === "checkout")) {
            navigate("/checkout");
          } else {
            changeNavBold('shop');
            navigate("/shop");
          }
        } else {
          alert("Invalid credientials");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="tab-pane fade show active" id="tabs-4-1">
        <p>Login Your Account</p>
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
