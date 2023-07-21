import React from 'react'

const PageNav = () => {
  return (<>
    <section className="page-nav">
        <a href="#">
          Assesments
        </a>
        {/* using a tag instead of span or p coz in the design it looks like we will be navigating inside the page through so if asked to create function app we can add Link tag with the react-router */}
        <img src="/assets/Vector 298.svg" alt-text="vector" />
        <a href="#" className="page-nav-link-active">
          My Assesments
        </a>
      <img src='assets/mobile_screen_share.svg'/>
      </section>
      </>
  )
}

export default PageNav
