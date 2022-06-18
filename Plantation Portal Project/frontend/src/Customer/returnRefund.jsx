import React, { useEffect } from "react";
const ReturnRefund = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="breadcrumbs-custom-inset">
      <div className="breadcrumbs-custom context-dark bg-overlay-39">
        <div className="container">
          <h2 className="breadcrumbs-custom-title">Return and Refund Policy</h2>
          <ul className="breadcrumbs-custom-path">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">Return and Refund</li>
          </ul>
        </div>
        <div className="box-position">
          <img alt="" src="../images/return-refund-policy.jpg" />
        </div>
      </div>
      <div className="row row-40 flex-lg-row-reverse justify-content-xl-between">
        <div className="col-xl-5 d-none d-xl-block">
          <div className="offset-left-xl-45">
            <h3>Conditions for Returns</h3>
            <ul className="list-ordered">
              <li>
                You don’t have to worry about a compromise in quality. Thanks to
                our vast network and market repute we can source the highest
                quality materials for you.
              </li>
              <li>
                You will be kept in the loop at every step of your project. We
                believe in working closely with our clients. By understanding
                your needs and requirements, we can bring your ideas to life.
              </li>
              <li>
                Our billing process is completely transparent. Our style of
                doing business revolves around gaining our client’s trust and
                being open with them. We’ll make a breakdown of your project
                with you, and once you’ve set your budget, you will not have to
                worry about having to exceed it.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-7">
          <h3>Returns Policy</h3>
          <ul className="list-ordered">
            <li>
              If your product is damaged, defective, incorrect or incomplete at
              the time of delivery, please raise a return request on our
              website. Return request must be raised within 7 days from the date
              of delivery.
            </li>
            <li>We do not entertain change of mind.</li>
          </ul>
          <h4>Valid reasons to return an item</h4>
          <ul className="list-ordered">
            <li>
              Delivered product is damaged (i.e. physically destroyed or broken)
              / defective
            </li>
            <li>
              Delivered product is incomplete (i.e. has missing items and/or
              accessories).
            </li>
            <li>
              Delivered product is incorrect (i.e. wrong product/size/colour,
              fake item, or expired)
            </li>
            <li>
              Delivered product is does not match product description or picture
              (i.e product not as advertised)
            </li>
          </ul>
          <br />
          <br />
          <h3>Refund Policy</h3>
          <p>
            If your product is eligible for a refund, you must send back the
            damaged product to us on our gien The shipping fee is not refundable
            and only the amount paid by you for the product will be refunded.
          </p>
          <ul classNameName="list-ordered">
            <li>
              The product must reach us within 14 days after dilivery date to
              avail our refund services
            </li>
            <li>
              While refunding you can either choose exchange of product or total
              refund of your money
            </li>
            <li>
              You must fill the form clearly with right information on the
              Return/Exchange form that we send customers will every order.
            </li>
            <li>
              New product(s) will be delivered to you within 10 days of after we
              receive the product
            </li>
            <li>
              The refund amount will be transferred to you within 5 working days
              after we receive the refund request alongwith the product.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReturnRefund;
