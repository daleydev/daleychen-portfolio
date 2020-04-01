import React, { useContext } from "react";
import { AppContext } from "../context";

export default function Work() {
  const { currentPage, setCurrentPage, darkMode } = useContext(AppContext);

  return (
    <div className="broswer-box">
      work
    </div>
  );
}
