import "./Laurels.css";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

const Award = ({ title, img, subtitle }) => (
  <div className="awards__list-item">
    <img src={img} alt="award" />
    <div className="awards__list-item-info">
      <p className="awards__list-item-name p-cormorant">{title}</p>
      <p className="awards__list-item-description p-cormorant">{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div className="awards section section-padding section-bg" id="awards">
    <div className="awards__info">
      <SubHeading title="Awards & recognition" />
      <h2 className="p-headtext">Our Laurels</h2>
      <div className="awards__list">
        {data.awards.map((award) => (
          <Award
            key={award.title}
            title={award.title}
            img={award.imgUrl}
            subtitle={award.subtitle}
          />
        ))}
      </div>
    </div>
    <div className="awards__img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
