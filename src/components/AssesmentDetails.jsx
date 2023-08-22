import React from "react";
import { useAppData } from "../Contexts/AppContext";

const AssesmentDetails = (props) => {
  const { screenWidth } = useAppData();
  return (
    <div className="subject-assesment">
      <div className="subject-box-1">
        <img loading="lazy" alt="icon" src="./assets/briefcase_image.svg" />
        <span>{props.subject} Assesment</span>
        <img
          style={{ position: "absolute", right: "16px", top: "16px" }}
          src="./assets/3 dot.svg"
        />
        {/*have already set subject-assesment postion to relative*/}
        <div className="subject-calendar">
          <span>{props.purpose}</span>
          <img loading="lazy" alt="vector" src="./assets/Vector 333.svg" />
          {screenWidth > 767 ? (
            <img loading="lazy" alt="calender" src="./assets/calendar_today.svg" />
          ) : (           //different images of calender were used srendering different images conditionally here
            <img loading="lazy" alt="time" src="assets/schedule.svg" />
          )}

          <time>{props.date}</time>
        </div>
      </div>
      <img loading="lazy" src="./assets/Vector 332.svg" alt="vector" />
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
            <img loading="lazy" src="./assets/link.svg" />
            <span>Share</span>
          </div>

          {props.bool ? (  //using bool prop to conditionally render the images of users accounts
            <>
            <div className="image-container">
              <img loading="lazy" src="./assets/User_LP.svg" alt="user" />
              <img loading="lazy" src="./assets/pastl_LP.svg" alt="user" />
              <img loading="lazy" src="./assets/pink_LP.svg" alt="user" />
            
            </div>
           {screenWidth<=767 && <span>+324</span>}</>
          ) : (
            <img loading="lazy" src="assets/User_LP.svg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AssesmentDetails;
