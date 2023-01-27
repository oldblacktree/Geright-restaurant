import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./FindUs.css";

const FindUs = () => (
  <div className="find-us section section-padding section-bg" id="contact">
    <div className="find-us__info">
      <SubHeading title="Contact" />
      <h2 className="p-headtext">Find us</h2>
      <div className="find-us__info-content">
        <p className="find-us__address p-opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <div className="find-us__work-hours">
          <p className="find-us__work-hours-heading p-cormorant">
            Opening Hours
          </p>
          <p className="find-us__work-hours-item p-opensans">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="find-us__work-hours-item p-opensans">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
        </div>
        <button className="custom-button find-us__button" type="button">
          Visit us
        </button>
      </div>
    </div>
    <div className="find-us__img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
