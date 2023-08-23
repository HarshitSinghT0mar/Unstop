import React, { useRef } from "react";
import AssesmentDetails from "./AssesmentDetails";
import { useAppData } from "../Contexts/AppContext";

const MyAssesments = (props) => {
  const { screenWidth, setShowChart, showChart, setShowForm, showForm } =
    useAppData();
  const myRef = useRef();

  const showBarChart = () => {
   
    myRef.current.classList.toggle("chart-active");

    return setShowChart(!showChart); /*will show and close bar char*/
  };
  return (
    <section className="my-assesments">
      <div className="my-assesment-header">
        <span>My Assesment</span>
        {screenWidth <= 767 && (
          <div className="my-assesment-img-container">
            {/*all these icons will render on smaller screen*/}
            <img loading="lazy" alt="icon" src="assets/search.svg" />
            <img loading="lazy" alt="icon" src="assets/filter_list_alt.svg" />
            <div className="barchart-img" ref={myRef}>
              <img
                loading="lazy"
                alt="icon"
                
                src="assets/bar_chart.svg"

                onClick={showBarChart}
              />
            </div>
          </div>
        )}
      </div>

      <div className="assesment-cards">
        <div
          className="new-assesment"
          id="form"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          <img loading="lazy" alt="icon" src="./assets/add.svg" />
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
          noOfQues="00" //rendering two common components manually here but we could have used mapping as well if we had more cards to render by simply creating a array of objects with these keys and we can also dymalically add data to the array from form details and render them dynamalically here using map
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
        {screenWidth <= 767 && (
          <>
            <AssesmentDetails
              bool={true}
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
            <AssesmentDetails
              bool={true}
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
          </>
        )}
      </div>
    </section>
  );
};

export default MyAssesments;
