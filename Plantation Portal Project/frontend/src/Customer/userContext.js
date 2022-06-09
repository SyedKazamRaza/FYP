import React, { useContext, useState } from "react";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();
const NavbarContext = React.createContext();
const NavbarUpdateContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function useUserUpdate() {
  return useContext(UserUpdateContext);
}

export function useNavbar() {
  return useContext(NavbarContext);
}

export function useNavbarUpdate() {
  return useContext(NavbarUpdateContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({ initialValue: "a" });
  const [navbarBold, setNavbarBold] = useState("home");
  const navigate = useNavigate();

  const setLoginUser = (user) => {
    setUser(user);
    ReactSession.set("user", user);
    console.log("Setting user in contecxt");
    console.log("setting....");
    console.log(user);
  };

  const logOut = () => {
    setUser({ initialValue: "a" });
    localStorage.clear();
    console.log("Log Out from context");
    console.log(user);
    navigate("/");
  };

  const changeNavBold = (ID) => {
    console.log("called");
    setNavbarBold(ID);
  };

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider
        value={{ setLoginUser: setLoginUser, logOut: logOut }}
      >
        <NavbarContext.Provider value={navbarBold}>
          <NavbarUpdateContext.Provider
            value={{ changeNavBold: changeNavBold }}
          >
            {children}
          </NavbarUpdateContext.Provider>
        </NavbarContext.Provider>
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
