import React, { Component } from "react";
import { Switch} from "react-router-dom";

import '../src/styles/App.css';

import Navbar from "./components/Navbar";
// import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";
import MyProjects from "./components/Myprojects"
import MyIdeas from "./components/MyIdeas"


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Navbar/>
        <div className="container">          
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            {/* <AnonRoute path="/" component={Main}/> */}
            <PrivateRoute path="/projects" component={MyProjects}/>
            <PrivateRoute path="/ideas" component={MyIdeas}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
