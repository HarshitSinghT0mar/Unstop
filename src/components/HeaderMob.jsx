import React, { useContext } from "react";
import FormContext from "../Contexts/FormContext";

const HeaderMob = (props) => {
  const{showNav,setShowNav}=useContext(FormContext)

const showNavMob=()=>{
  return setShowNav(!showNav)
}
const expandScreen= () => {
    return props.setScreenWidth(1244);
  }
  return (
    <div className="mob-header">
      <div>
        <img alt="statusBar" src="/assets/Status Bar.svg" />
      </div>
      <div className="mob-nav">
        <img src="/assets/segment.svg" onClick={showNavMob}/>
        <span>Assesment</span>
        <img alt="laptopIcon" src="/assets/laptop_mac.svg" id="laptop-screen" onClick={expandScreen}/>
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
