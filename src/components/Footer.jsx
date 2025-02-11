import React, { Component } from "react";
import "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div>&copy; Kim Gray {new Date().getFullYear()}</div>
        </div>
      </div>
    );
  }
}

export default Footer;
