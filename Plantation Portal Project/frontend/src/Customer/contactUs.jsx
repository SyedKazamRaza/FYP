import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ContactUs(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          </article>
          <form
            className="rd-form rd-form-variant-2 rd-mailform"
            data-form-output="form-output-global"
            data-form-type="contact"
            method="post"
            action="bat/rd-mailform.php"
          >
            <div className="row row-14 gutters-14">
              <div className="col-md-4">
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-your-name-2"
                    type="text"
                    name="name"
                    data-constraints="@Required"
                  />
                  <label className="form-label" for="contact-your-name-2">
                    Your Name
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-email-2"
                    type="email"
                    name="email"
                    data-constraints="@Email @Required"
                  />
                  <label className="form-label" for="contact-email-2">
                    E-mail
                  </label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-wrap">
                  <input
                    className="form-input"
                    id="contact-phone-2"
                    type="text"
                    name="phone"
                    data-constraints="@Numeric"
                  />
                  <label className="form-label" for="contact-phone-2">
                    Phone
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-wrap">
                  <label className="form-label" for="contact-message-2">
                    Message
                  </label>
                  <textarea
                    className="form-input textarea-lg"
                    id="contact-message-2"
                    name="message"
                    data-constraints="@Required"
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
