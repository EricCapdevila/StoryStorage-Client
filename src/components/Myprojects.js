import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class MyProjects extends Component {
  state = {

  }
  render() {
    return (
     <div>
      <h1>YOU ARE IN THE PRIVATE PROJECTS</h1>
     </div>
    );
  }
}



export default withAuth(MyProjects);