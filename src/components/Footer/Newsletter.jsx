import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter__heading">
      <SubHeading title="Newsletter" />
      <h2 className="p-headtext">Subscribe to our newsletter</h2>
      <p className="p-opensans">And never miss latest Updates!</p>
    </div>
    <div className="newsletter__input flex-center">
      <input type="email" placeholder="Enter your email address" />
      <button className="custom-button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
