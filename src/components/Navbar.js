import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import Userbox from "./Userbox";

const Navbar = () => {
  return (
    <nav className="nav-style">
      <img src='logo.png' alt='StoryStorage Logo'/>
      <div className="nav-top-left">
        <ul>
          <li>
            <Link to="private/ideas" className="link">
            Ideas
            </Link>
          </li>
          <li>
            <Link to="private/projects"className="link">
            Projects
            </Link>
          </li>
          <li className="dropdown">
            <Dropdown/>
            <img src='user.png' alt='user'></img>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const Dropdown = () => {
  return(
    
  <div className="dropdown-content">
    <Userbox/>
  </div>
  )
}
export default withAuth(Navbar);