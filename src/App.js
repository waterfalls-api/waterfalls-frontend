//dependencies
import React, { useContext } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

//context
import { WaterFallContext } from "./contexts/WaterfallContext";

//components
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/Login";
import Home from "./components/Home";
import Waterfalls from "./components/Waterfalls";

//styles
import "./App.css";

function App() {
  const { isLoggedIn } = useContext(WaterFallContext);

  return (
    <div className="App">
      <div>
        <h1>Waterfalls</h1>
        <Login />
      </div>

      {/* ROUTES */}
      <Route exact path="/" component={Home} />
      {/* <Route path="/authenticate" component={Authenticate} /> */}
      {/* <Route path="/register" component={Register} /> */}
      {/* <Route path="/waterfalls" component={Waterfalls} /> */}
      <PrivateRoute path="/waterfalls" component={Waterfalls} />
    </div>
  );
}

export default App;
