import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import validator from "validator";
import axios from "axios";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function EditSellerProfile(props) {
  const user = useUser();
  const navigate = useNavigate();

  if (!user._id) {
    navigate("/login");
  }

  const storeid = user._id;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState("");

  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/seller/getStore/${storeid}`)
      .then((response) => {
        if (response.status === 200) {
          // console.log("Seller profile........");
          // console.log(response.data);
          setName(response.data.storeName);
          setPassword(response.data.password);
          setEmail(response.data.username);
          setPhoneNo(response.data.phno);
        }
      })
      .catch((error) => console.log(error));
  }, []);

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

  const handleSubmit = (e) => {
    console.log("called");
    e.preventDefault();
    setImage("");
    setError("");
    if (validator.isEmpty(email)) {
      setError("Email is required.");
      return;
    } else if (validator.isEmpty(password)) {
      setError("Password is required.");
      return;
    } else if (validator.isEmpty(phoneNo)) {
      setError("Phone Number is required.");
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

    if (file !== "") {
      const storageRef = ref(
        storage,
        `stores/${file.name + Date().toLocaleString()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            setImage(downloadURL);
            console.log(downloadURL);

            const storeData = {
              id: storeid,
              name: name,
              email: email,
              password: password,
              phoneNo: phoneNo,
              imageurl: downloadURL,
            };
            console.log("Storeing data:  ");
            console.log(storeData);

            axios
              .post("http://localhost:5000/seller/updateStore", storeData)
              .then((response) => {
                if (response.status === 200) {
                  if (response.data === "updated") {
                    notifySuccess("Profile updated.");
                    navigate("/seller/sellerprofile");
                  } else if (response.data === "Email already exists") {
                    setError("Email already Exists.");
                  }
                }
              })
              .catch((error) => {
                // console.log(error);
              });

            // alert(image);
          });
        }
      );
    } else {
      console.log("In else");

      const storeData = {
        id: storeid,
        name: name,
        email: email,
        password: password,
        phoneNo: phoneNo,
        imageurl: image,
      };

      axios
        .post("http://localhost:5000/seller/updateStore", storeData)
        .then((response) => {
          if (response.status === 200) {
            if (response.data === "updated") {
              notifySuccess("Profile updated.");
              navigate("/seller/sellerprofile");
            } else if (response.data === "Email already exists") {
              setError("Email already Exists.");
            }
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    }
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
                <label>
                  Store Name
                  <input
                    className="form-input"
                    id="contact-your-className-2"
                    type="text"
                    name="fclassName"
                    style={{ width: "400px" }}
                    placeholder="Store Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <label>
                  Email Address
                  <input
                    className="form-input"
                    id="contact-email-2"
                    type="email"
                    name="email"
                    style={{ width: "400px" }}
                    placeholder="Password"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <label>
                  Password
                  <input
                    className="form-input"
                    id="contact-your-className-2"
                    type="text"
                    name="lclassName"
                    style={{ width: "400px" }}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <label>
                  Phone Number
                  <input
                    className="form-input"
                    id="contact-your-className-2"
                    type="text"
                    name="lclassName"
                    style={{ width: "400px" }}
                    placeholder="Phone Number"
                    value={phoneNo}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                  />
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="upload-image">
                  <div style={{ fontSize: "16px" }}>
                    Upload New Image of Store
                  </div>
                  <input
                    type="file"
                    id="image-input"
                    accept="image/jpeg, image/png, image/jpg"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                  <div className="upload-image" id="display-image"></div>
                </div>
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
