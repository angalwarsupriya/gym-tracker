import React from 'react'
import './index.css'
function Home() {
  return (
    <section id='home' className="home-bg-con">
      <div className='home-left-con'>
        <div className='content-con'>
          <h1 className='home-hea'>
           Track Your <span className='fitnes-span'>  FITNESS  </span> Journy
          </h1>
          <p className='home-p'>Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly interface.</p>
          <button className='get-start-btn'>Get Start</button>
        </div> 
        <div className='bottom-round-corner'>
      
        </div>
      </div>

      <div className='home-img-con'>
        <img className='home-img' alt='workout' src='images/1.png'/>
      </div>     

    </section>
  )
}

export default Home