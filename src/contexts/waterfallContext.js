import React, { useState, createContext, useEffect } from "react";
import auth from "../auth/service.js";

export const WaterFallContext = createContext();

export const WaterFallProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.isAuthenticated());
  const [waterFalls, setWaterFalls] = useState([]); // useState changed from {} to []
  const [user, setUser] = useState({ username: "", email: "", id: "" });

  auth.loginCallback = login;
  auth.logoutCallback = logout;

  function login() {
    console.log("Logging in");
    console.log("authStatus", auth.isAuthenticated());

    if (auth.isAuthenticated()) {
      setIsLoggedIn(true);
    }
  }

  function logout() {
    console.log("Logging out");
    console.log("authStatus", auth.isAuthenticated());

    if (!auth.isAuthenticated()) {
      setIsLoggedIn(false);
    }
  }

  async function addUser() {
    console.log(JSON.parse(localStorage.getItem("auth0")));

    setUser(JSON.parse(localStorage.getItem("auth0")));

    // await setTimeout(() => {
    //   window.location.pathname = "/";
    // }, 3000);
  }

  return (
    <WaterFallContext.Provider
      value={{
        waterFalls,
        setWaterFalls,
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
        user,
        setUser,
        addUser
      }}
    >
      {props.children}
    </WaterFallContext.Provider>
  );
};

export default WaterFallContext;
