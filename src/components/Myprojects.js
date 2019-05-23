import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";


class MyProjects extends Component {
  constructor(props){
    super(props);
    this.state = {
        myProjects: [], 
        newProject: "",
    }
  }


  //this,addnew -- pasarlo a la form 

  render() {
    return (
     <div>
      <h1>YOU ARE IN THE PRIVATE PROJECTS</h1>
     </div>
    );
  }
}



export default withAuth(MyProjects);