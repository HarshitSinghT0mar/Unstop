import React, { useContext } from "react";
import FormContext from "../Contexts/FormContext";

const Navbar = () => {
  const { showNav, setShowNav } = useContext(FormContext);
  return (
    <nav className="nav-container">
      <ul style={{ textAlign:"center",width:"100%"}}>
        {showNav && (                 //if showNav is true,which will we when we click segment image then only render this section
          <>
            <div className="list-item">  
              <span>Menu</span>
              <img
                alt="cross"
                src="/assets/cut.svg"
                onClick={() => {  //here as soon as it is clicked showNav is set to opposite what it previously was
                  setShowNav(!showNav);
                }}
                style={{marginLeft:"auto"}}
              />
            </div>
          </>
        )}
        <li className="list-item">
          <img alt="icon" src="/assets/dashboard.svg" />
          Dashboard
        </li>
        <li className="list-item list-item-selected">
          <img alt="icon" src="/assets/note_alt.svg" />  
          Assesment           
        </li>
        <li className="list-item">
          <img alt="icon" src="/assets/quiz.svg" />
          My Library
        </li>
          <img alt="icon" src="assets/Vector 267.svg" style={{width:"100%",margin:"10px 0"}} />
       
        <li className="list-item list-admin">    
          <span className="admin">Admin</span>
          <img alt="icon" src="/assets/admin_meds.svg" />
          Round Status
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
