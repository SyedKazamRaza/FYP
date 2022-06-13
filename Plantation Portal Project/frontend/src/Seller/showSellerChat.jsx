import React, { useEffect } from "react";
import Chatpanel from "../Customer/chatpanel/chatpanel";

function ShowSellerChat(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{marginLeft: "17%"}}>
      <Chatpanel userId="61d9354e52dbabae9bd60541" role={"seller"} />
    </div>
  );
}

export default ShowSellerChat;
