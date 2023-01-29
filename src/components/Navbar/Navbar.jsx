import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { images } from "../../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p-opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p-opensans">
          <a href="#about">About</a>
        </li>
        <li className="p-opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p-opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p-opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#" className="p-opensans">
          Log In / Register
        </a>
        <a href="#" className="p-opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="overlay__open"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div
            className="app__navbar-smallscreen-overlay slide-bottom "
            onClick={(e) => {
              if (e.target.tagName === "A") {
                setToggleMenu(false);
              }
            }}
          >
            <MdOutlineRestaurantMenu
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p-opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p-opensans">
                <a href="#about">About</a>
              </li>
              <li className="p-opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p-opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p-opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
