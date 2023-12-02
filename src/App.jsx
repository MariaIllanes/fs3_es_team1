import React, { useState } from 'react'
import './App.css'
import ArrowButton from './components/pages/home/arrowbutton/arrow-button.jsx'
import SectionExchangeStats from './components/pages/exchangestats/SectionExchangeStats.jsx'
import './components/pages/exchangestats/SectionExchangeStats.module.scss'

function App() {
  
  
  return (
    <>
      {/* <section>
      <ArrowButton/>
      </section > */}
      <div id="other-element-container" className="other-element-container">
        <SectionExchangeStats />
      </div>
    </>
  )
}

export default App;
