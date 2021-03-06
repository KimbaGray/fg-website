import React, { Component } from "react";
import Logo1 from "../images/Logo/Logo.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import ScrollToTopBtn from "../utils/scrollToTopBtn";

class Header extends Component {
  render() {
    return (
      <div className="customNav">
        <Link className="navbar-brand" to="/">
          <img src={Logo1} alt="Felicity Gray Stylist" className="logo" />
        </Link>
        <ScrollToTopBtn />
      </div>
    );
  }
}

export default Header;
