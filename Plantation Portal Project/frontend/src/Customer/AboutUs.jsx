import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNavbarUpdate } from "./userContext";

const AboutUs = () => {
  const navigate = useNavigate();
  const { changeNavBold } = useNavbarUpdate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-46">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">About Us</h2>
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
          <div
            className="box-position"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/about.jpg"
              })`,
            }}
          ></div>
        </div>
      </section>
      <section className="section section-md section-first bg-default text-md-left">
        <div className="container">
          <div className="row row-50 justify-content-center">
            <div className="col-md-10 col-lg-5 col-xl-6">
              <img src="images/why-us.jpg" alt="" width="519" height="446" />
            </div>
            <div className="col-md-10 col-lg-7 col-xl-6">
              <h2>Why Choose Us</h2>
              <p>
                Fine Living was founded in 2000 with the aim of providing Lahore
                with modernized gardening and plantation services and equipment.
                Over the last 20 years, Fine Living has managed to make a name
                for itself in Pakistan’s horticulture industry by providing
                amazing solution at amazing prices.
              </p>
              <div
                className="tabs-custom tabs-horizontal tabs-line"
                id="tabs-4"
              >
                <ul className="nav nav-tabs">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      href="#tabs-4-1"
                      data-toggle="tab"
                    >
                      Our Vision
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-2" data-toggle="tab">
                      Our Values
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#tabs-4-3" data-toggle="tab">
                      Our Mission
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tabs-4-1">
                    <p>
                      To promote greenery and environmental sustainability in
                      Pakistan through modern horticultural practices and become
                      the best plantation e-company in Pakistan.
                    </p>
                    <div className="group-md group-middle">
                      <div
                        className="button button-width-xl-310 button-default-outline button-wapasha"
                        onClick={() => {
                          changeNavBold("contact");
                          navigate("/contact");
                        }}
                      >
                        Contact us
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-4-2">
                    <div className="text-center text-sm-left offset-top-30">
                      <ul className="row-16 list-0 list-custom list-marked list-marked-sm list-marked-secondary">
                        <li>Quality</li>
                        <li>Trust</li>
                        <li>Liability</li>
                        <li>Transpency</li>
                        <li>Customer Centric</li>
                      </ul>
                    </div>
                    <div className="group-md group-middle">
                      <a
                        className="button button-width-xl-310 button-default-outline button-wapasha"
                        href="contact-us.html"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-4-3">
                    <p>
                      To encourage the adoption of modernized and sustainable
                      horticulture solutions in Pakistan and instill a love for
                      gardening in more people.
                    </p>
                    <div className="group-md group-middle">
                      <a
                        className="button button-width-xl-310 button-default-outline button-wapasha"
                        href="contact-us.html"
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-sm section-first bg-default text-left">
        <div className="container">
          <div className="row row-40 flex-lg-row-reverse">
            <ul className="list-xl box-typography">
              <li>
                <h2>Our Story</h2>
                <p>
                  Fine Living was founded in 2000 to promote a love for
                  gardening in Lahore. We started out as a company that
                  exclusively catered to commercial clients, offering
                  landscaping, gardening, and indoor plant décor solutions. Over
                  the years, Fine Living has catered to a lot of clients in not
                  only Lahore but all across Pakistan, ranging from banks to
                  corporate offices, restaurants, and more.
                  <br />
                  Compared to the rest of the world, Pakistan's horticulture
                  sector has been lagging behind for quite some time now. This
                  is quite unfortunate since Pakistan has one of the most
                  diverse geographical layouts in the world and a climate that
                  is perfect for gardening and horticulture. Fine Living has
                  been making an effort to do something about this. Slowly but
                  surely, our goal is to introduce modern horticultural
                  practices in Pakistan. We also wish to educate people about
                  plantation and instill a love for gardening and landscaping in
                  them.
                  <br />
                  We now maintain our own farm site and nursery in Model Town,
                  Lahore, from where we offer a wide range of products and
                  services. Our vast network allows us to provide clients with a
                  wide range of solutions and affordable landscaping services
                  without compromising on quality.
                  <br />
                  We now offer a wide range of services related to gardening.
                  From simple gardening solutions for homes to largescale
                  commercial projects, we're a plantation service company that
                  caters to all.
                </p>
              </li>
              <li>
                <h2>What Makes us Better than Others?</h2>
                <p>
                  There are loads of different plantation service providers in
                  Pakistan. However, Fine Living has always managed to stand out
                  from everyone else. This is thanks to our commitment to
                  quality, transparency, and our ability to put our clients
                  before anything else.
                </p>
                <br />
                Fine Living does a number of things differently. This has helped
                us cement our reputation and credibility over the years.
                <br />
                With Fine Living:
              </li>
              <ul className="list-marked">
                <li>
                  You don't have to worry about a compromise in quality. Thanks
                  to our vast network and market repute we can source the
                  highest quality materials for you.
                </li>
                <li>
                  You will be kept in the loop at every step of your project. We
                  believe in working closely with our clients. By understanding
                  your needs and requirements, we can bring your ideas to life.
                </li>
                <li>
                  Our billing process is completely transparent. Our style of
                  doing business revolves around gaining our client's trust and
                  being open with them. We'll make a breakdown of your project
                  with you, and once you've set your budget, you will not have
                  to worry about having to exceed it.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>

      <section className="section context-dark">
        <div
          className="parallax-container"
          style={{
            backgroundImage: `url("./images/organic-farming.jpg")`,
          }}
          // data-parallax-img="images/organic-farming.jpg"
        >
          <div className="parallax-content section-md bg-overlay-2-21">
            <div className="container">
              <div className="oh">
                <h2 className="wow slideInUp" data-wow-delay="0s">
                  What People Say
                </h2>
              </div>
              <div
                className="owl-carousel owl-modern"
                data-items="1"
                data-stage-padding="15"
                data-margin="30"
                data-dots="true"
                data-animation-in="fadeIn"
                data-animation-out="fadeOut"
                data-autoplay="true"
              >
                <article className="quote-lisa">
                  <div className="quote-lisa-body">
                    <div className="quote-lisa-figure"></div>
                    <div className="quote-lisa-text">
                      <p className="q">
                        I ordered around a dozen plants from your website and
                        all of them are of high quality and your blogs were of
                        great help to take care of them
                      </p>
                    </div>
                    <h5 className="quote-lisa-cite">
                      <a href=" ">Muhammad Rizwan</a>
                    </h5>
                    <p className="quote-lisa-status">Regular Client</p>
                  </div>
                </article>
                <article className="quote-lisa">
                  <div className="quote-lisa-body">
                    <div className="quote-lisa-figure"></div>
                    <div className="quote-lisa-text">
                      <p className="q">
                        I wanted to tell you how amazing it was to see the
                        plants grow. Your effective guideline blogs helped me in
                        growing my plants.
                      </p>
                    </div>
                    <h5 className="quote-lisa-cite">
                      <div>Babar Azam</div>
                    </h5>
                    <p className="quote-lisa-status">Regular Client</p>
                  </div>
                </article>
                <article className="quote-lisa">
                  <div className="quote-lisa-body">
                    <div className="quote-lisa-figure"></div>
                    <div className="quote-lisa-text">
                      <p className="q">
                        The food from your farm is wonderful. So many nights
                        when we sit down to dinner we can say everything on this
                        plate is locally grown and delicious. Thank you
                      </p>
                    </div>
                    <h5 className="quote-lisa-cite">
                      <div>Sana Mir</div>
                    </h5>
                    <p className="quote-lisa-status">New Client</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
