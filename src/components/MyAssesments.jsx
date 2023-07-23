import React, { useContext } from "react";
import AssesmentDetails from "./AssesmentDetails";
import FormContext from "../Contexts/FormContext";

const MyAssesments = (props) => {
  const { screenWidth, setShowChart, showChart ,setShowForm,showForm} = useContext(FormContext);

  const showBarChart = () => {
    return setShowChart(!showChart);
  };
  return (
    <section className="my-assesments">
      <div className="my-assesment-header">
        <span>My Assesment</span>
        {screenWidth < 767 && (
          <div className="my-assesment-img-container">
            <img alt="icon" src="assets/search.svg" />
            <img alt="icon" src="assets/filter_list_alt.svg" />
            <img alt="icon" src="assets/bar_chart.svg" onClick={showBarChart} />
          </div>
        )}
      </div>

      <div className="assesment-cards">
        <div className="new-assesment" id="form" onClick={()=>{
          setShowForm(!showForm)
        }}>
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
