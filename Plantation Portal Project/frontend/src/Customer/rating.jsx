import React, { useEffect } from "react";
import "./rating.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rating = () => {
  let location = useLocation();
  const navigate = useNavigate();
  let orderData = location.state.orderData;

  if (!orderData.orderId) {
    navigate("/showSingleOrder");
  }

  console.log(orderData);
  useEffect(() => {
    window.scrollTo(0, 0);
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

  function submitRating() {
    var rating;
    if (document.getElementById("star5").checked === true) {
      rating = 5;
    } else if (document.getElementById("star4").checked === true) {
      rating = 4;
    } else if (document.getElementById("star3").checked === true) {
      rating = 3;
    } else if (document.getElementById("star2").checked === true) {
      rating = 2;
    } else if (document.getElementById("star1").checked === true) {
      rating = 1;
    } else {
      rating = 0;
    }
    if (rating === 0) {
      alert("select valid rating");
      return;
    }
    console.log(rating);

    const data = {
      orderId: orderData.orderId,
      productId: orderData.productId,
      rating: rating,
    };
    console.log(data);

    axios
      .post("http://localhost:5000/seller/changeProductRating", data)
      .then((response) => {
        if (response.status === 200) {
          notifySuccess("Your rating is recorded.");
          navigate("/showOrders");
          // alert("Scuuess");
          // console.log(response.data);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <section className="section section-sm section-last bg-default text-left">
      <div className="popup">
        <h3>Your Feedback Matters!</h3>
        <div className="content">
          Please help us serve you better by telling us about your experience.
          We appreciate your business and want to make sure we meet your
          expectations.
        </div>
        <div className="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label htmlFor="star5">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label htmlFor="star4">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label htmlFor="star3">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label htmlFor="star2">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label htmlFor="star1">1 stars</label>
        </div>
        <button
          className="button button-primary"
          // style={{ color: "white" }}
          onClick={() => {
            submitRating();
          }}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Rating;
