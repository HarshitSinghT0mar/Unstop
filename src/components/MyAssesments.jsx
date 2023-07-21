import React from "react";
import AssesmentDetails from "./AssesmentDetails";


const MyAssesments = (props) => {
  return (
    <section className="my-assesments">
      <p>My Assesment</p>
      <div className="assesment-cards">
        <div className="new-assesment">
          <img alt="icon" src="/assets/add.svg" />
          <span>New Assesment</span>

          <p>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>
       <AssesmentDetails bool2={true} bool={false}/>
      <AssesmentDetails userImg="/assets/multi_user.svg" bool={true} bool2={false}/>
       
    
        
      </div>
      <div></div>
    </section>
  );
};

export default MyAssesments;
