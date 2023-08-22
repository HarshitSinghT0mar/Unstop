import React, { useContext} from 'react'
import FormContext from '../Contexts/AppContext'



const PageNav = (props) => {


  return (
    <section className="page-nav">
        <a href="#">
          Assesments
        </a>
        {/* using a tag instead of span or p coz in the design it looks like we will be navigating inside the page through so if asked to create function app we can add Link tag with the react-router */}
        <img loading="lazy" src="./assets/Vector 298.svg" alt-text="vector"  />
        <a href="#" className="page-nav-link-active">
          My Assesments
        </a>
      {/* <img loading="lazy" src='assets/mobile_screen_share.svg' id="mobile-screen" />       */}
      </section>
      
  )
}

export default PageNav
