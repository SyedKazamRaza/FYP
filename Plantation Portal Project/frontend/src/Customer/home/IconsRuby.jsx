import { Link } from "react-router-dom";
import useFetch from "../../useFetch";

const IconsRuby = () => {
  const {
  error,
  isPending,
  data: services,
} = useFetch("http://localhost:5000/services/");


    return ( 
        <section className="section section-md bg-default section-top-image">
        <div className="container">
          <div className="row row-30 justify-content-center">
            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0s">
              <article className="box-icon-ruby">
                <div className="unit box-icon-ruby-body flex-column flex-md-row text-md-left flex-lg-column align-items-center text-lg-center flex-xl-row text-xl-left">
                  <div className="unit-left">
                    <div className="box-icon-ruby-icon linearicons-leaf"></div>
                  </div>
                  <div className="unit-body">
                  {services.slice().map((service) => (
                    service.s_title === "Maali Services" && 
                    <h4 className="box-icon-ruby-title"><div><Link to={`/services/${service._id}`}>Maali Services</Link></div></h4>
                    ))}
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay=".1s">
              <article className="box-icon-ruby">
                <div className="unit box-icon-ruby-body flex-column flex-md-row text-md-left flex-lg-column align-items-center text-lg-center flex-xl-row text-xl-left">
                  <div className="unit-left">
                    <div className="box-icon-ruby-icon linearicons-shovel"></div>
                  </div>
                  <div className="unit-body">
                    <h4 className="box-icon-ruby-title"><div><Link to="shop">Premium Quality Equipment</Link></div></h4>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay=".2s">
              <article className="box-icon-ruby">
                <div className="unit box-icon-ruby-body flex-column flex-md-row text-md-left flex-lg-column align-items-center text-lg-center flex-xl-row text-xl-left">
                  <div className="unit-left">
                    <div className="box-icon-ruby-icon linearicons-sun"></div>
                  </div>
                  <div className="unit-body">
                    <h4 className="box-icon-ruby-title"><div><Link to="blogs">Plantation Guidelines</Link></div></h4>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default IconsRuby;