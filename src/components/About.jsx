import React, { Component } from "react";
import "../styles/About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="aboutBlock">
        <p>
          Felicity Gray is a costume designer and stylist based in London. She
          has worked across film, fashion, advertising and music on photoshoots,
          music videos, films and commercial projects for over 8 years.
        </p>
        <p>
          That stuff's cool.. but Felicity also enjoys making soy wax candles
          (you can find them{" "}
          <a
            href="https://www.instagram.com/house.of.floss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          ), sourcing vintage glass and collecting wooden spoons. Also she loves
          baskets. LOVES. Big basket fan.
        </p>
        <p className="inquiries">
          Contact:{" "}
          <a href="mailto:felicitygabriellagray@gmail.com">
            felicitygabriellagray@gmail.com
          </a>
        </p>
      </div>
    );
  }
}

export default About;
