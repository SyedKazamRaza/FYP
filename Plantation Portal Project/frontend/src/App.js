import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //make routing easy
import CustomerRoutes from "./Routes/customerRoutes";
import AdminRoutes from "./Routes/adminRoutes";
import SellerRoutes from "./Routes/sellerRoutes";
import ShowChat from "./Customer/showChat/ShowChat";
// import SampleLogin from "./Customer/sampleLogin";
import { ReactSession } from "react-client-session";
import { UserProvider } from "./userContext";

function App(props) {
  ReactSession.setStoreType("localStorage");

  return (
    <BrowserRouter>
    <UserProvider>
        <Routes>
          <Route exact path="/seller/*" element={<SellerRoutes />} />
          {/* <Route path="/chatpanel" exact element={<ShowChat />} /> */}
          <Route exact path="/*" element={<CustomerRoutes />} />
          <Route exact path="/admin/*" element={<AdminRoutes />} />
        </Routes>
    </UserProvider>
      </BrowserRouter>
  );
}

export default App;
