import React, { useContext } from "react";
import { AppContext } from "../context";
import '../css/home.scss'

export default function Home() {
  const { currentPage, setCurrentPage, darkMode } = useContext(AppContext);

  const firstParagraph = "Daley Chen";
  const secondParagraph = "Full-stack Developer"

  return (
    <div className={`broswer-box ${darkMode ? "dark-shadow-default":"light-shadow-default"}`}>
      <div className="dots-box">
        <span className={`dot ${darkMode ? "dark-shadow-inset":"light-shadow-inset"}`}></span>
        <span className={`dot ${darkMode ? "dark-shadow-inset":"light-shadow-inset"}`}></span>
        <span className={`dot ${darkMode ? "dark-shadow-inset":"light-shadow-inset"}`}></span>
      </div>

      <div className={`broswer-bar-box ${darkMode ? "dark-shadow-inset":"light-shadow-inset"}`}>

      </div>
      <div className={`broswer-content-box ${darkMode ? "dark-shadow-inset":"light-shadow-inset"}`}>
        <div className="broswer-content-text-box">
          <p className={`broswer-content-text ${darkMode ? 'light-color':'dark-color'}`}>
            {firstParagraph}
          </p>
          <p className={`broswer-content-text ${darkMode ? 'light-color':'dark-color'}`}>
            {secondParagraph}
          </p>
          <p
            className="broswer-content-link"
            onClick={() => setCurrentPage("about")}
          >
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
}
