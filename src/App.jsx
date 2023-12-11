import "./App.css";
import ArrowButton from "./components/pages/home/arrowbutton/arrow-button.jsx";
import BuyCakeComponent from "./components/shared/buycake/BuyCake.jsx";
import SectionFooter from "./components/shared/footer/SectionFooter.jsx";
import ExchangeStatsOne from "./components/pages/home/Exchange-stats-1/ExchangeStatsOne.jsx";
import SectionExchangeStats from "./components/pages/exchangestats/SectionExchangeStats.jsx";

function App() {
    return (
        <div>
            <section
                id="other-element-container"
                className="other-element-container"
            >
                <ArrowButton />
            </section>
            <BuyCakeComponent />
            <section id="sec4-container" className="sec4-container">
                <ExchangeStatsOne />
            </section>
            <SectionExchangeStats />
            <SectionFooter />
        </div>
    );
}

export default App;
