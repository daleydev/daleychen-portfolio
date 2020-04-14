import React from "react";
import HeaderLink from './components/HeaderLink';
import DarkModeToggle from './components/DarkModeToggle'


export default function Header() {

  return (
    <div className="header-box">
      {/* <div className={`logo-box light-shadow-inset`}>
        <div className={`logo-inset-box ${darkMode ? "dark-shadow-default":"light-shadow-default"}`}>
          <div className={`logo-inner-box light-shadow-inset`}></div>
        </div>
      </div> */}

      <HeaderLink linkName="home" />
      <HeaderLink linkName="about" />
      <HeaderLink linkName="work" />
      <HeaderLink linkName="contact" />
      
      <DarkModeToggle />
      
    </div>
  );
}
