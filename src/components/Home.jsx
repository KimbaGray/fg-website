import React, { Component } from "react";
import "../styles/Home.css";
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

const images = [
  FG_1,
  FG_2,
  FG_3,
  FG_4,
  FG_5,
  FG_6,
  FG_7,
  FG_8,
  FG_9,
  FG_10,
  FG_11,
  FG_12,
  FG_13,
  FG_14,
  FG_15,
  FG_16,
  FG_17,
  FG_18,
  FG_19,
  FG_20,
  FG_21,
  FG_22,
  FG_23,
  FG_24,
  FG_25,
  FG_26,
  FG_27,
  FG_28,
  FG_29,
  FG_31,
  FG_31,
  FG_32,
  FG_33,
  FG_34,
  FG_35,
  FG_36,
  FG_37,
  FG_38,
  FG_39,
  FG_40,
  FG_41,
  FG_42,
  FG_43,
  FG_44,
  FG_45,
  FG_46,
  FG_47,
  FG_48,
  FG_49,
  FG_50,
  FG_51,
  FG_52,
  FG_53,
  FG_54,
  FG_55,
  FG_56,
  FG_57,
  FG_58,
  FG_59,
  FG_60,
  FG_61,
  FG_62,
  FG_63,
  FG_64,
  FG_65,
  FG_66,
  FG_67,
  FG_68,
  FG_69,
  FG_70,
  FG_71,
];

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
              alt="Black and white, woman leaning on her hand"
              className="stills"
              onClick={() => this.setState({ isOpen: true })}
            />
            <img
              src={FG_2}
              alt="Black and white, close up of woman with a frilly turtle-neck and dangly earring"
              className="stills"
              onClick={() => this.setState({ isOpen: true })}
            />
            <img
              src={FG_3}
              alt="Black and white, woman leaning against a tree"
              className="stills"
            />
            <img
              src={FG_4}
              alt="Group of young people standing together, leaning against a wall on the right in a glamourous room"
              className="stills"
            />
            <img
              src={FG_5}
              alt="Black and white, young man lying on the floor with his head on his folded arms"
              className="stills"
            />
            <img
              src={FG_6}
              alt="Two young women, one is sat on a high bar chair and the other is standing and leaning on the high table"
              className="stills"
            />
            <img
              src={FG_7}
              alt="Young man in a velvet blue blazer, sitting on leather cube chair"
              className="stills"
            />
            <img
              src={FG_8}
              alt="Close-up of a young man in a black and white checked jumper"
              className="stills"
            />
            <img
              src={FG_9}
              alt="Young man in a blue suit and young woman in black skirt sitting on a white leather sofa"
              className="stills"
            />
            <img
              src={FG_10}
              alt="Black and white of young man sitting back in an arm chair"
              className="stills"
            />
            <img
              src={FG_11}
              alt="Group of young people, crowded together and leaning on a hotel suitcase trolley"
              className="stills"
            />
            <img
              src={FG_12}
              alt="Black and white of a young man sitting on a high bar chair, one leg propped up on the chair"
              className="stills"
            />
            <img
              src={FG_13}
              alt="Young man sitting on the floor, in khaki trousers and blue jacket, leaning against a marble wall"
              className="stills"
            />
            <img
              src={FG_14}
              alt="Black and white of young man in a denim jacket"
              className="stills"
            />
            <img
              src={FG_15}
              alt="Young man against a blue background wearing a white jumper with black and red stripes"
              className="stills"
            />
            <img
              src={FG_16}
              alt="Young woman in a mustard yellow dress sitting against a black marble wall, on a black leather bench"
              className="stills"
            />
            <img
              src={FG_17}
              alt="Black and white of young man sitting on a chair, leaning forwards"
              className="stills"
            />
          </div>
          <div className="column">
            <img
              src={FG_19}
              alt="Black and white, man standing and leaning against metal circular staircase"
              className="stills"
            />
            <img
              src={FG_20}
              alt="Black and white, young man sitting on the floor and leaning against sofa"
              className="stills"
            />
            <img
              src={FG_21}
              alt="Black and white, man with beard looking above into the distance, suspension bridge in the background"
              className="stills"
            />
            <img
              src={FG_22}
              alt="Young man in denim jacket, leaning against a white wall"
              className="stills"
            />
            <img
              src={FG_23}
              alt="Man in blue suit, sitting on a high bar stool, leaning fowards towards camera"
              className="stills"
            />
            <img
              src={FG_24}
              alt="Young man sitting on a chair, head in hands, pink background"
              className="stills"
            />
            <img
              src={FG_25}
              alt="Young man sitting on white block, hands clasped together leaning forwards"
              className="stills"
            />
            <img
              src={FG_26}
              alt="Woman in smart attire perched on a white, high stool"
              className="stills"
            />
            <img
              src={FG_27}
              alt="Woman sitting on floor cross-legged, her had leaning on her hand"
              className="stills"
            />
            <img
              src={FG_28}
              alt="Black and white, young man in stripy top, four portraits in one"
              className="stills"
            />
            <img
              src={FG_29}
              alt="Two portraits side by side, young man on leather stool and two young women leaning on high bar table"
              className="stills"
            />
            <img
              src={FG_31}
              alt="Two portraits side by side, group of people standing on baggage trolley and young man sitting on floor"
              className="stills"
            />
            <img
              src={FG_32}
              alt="Two portraits side by side, young woman in yellow sitting on black bench and three young men sitting against a fake background with mountains"
              className="stills"
            />
            <img
              src={FG_33}
              alt="Black and white, man and woman in back of taxi, glamourous attire"
              className="stills"
            />
            <img
              src={FG_34}
              alt="Front page of tmrw magazine, black and white, man walking down street looking up"
              className="stills"
            />
            <img
              src={FG_35}
              alt="Woman laughing and looking behind to camera, in blue denim jacket"
              className="stills"
            />
            <img
              src={FG_36}
              alt="Man leaning on table, arm behind him resting on chair"
              className="stills"
            />
            <img
              src={FG_53}
              alt="Man sitting on sofa wearing blue mackintosh coat"
              className="stills"
            />
            <img
              src={FG_54}
              alt="Black and white, man sitting on sofa wearing mackintosh coat"
              className="stills"
            />
            <img
              src={FG_18}
              alt="Black and white, far-away shot of young man leaning on a balcony"
              className="stills"
            />
          </div>
          <div className="column">
            <img
              src={FG_56}
              alt="Man laughing, leaning on a chair, in white jacket, framed artwork behind"
              className="stills"
            />
            <img
              src={FG_38}
              alt="Young woman in blue jacket, checked trousers, looking down to camera"
              className="stills"
            />
            <img
              src={FG_39}
              alt="Close-up, younf woman with short blonde hair, black and white striped jumper"
              className="stills"
            />
            <img
              src={FG_40}
              alt="Close-up, black and white, striped top and denim shirt"
              className="stills"
            />
            <img
              src={FG_41}
              alt="Young woman in green turtleneck and camel brown long skirt"
              className="stills"
            />
            <img
              src={FG_42}
              alt="Young man in burgundy ren suit leaning against marble bathtub"
              className="stills"
            />
            <img
              src={FG_43}
              alt="Young man with long brown hair, denim jacket and checked shirt sitting on leather chair"
              className="stills"
            />
            <img
              src={FG_44}
              alt="Young man with long brown hair, in red laopard print shirt and black jacket"
              className="stills"
            />
            <img
              src={FG_45}
              alt="Young man with long brown hair, close up in denim jacket and checked shirt"
              className="stills"
            />
            <img
              src={FG_46}
              alt="Black and white, young man with long brown hair in checked jacket and striped jumper"
              className="stills"
            />
            <img
              src={FG_47}
              alt="Young man with long brown hair in black hoody and checked blazer"
              className="stills"
            />
            <img
              src={FG_48}
              alt="Young man with long brown hair in checked jacket and blue and white striped jumper"
              className="stills"
            />
            <img
              src={FG_49}
              alt="Black and white, man sitting on floor and leaning against wall, resting hand on chin"
              className="stills"
            />
            <img
              src={FG_50}
              alt="Three young men sitting against a fake background with mountains"
              className="stills"
            />
            <img
              src={FG_51}
              alt="Two portraits side by side, three young people standing outside in winter coats and two people standing outside. Both have lit buildings in the background"
              className="stills"
            />
            <img
              src={FG_52}
              alt="Close-up of young woman in black strappy top"
              className="stills"
            />
            <img
              src={FG_71}
              alt="Young woman in lilac jumper and striped skirt"
              className="stills"
            />
          </div>
          <div className="column">
            <img
              src={FG_55}
              alt="Young man doing a magic trick with cards, facing the camera"
              className="stills"
            />
            <img
              src={FG_37}
              alt="Young woman in red leather jacket against pink wall"
              className="stills"
            />
            <img
              src={FG_57}
              alt="Black and white, young man looking to the camera"
              className="stills"
            />
            <img
              src={FG_58}
              alt="Black and white, young man in thick coat sitting on a chair and looking intensely at camera"
              className="stills"
            />
            <img
              src={FG_59}
              alt="Young man walking outside in a denim jacket, khaki trousers"
              className="stills"
            />
            <img
              src={FG_60}
              alt="Young man on pebbled beach, in pink jumper"
              className="stills"
            />
            <img
              src={FG_61}
              alt="Young man walking outside, in smart attire"
              className="stills"
            />
            <img
              src={FG_62}
              alt="Young man outside in navy blue jacket with several pockets"
              className="stills"
            />
            <img
              src={FG_63}
              alt="Man sitting on a chair, black and white, staring into camera"
              className="stills"
            />
            <img
              src={FG_64}
              alt="Black and white, far-away shot, man sitting on a chair"
              className="stills"
            />
            <img
              src={FG_65}
              alt="Black and white, young woman in high-waisted trousers and polo top"
              className="stills"
            />
            <img
              src={FG_66}
              alt="Black and white, man sitting on high stool, hand leaning on leg"
              className="stills"
            />
            <img
              src={FG_67}
              alt="Black and white, young man in glasses leaning on a table looking down"
              className="stills"
            />
            <img
              src={FG_68}
              alt="Man, sitting on chair in denim shirt, looking upwards"
              className="stills"
            />
            <img
              src={FG_69}
              alt="Man, standing against dark grey wall in dark grey suit blazer"
              className="stills"
            />
            <img
              src={FG_70}
              alt="Man, sitting on stool against darkgrey background, hand covering chin"
              className="stills"
            />
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        <div className="spacerDiv"></div>
      </div>
    );
  }
}

export default Stills;
