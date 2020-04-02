// Module import
import React, { useContext } from "react";
import { AppContext } from "./context";
import "./css/app.scss";
// Component import
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

// Component Body
export default function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={`app ${darkMode ? "dark-bg" : "light-bg"}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}



