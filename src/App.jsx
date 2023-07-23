import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import AssessmentForm from "./components/AssesmentForm";
import Overlay from "./components/Overlay";
import { useState } from "react";
import FormContext from "./Contexts/FormContext";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <FormContext.Provider
      value={{
        showForm,
        setShowForm,
        showNav,
        setShowNav,
        screenWidth,
        setScreenWidth,
      }}
    >
      <div className="app-container">
        {showNav && screenWidth<767 ? (
          <>
            <Navbar />
            <Overlay />
          </>
        ):showNav||screenWidth>767 && <Navbar />}
        <MainContent />

        {showForm && (
          <>
            <AssessmentForm />
            <Overlay />
          </>
        )}
      </div>
    </FormContext.Provider>
  );
}

export default App;
