import React from "react";

const AssesmentDetails = (props) => {
  return (
    <div className="maths-assesment">
      <div className="maths-box-1">
        <img alt="icon" src="/assets/briefcase_image.svg" />
        <span>Maths Assesment</span>
        <img
          style={{ position: "absolute", right: "16px", top: "16px" }}
          src="/assets/3 dot.svg"
        />
        {/*have already set maths-assesment postion to relative*/}
        <div className="maths-calendar">
          <span>Job</span>
          <img alt="vector" src="/assets/Vector 333.svg" />
          <img alt="calender" src="/assets/calendar_today.svg" />

          <time>20 Apr 2023</time>
        </div>
      </div>
      <img src="/assets/Vector 332.svg" alt="vector" />
      <div className="maths-footer">
        <div className="ques-duration">
          <div>
            <p>00</p>
            <p>Duration</p>
          </div>
          <div>
            <p>00</p>
            <p>Questions</p>
          </div>
        </div>
        <div className="share-user">
          <div className="share-image">
            <img src="/assets/link.svg" />
            <span>Share</span>
          </div>
         
          {props.bool2 && <img src="/assets/User_LP.svg" alt="user" />}
          {props.bool && (
            <div className="image-container">
            <img src="/assets/User_LP.svg" alt="user" />
              <img src="/assets/pastl_LP.svg" alt="user" />
              <img src="/assets/pink_LP.svg" alt="user" />
            </div>

          )}
          </div>
        </div>
      </div>

  );
};

export default AssesmentDetails;
