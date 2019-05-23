import React, { Component } from "react";
import { Switch, Route} from "react-router-dom";

import '../src/styles/App.css';

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Navbar/>
        <div className="container">          
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            {/* <Route path="/" component={Main}/> */}
            <PrivateRoute path="/private" component={Private}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
