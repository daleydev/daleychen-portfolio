import React, { useContext } from "react";
import { AppContext } from "../context";

export default function Work() {
  const { currentPage, setCurrentPage, darkMode } = useContext(AppContext);

  return (
    <div className="work-box">
      <div
        className={`work-card-box ${darkMode ? "" : "light-shadow-default"}`}
      >
        <div
          className={`work-card-img-inset-box ${
            darkMode ? "" : "light-shadow-inset"
          }`}
        >
            <div className={`work-card-img-box ${
            darkMode ? "" : "light-shadow-default"
          }`}></div>
        </div>
        <div
          className={`work-card-content-box ${
            darkMode ? "" : "light-shadow-inset"
          }`}
        ></div>
      </div>
    </div>
  );
}
