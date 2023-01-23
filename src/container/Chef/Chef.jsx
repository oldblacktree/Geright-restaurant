import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef section-padding section-bg ">
    <div className="app__chef-img">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__chef-info">
      <SubHeading title="Shef's word" />
      <h2 className="p-headtext">What we believe in</h2>
      <p className="p-opensans app__chef-info-quote">
        <span>
          <img src={images.quote} alt="quote" />
        </span>{" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
        Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
        lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>
      <div className="app__chef-sign">
        <p className="app__chef-sign-name">Kevin Luo</p>
        <p className="p-opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
