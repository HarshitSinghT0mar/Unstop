import React from "react";
import Overview from "./Overview";
import Stats from "./Stats";
import MyAssesments from "./MyAssesments";
import PageNav from "./PageNav";
import HeaderMob from "./HeaderMob";
import { useState,useEffect } from "react";

const MainContent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
  return (
    <main className="main-container">
     {screenWidth>767 ? <PageNav />: <HeaderMob />}
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
    </main>
  );
};

export default MainContent;
