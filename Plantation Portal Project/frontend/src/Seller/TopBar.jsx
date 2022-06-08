// import { useUser } from "../Customer/userContext";

const TopBar = () => {
    // const user = useUser();
    return ( 
        <div className="top-bar">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="bx bx-search"></i>
        </div>
        <div className="profile-details">
          <img src={`/images/seller.png`} alt="seller" />
          <span className="admin_name">Seller Name</span>
        </div>
      </div>
     );
}
 
export default TopBar;