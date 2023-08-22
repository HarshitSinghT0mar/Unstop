import React from "react";
import { useAppData } from "../Contexts/AppContext";

const HeaderMob = (props) => {
  const { showNav, setShowNav} = useAppData();

  const showNavMob = () => {
    return setShowNav(!showNav);
  };

  return (
    <div className="mob-header">
      <div>
        <img loading="lazy" alt="statusBar" src="./assets/Status Bar.svg" />
      </div>
      <div className="mob-nav">
        <img loading="lazy" src="./assets/segment.svg" onClick={showNavMob} />
        <span>Assesment</span>
        {/* <img
          loading="lazy"
          alt="laptopIcon"
          src="./assets/laptop_mac.svg"
          id="laptop-screen"
          onClick={() => toggleScreenSize()}
        /> */}
      </div>
      <div className="mob-page-nav">
        <a href="#" className="page-nav-link-active">
          My Assesments
        </a>
        <a href="#"> Unstop Assements</a>
      </div>
    </div>
  );
};

export default HeaderMob;
