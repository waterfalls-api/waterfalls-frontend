import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";

//context
import { WaterFallContext } from './contexts/WaterfallContext'
function App() {
  const { isLoggedIn } = useContext(WaterFallContext)
  console.log(isLoggedIn)
  return (
    <div className="App">
      <h1>Hello</h1>

      {/* ROUTES */}
      {/* <Route path="/login" component={Login} /> */}
      {/* <Route path="/register" component={Register} /> */}
      {/* <Route path="/waterfalls" component={Waterfalls} /> */}
      {/* <PrivateRoute exact path="/" component={Home}/> */}
    </div>
  );
}

export default App;
