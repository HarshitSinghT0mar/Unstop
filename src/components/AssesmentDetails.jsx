import React, { useContext } from "react";
import FormContext from "../Contexts/FormContext";

const AssesmentDetails = (props) => {
  const { screenWidth } = useContext(FormContext);
  return (
    <div className="subject-assesment">
      <div className="subject-box-1">
        <img alt="icon" src="/assets/briefcase_image.svg" />
        <span>{props.subject} Assesment</span>
        <img
          style={{ position: "absolute", right: "16px", top: "16px" }}
          src="/assets/3 dot.svg"
        />
        {/*have already set subject-assesment postion to relative*/}
        <div className="subject-calendar">
          <span>{props.purpose}</span>
          <img alt="vector" src="/assets/Vector 333.svg" />
          {screenWidth > 767 ? (
            <img alt="calender" src="/assets/calendar_today.svg" />
          ) : (           //different images of calender were used srendering different images conditionally here
            <img alt="time" src="assets/schedule.svg" />
          )}

          <time>{props.date}</time>
        </div>
      </div>
      <img src="/assets/Vector 332.svg" alt="vector" />
      <div className="subject-footer">
        <div className="ques-duration">
          <div>
            <p>{props.hrs}</p>
            <p>Duration</p>
          </div>
          <div>
            <p>{props.noOfQues}</p>
            <p>Questions</p>
          </div>
        </div>
        <div className="share-user">
          <div className="share-image">
            <img src="/assets/link.svg" />
            <span>Share</span>
          </div>

          {props.bool ? (  //using bool prop to conditionally rendet the images of users accounts
            <>
            <div className="image-container">
              <img src="/assets/User_LP.svg" alt="user" />
              <img src="/assets/pastl_LP.svg" alt="user" />
              <img src="/assets/pink_LP.svg" alt="user" />
            
            </div>
           {screenWidth<767 && <span>+324</span>}</>
          ) : (
            <img src="assets/User_LP.svg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AssesmentDetails;
