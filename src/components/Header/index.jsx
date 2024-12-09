import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Header() {
  return (
    <header className="header-bg-con">
      <h1 className='header-logo'>GymFluencer</h1>
      <nav className='nav-con'>
        <ul className='header-ul'>
          
          <li className='header-list-item'>
            <a href='#home'>Home</a>           
          </li>
         
          
          <li className='header-list-item'>
          <a href='#features'>Features</a>   
          </li>
          <li className='header-list-item'>
            Deit Plan
          </li>
          <li className='header-list-item'>
           
             <a href='#guide'>Guide</a>   
          </li>
          <li className='header-list-item'>
            Workout Plans
          </li>
          <li className='header-list-item'>
            Blog
          </li>
          <li className='header-list-item'>
          <a href='#faqs'>FAQs</a>   
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