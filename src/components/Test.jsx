import React, { Component } from "react";
import FG_1 from "../images/Stills/FG_1.png";

class Test extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          HELLO
          <img src={FG_1} alt="Brazilian Glow Logo" className="stills" />
        </p>
      </div>
    );
  }
}

export default Test;
