import React from "react";
import Total from "./Total";
import Stats from "./Stats";
import MyAssesments from "./MyAssesments";

const MainContent = () => {
  return (
    <main className="main-container">
      <section className="page-nav">
        <a href="/" style={{ textDecoration: "none" }}>
          Assesments
        </a>
        {/* using a tag instead of span or p coz in the design it looks like we will be navigating inside the page through so if asked to create function app we can add Link tag with the react-router */}
        <img src="/assets/Vector 298.svg" alt-text="vector" />
        <a href="/" className="page-nav-link">
          My Assesments
        </a>
      </section>
      <section className="overview-section">
        <p>Assesments Overview</p>
        <div className="overview-box-1">
          <Total
            heading="Total Assesment"
            icon="/assets/agenda.svg"
            number="34"
          ><span className="stats-box-number">34</span></Total>
          <Total heading="Total purpose" icon="/assets/people.svg" number="11">
            <Stats smalltext="Total Candidate" number="11,145" />
            <img src="/assets/Vector 250.svg" />
            <Stats smalltext="Who Attempted" number="1,114" />
          </Total>
          <Total
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
          </Total>

          <Total
            heading="Total purpose"
            icon="/assets/link_image.svg"
        
          ><span className="stats-box-number">11</span></Total>
        </div>
      </section>
      <MyAssesments />
    </main>
  );
};

export default MainContent;
