import './App.css'
import ArrowButton from './components/pages/home/arrowbutton/arrow-button.jsx'
import BuyCakeComponent from './components/shared/buycake/BuyCake.jsx';
import SectionFooter from './components/shared/footer/SectionFooter.jsx'

function App() {
  
  
  return (
    < div>
      
      <section id="other-element-container" className="other-element-container">
      <ArrowButton/>
      </section >
      <BuyCakeComponent/>
      <SectionFooter />
    </div >
  )
}

export default App;
