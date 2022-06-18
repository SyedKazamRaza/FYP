import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../userContext";

const TopBar = () => {
  const [search, setSearch] = useState("");
  const user = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/search", { state: { searchkey: search } });
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
        <img src={"../images/seller.png"} alt="" />
        <span className="admin_name">{user.fname + " " + user.lname}</span>
      </div>
    </div>
  );
};

export default TopBar;
