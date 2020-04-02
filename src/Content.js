import React, { useContext, useEffect } from "react";
import { AppContext } from "./context";
import anime from "animejs/lib/anime.es";

// component import
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

export default function Content() {
  const { currentPage, setCurrentPage, darkMode } = useContext(
    AppContext
  );

  useEffect(() => {
    anime({
      targets: "",
      boxShadow: [
        { value: ["0 0 0 0 #ffffff73", "0 0 0 0 rgb(94, 104, 121, 0.288)"] },
        {
          value: [
            "inset -3px -3px 7px #ffffff73",
            "inset 3px 3px 7px rgb(94, 104, 121, 0.288)"
          ]
        }
      ],
      duration: 2000,
      easing: "linear",
      loop: true
    });
  }, []);

  const showContent = () => {
      switch (currentPage) {
          case 'home': return (<Home/>);
          case 'about': return (<About/>);
          case 'work': return (<Work/>);
          case 'contact': return (<Contact/>);
          default: return <></>
      }
  }
  

  return (
    <div className="content-box">
      { showContent() }
    </div>
  );
}
