import { Link } from "react-router-dom";
import { useUserUpdate,useNavbarUpdate, useNavbar } from "../userContext";;

const AdminNavbar = () => {
  const { logOut } = useUserUpdate();
  return (
    <div>
    <div className="sidebar">
      <div className="logo-details">
        <img src="../images/logoo-removebg-preview.png" alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/admin" className="active">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/orders">
            <i className='bx bx-list-ul' ></i>
            <span className="links_name">Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/customers">
            <i className='bx bx-user' ></i>
            <span className="links_name">Customers</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/stores">
            <i className='bx bx-store' ></i>
            <span className="links_name">Stores</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/blogs">
            <i className='bx bx-customize' ></i>
            <span className="links_name">Blogs</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/services">
            <i className='bx bx-spa' ></i>
            <span className="links_name">Services</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className='bx bx-wallet-alt'></i>
            <span className="links_name">Earnings</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/pendingrequests">
            <i className='bx bx-analyse' ></i>
            <span className="links_name">Pending Requests</span>
          </Link>
        </li>
      
        <li className="log_out">
          <Link to="#" 
            onClick={() => {
              logOut();
            }}>
            <i className='bx bx-log-out'></i>
            <span className="links_name">Log out</span>
          </Link>
        </li>
      </ul>
    </div>
    
    </div>
  );
}
 
export default AdminNavbar;