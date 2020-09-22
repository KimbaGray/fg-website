import React, { Component } from "react";
import "../styles/About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="aboutBlock">
        <p>
          Felicity Gray is a stylist living in London. She has assisted for
          several years (stylists include Olivia Pomp, Vicki Russell and Cheryl
          Konteh) and has worked across editorial and advertisement shoots.
        </p>
        {/* <p>
          Editorially, sh​e has contributed to Glamour​ (US)​, Allure (US),
          Vanity Fair, Vs., Marie Claire (US)​, Nylon​ (US), Dazed and Confused,
          Interview (Germany), Wonderland, Rollacoaster, Hero, Heroine, Exit,
          Hunger,​ ​Vmagazine.com and VMan and 10 Mag.
        </p>
        <p>
          Her clients include​​ campaigns for H&M, French Connection, Vince
          Camuto, Aeropostale, Equinox, Make Up For​ ​Ever and Material Girl .
        </p>
        <p>
          Her E-Commerce and film clients are Barneys, Amazon Fashion, Sony
          Music, Refinery29, eBay, NARS, Monique Lhuillier, Verizon Wireless,
          Ultimate Ears, Microsoft, Procter and Gamble, Walgreens (Beauty),
          Samsung and Pepsi.
        </p> */}
        <p>
          That stuff's cool.. but Felicity also enjoys making soy wax candles,
          sourcing vintage glass and collecting wooden spoons. Also she loves
          baskets. LOVES. Big basket fan.
        </p>
        <p className="inquiries">
          Inquiries:{" "}
          <a href="mailto:felicitygabriellagray@gmail.com">
            felicitygabriellagray@gmail.com
          </a>
        </p>
      </div>
    );
  }
}

export default About;
