import React, { useContext } from "react";
import { AppContext } from "../context";

export default function About() {
  const { currentPage, setCurrentPage, darkMode } = useContext(AppContext);

  return (
    <div
      className={`about-box ${
        darkMode ? "dark-shadow-default" : "light-shadow-default"
      }`}
    >
      <div
        className={`about-inset-box ${
          darkMode ? "dark-shadow-inset" : "light-shadow-inset"
        }`}
      >
        <div className="about-content-box">
          <h1>About Me</h1>
          <p>
            Hello, I'm Daley, a self-taught full-stack web developer. I build
            and design modern web apps.
          </p>
          <p>
              The tech I use:
          </p>
        </div>
      </div>
    </div>
  );
}
