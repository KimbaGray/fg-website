import React, { Component } from "react";
import "../styles/Advertisements.css";
import MND1 from "../images/Adverts/MND1.png";
import MND2 from "../images/Adverts/MND2.png";
import MND3 from "../images/Adverts/MND3.png";
import MND4 from "../images/Adverts/MND4.png";
import MIT1 from "../images/Adverts/MIT1.png";
import MIT2 from "../images/Adverts/MIT2.png";
import MIT3 from "../images/Adverts/MIT3.png";
import MIT4 from "../images/Adverts/MIT4.png";

class Advertisements extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <img src={MND1} alt="Brazilian Glow Logo" className="stills" />
            <img src={MIT1} alt="Brazilian Glow Logo" className="stills" />
          </div>
          <div className="column">
            <img src={MND2} alt="Brazilian Glow Logo" className="stills" />
            <img src={MIT2} alt="Brazilian Glow Logo" className="stills" />
          </div>
          <div className="column">
            <img src={MND3} alt="Brazilian Glow Logo" className="stills" />
            <img src={MIT3} alt="Brazilian Glow Logo" className="stills" />
          </div>
          <div className="column">
            <img src={MND4} alt="Brazilian Glow Logo" className="stills" />
            <img src={MIT4} alt="Brazilian Glow Logo" className="stills" />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default Advertisements;
