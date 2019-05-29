import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Userbox extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <div className="drop-down-styles">
            <p className="drop-items">Loged in as: {user.username}</p>
            <button className='button drop-items'onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="drop-down-styles">
            <Link to="/login" className="drop-items">Login</Link>
            <Link to="/signup" className="drop-items">Signup</Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(Userbox);
