import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

function SellerProfile(props) {
  return (
    <div>
      <section className="home-section">
        <div className="home-content">
          <TopBar />

          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Rating</div>
                <div className="text">4.8</div>
              </div>
              <i className="bx bxs-star cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Category</div>
                <div className="text">Multi-Category</div>
              </div>
              <i className="bx bxs-category cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Joined</div>
                <div className="text">1 Year Ago</div>
              </div>
              <i className="bx bxs-user-plus cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Shipping Time</div>
                <div className="text">2-4 Working Days</div>
              </div>
              <i className="bx bxs-time cart four"></i>
            </div>
          </div>
        </div>

        <div className="order-container">
          <h2>Gardening Miracle</h2>
          <div className="row row-30 justify-content-center">
            <div className="col xl-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <img src="images/icon.jpeg" alt="" width="70" height="100" />
                  <h6>Your Details</h6>
                  <span>
                    <Link to="">
                      <i className="bx bx-edit"></i>
                    </Link>
                  </span>
                  <div className="box-contacts-decor"></div>
                  <p className="box-contacts-link">
                    <i className="bx bx-user"></i>
                    <span className="links_name">Seller Name</span>
                  </p>
                  <p className="box-contacts-link">
                    <i className="bx bx-phone"></i>
                    <span className="links_name">0303-8920413</span>
                  </p>
                  <p className="box-contacts-link">
                    <i className="bx bx-envelope"></i>
                    <span className="links_name">Marry@gmail.com</span>
                  </p>
                </div>
              </article>
            </div>
            <div className="col xl-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <img src="images/icon.jpeg" alt="" width="70" height="100" />
                  <h6>Your Account Details</h6>
                  <span>
                    <Link to="">
                      <i className="bx bx-edit"></i>
                    </Link>
                  </span>
                  <div className="box-contacts-decor"></div>
                  <p className="box-contacts-link">
                    <i className="bx bx-user"></i>
                    <span className="links_name">Seller Name</span>
                  </p>
                  <p className="box-contacts-link">
                    <i className="bx bxs-bank"></i>
                    <span className="links_name">Allied Bank</span>
                  </p>
                  <p className="box-contacts-link">
                    <i className="bx bx-right-arrow-alt"></i>
                    <span className="links_name">1234-5678-9101-1121</span>
                  </p>
                </div>
              </article>
            </div>
            <div className="col xl-4">
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <img src="images/icon.jpeg" alt="" width="70" height="100" />
                  <h6>Shop Details</h6>
                  <span>
                    <Link to="">
                      <i className="bx bx-edit"></i>
                    </Link>
                  </span>
                  <div className="box-contacts-decor"></div>
                  <p className="box-contacts-link">
                    <i className="bx bxs-store-alt"></i>
                    <span className="links_name">Gardening Miracle</span>
                  </p>
                  <p className="box-contacts-link">
                    <i className="bx bx-category"></i>
                    <span className="links_name">Plants and Tools</span>
                  </p>
                  <p className="box-contacts-link">
                    <i className="bx bx-store"></i>
                    <span className="links_name">86</span>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="order-container">
          <div className="row row-30 justify-content-center">
            <h4>Public Reviews</h4>
            <div className="comment marg25">
              <img
                className="img_comm"
                alt=""
                src="images/blogs/team-img3.jpg"
              />
              <div className="comm_name">
                Rida Batool <span>- 12 February 2022</span>
              </div>
              <ul className="justify-content-right">
                <li>
                  <i className="fas fa-trash"></i>
                </li>
              </ul>
              <p className="text_cont com_top">
                Loved reading the article. Keep up the good work.
              </p>
            </div>
            <div className="bs-blog-line-com"></div>
            <div className="comment">
              <img
                className="img_comm"
                alt=""
                src="images/blogs/team-img3.jpg"
              />
              <div className="comm_name">
                Musfirah Amjad <span>- 9 February 2022</span>
              </div>
              <ul className="justify-content-right">
                <li>
                  <i className="fas fa-trash"></i>
                </li>
              </ul>
              <p className="text_cont com_top">
                Hey, can I water my plants twice a day?
              </p>
            </div>
            <div className="bs-blog-line-com"></div>
            <div className="comment">
              <img
                className="img_comm"
                alt=""
                src="images/blogs/team-img3.jpg"
              />
              <div className="comm_name">
                Rimsha Amin <span>- 8 February 2022</span>
              </div>
              <ul className="justify-content-right">
                <li>
                  <i className="fas fa-trash"></i>
                </li>
              </ul>
              <p className="text_cont com_top">
                This article was so helpful for me. Thank you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SellerProfile;
