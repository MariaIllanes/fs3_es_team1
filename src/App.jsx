import "./App.css";
import SectionCommunity from "./components/pages/home/community/SectionCommunity.jsx";
import ArrowButton from "./components/shared/arrow-button/ArrowButton.jsx";
import BuyCakeComponent from "./components/shared/buycake/BuyCake.jsx";
import SectionFooter from "./components/shared/footer/SectionFooter.jsx";
import ExchangeStatsOne from "./components/pages/home/Exchange-stats-1/ExchangeStatsOne.jsx";
import SectionExchangeStats from "./components/pages/exchangestats/SectionExchangeStats.jsx";
import News from "./components/pages/home/News/News.jsx";
import BottomNav from "./components/shared/bottom-nav/BottomNav.jsx";
import MainNav from "./components/shared/main-nav/MainNav";

function App() {
    return (
        <div>
            <MainNav />
            <section
                style={{ boxSizing: "border-box" }}
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
            <SectionCommunity />
            <SectionExchangeStats />
            <section
                id="news"
                className="news-first-container theme-change light-theme"
                style={{ boxSizing: "border-box" }}
            >
                <News />
            </section>
            <SectionFooter />
        </div>
    );
}

export default App;
