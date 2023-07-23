import React, { useContext } from "react";
import AssesmentDetails from "./AssesmentDetails";
import FormContext from "../Contexts/FormContext";

const MyAssesments = (props) => {
  const form = document.getElementById("form");
  const { setShowForm, showForm } = useContext(FormContext);

  const addAssesment = () => {
    // form.classList.toggle("form-card");
    return setShowForm(!showForm);
  };
  return (
    <section className="my-assesments">
      <p>My Assesment</p>
      <div className="assesment-cards">
        <div className="new-assesment" id="form" onClick={addAssesment}>
          <img alt="icon" src="/assets/add.svg" />
          <span>New Assesment</span>

          <p>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>
        <AssesmentDetails
          bool={false}
          subject="Maths"
          hrs="00"
          noOfQues="00"
          date="20 Apr 2023"
          purpose="Job"
        />
        <AssesmentDetails
          bool={true}
          subject="Maths"
          hrs="00"
          noOfQues="00"
          date="20 Apr 2023"
          purpose="Job"
        />
      </div>
    </section>
  );
};

export default MyAssesments;
