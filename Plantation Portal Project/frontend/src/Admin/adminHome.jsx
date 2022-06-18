import React from "react";
import RecentSales from "./RecentSales";
import TopProducts from "./TopProducts";
import TopBar from "./TopBar";
import useFetch from "../useFetch";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

function AdminHome(props) {
  const navigate = useNavigate();
  const user = useUser();
  if (!user._id) {
    navigate("/login");
  }

  const { data: homeStats } = useFetch(
    `http://localhost:5000/admin/adminHome`
  );

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
                  <div className="number">{homeStats.totalOrders}</div>
                </div>
                <i className='bx bx-cart-alt cart'></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Earnings</div>
                  <div className="number">Rs {homeStats.totalEarning}</div>
                </div>
                <i className='bx bxs-wallet-alt cart two' ></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Users</div>
                  <div className="number">{homeStats.numberOfUsers}</div>
                </div>
                <i className='bx bxs-group cart three' ></i>
              </div>
              <div className="box">
                <div className="right-side">
                  <div className="box-topic">Total Products</div>
                  <div className="number">{homeStats.numberOfProducts}</div>
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
