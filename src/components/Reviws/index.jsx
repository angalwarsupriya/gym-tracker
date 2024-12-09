
import './index.css'
import { FaStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Reviws() {
  AOS.init({offset: 100,});
  return(
     <section id='reviews' className='reviews-bg-con'>

      <h2 className='review-hea'>
        What <span className='review-span'>Users</span> Say?
      </h2>
      <div className='review-card-con'>
       
        <div className='review-card' data-aos="zoom-in-up">
          <div className='review-card-top'>
            <h5 className='review-card-hea'>"Best Fitness App!"</h5>
           
          </div>
          <p className='review-card-p'>GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!</p>
          <div className='start-row'>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
          </div>
        </div>
     
        <div className='review-card' data-aos="zoom-in-up">
          <div className='review-card-top' >
            <h5 className='review-card-hea'>"So Easy to Use!"</h5>
           
          </div>
          <p className='review-card-p' >I love how user-friendly the app is. Logging workouts has never been easier!</p>
          <div className='start-row'>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
          </div>
        </div>
        <div className='review-card' data-aos="zoom-in-up">
          <div className='review-card-top'>
            <h5 className='review-card-hea'>"Incredible Progress Tracker!"</h5>
           
          </div>
          <p className='review-card-p'>I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!</p>
          <div className='start-row' >
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
            <FaStar style={{fontSize:'25px', color:'rgba(239, 212, 11, 0.874)'}}/>
          </div>
        </div>
      </div>
     </section>
  )
}

export default Reviws