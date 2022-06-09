import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [msg, setMsg] = useState("");
  const [errorMessage, setError] = useState("");

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

  function SendMessage(e) {
    e.preventDefault();
    if (name.length === 0) {
      setError("Please enter a valid Name");
      return;
    } else if (email.length === 0) {
      setError("Invalid Email");
      return;
    } else if (phoneNo.length !== 11) {
      setError("Enter 11 digit Phone number");
      return;
    } else if (msg.length === 0) {
      setError("Please type a valid message");
      return;
    }
    setError("");
    const data = { name: name, email: email, phoneNo: phoneNo, msg: msg };
    axios
      .post("http://localhost:5000/contact/addNewMessage", data)
      .then((response) => {
        if (response.status === 200) {
          notifySuccess("Message Sent to Admin");
          setName("");
          setEmail("");
          setPhoneNo("");
          setMsg("");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-39">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">Contact Us</h2>
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Contact Us</li>
            </ul>
          </div>
          <div
            className="box-position"
            style={{
              backgroundImage: `url("images/contact.jpg")`,
            }}
          ></div>
        </div>
      </section>

      <section className="section section-md section-first bg-default">
        <div className="container">
          <div className="row row-30 justify-content-center">
            <div className="col-sm-8 col-md-6 col-lg-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <div className="box-contacts-icon fl-bigmug-line-cellphone55"></div>
                  <div className="box-contacts-decor"></div>
                  <p className="box-contacts-link">
                    <a href="tel:#">0303-8920413</a>
                  </p>
                  <p className="box-contacts-link">
                    <a href="tel:#">0304-8920413</a>
                  </p>
                </div>
              </article>
            </div>
            <div className="col-sm-8 col-md-6 col-lg-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <div className="box-contacts-icon fl-bigmug-line-up104"></div>
                  <div className="box-contacts-decor"></div>
                  <p className="box-contacts-link">
                    <div>Plot 8, Block E, Model Town, Lahore</div>
                  </p>
                </div>
              </article>
            </div>
            <div className="col-sm-8 col-md-6 col-lg-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <div className="box-contacts-icon fl-bigmug-line-chat55"></div>
                  <div className="box-contacts-decor"></div>
                  <p className="box-contacts-link">
                    <a href="mailto:#">mail@fineliving.com</a>
                  </p>
                  <p className="box-contacts-link">
                    <a href="mailto:#">info@fineliving.com</a>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-sm section-last bg-default text-left">
        <div className="container">
          <article className="title-classic">
            <div className="title-classic-title">
              <h3>Get in touch</h3>
            </div>
            <div className="title-classic-text">
              <p>
                If you have any questions, just fill in the below form, and we
                will answer you shortly.
              </p>
            </div>
            <div className="title-classic-text">
              <h5 style={{ color: "red", textAlign: "center" }}>
                `{errorMessage}
              </h5>
            </div>
          </article>
          <form
            className="rd-form rd-form-variant-2 rd-mailform"
            data-form-output="form-output-global"
            data-form-type="contact"
            method="post"
            action="bat/rd-mailform.php"
            onSubmit={SendMessage}
          >
            <div className="row row-14 gutters-14">
              <div className="col-md-4">
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-your-name-2"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Your Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-email-2"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="E-mail"
                    data-constraints="@Email @Required"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-phone-2"
                    type="text"
                    name="phone"
                    value={phoneNo}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-wrap">
                  <textarea
                    className="form-input textarea-lg"
                    id="contact-message-2"
                    name="message"
                    placeholder="Type your message here"
                    value={msg}
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              className="button button-primary button-pipaluk"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
