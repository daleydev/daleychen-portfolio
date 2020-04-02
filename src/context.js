import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('work');
  const [darkMode, setDarkMode] = useState(false)

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage, darkMode,setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};