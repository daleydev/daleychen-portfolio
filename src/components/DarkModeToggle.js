import React, { useContext } from "react";
import { AppContext } from "../context";
import sun from "../img/sun.png";
import moon from "../img/moon.png";

export default function DarkModeToggle () {
    const { darkMode, setDarkMode } = useContext(AppContext);

    const toggleNightMode = currentMode => {
        if (currentMode !== darkMode) {
          return setDarkMode(!darkMode);
        }
    };

    return (
        <div className={`dark-mode-toggle-box ${ darkMode ? "dark-shadow-inset":"light-shadow-inset"}`}>
        <div
          className={`dark-mode-box ${darkMode ? "" : "light-shadow-default"}`}
          onClick={() => toggleNightMode(false)}
        >
          <img className="night-mode-img" src={sun} alt="" />
        </div>

        <div
          className={`dark-mode-box ${darkMode ? "dark-shadow-default" : ""}`}
          onClick={() => toggleNightMode(true)}
        >
          <img className="night-mode-img" src={moon} alt="" />
        </div>
      </div>
    )
}