import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo left">
            Logo
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
