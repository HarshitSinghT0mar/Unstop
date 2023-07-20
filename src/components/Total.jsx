import React from "react";
import Stats from "./Stats";

const Total = (props) => {
  return (
    <div className="common-box">
      <p>{props.heading}</p>
      <div className="inside-box-1">
        <img alt="icon" src={props.icon} className="icon-images" />
        
        {props.children} 
        {/* Stats component will be accessed here as it is wrapped inside Total component in MainContent   */}
      </div>
    </div>
  );
};

export default Total;
