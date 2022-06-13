import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function EditProduct(props) {
  const navigate = useNavigate();
  let location = useLocation();
  const product = location.state.product;
  const [name, setName] = useState(product.productName);
  const [price, setprice] = useState(product.price);
  const [details, setDetails] = useState(product.details);
  const [error, setError] = useState("");
  const prodId = product._id;

  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);

  let arr;
  let firstSeason;
  let firstPlace;
  let firstType;
  if (product.category === "plants") {
    arr = ["plants", "seeds", "fertilizers", "tools"];
    firstPlace = product.place;
    firstSeason = product.season;
    firstType = product.type;
  } else if (product.category === "seeds") {
    arr = ["seeds", "plants", "fertilizers", "tools"];
    firstPlace = "Place of Plant";
    firstSeason = "Season of the plant";
    firstType = "Type of Plant";
  } else if (product.category === "tools") {
    arr = ["tools", "seeds", "fertilizers", "plants"];
    firstPlace = "Place of Plant";
    firstSeason = "Season of the plant";
    firstType = "Type of Plant";
  } else if (product.category === "fertilizers") {
    arr = ["fertilizers", "seeds", "plants", "tools"];
    firstPlace = "Place of Plant";
    firstSeason = "Season of the plant";
    firstType = "Type of Plant";
  }
  const [category, setCategory] = useState(product.category);
  const [categoryList, setCategoryList] = useState(arr);
  const prodCategory = categoryList.map((cat) => cat);

  const [season, setSeason] = useState(product.season);
  const [seasonList, setSeasonList] = useState([
    firstSeason,
    "Spring",
    "Summer",
    "Winter",
    "Autumn",
    "All Seasons",
  ]);
  const prodSeasons = seasonList.map((seas) => seas);

  const [type, setType] = useState(product.type);
  const [typeList, setTypeList] = useState([
    firstType,
    "Flowering plant",
    "Shrubs",
    "Perennial",
    "Succulents",
    "Vegetable plant",
    "Fruits plant",
    "Vines & Climbers",
  ]);
  const prodType = typeList.map((seas) => seas);

  const [place, setPlace] = useState(product.place);
  const [placeList, setPlaceList] = useState([
    firstPlace,
    "indoor",
    "outdoor",
    "both",
  ]);
  const prodPlace = placeList.map((cat) => cat);

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

  function EmptyFields(params) {
    setName("");
    setprice("");
    setDetails("");
    setCategory("");
    setPlace("");
    setType("");
    setSeason("");
    setImage("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setImage("");
    setError("");
    if (name.length === 0) {
      setError("Product Name is required");
      return;
    } else if (price.length === 0) {
      setError("Product Price is required");
      return;
    } else if (category === "" || category === "Category of Product") {
      setError("Select the category of product");
      return;
    } else if (details === "") {
      setError("Enter description of product.");
      return;
    }
    if (category === "plants") {
      if (type === "" || type === "Type of Plant") {
        setError("Select the Type of plant");
        return;
      } else if (season === "" || season === "Season of the Plant") {
        setError("Select the Season of plant");
        return;
      } else if (place === "" || place === "Place of Plant") {
        setError("Select the place of plant");
        return;
      }
    }
    // if (error.length !== 0) {
    //   return;
    // }

    if (file !== "") {
      alert("uploading");
      const storageRef = ref(
        storage,
        `products/${file.name + Date().toLocaleString()}`
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
            alert("here");
            let product = {
              productName: name,
              price: price,
              details: details,
              category: category,
              imageurl: image,
              id: prodId,
            };

            if (category === "plants") {
              product.type = type;
              product.season = season;
              product.place = place;
            }

            axios
              .post("http://localhost:5000/products/editProduct", product)
              .then((response) => {
                if (response.status === 200) {
                  console.log(response.data);
                  EmptyFields();
                  notifySuccess("Product Successfully Updated.");
                  navigate("/seller/sellershop");
                } else {
                  alert("Product not edited..");
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
      let product = {
        productName: name,
        price: price,
        details: details,
        category: category,
        imageurl: image,
        id: prodId,
      };

      if (category === "plants") {
        product.type = type;
        product.season = season;
        product.place = place;
      }

      axios
        .post("http://localhost:5000/products/editProduct", product)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            EmptyFields();
            notifySuccess("Product Successfully Updated.");
            navigate("/seller/sellershop");
          } else {
            alert("Product not edited..");
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  };

  let counter = 0;
  function increment(params) {
    counter = counter + 1;
  }

  function getCounter(params) {
    increment();
    return counter;
  }

  return (
    <section className="home-section">
      <div className="order-container">
        <article className="title-classic">
          <h2 className="text-primary">Edit Product</h2>
          <div className="title-classic-text">
            <p>Edit the field you want to update of the product</p>
          </div>
          <div className="title-classic-text">
            <p style={{ color: "red" }}>{error}`</p>
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
                <input
                  className="form-input"
                  id="contact-your-name-2"
                  type="text"
                  name="name"
                  placeholder="Name of the Product"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-your-name-2"
                  type="text"
                  name="name"
                  value={price}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                  placeholder=" Price of the Product (in Rupees)"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-wrap">
                <select
                  className="form-input browser-default custom-select"
                  id="contact-your-name-2"
                  type="text"
                  name="name"
                  // value={category}
                  onChange={(e) => {
                    setCategory(categoryList[e.target.value]);
                  }}
                >
                  {prodCategory.map((cat, index) => (
                    <option key={index} value={index}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="col-md-6"
              style={{
                display: category === "plants" ? "block" : "None",
              }}
            >
              <div className="form-wrap">
                <select
                  className="form-input browser-default custom-select"
                  id="contact-your-name-2"
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setType(typeList[e.target.value]);
                  }}
                >
                  {prodType.map((type, key) => (
                    <option key={key} value={key}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="col-md-6"
              style={{
                display: category === "plants" ? "block" : "None",
              }}
            >
              <div className="form-wrap">
                <select
                  className="form-input browser-default custom-select"
                  id="contact-your-name-2"
                  type="text"
                  name="name"
                  // value={category}
                  onChange={(e) => {
                    setSeason(seasonList[e.target.value]);
                  }}
                >
                  {prodSeasons.map((seas, key) => (
                    <option key={key} value={key}>
                      {seas}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="col-md-6"
              style={{
                display: category === "plants" ? "block" : "None",
              }}
            >
              <div className="form-wrap">
                <select
                  className="form-input browser-default custom-select"
                  id="contact-your-name-2"
                  type="text"
                  name="name"
                  onChange={(e) => {
                    setPlace(placeList[e.target.value]);
                  }}
                >
                  {prodPlace.map((plc, key) => (
                    <option key={key} value={key}>
                      {plc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-12">
              <div className="form-wrap">
                <textarea
                  className="form-input textarea-lg"
                  id="contact-message-2"
                  name="message"
                  placeholder="Description"
                  value={details}
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="upload-image">
                <div style={{ fontSize: "16px" }}>Upload Image of Product</div>
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
          </div>
          <button
            className="button button-primary button-pipaluk"
            type="submit"
          >
            Edit Product
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditProduct;
