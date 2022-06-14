import React, { useEffect } from "react";
import Chatpanel from "../Customer/chatpanel/chatpanel";
import { useUser } from "../userContext";
import { useNavigate } from "react-router-dom";

function ShowSellerChat(props) {
  const user = useUser();
  const navigate = useNavigate();

  if (!user._id) {
    navigate("/login");
  }

  const storeid = user._id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginLeft: "17%" }}>
      <Chatpanel userId={storeid} role={"seller"} />
    </div>
  );
}

export default ShowSellerChat;
