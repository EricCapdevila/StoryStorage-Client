import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";

import '../src/styles/App.css';

import Navbar from "./components/Navbar";
// import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import MyProjects from "./components/Myprojects"
import ProjectProvider from "./components/ProjectProvider"
import Main from "./components/Main"


class App extends Component {
  render() {
    return (
      <AuthProvider>      
        <Navbar/>
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <Route exact path="/" component={Main}/> 
            <PrivateRoute exact path="/projects" component={MyProjects}/>
            <PrivateRoute path="/projects/:id" component={ProjectProvider}/>
          </Switch>
      </AuthProvider>
    );
  }
}



export default App;
