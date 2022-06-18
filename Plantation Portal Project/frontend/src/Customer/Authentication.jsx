import Login from "../Customer/login";
import { Link } from "react-router-dom";
import Regsiter from "../Customer/Register";
import React, {useEffect} from 'react'


const Authentication = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return ( 
        <div>
            <section className="breadcrumbs-custom-inset">
                <div className="breadcrumbs-custom context-dark bg-overlay-39">
                <div className="container">
                    <h2 className="breadcrumbs-custom-title">My Account</h2>
                    <ul className="breadcrumbs-custom-path">
                        <li><Link to="/">Home</Link></li>
                        <li className="active">My Account</li>
                    </ul>
                </div>
                <div className="box-position" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/account.jpg'})`}}></div>
                </div>
            </section>
            <section className="section section-md section-first bg-default text-md-left">
                <div className="container">
                    <div className="row row-50 justify-content-center">
                        <div className="col-md-10 col-lg-5 col-xl-6">
                            <h3>Register Today and You will be able to</h3><br/><br/>
                            <ul className="list-marked">
                                <li>Speed Up Your Way Through Checkout</li>
                                <li>Keep Record of Your Purchases</li>
                                <li>Track Your Orders</li>
                                <li>Receive Discount Emails</li>
                            </ul>
                            <p>FineLiving belives in easing plants purchaising and care for people. </p>
                        </div>
                        <div className="col-md-10 col-lg-7 col-xl-6">
                            <div className="tabs-custom tabs-horizontal tabs-line" id="tabs-4">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link active" to="/login"  data-toggle="tab">LogIn</Link></li>
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link" to="/register" data-toggle="tab">Register</Link></li>
                                </ul>
                                <div className="tab-content">
                                    {props.form === "login" && <Login setLoginUser={props.setLoginUser}/>}
                                    {props.form ==="register" && <Regsiter setLoginUser={props.setLoginUser}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Authentication;