import React from 'react'
import './index.css'

function Faq() {
  return (
    <section id='faqs' className='footer-bg-con'>
         <div className="container">
      <div className="accordion">
        <div className="accordion-item" id="question1">
          <a className="accordion-link" href="#question1">
            <div className="flex">
              <h3>How do I log my workouts?</h3>
              
            </div>
            <i className="icon ion-md-arrow-forward">+</i>
            <i className="icon ion-md-arrow-down">-</i>
          </a>
          <div className="answer">
            <p> You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps.</p>
          </div>
          <hr/>
      </div>
        <div className="accordion-item" id="question2">
          <a className="accordion-link" href="#question2">
            <div className="flex">
              <h3>Can I track my calories burned?</h3>
              
            </div>
            <i className="icon ion-md-arrow-forward">+</i>
            <i className="icon ion-md-arrow-down">-</i>
          </a>
          <div className="answer">
            <p>Yes, you can track calories burned through the application integrated tracking features.</p>
          </div>
          <hr/>
      </div>
        <div className="accordion-item" id="question3">
          <a className="accordion-link" href="#question3">
            <div className="flex">
              <h3>Is this application suitable for beginners?</h3>
              
            </div>
            <i className="icon ion-md-arrow-forward">+</i>
            <i className="icon ion-md-arrow-down">-</i>
          </a>
          <div className="answer">
            <p>Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels.</p>
          </div>
          <hr/>
      </div>
        <div className="accordion-item" id="question4">
          <a className="accordion-link" href="#question4">
            <div>
              <h3>What features does the application offer?</h3>
             
            </div>
            <i className="icon ion-md-arrow-forward">+</i>
            <i className="icon ion-md-arrow-down">-</i>
          </a>
          <div className="answer">
            <p>The app offers workout logging, rep counting, calorie tracking, and progress reviews.</p>
          </div>
          <hr/>
      </div>

      <div className="accordion-item" id="question4">
          <a className="accordion-link" href="#question4">
            <div>
              <h3>How can I reset my password?</h3>
             
            </div>
            <i className="icon ion-md-arrow-forward">+</i>
            <i className="icon ion-md-arrow-down">-</i>
          </a>
          <div className="answer">
            <p>You can reset your password by going to the login screen and selecting "Forgot Password".</p>
          </div>
          <hr/>
      </div>
     </div>
    </div>
  </section>


  )
}

export default Faq