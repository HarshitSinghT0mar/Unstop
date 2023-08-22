import React, { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const useAppData = () => {
  return useContext(FormContext);
};


const AppDataProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showChart, setShowChart] = useState(false);

  return (
    <FormContext.Provider
      value={{ showForm, setShowForm, showNav, setShowNav,screenWidth,setScreenWidth,showChart,setShowChart }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default AppDataProvider;
