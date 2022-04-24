import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";  //make routing easy
import CustomerRoutes from "./Routes/customerRoutes";
import AdminRoutes from "./Routes/adminRoutes"
import { ReactSession } from "react-client-session";

function App(props) {
  ReactSession.setStoreType("localStorage");
  
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<CustomerRoutes />} />
        <Route exact path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
