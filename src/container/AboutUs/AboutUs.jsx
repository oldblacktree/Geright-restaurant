import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__about flex-center section section-padding section-bg"
    id="about"
  >
    <div className="app__about-overlay">
      <img src={images.G} alt="" />
    </div>
    <div className="app__about-content-wrapper flex-center">
      <div className="app__about-content app__about-content_aboutus">
        <h2 className="p-headtext">About us</h2>
        <img src={images.spoon} alt="" className="spoon-img" />
        <p className="p-opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom-button" type="button">
          Know more
        </button>
      </div>
      <div className="app__about-knife">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__about-content app__about-content_history">
        <h2 className="p-headtext">Our history</h2>
        <img src={images.spoon} alt="" className="spoon-img" />
        <p className="p-opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button className="custom-button" type="button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
