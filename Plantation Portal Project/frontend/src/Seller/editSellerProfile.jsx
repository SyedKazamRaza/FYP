import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import validator from "validator";
import axios from "axios";
import { useUser } from "../Customer/userContext";

function EditSellerProfile(props) {
  const user = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const sellerId = "61d9354e52dbabae9bd60541";

  useEffect(() => {
    axios
      .get("http://localhost:5000/seller/getStore/" + sellerId)
      .then((response) => {
        if (response.status === 200) {
          console.log("Seller profile........");
          console.log(response.data);
          setName(response.data.storeName);
          setPassword(response.data.password);
          setEmail(response.data.username);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    console.log("called");
    e.preventDefault();
    if (validator.isEmpty(email)) {
      setError("Email is required.");
      return;
    } else if (validator.isEmpty(password)) {
      setError("Password is required.");
      return;
    } else if (validator.isEmpty(name)) {
      setError("Store Name is required.");
      return;
    } else if (!validator.isEmail(email)) {
      // alert("Invalid email");
      setError("Email format is not Valid.");
      return;
    }
    setError("");
    const storeData = {
      name,
      email,
      password,
    };
    console.log("I am user at editing: ");
    console.log(user);
    return;
  };

  return (
    <section className="sestion">
      <section className="home-section" style={{ background: "#FFFFFF" }}>
        <div className="home-content">
          <TopBar />

          <article className="title-classNameic">
            <div className="title-classNameic-title">
              <h3>Edit Store Profile</h3>
            </div>
            <p style={{ color: "red" }}>{error}`</p>
          </article>
          <form
            className="rd-form rd-form-variant-2 rd-mailform"
            data-form-output="form-output-global"
            data-form-type="contact"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="row4 row-14">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  className="form-input"
                  id="contact-your-className-2"
                  type="text"
                  name="fclassName"
                  style={{ width: "35%" }}
                  placeholder="Store Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  className="form-input"
                  id="contact-email-2"
                  type="email"
                  name="email"
                  style={{ width: "35%" }}
                  placeholder="Password"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  className="form-input"
                  id="contact-your-className-2"
                  type="text"
                  name="lclassName"
                  style={{ width: "35%" }}
                  placeholder="E-mail"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  className="button button-primary button-pipaluk"
                  type="submit"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default EditSellerProfile;
