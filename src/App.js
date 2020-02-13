import React, { useContext } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

//context
import { WaterFallContext } from "./contexts/WaterfallContext";

import Login from "./components/Login";
import Home from "./components/Home";
import Authenticate from "./components/Authenticate";

function App() {
  const { isLoggedIn } = useContext(WaterFallContext);
  console.log(isLoggedIn);

  if (isLoggedIn) {
    axios.post();
  }

  return (
    <div className="App">
      <h1>Waterfalls</h1>
      <Login></Login>

      {/* ROUTES */}
      <Route exact path="/" component={Home} />
      <Route path="/authenticate" component={Authenticate} />
      {/* <Route path="/register" component={Register} /> */}
      {/* <Route path="/waterfalls" component={Waterfalls} /> */}
      {/* <PrivateRoute exact path="/" component={Home}/> */}
    </div>
  );
}

export default App;
