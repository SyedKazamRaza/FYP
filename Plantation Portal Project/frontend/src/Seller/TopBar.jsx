import { useState, useEffect } from "react";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TopBar = () => {
  const user = useUser();
  const navigate = useNavigate();
  if (!user._id) {
    navigate("/login");
  }
  const storeid = user._id;
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/seller/getStore/${storeid}`)
      .then((response) => {
        if (response.status === 200) {
          setStoreName(response.data.storeName);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="top-bar">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="profile-details">
        <img src={`/images/seller.png`} alt="seller" />
        <span className="admin_name">{storeName}</span>
      </div>
    </div>
  );
};

export default TopBar;
