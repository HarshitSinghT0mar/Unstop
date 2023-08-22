import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import AssessmentForm from "./components/AssesmentForm";
import Overlay from "./components/Overlay";
import { useMemo } from "react";
import { useAppData } from "./Contexts/AppContext";
import { CSSTransition } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const { showForm, showNav, screenWidth, setScreenWidth } = useAppData();

  //will trigger only when the screenWidth is changed and cache the calculation preventing further triggers

  useMemo(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleaning up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div className="app-container">
      <AnimatePresence>
        {showNav ? (
          <motion.div //Leveraged Framer motion library
            style={{ zIndex: 10 }}
            initial={{ x: -120 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {screenWidth > 767 ? <Navbar /> : null}
      <MainContent />

      <CSSTransition /*levaraging react transition library to apply slide up transition to Form*/
        in={showForm}
        timeout={500}
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
  );
}

export default App;
