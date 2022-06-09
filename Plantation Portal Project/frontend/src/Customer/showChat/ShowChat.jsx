import React, { useEffect } from "react";
import Chatpanel from "../chatpanel/chatpanel";
import { useUser } from "../userContext";

function ShowChat(props) {
  const user = useUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);

  return <div>
      <Chatpanel userId={user._id} role={"customer"} />
  </div>;
}

export default ShowChat;
