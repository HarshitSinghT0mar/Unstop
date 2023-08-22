import React from "react";
import Overview from "./Overview";
import Stats from "./Stats";
import MyAssesments from "./MyAssesments";
import PageNav from "./PageNav";
import HeaderMob from "./HeaderMob";
import { useAppData } from "../Contexts/AppContext";   

const MainContent = () => {
  const { screenWidth, showChart } = useAppData(); 
  return (
    <main className="main-content-container">
      {screenWidth > 767 ? (
        <PageNav  />   //rendering different headers for mobile and desktop 
      ) : (
        <HeaderMob />
      )}
      <div className="main-content">
        {(showChart || screenWidth > 767) && (
          <section className="overview-section">    
            <p>Assesments Overview</p>
            <div className="overview-box">
            <Overview                     //rendering overview section here and providing props so that we don't have to change Overview component everytime for different texts , we can just accept props and pass the changes as props from here
              heading="Total Assesment"
              icon="./assets/agenda.svg"
              number="34"
            >
              <span className="stats-box-number">34</span>
            </Overview>
            <Overview
              heading="Candidates"
              icon="./assets/people.svg"
              number="11"
            >
              <Stats smalltext="Total Candidate" number="11,145" />
              <img loading="lazy" src="./assets/Vector 250.svg" />
              <Stats smalltext="Who Attempted" number="1,114" />
            </Overview>
            <Overview
              heading="Candidates Score"
              icon="./assets/internet.svg"
              number="11,000"
              smallText="Social Share"
            >
              <Stats smalltext="E-mail" number="11000" />
              <img loading="lazy" src="./assets/Vector 250.svg" />
              <Stats smalltext="Social Share" number="145" />
              <img loading="lazy" src="./assets/Vector 250.svg" />
              <Stats smalltext="Unique Link" number="145" />
            </Overview>

            <Overview heading="Total purpose" icon="./assets/link_image.svg">
              <span className="stats-box-number">11</span>
            </Overview>
            </div>
          </section>
        )}                
        <MyAssesments />      
      </div>
    </main>
  );
};

export default MainContent;
