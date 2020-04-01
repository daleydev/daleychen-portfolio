// Module import
import React, { useContext } from "react";
import { AppContext } from "./context";
import "./css/app.scss";
// Component import
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

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



