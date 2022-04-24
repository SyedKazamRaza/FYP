import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <section className="section text-center">
        <div
          className="parallax-container"
          style={{
            backgroundImage: `url("./images/our_services.jpg")`,
          }}
          // data-parallax-img={
          //   process.env.PUBLIC_URL + "/images/our_services.jpg"
          // }
        >
          <div className="parallax-content section-xl section-inset-custom-1 context-dark bg-overlay-40">
            <div className="container">
              <h2 className="oh font-weight-normal">
                <span
                  className="d-inline-block wow slideInDown"
                  data-wow-delay="0s"
                >
                  We'll do the dirty work.
                </span>
              </h2>
              <p className="oh big text-width-large">
                <span
                  className="d-inline-block wow slideInUp"
                  data-wow-delay=".2s"
                >
                  Our farm strictly combines the traditions of organic farming
                  with the latest innovations to make our products healthy and
                  safe for the clients.
                </span>
              </p>
              <Link
                className="button button-primary button-icon button-icon-left button-ujarak wow fadeInUp"
                to="#"
                data-lightgallery="item"
                data-wow-delay=".1s"
              >
                <span className="icon mdi mdi-play"></span>Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
