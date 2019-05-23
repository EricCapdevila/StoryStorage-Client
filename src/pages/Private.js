import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import MyProjects from "../components/Myprojects"
import MyIdeas from "../components/MyIdeas"
import { Switch, Route } from 'react-router-dom';

class Private extends Component {
  render() {
    return (
      <div>
      <Switch>
          <Route path="private/ideas" component={MyIdeas}/>
          <Route path="private/projects" component={MyProjects}/>
        </Switch>
      </div>
    );
  }
}

export default withAuth(Private);
