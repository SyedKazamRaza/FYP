import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //Link is used instead of <a> to prevent requesting server on every render
// import { userContext } from "../userContext";
import { useCart } from "../CartContext";
import { useUser } from "../userContext";
import { ReactSession } from "react-client-session";
import { useUserUpdate,useNavbarUpdate, useNavbar } from "../userContext";

const Header = (props) => {
  const [cartClick, setCartClick] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const navbarBold = useNavbar();
  const {changeNavBold} = useNavbarUpdate();

  const cartProducts = useCart();
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
    if (cartProducts.length > 0) {
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
    changeNavBold(id)
    setActiveNav(id);
  }
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
                      <span>{cartProducts.length}</span>
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

                  <div className="rd-navbar-basket-wrap">
                    <button
                      className="rd-navbar-basket far fa-heart-o"
                      data-rd-navbar-toggle=".cart-inline"
                    >
                      <span>0</span>
                    </button>

                    {/* <div className="cart-inline">
                      <div className="cart-inline-header">
                        <h5 className="cart-inline-title">There are no products in the wishlist.</h5>
                      </div>
                    </div> */}
                  </div>
                  <div className="rd-navbar-search">
                    <button
                      className="rd-navbar-search-toggle"
                      data-rd-navbar-toggle=".rd-navbar-search"
                    >
                      <span></span>
                    </button>
                    <form className="rd-search" action="#">
                      <div className="form-wrap">
                        <label
                          className="form-label"
                          htmlFor="rd-navbar-search-form-input"
                        >
                          Search...
                        </label>
                        <input
                          className="rd-navbar-search-form-input form-input"
                          id="rd-navbar-search-form-input"
                          type="text"
                          name="search"
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
                      <Link className="rd-nav-link" to="services">
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
                      <Link className="rd-nav-link" to="#">
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
                            to="#"
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
