import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div id="home" className="app__header section section-padding">
    <div className="app__header-column">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p-opensans app__header-description">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button className="custom-button" type="button">
        Explore menu
      </button>
    </div>
    <div className="app__header-img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
