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
            <a
              href="https://www.youtube.com/watch?v=Zb0ilz6m5aU&feature=youtu.be&ab_channel=MNDAssociation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MND1}
                alt="Woman lying on a stage with a spotlight"
                className="stills"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=7rr3F90260g&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MIT1}
                alt="Young boy holding a blue cap on his head"
                className="stills"
              />
            </a>
          </div>
          <div className="column">
            <a
              href="https://www.youtube.com/watch?v=Zb0ilz6m5aU&feature=youtu.be&ab_channel=MNDAssociation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MND2}
                alt="Close-up of woman lying on stage"
                className="stills"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=7rr3F90260g&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MIT2}
                alt="Young boys in red sports gear standing at the edge of a sports field"
                className="stills"
              />
            </a>
          </div>
          <div className="column">
            <a
              href="https://www.youtube.com/watch?v=Zb0ilz6m5aU&feature=youtu.be&ab_channel=MNDAssociation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MND3}
                alt="Above view of woman in red lying of the stage with a spotlight on her"
                className="stills"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=7rr3F90260g&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MIT3}
                alt="Two older women looking at the camera and holding the tail of a fish"
                className="stills"
              />
            </a>
          </div>
          <div className="column">
            <a
              href="https://www.youtube.com/watch?v=Zb0ilz6m5aU&feature=youtu.be&ab_channel=MNDAssociation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MND4}
                alt="View of the back of a woman walking through a dark tunnel"
                className="stills"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=7rr3F90260g&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={MIT4}
                alt="Faraway shot from behind of three people fishing"
                className="stills"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Advertisements;
