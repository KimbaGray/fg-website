import React, { Component } from "react";
import "../styles/Advertisements.css";

class Advertisements extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <iframe
              width="420"
              height="345"
              src="https://www.youtube.com/embed/Zb0ilz6m5aU"
              className="video"
              title="MND"
            ></iframe>
          </div>
          <div className="column">
            <iframe
              width="420"
              height="345"
              src="https://www.youtube.com/embed/7rr3F90260g"
              className="video"
              title="Make It Happen"
            ></iframe>
          </div>
        </div>
        <div className="spacerDiv"></div>
      </div>
    );
  }
}

export default Advertisements;
