import React, { Component } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="customNav">
        <nav className="navbar">
          <div className="nav">
            <span className="navLink">
              <Link className="nav-link" to="/Stills">
                Stills
              </Link>{" "}
            </span>
            <span className="navLink">
              <Link className="nav-link" to="/Advertisements">
                Advertisements
              </Link>
            </span>{" "}
            <span className="navLink">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;