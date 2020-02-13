import React, { useState, createContext, useEffect } from "react";
import auth from "../auth/service.js";

export const WaterFallContext = createContext();

export const WaterFallProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [waterFalls, setWaterFalls] = useState([]); // useState changed from {} to []
  const [user, setUser] = useState({ username: "", email: "", id: "" });

  auth.loginCallback = loggedIn;
  auth.logoutCallback = loggedOut;

  function loggedIn() {
    setIsLoggedIn(true);
  }

  function loggedOut() {
    setIsLoggedIn(false);
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
        loggedIn,
        loggedOut,
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
