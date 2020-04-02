import React, { useContext } from "react";
import { AppContext } from "./context";
import sun from "./img/sun.png";
import moon from "./img/moon.png";
import logo from './img/logo.png';

export default function Header() {
  const { currentPage, setCurrentPage, darkMode, setDarkMode } = useContext(
    AppContext
  );

  const toggleNightMode = currentMode => {
    if (currentMode !== darkMode) {
      return setDarkMode(!darkMode);
    }
  };

  return (
    <div className="header-box">
      <div
        className={`logo-box ${currentPage === "home" ? "active" : ""}`}
        onClick={() => setCurrentPage("home")}
      >
        <img src={logo} alt='logo'></img>
      </div>

      <div className="header-links-box">
        <div
          className={`link-box ${currentPage === "about" ? "active" : ""}`}
          onClick={() => setCurrentPage("about")}
        >
          <span
            className={`navlink-text ${darkMode === true ?  "light-color":"dark-color"} `}
          >
            About
          </span>
        </div>
        <div
          className={`link-box ${currentPage === "work" ? "active" : ""}`}
          onClick={() => setCurrentPage("work")}
        >
          <span
            className={`navlink-text ${darkMode === true ? "light-color":"dark-color"} `}
          >
            Works
          </span>
        </div>
        <div
          className={`link-box ${currentPage === "contact" ? "active" : ""}`}
          onClick={() => setCurrentPage("contact")}
        >
          <span
            className={`navlink-text ${darkMode === true ? "light-color":"dark-color"}`}
          >
            Contact
          </span>
        </div>
        <div
          className={`dark-mode-box ${darkMode === false ? "active" : ""}`}
          onClick={() => toggleNightMode(false)}
        >
          <img className="night-mode-img" src={sun} alt="" />
        </div>

        <div
          className={`dark-mode-box ${darkMode === true ? "active" : ""}`}
          onClick={() => toggleNightMode(true)}
        >
          <img className="night-mode-img" src={moon} alt="" />
        </div>
      </div>
    </div>
  );
}
