import React, { Component } from "react";
import "../styles/Stills.css";
import FG_1 from "../images/Stills/FG_1.png";
import FG_2 from "../images/Stills/FG_2.png";
import FG_3 from "../images/Stills/FG_3.png";
import FG_4 from "../images/Stills/FG_4.jpg";
import FG_5 from "../images/Stills/FG_5.jpg";
import FG_6 from "../images/Stills/FG_6.jpg";
import FG_7 from "../images/Stills/FG_7.jpg";

class Stills extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="column">
          <img src={FG_1} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_2} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_3} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_4} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_1} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_2} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_3} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_4} alt="Brazilian Glow Logo" className="stills" />
        </div>
        <div className="column">
          <img src={FG_5} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_6} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_7} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_1} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_2} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_3} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_4} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_4} alt="Brazilian Glow Logo" className="stills" />
        </div>
        <div className="column">
          <img src={FG_5} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_6} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_7} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_1} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_2} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_3} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_4} alt="Brazilian Glow Logo" className="stills" />
          <img src={FG_4} alt="Brazilian Glow Logo" className="stills" />
        </div>
      </div>
    );
  }
}

export default Stills;
