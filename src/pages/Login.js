import React, { Component} from "react";
import { Redirect } from "react-router-dom"
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  // componentDidUnmount(){
  //   this.redirect()
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
    };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    const { username, password } = this.state;
    return (
      <div className="authBox">
      <form onSubmit={this.handleFormSubmit} className="auth-form">
        <h2>Login</h2>
        <hr/>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          className='input-text'
          onChange={this.handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          className='input-text'
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" className='button'/>
      </form>
      </div>
    );
  }
}

export default withAuth(Login);
