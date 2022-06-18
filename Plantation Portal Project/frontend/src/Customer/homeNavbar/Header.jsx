import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //Link is used instead of <a> to prevent requesting server on every render
import "./sidebar.css";
// import { userContext } from "../userContext";
import { useCart } from "../CartContext";
import { useUser } from "../../userContext";
import { useUserUpdate, useNavbarUpdate, useNavbar } from "../../userContext";

const Header = (props) => {
  const [search, setSearch] = useState("");

  const [cartClick, setCartClick] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const navbarBold = useNavbar();
  const { changeNavBold } = useNavbarUpdate();

  const { cartProducts, cartServices } = useCart();
  const user = useUser();
  const { logOut } = useUserUpdate();

  useEffect(() => {
    document.getElementById("login").classList.remove("active");
    document.getElementById("shop").classList.remove("active");
    document.getElementById("home").classList.add("active");
    // document.getElementById(id).classList.add("active");
    setActiveNav("home");
  }, [user]);

  useEffect(() => {
    document.getElementById(activeNav).classList.remove("active");
    document.getElementById(navbarBold).classList.add("active");
    setActiveNav(navbarBold);
  }, [navbarBold]);

  // const logout = () => {
  //   localStorage.clear();
  //   window.location.href = "/";
  // };

  const navigate = useNavigate();
  function checkProductsInCart() {
    if (cartProducts.length > 0 || cartServices.length > 0) {
      setCartClick(true);
      navigate("/cart");
    } else {
      setCartClick(false);
    }
    console.log("cart click is:", cartClick);
  }

  function changeActive(id) {
    document.getElementById(activeNav).classList.remove("active");
    document.getElementById(id).classList.add("active");
    changeNavBold(id);
    setActiveNav(id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: { searchkey: search } });
  };

  // const getSession = () =>{
  //   // ReactSession.get('user');
  //   alert(ReactSession.get('user'))
  // }

  return (
    <header>
      <div className="rd-navbar-wrap">
        <nav
          className="rd-navbar rd-navbar-modern"
          data-layout="rd-navbar-fixed"
          data-sm-layout="rd-navbar-fixed"
          data-md-layout="rd-navbar-fixed"
          data-md-device-layout="rd-navbar-fixed"
          data-lg-layout="rd-navbar-static"
          data-lg-device-layout="rd-navbar-fixed"
          data-xl-layout="rd-navbar-static"
          data-xl-device-layout="rd-navbar-static"
          data-xxl-layout="rd-navbar-static"
          data-xxl-device-layout="rd-navbar-static"
          data-lg-stick-up-offset="46px"
          data-xl-stick-up-offset="46px"
          data-xxl-stick-up-offset="70px"
          data-lg-stick-up="true"
          data-xl-stick-up="true"
          data-xxl-stick-up="true"
        >
          <div className="rd-navbar-main-outer">
            <div className="rd-navbar-main">
              <div className="rd-navbar-panel">
                <button
                  className="rd-navbar-toggle"
                  data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                >
                  <span></span>
                </button>
                <div className="rd-navbar-brand">
                  <Link className="brand" to="/">
                    <img
                      src={"/images/logo.jpg"}
                      alt=""
                      width="196"
                      height="47"
                    />
                  </Link>
                </div>
              </div>
              <div className="rd-navbar-main-element">
                <div className="rd-navbar-nav-wrap">
                  <div className="rd-navbar-basket-wrap">
                    <button
                      className="rd-navbar-basket fl-bigmug-line-shopping198"
                      onClick={() => {
                        checkProductsInCart();
                      }}
                      data-rd-navbar-toggle=".cart-inline"
                    >
                      <span>{cartProducts.length + cartServices.length}</span>
                    </button>

                    {cartClick === false ? (
                      <div className="cart-inline">
                        <div className="cart-inline">
                          <div className="cart-inline-header">
                            <h5 className="cart-inline-title">
                              There are no products in the cart.
                            </h5>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="rd-navbar-search">
                    <button
                      className="rd-navbar-search-toggle"
                      data-rd-navbar-toggle=".rd-navbar-search"
                    >
                      <span></span>
                    </button>
                    <form className="rd-search" onSubmit={handleSubmit}>
                      <div className="form-wrap">
                        
                        <input
                          className="rd-navbar-search-form-input form-input"
                          type="text"
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search..."
                        />
                        <button
                          className="rd-search-form-submit fl-bigmug-line-search74"
                          type="submit"
                        
                        ></button>
                      </div>
                    </form>
                  </div>
				   

                  <ul className="rd-navbar-nav">
                    <li
                      className="rd-nav-item active"
                      id="home"
                      onClick={() => {
                        changeActive("home");
                      }}
                    >
                      <Link className="rd-nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li
                      className="rd-nav-item"
                      id="about"
                      onClick={() => {
                        changeActive("about");
                      }}
                    >
                      <Link className="rd-nav-link" to="/aboutus">
                        About
                      </Link>
                    </li>
                    <li
                      className="rd-nav-item"
                      id="shop"
                      onClick={() => {
                        changeActive("shop");
                      }}
                    >
                      <Link className="rd-nav-link" to="/shop">
                        Shop
                      </Link>
                    </li>
                    <li
                      className="rd-nav-item"
                      id="services"
                      onClick={() => {
                        changeActive("services");
                      }}
                    >
                      <Link className="rd-nav-link" to="/services">
                        Services
                      </Link>
                    </li>
                    <li
                      className="rd-nav-item"
                      id="blogs"
                      onClick={() => {
                        changeActive("blogs");
                      }}
                    >
                      <Link className="rd-nav-link" to="/blogs">
                        Blogs
                      </Link>
                    </li>
                    <li
                      className="rd-nav-item"
                      id="contact"
                      onClick={() => {
                        changeActive("contact");
                      }}
                    >
                      <Link className="rd-nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                    {/* <li className="rd-nav-item"><Link className="rd-nav-link" to="login">Login/SingUp</Link>
                    </li> */}

                    <div id="login">
                      {user.initialValue === "a" ? (
                        <li
                          className="rd-nav-item"
                          onClick={() => {
                            changeActive("login");
                          }}
                        >
                          <Link className="rd-nav-link" to="/login">
                            Login
                          </Link>
                        </li>
                      ) : (
                        <li
                          className="rd-nav-item"
                          onClick={() => {
                            changeActive("home");
                          }}
                        >
                          <Link
                            className="rd-nav-link"
                            to="/"
                            onClick={() => {
                              logOut();
                            }}
                          >
                            LOGOUT
                          </Link>
                        </li>
                      )}
                    </div>
                  </ul>

                  <div
                    style={{
                      display: `${user.initialValue === "a" ? "None" : ""}`,
                    }}
                  >
                    <div className="rd-navbar-main-outer">
                      <div className="rd-navbar-main">
                        <div className="rd-navbar-main-element">
                          <div
                            className="rd-navbar-project-hamburger"
                            data-multitoggle=".rd-navbar-main"
                            data-multitoggle-blur=".rd-navbar-wrap"
                            data-multitoggle-isolate
                          >
                            <div className="project-hamburger">
                              <span className="project-hamburger-arrow-top"></span>
                              <span className="project-hamburger-arrow-center"></span>
                              <span className="project-hamburger-arrow-bottom"></span>
                            </div>
                            <div className="project-hamburger-2">
                              <span className="project-hamburger-arrow"></span>
                              <span className="project-hamburger-arrow"></span>
                              <span className="project-hamburger-arrow"></span>
                            </div>
                          </div>
                        </div>

                        <div className="rd-navbar-project rd-navbar-modern-project">
                          <div className="rd-navbar-project-modern-header">
                            <h4 className="rd-navbar-project-modern-title">
                              My Account
                            </h4>
                            <div
                              className="rd-navbar-project-hamburger"
                              data-multitoggle=".rd-navbar-main"
                              data-multitoggle-blur=".rd-navbar-wrap"
                              data-multitoggle-isolate
                            >
                              <div className="project-close">
                                <span></span>
                                <span></span>
                              </div>
                            </div>
                          </div>
                          <div className="rd-navbar-project-content rd-navbar-modern-project-content">
                            <div>
                              <ul className="rd-navbar-modern-contacts">
                                <li>
                                  <div className="unit unit-spacing-sm">
                                    <div className="unit-left">
                                      <span className="icon fa fa-user"></span>
                                    </div>
                                    <div className="unit-body">
                                      <Link
                                        className="link"
                                        to="/updateprofile"
                                      >
                                        Manage Profile
                                      </Link>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="unit unit-spacing-sm">
                                    <div className="unit-left">
                                      <span className="icon fa fa-comment"></span>
                                    </div>
                                    <div className="unit-body">
                                      <Link
                                        className="link-press"
                                        to="/chatpanel"
                                      >
                                        Chat
                                      </Link>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="unit unit-spacing-sm">
                                    <div className="unit-left">
                                      <span className="icon fa fa-shopping-basket"></span>
                                    </div>
                                    <div className="unit-body">
                                      <Link
                                        className="link-press"
                                        to="/showOrders"
                                      >
                                        Orders
                                      </Link>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="unit unit-spacing-sm">
                                    <div className="unit-left">
                                      <span className="icon fa fa-sign-out"></span>
                                    </div>
                                    <div className="unit-body">
                                      <Link
                                        className="link-press"
                                        to="/"
                                        onClick={() => {
                                          logOut();
                                        }}
                                      >
                                        Logout
                                      </Link>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
