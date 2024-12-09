import React from 'react'
import './index.css'
import './index.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {

  return (
    <section id='home' className="home-bg-con">
      <div className='home-left-con'>
        <div className='content-con'>

        <div className="containers">
        <div className='div'>
          <span className='s'>F</span>
          <span className='s'>I</span>
          <span className='s'>T</span>
          <span className='s'>N</span>
          <span className='s'>E</span>
          <span className='s'>S</span>
          <span className='s'>S</span>
        </div>
      </div>


          <h1 className='home-hea'>
           Track Your 
          </h1>
          <h1 className='h'>Journy</h1>
          <p className='home-p'>Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.</p>
          <button className='button'>Get Start</button>
        
        </div> 
        <div className='bottom-round-corner'>
        <div className="wrap">
 
</div>
           
        </div>
      </div>

      <div className='home-img-con'>
        <img src='images/1.png' className='home-img'/>
      </div>
    </section>
  )
}

export default Home