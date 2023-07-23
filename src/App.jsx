import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import AssessmentForm from "./components/AssesmentForm";
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";
import FormContext from "./Contexts/FormContext";
import { CSSTransition } from "react-transition-group";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showNav, setShowNav] = useState(false); // setting up to conditionally render components for optimized performance
  const [showChart, setShowChart] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); //setting screen width to render components according to scrren sizes
    };

    window.addEventListener("resize", handleResize);

    // Cleaning up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <FormContext.Provider
      value={{
        showForm,
        setShowForm, //providing values of the context to use it in other components with useContext
        showNav,
        setShowNav,
        screenWidth,
        setScreenWidth,
        showChart,
        setShowChart,
      }}
    >
      <div className="app-container">
        {showNav && screenWidth < 767 ? (
          <>              {/*this(<></>) is fraction segment, react parses single container only  */}
            <Navbar />
            <Overlay />
          </>
        ) : (
          screenWidth > 767 && <Navbar />
        )}

        <MainContent />

        <CSSTransition            /*levaraging react transition library to apply slide up transition to Form*/
        in={showForm || showNav}
          timeout={300}
          classNames="fade-in"
          unmountOnExit
        >
          <Overlay />
        </CSSTransition>

        <CSSTransition
          in={showForm}
          timeout={300}
          classNames="slide-up"
          unmountOnExit
        >
          <AssessmentForm />
        </CSSTransition>
      </div>
    </FormContext.Provider>
  );
}

export default App;
