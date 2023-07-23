import React, { useContext } from "react";
import Overview from "./Overview";
import Stats from "./Stats";
import MyAssesments from "./MyAssesments";
import PageNav from "./PageNav";
import HeaderMob from "./HeaderMob";
import { useState,useEffect } from "react";
import FormContext from "../Contexts/FormContext";


const MainContent = () => {
  const {screenWidth,setScreenWidth}=useContext(FormContext)

  useEffect(() => {
    // Function to update windowWidth state
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for the resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (<main className="main-content-container">
     {screenWidth>767 ? <PageNav setScreenWidth={setScreenWidth}/>: <HeaderMob setScreenWidth={setScreenWidth}/>}
    <div className="main-content">
      <section className="overview-section">
        <p>Assesments Overview</p>
        <div className="overview-box-1">
          <Overview
            heading="Total Assesment"
            icon="/assets/agenda.svg"
            number="34"
          >
            <span className="stats-box-number">34</span>
          </Overview>
          <Overview heading="Total purpose" icon="/assets/people.svg" number="11">
            <Stats smalltext="Total Candidate" number="11,145" />
            <img src="/assets/Vector 250.svg" />
            <Stats smalltext="Who Attempted" number="1,114" />
          </Overview>
          <Overview
            heading="Candidates Score"
            icon="/assets/internet.svg"
            number="11,000"
            smallText="Social Share"
          >
            <Stats smalltext="E-mail" number="11000" />
            <img src="/assets/Vector 250.svg" />
            <Stats smalltext="Social Share" number="145" />
            <img src="/assets/Vector 250.svg" />
            <Stats smalltext="Unique Link" number="145" />
          </Overview>

          <Overview heading="Total purpose" icon="/assets/link_image.svg">
            <span className="stats-box-number">11</span>
          </Overview>
        </div>
      </section>
      <MyAssesments screenWidth={screenWidth}/>

      
    </div>
    </main>
  );
};

export default MainContent;
