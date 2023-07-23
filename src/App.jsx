import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import AssessmentForm from "./components/AssesmentForm";
import Overlay from "./components/Overlay";
import { useEffect, useState,useRef } from "react";
import FormContext from "./Contexts/FormContext";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showChart,setShowChart]=useState(false)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update windowWidth state
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const formRef = useRef(null); // Create a ref for the form component

  useEffect(() => {
    const handleClickOutsideForm = (event) => {
      // Check if the clicked element is outside the form
      if (formRef.current && !formRef.current.contains(event.target)) {
       console.log(formRef);
        setShowForm(!showForm); // Close the form if clicked outside
      }
    };

    // Attach the event listener to the document
    document.addEventListener('click', handleClickOutsideForm);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutsideForm);
    };
  }, []);

 

  return (
    <FormContext.Provider
      value={{
        showForm,
        setShowForm,
        showNav,
        setShowNav,
        screenWidth,
        setScreenWidth,showChart,setShowChart
      }}
    >
      <div className="app-container">
        {showNav && screenWidth < 767 ? (
          <>
            <Navbar />
            <Overlay />
          </>
        ) : (
          showNav || (screenWidth > 767 && <Navbar />)
        )}
        <MainContent />

        {showForm && (
          <>
            <AssessmentForm ref={formRef} />
            <Overlay />
          </>
        )}
      </div>
    </FormContext.Provider>
  );
}

export default App;
