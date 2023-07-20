import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-container'>
    <div className='nav-container-list'>
    <ul>
        <li className='list-item'><img rel='icon' src='/assets/dashboard.svg'/>Dashboard</li>
        <li className='list-item'><img rel='icon' src='/assets/note_alt.svg'/>Assesment</li>
        <li className='list-item'><img rel='icon' src='/assets/quiz.svg'/>My Library</li>
        <span>Admin</span>
        <li className='list-item'><img rel='icon' src='/assets/admin_meds.svg'/>Round Status</li>
        
      </ul>
      </div>
    </div>
  )
}

export default Navbar
