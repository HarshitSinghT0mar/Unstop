import React from 'react'

const HeaderMob = () => {
  return (
    <div className='mob-header'>
    <div><img alt='statusBar' src='/assets/Status Bar.svg'/></div>
    <div className='mob-nav'>

      <img src='/assets/segment.svg'/>
      <span>Assesment</span>
      <img alt='laptopIcon' src='/assets/laptop_mac.svg'/>

    </div>
    <div className='mob-page-nav'>
      <a href='#' className='page-nav-link-active'>My Assesments</a>
      <a href='#' > Unstop Assements</a>
    </div>
      
    </div>
  )
}

export default HeaderMob
