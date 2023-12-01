import { useState } from 'react'
import './App.css'
import ArrowButton from './components/pages/home/arrowbutton/arrow-button.jsx'
import SectionFooter from './components/shared/footer/SectionFooter.jsx'

function App() {
  
  
  return (
    <>
      
      <section id="other-element-container" className="other-element-container">
      <ArrowButton/>
      </section >
      <SectionFooter />
    </>
  )
}

export default App;
