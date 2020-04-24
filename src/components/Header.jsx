import React, { Component } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Header.css";

class Navigation extends Component {
  render() {
    return (
      <div className="customNav">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Felicity Gray Stylist" className="logo" />
        </Link>
      </div>
    );
  }
}

export default Navigation;
