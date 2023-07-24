import React from "react";

const Overview = (props) => {
  return (
    <div className="common-box">
      <p>{props.heading}</p>
      <div className="inside-box">
        <img loading="lazy" alt="icon" src={props.icon} className="icon-images" />
        {props.children}
        {/* Stats component will be accessed here as it is wrapped inside overview component in MainContent   */}
      </div>
    </div>
  );
};

export default Overview;
