import React, { useContext } from "react";
import FormContext from "../Contexts/FormContext";

const Navbar = () => {
  const { showNav, setShowNav } = useContext(FormContext);
  return (
    <nav className="nav-container">
      <ul style={{ textAlign: "center" }}>
        {showNav && (
          <>
            <div className="list-item">
              <span>Menu</span>
              <img
                alt="cross"
                src="/assets/cut.svg"
                onClick={() => {
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
        <li className="list-item list-admin">
          <img alt="icon" src="assets/Vector 267.svg" />
          <span className="admin">Admin</span>
        </li>
        <li className="list-item">
          <img alt="icon" src="/assets/admin_meds.svg" />
          Round Status
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
