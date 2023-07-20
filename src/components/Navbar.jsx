import React from "react";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul style={{ textAlign: "center" }}>
        <li className="list-item">
          <img rel="icon" src="/assets/dashboard.svg" />
          Dashboard
        </li>
        <li className="list-item">
          <img rel="icon" src="/assets/note_alt.svg" />
          Assesment
        </li>
        <li className="list-item">
          <img rel="icon" src="/assets/quiz.svg" />
          My Library
        </li>
        <li className="list-item list-admin">
          <img rel="icon" src="assets/Vector 267.svg" />
          <span className="admin">Admin</span>
        </li>
        <li className="list-item">
          <img rel="icon" src="/assets/admin_meds.svg" />
          Round Status
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
