import React from "react";
import { Route } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function AnonRoute({ component: Component, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !isLoggedin ? <Component {...props} /> : null
      }
    />
  );
}

export default withAuth(AnonRoute);
