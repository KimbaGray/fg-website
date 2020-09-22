import React, { Component } from "react";
import "../styles/Advertisements.css";
import FG_1 from "../images/Stills/FG_1.png";
import FG_2 from "../images/Stills/FG_2.png";
import FG_3 from "../images/Stills/FG_3.png";
import FG_4 from "../images/Stills/FG_4.jpg";

class Advertisements extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <img src={FG_1} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_2} alt="Brazilian Glow Logo" className="stills" />
          </div>
          <div className="column">
            <img src={FG_3} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_4} alt="Brazilian Glow Logo" className="stills" />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default Advertisements;
