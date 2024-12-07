import React from 'react'

import './index.css'

function Header() {
  return (
    <header className="header-bg-con">
      <h1 className='header-logo'>GymFluencer</h1>
      <nav className='nav-con'>
        <ul className='header-ul'>
          <li className='header-list-item'>
            Home
          </li>
          <li className='header-list-item'>
            Features
          </li>
          <li className='header-list-item'>
            Deit Plan
          </li>
          <li className='header-list-item'>
             Guide
          </li>
          <li className='header-list-item'>
            Workout Plans
          </li>
          <li className='header-list-item'>
            Blog
          </li>
          <li className='header-list-item'>
            FAQs
          </li>
          <li className='header-list-item'>
            Contact
          </li>
        </ul>
      </nav>
      <button className='header-btn glowing-btn'>Login</button>
    </header>
  )
}

export default Header