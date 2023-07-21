import React from "react";
import AssesmentDetails from "./AssesmentDetails";


const MyAssesments = () => {
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
       <AssesmentDetails />
      <AssesmentDetails />
        
      </div>
      <div></div>
    </section>
  );
};

export default MyAssesments;
