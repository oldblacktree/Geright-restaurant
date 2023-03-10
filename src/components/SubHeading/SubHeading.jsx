import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div>
    <p className="p-cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon-img" />
  </div>
);

export default SubHeading;
