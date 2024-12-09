import React from 'react'
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Guide() {
  AOS.init({offset: 100,});
  return (
    <section id='guide' className="guide-bg-con">
      <h2 className='GUIDE-HEA'>Steps to Continue</h2>

       <div className='guide-cards-con'>
          
          <div className='card-overview-con'  data-aos="slide-up">
           <div className='guide-card '>
            <div className="container">
        
              <img src="images/finger-pressing-circle-with-word-start.jpg" alt="Avatar" className="image"/>
           
              <div className="overlay">
                <p className="text">
                Start by opening the GymFluencer. 
                The intuitive home screen gives you
                 quick access to all features.
                </p>
                <button className='know-more-btn'>Know More</button>
              </div>

            </div>
            <h4 className='step-hea'>
              <span className='strokeme'> Step 1 :</span> Click on Get Started
            </h4>
          </div>
         </div>
           

         <div className='card-overview-con'  data-aos="slide-down"> 
           <div className='guide-card '>
            <div className="container">
              <img src="images/young-adults-sport-gym-using-kettlebells.jpg" alt="Avatar" className="image"/>
              <div className="overlay">
                <p className="text">
                Easily log your exercises by selecting from a wide range of activities. Track your progress with detailed logs.
                </p>
                <button className='know-more-btn'>Know More</button>
              </div>

            </div>
            <h4 className='step-hea'>
              <span className='strokeme'> Step 2 :</span> Log Your Exercises
            </h4>
          </div>
         </div>


         <div className='card-overview-con'  data-aos="slide-up">
           <div className='guide-card '>
            <div className="container">
              <img src="images/data-stats-around-person-doing-physical-activity.jpg" alt="Avatar" className="image"/>
              <div className="overlay">
                <p className="text">
                Count your reps with precision, ensuring every detail is logged. Stay informed on your progress.


                </p>
                <button className='know-more-btn'>Know More</button>
              </div>

            </div>
            <h4 className='step-hea'>
              <span className='strokeme'> Step 3 :</span>  Count Your Reps
            </h4>
          </div>
         </div>


         <div className='card-overview-con'  data-aos="slide-down">
           <div className='guide-card '>
            <div className="container">
              <img src="images/full-shot-woman-doing-sport-with-stats.jpg" alt="Avatar" className="image"/>
              <div className="overlay">
                <p className="text">
               Review your workout stats and progress over time to stay motivated and reach your fitness goals.
                </p>
                <button className='know-more-btn'>Know More</button>
              </div>

            </div>
            <h4 className='step-hea'>
              <span className='strokeme'> Step 4 :</span> Track Your Progress
            </h4>
          </div>
         </div>




         <div className='card-overview-con'  data-aos="slide-up">
           <div className='guide-card '>
            <div className="container">
              <img src="images/25189131.jpg" alt="Avatar" className="image"/>
              <div className="overlay">
                <p className="text">
                Check your workout summaries and progress over time to stay motivated and achieve your fitness goals.
                </p>
                <button className='know-more-btn'>Know More</button>
              </div>

            </div>
            <h4 className='step-hea'>
              <span className='strokeme'> Step 5 :</span> Review Your Progress
            </h4>
          </div>
         </div>

     
       </div>
    </section>
  )
}

export default Guide


       
       
       
       
       
       
       
