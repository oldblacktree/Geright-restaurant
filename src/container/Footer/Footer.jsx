import { Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="section-padding footer">
    <Newsletter />
    <div className="footer__contact">
      <div className="footer__contact-info">
        <h3>Contact us</h3>
        <p className="p-opensans footer__contact-info-address">
          9 W 53rd St, New York, NY 10019, USA
        </p>
        <p className="p-opensans">+1 212-344-1230</p>
        <p className="p-opensans">+1 212-344-1231</p>
      </div>
      <div className="footer__contact-links">
        <img
          src={images.gericht}
          className="footer__contact-links-logo"
          alt="gericht"
        />
        <p className="p-opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={images.spoon} alt="spoon" className="spoon-img" />
        <div className="footer__contact-links-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer__contact-info">
        <h3>Working hours</h3>
        <div className="footer__working-hours">
          <p className="p-opensans">Monday-Friday:</p>
          <p className="p-opensans">08:00 am - 12:00 am</p>
        </div>
        <div className="footer__working-hours">
          <p className="p-opensans">Saturday-Sunday:</p>
          <p className="p-opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p-opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

<div className="footer__contact-info">
  <h3>Working hours</h3>
  <p className="p-opensans footer__contact-info-address">
    9 W 53rd St, New York, NY 10019, USA
  </p>
  <p className="p-opensans">+1 212-344-1230</p>
  <p className="p-opensans">+1 212-344-1231</p>
</div>;
