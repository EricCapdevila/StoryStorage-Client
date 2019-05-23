

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function PrivateRoute({ component: Component, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default withAuth(PrivateRoute);






// import React, { Component } from "react";
// import { withAuth } from "../lib/AuthProvider";

// import { Switch, Route } from 'react-router-dom';

// class Private extends Component {
//   render() {
//     return (
//       <div>
//       <h1>This is the private route</h1>
//       </div>
//     );
//   }
// }

// export default withAuth(Private);
