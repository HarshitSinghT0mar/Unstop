import React from "react";

const MainContent = () => {
  return (
    <main className="main-container">
      <section className="page-nav">
        <a href="/" style={{textDecoration:"none"}}>Assesments</a>       
           {/* using a tag instead of span or p coz in the design it looks like we will be navigating inside the page through so if asked to create function app we can add Link tag with the react-router */}
        <img  src="/assets/Vector 298.svg" alt-text="vector" /> 
        <a href="/"className="page-nav-link">My Assesments</a>
      </section>
      <section className="overview-section">
            <p>Assesments Overview</p>
            <div>Top Assesments</div>
            <div>2</div>
            <div>4</div>
            <div>6</div>
        
      </section>
    </main>
  );
};

export default MainContent;
