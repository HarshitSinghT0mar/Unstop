import React from "react";

const Stats = (props) => {
  return (
    <div className="stats-box">
      <span className="stats-box-number">
        {props.number} <span className="small-number">+89</span>
      </span>
      <span className="stats-box-text">{props.smalltext}</span>
    </div>
  );
};

export default Stats;
