//DEPENDENCIES
import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../auth/service";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);
