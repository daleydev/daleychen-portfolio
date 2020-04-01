import React, { useContext } from "react";
import { AppContext } from "../context";

export default function About() {
  const { currentPage, setCurrentPage, darkMode } = useContext(AppContext);

  return (
    <div className="about-box">
      <div className='about-top-box'>

      </div>
      
    </div>
  );
}
