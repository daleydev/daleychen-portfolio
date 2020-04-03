import React, { useContext } from "react";
import { AppContext } from "./context";
import sun from "./img/sun.png";
import moon from "./img/moon.png";
import logo from "./img/logo.png";

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
      <div className={`logo-box light-shadow-inset`}>
        {/* <img src={logo} alt='logo'></img> */}
        {/* <span>DALEY CHEN</span> */}
        <div className={`logo-inset-box light-shadow-default`}>
          <div className={`logo-inner-box light-shadow-inset`}></div>
        </div>
      </div>
      <div className="link-box">
        <div
          className={`link-inset-box ${
            currentPage === "home" ? "light-shadow-inset link-anime" : ""
          }`}
          onClick={() => setCurrentPage("home")}
        ></div>
        <span
          className={`navlink-text ${
            darkMode === true ? "light-color display-anime" : "dark-color"
          } `}
        >
          Home
        </span>
      </div>

      <div className="link-box">
        <div
          className={`link-inset-box ${
            currentPage === "about" ? "active link-anime" : ""
          }`}
          onClick={() => setCurrentPage("about")}
        >
          
        </div><span
            className={`navlink-text ${
              darkMode === true ? "light-color display-anime" : "dark-color"
            } `}
          >
            About
          </span>
      </div>

      <div className="link-box">
      <div
        className={`link-inset-box ${
          currentPage === "work" ? "active link-anime" : ""
        }`}
        onClick={() => setCurrentPage("work")}
      >
        
      </div><span
          className={`navlink-text ${
            darkMode === true ? "light-color" : "dark-color"
          } `}
        >
          Works
        </span>
      </div>

      <div className="link-box">
      <div
        className={`link-inset-box ${
          currentPage === "contact" ? "active link-anime" : ""
        }`}
        onClick={() => setCurrentPage("contact")}
      >
        
      </div><span
          className={`navlink-text ${
            darkMode === true ? "light-color" : "dark-color"
          }`}
        >
          Contact
        </span>
      </div>

      <div className={`dark-mode-toggle-box light-shadow-inset`}>
        <div
          className={`dark-mode-box ${darkMode ? "" : "light-shadow-default"}`}
          onClick={() => toggleNightMode(false)}
        >
          <img className="night-mode-img" src={sun} alt="" />
        </div>

        <div
          className={`dark-mode-box ${darkMode ? "light-shadow-default" : ""}`}
          onClick={() => toggleNightMode(true)}
        >
          <img className="night-mode-img" src={moon} alt="" />
        </div>
      </div>
    </div>
  );
}
