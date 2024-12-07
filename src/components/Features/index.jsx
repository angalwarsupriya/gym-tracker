import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Features() {
  AOS.init();
  AOS.refresh();
  return (
    <section id='features-bg-con' className="features-bg-con">
       <h2 className='features-hea'>
          Discover Our App's Key Features
       </h2>
       <p className='features-para'>GymFluencer is your ultimate fitness companion, designed to help you track your workouts with ease. Our application allows you to log exercises, count reps, and calculate calories burned, all through a user-friendly interface. Whether you’re a beginner or a seasoned athlete, our app will keep you motivated and on track.</p>
    

       <div className="features-cards-con" data-aos="slide-right" >
         <div className='feature-card1'>
            <img alt='workoup-logging' className='features-img1' src='images/full-shot-man-sitting-yoga-mat.jpg'/>
            <div className='feature-card-content-con1'>
              <h3 className='feature-card-hea'>Effortless Workout Logging</h3>
              <p className='feature-card-para'>easilly log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision</p>
            </div>
        </div>
        <div className='feature-card2' data-aos="slide-left" >
            <img alt='workoup-logging' className='features-img2' src='images/meal-planning-notepad-food-composition.jpg'/>
            <div className='feature-card-content-con2'>
              <h3 className='feature-card-hea'>personalized Diet plan</h3>
              <p className='feature-card-para'>An AI diet plan customizes meals to your health goals, preferences, and lifestyle, offering tailored, nutritious suggestions to support optimal wellness.</p>
            </div>
        </div>
        <div className='feature-card1' data-aos="slide-right">
            <img alt='workoup-logging' className='features-img1' src='images/calories-nutrition-food-exercise-concept.jpg'/>
            <div className='feature-card-content-con1'>
              <h3 className='feature-card-hea'>Calorie Calculation Made Easy</h3>
              <p className='feature-card-para'>Calculate calories burned during your workouts to help manage your fitness goals. Our app provides precise data to keep you informed and motivated.</p>
            </div>
        </div>
        <div className='feature-card2' data-aos="slide-left">
            <img alt='workoup-logging' className='features-img2' src='images/wellness-health-lifestyle-workout-graphic-word.jpg'/>
            <div className='feature-card-content-con2'>
              <h3 className='feature-card-hea'>personalized workout plan</h3>
              <p className='feature-card-para'>An AI -powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster.</p>
            </div>
        </div>
        <div className='feature-card1' data-aos="slide-right">
            <img alt='workoup-logging' className='features-img1' src='images/physical-activity-stats-around-person.jpg'/>
            <div className='feature-card-content-con1'>
              <h3 className='feature-card-hea'>Accurate Rep Counting</h3>
              <p className='feature-card-para'>Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance.</p>
            </div>
        </div>
       </div>
       
    
    </section>
  )
}

export default Features