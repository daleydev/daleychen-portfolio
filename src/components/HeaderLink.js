import React, { useContext } from "react";
import { AppContext } from "../context";
import home from '../img/home.png';

export default function HeaderLink(props) {
  const { linkName } = props; // This variable is for both text and link.

  const { currentPage, setCurrentPage, darkMode } = useContext(AppContext);

  return (
    <div className="link-box">
      <div
        className={`link-inset-box ${
          currentPage === linkName ? (darkMode ? "dark-shadow-inset" : "light-shadow-inset") : ""
        }`}
        onClick={() => setCurrentPage( linkName )}
      ></div>
      <span
        className={`navlink-text ${
          darkMode === true ? "light-color" : "dark-color"
        } `}
      >
          {/* { currentPage === linkName ? linkName[0].toUpperCase() + linkName.slice(1) :
          linkName[0].toUpperCase()} */}
          {linkName[0].toUpperCase() + linkName.slice(1)}
          {/* <img className='header-icon' src={home} alt="" /> */}
        
      </span>
    </div>
  );
}
