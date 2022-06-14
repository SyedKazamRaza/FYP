import React from "react";
import RecentSales from "./RecentSales";
import TopProducts from "./TopProducts";
import TopBar from "./TopBar";

function AdminHome(props) {
  return (
    <div>
     <section className="section">        
        <section className="home-section">
        
          <div className="home-content">
           <TopBar/> 
            <div className="overview-boxes">
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Orders</div>
                  <div className="number">876</div>
                </div>
                <i className='bx bx-cart-alt cart'></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Earnings</div>
                  <div className="number">Rs 38,876</div>
                </div>
                <i className='bx bxs-wallet-alt cart two' ></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Clients</div>
                  <div className="number">1,876</div>
                </div>
                <i className='bx bxs-group cart three' ></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Stores</div>
                  <div className="number">86</div>
                </div>
                <i className='bx bxs-store-alt cart four' ></i>
              </div>
            </div>
            <div className="sales-boxes">
              <RecentSales/>
              <TopProducts/>
            </div>
           
          </div>
        </section>
      </section>
    </div>
  );
}

export default AdminHome;
