import "./App.css";
import ArrowButton from "./components/shared/arrow-button/ArrowButton.jsx";
import BuyCakeComponent from "./components/shared/buycake/BuyCake.jsx";
import SectionFooter from "./components/shared/footer/SectionFooter.jsx";
import ExchangeStatsOne from "./components/pages/home/Exchange-stats-1/ExchangeStatsOne.jsx";
import News from "./components/pages/home/News/News.jsx";
import BottomNav from "./components/shared/bottom-nav/BottomNav.jsx";

function App() {
    return (
        <div>
            <section
                id="reactive-nav-bottom"
                class="reactive-nav-bottom light-theme theme-change"
            >
                <BottomNav />
            </section>
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
            <section id="news">
                <News />
            </section>
            <SectionFooter />
        </div>
    );
}

export default App;
