import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const SearchCustomer = () => {
    const {  data: blogs } = useFetch('http://localhost:5000/blogs/')
    const {  data: services } = useFetch('http://localhost:5000/services/')
    const {  data: products } = useFetch('http://localhost:5000/products/allProducts/')


    const location = useLocation();
    const searchkey = location.state.searchkey.toLowerCase()

    var countProducts=0, countServices=0, countBlogs=0;

    {products.slice().map(product => 
        product.productName.split(" ").map((item, index)=>{
           if(item.toLowerCase() === searchkey){
            countProducts++;
           }
        }
    ))}
    {services.slice().map(service => 
        service.s_title.split(" ").map((item, index)=>{
            if(item.toLowerCase() === searchkey){
                countServices++;
            }
    }))}
    {blogs.slice().map(blog => 
        blog.title.split(" ").map((item, index)=>{
            if(item.toLowerCase() === searchkey){
                countBlogs++;
            }
    }))}
           

    return ( 
        <section className="section section-md bg-default">
              <div className="container">
                <h2 className="text-primary">Search Results for "{searchkey}"</h2>
               
                <div className="row row-30 justify-content-center">
                {countProducts!=0 && <>
                <h4 style={{textAlign:"left"}} className="text-primary">{countProducts} Products found related to "{searchkey}" </h4>
                <br/>
                {products.slice().map(product => 
                    product.productName.split(" ").map((item, index)=>
                       item.toLowerCase() === searchkey  &&
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight" data-wow-delay="0s" key={product._id}>

                            <div className="card mb-4 product-wap rounded-0">
                                <div className="card rounded-0">
                                <img
                                    className="card-img rounded-0 img-fluid"
                                    src={product.imageurl} 
                                />
                                <div
                                    className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                                >
                                    <ul className="list-unstyled">
                                    
                                    <li>
                                        <Link
                                        className="btn btn-success text-white mt-2"
                                        to="/single"
                                        ><i className="far fa-eye"></i></Link>
                                    </li>
                                    
                                    </ul>
                                </div>
                                </div>
                                <div className="card-body">
                                <Link to="/single" className="text-decoration-none"
                                    ><h6><centre>{ product.productName }</centre></h6></Link>
                                    <p className="text-center mb-0">Rs. {product.price}</p>
                                
                                </div>
                            </div>
                        </div>
                    )
                  )} 
                  </>}
                  {countServices!=0 && <>
                    <h4 style={{textAlign:"left"}} className="text-primary">{countServices} Services found related to "{searchkey}" </h4>
                    {services.slice().map(service => 
                    service.s_title.split(" ").map((item, index)=>
                       item.toLowerCase() === searchkey  &&
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight" data-wow-delay="0s" key={service._id}>
                            <div className="card mb-4 product-wap rounded-0">
                                <div className="card rounded-0">
                                <img
                                    className="card-img rounded-0 img-fluid"
                                    src={service.s_image} 
                                />
                                <div
                                    className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                                >
                                    <ul className="list-unstyled">
                                    
                                    <li>
                                        <Link
                                        className="btn btn-success text-white mt-2"
                                        to={`/services/${service._id}`}
                                        ><i className="far fa-eye"></i></Link>
                                    </li>
                                    
                                    </ul>
                                </div>
                                </div>
                                <div className="card-body">
                                <Link to={`/services/${service._id}`} className="text-decoration-none"
                                    ><h6><centre>{ service.s_title }</centre></h6></Link>
                                
                                <p className="text-center mb-0">Rs. {service.s_price}</p>
                                </div>
                            </div>

                        </div>
                    )
                  )} 
                  </>}
                  {countBlogs!=0 && <>
                   <h4 style={{textAlign:"left"}} className="text-primary">{countBlogs} Blogs found related to "{searchkey}" </h4>
                <br/>
                {blogs.slice().map(blog => 
                    blog.title.split(" ").map((item, index)=>
                       item.toLowerCase() === searchkey  &&
                        <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInRight" data-wow-delay="0s" key={blog._id}>                       
                            <div className="card mb-4 product-wap rounded-0">
                                <div className="card rounded-0">
                                <img
                                    className="card-img rounded-0 img-fluid"
                                    src={blog.image} 
                                />
                                <div
                                    className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center"
                                >
                                    <ul className="list-unstyled">
                                    
                                    <li>
                                        <Link
                                        className="btn btn-success text-white mt-2"
                                        to={`/blogs/${blog._id}`}
                                        ><i className="far fa-eye"></i></Link>
                                    </li>
                                    
                                    </ul>
                                </div>
                                </div>
                                <div className="card-body">
                                <Link to={`/blogs/${blog._id}`} className="text-decoration-none"
                                    ><h6><centre>{ blog.title }</centre></h6></Link>
                                
                                <Link to={`/blogs/${blog._id}`}><p className="text-center mb-0">Read more...</p></Link>
                                </div>
                            </div>
                        </div>
                    )
                  )} 
                  </>}
                </div>
              </div>
            </section>
          
    );
}
 
export default SearchCustomer;