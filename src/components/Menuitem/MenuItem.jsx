import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="menu__item">
    <div className="menu__item-container">
      <p className="menu__item-name p-cormorant">{title}</p>
      <div className="menu__item-dash"></div>
      <p className="menu__item-price p-cormorant">{price}</p>
    </div>
    <p className="menu__item-tags p-opensans">{tags}</p>
  </div>
);

export default MenuItem;
