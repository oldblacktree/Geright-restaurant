import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import { GiWashingMachine } from "react-icons/gi";

const SpecialMenu = () => (
  <div className="app__special-menu flex-center section-padding" id="menu">
    <div className="app__special-menu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h2 className="p-headtext">Today’s special</h2>
    </div>
    <div className="menu">
      <div className="menu__column">
        <p className="menu__column-title">Wine & Bear</p>
        <div className="menu__column-items">
          {data.wines.map((wine) => (
            <MenuItem
              key={wine.title}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="menu__img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="menu__column">
        <p className="menu__column-title">Coctails</p>
        <div className="menu__column-items">
          {data.cocktails.map((coctail) => (
            <MenuItem
              key={coctail.title}
              title={coctail.title}
              price={coctail.price}
              tags={coctail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <button type="button" className="menu__button custom-button">
      View more
    </button>
  </div>
);

export default SpecialMenu;
