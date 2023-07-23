import React from 'react'

const Overlay = () => {
  const handleOverlayClick = (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up
  };
  
  return (
    <div className='overlay-box' onClick={handleOverlayClick}>
      
    </div>
  )
}

export default Overlay
