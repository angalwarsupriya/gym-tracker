import React from 'react'

import Home from './components/Home'

import './App.css'
import Header from './components/Header'
import Features from './components/Features'
import Guide from './components/Guide'
import Reviws from './components/Reviws'
import Faq from './components/Faq'
function App() {
  return (
    <>
   
    <div className='home-bg-container' >
      <img src='images/woman-holding-weights-near-barbells.jpg' style={{height:'100%', width:'100%'}}/>
    </div>
    <div className='con'>
      <Header/>
      <div className='display-ui-con'>
        <Home/>
        <Features/>
        <Guide/>
        <Reviws/>
        <Faq/>
      </div>
    </div>
    </>
  )
}

export default App