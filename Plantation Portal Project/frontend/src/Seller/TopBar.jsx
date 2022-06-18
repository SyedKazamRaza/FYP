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
  const [storeImg, setStoreImg] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/seller/getStore/${storeid}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setStoreName(response.data.storeName);
          setStoreImg(response.data.image);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/seller/search", { state: { searchkey: search } });
  };

  return (
    <div className="top-bar">
      <div className="search-box">
        <form method="post" onSubmit={handleSubmit} className="profile-details">
          <input
            placeholder="Search..."
            className=" form-input"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bx bx-search" type="submit"></button>
        </form>
      </div>
      <div className="profile-details">
        <img src={storeImg} alt="seller" />
        <span className="admin_name">{storeName}</span>
      </div>
    </div>
  );
};

export default TopBar;
