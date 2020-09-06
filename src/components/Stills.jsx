import React, { Component } from "react";
import "../styles/Stills.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import FG_1 from "../images/Stills/FG_1.png";
import FG_2 from "../images/Stills/FG_2.png";
import FG_3 from "../images/Stills/FG_3.png";
import FG_4 from "../images/Stills/FG_4.jpg";
import FG_5 from "../images/Stills/FG_5.jpg";
import FG_6 from "../images/Stills/FG_6.jpg";
import FG_7 from "../images/Stills/FG_7.jpg";
import FG_8 from "../images/Stills/FG_8.png";
import FG_9 from "../images/Stills/FG_9.jpg";
import FG_10 from "../images/Stills/FG_10.jpg";
import FG_11 from "../images/Stills/FG_11.jpg";
import FG_12 from "../images/Stills/FG_12.jpg";
import FG_13 from "../images/Stills/FG_13.jpg";
import FG_14 from "../images/Stills/FG_14.jpg";
import FG_15 from "../images/Stills/FG_15.jpg";
import FG_16 from "../images/Stills/FG_16.jpg";
import FG_17 from "../images/Stills/FG_17.jpg";
import FG_18 from "../images/Stills/FG_18.JPG";
import FG_19 from "../images/Stills/FG_19.JPG";
import FG_20 from "../images/Stills/FG_20.JPG";
import FG_21 from "../images/Stills/FG_21.jpg";
import FG_22 from "../images/Stills/FG_22.jpeg";
import FG_23 from "../images/Stills/FG_23.jpg";
import FG_24 from "../images/Stills/FG_24.jpg";
import FG_25 from "../images/Stills/FG_25.jpg";
import FG_26 from "../images/Stills/FG_26.jpg";
import FG_27 from "../images/Stills/FG_27.jpg";
import FG_28 from "../images/Stills/FG_28.jpg";
import FG_29 from "../images/Stills/FG_29.png";
import FG_30 from "../images/Stills/FG_30.png";
import FG_31 from "../images/Stills/FG_31.png";
import FG_32 from "../images/Stills/FG_32.png";
import FG_33 from "../images/Stills/FG_33.png";
import FG_34 from "../images/Stills/FG_34.png";
import FG_35 from "../images/Stills/FG_35.png";
import FG_36 from "../images/Stills/FG_36.png";
import FG_37 from "../images/Stills/FG_37.png";
import FG_38 from "../images/Stills/FG_38.png";
import FG_39 from "../images/Stills/FG_39.png";
import FG_40 from "../images/Stills/FG_40.png";
import FG_41 from "../images/Stills/FG_41.png";
import FG_42 from "../images/Stills/FG_42.png";
import FG_43 from "../images/Stills/FG_43.png";
import FG_44 from "../images/Stills/FG_44.png";
import FG_45 from "../images/Stills/FG_45.png";
import FG_46 from "../images/Stills/FG_46.png";
import FG_47 from "../images/Stills/FG_47.png";
import FG_48 from "../images/Stills/FG_48.png";
import FG_49 from "../images/Stills/FG_49.jpg";
import FG_50 from "../images/Stills/FG_50.jpg";
import FG_51 from "../images/Stills/FG_51.jpg";
import FG_52 from "../images/Stills/FG_52.jpg";
import FG_53 from "../images/Stills/FG_53.jpg";
import FG_54 from "../images/Stills/FG_54.jpg";
import FG_55 from "../images/Stills/FG_55.jpg";
import FG_56 from "../images/Stills/FG_56.jpg";
import FG_57 from "../images/Stills/FG_57.jpg";
import FG_58 from "../images/Stills/FG_58.jpg";
import FG_59 from "../images/Stills/FG_59.jpg";
import FG_60 from "../images/Stills/FG_60.jpg";
import FG_61 from "../images/Stills/FG_61.jpg";
import FG_62 from "../images/Stills/FG_62.jpg";
import FG_63 from "../images/Stills/FG_63.jpg";
import FG_64 from "../images/Stills/FG_64.jpg";
import FG_65 from "../images/Stills/FG_65.png";
import FG_66 from "../images/Stills/FG_66.jpg";
import FG_67 from "../images/Stills/FG_67.png";
import FG_68 from "../images/Stills/FG_68.jpg";
import FG_69 from "../images/Stills/FG_69.jpg";
import FG_70 from "../images/Stills/FG_70.jpg";
import FG_71 from "../images/Stills/FG_71.jpg";

const images = [FG_1, FG_2, FG_3, FG_4];

class Stills extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div className="row">
          <div className="column">
            <img
              src={FG_1}
              alt="Brazilian Glow Logo"
              className="stills"
              onClick={() => this.setState({ isOpen: true })}
            />
            <img
              src={FG_2}
              alt="Brazilian Glow Logo"
              className="stills"
              onClick={() => this.setState({ isOpen: true })}
            />
            <img src={FG_3} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_4} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_5} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_6} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_7} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_8} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_9} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_10} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_11} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_12} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_13} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_14} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_15} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_16} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_17} alt="Brazilian Glow Logo" className="stills" />

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </div>
          <div className="column">
            <img src={FG_19} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_20} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_21} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_22} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_23} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_24} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_25} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_26} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_27} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_28} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_29} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_30} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_31} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_32} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_33} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_34} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_35} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_36} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_53} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_54} alt="Brazilian Glow Logo" className="stills" />
          </div>
          <div className="column">
            <img src={FG_56} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_38} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_39} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_40} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_41} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_42} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_43} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_44} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_45} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_46} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_47} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_48} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_49} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_50} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_51} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_52} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_71} alt="Brazilian Glow Logo" className="stills" />
          </div>
          <div className="column">
            <img src={FG_55} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_37} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_57} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_58} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_59} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_60} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_61} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_62} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_63} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_64} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_65} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_66} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_67} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_68} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_69} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_70} alt="Brazilian Glow Logo" className="stills" />
            <img src={FG_18} alt="Brazilian Glow Logo" className="stills" />
          </div>
        </div>
      </div>
    );
  }
}

export default Stills;
