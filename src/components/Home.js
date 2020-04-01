import React, { useContext } from "react";
import { AppContext } from "../context";
import '../css/home.scss'

export default function Home() {
  const { currentPage, setCurrentPage, darkMode } = useContext(AppContext);

  return (
    <div className="broswer-box">
      <div className="dots-box">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="broswer-bar-box">

      </div>
      <div className="broswer-content-box">
        <div className="broswer-content-text-box">
          <p className={`broswer-content-text ${darkMode ? 'light-color':'dark-color'}`}>Daley Chen</p>
          <p className={`broswer-content-text ${darkMode ? 'light-color':'dark-color'}`}>Front-End Developer</p>
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
