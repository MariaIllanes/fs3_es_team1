import "./App.css";
import SectionFooterBanner from "./components/pages/home/footerbanner/SectionFooterBanner";
import SectionCommunity from "./components/pages/home/community/SectionCommunity.jsx";
import ArrowButton from "./components/shared/arrow-button/ArrowButton.jsx";
import BuyCakeComponent from "./components/shared/buycake/BuyCake.jsx";
import SectionFooter from "./components/shared/footer/SectionFooter.jsx";
import ExchangeStatsOne from "./components/pages/home/Exchange-stats-1/ExchangeStatsOne.jsx";
import PartnersAnimation from "./components/pages/home/partners-animation/PartnersAnimation.jsx";
import SectionEcosystem from "./components/pages/home/ecosystem/SectionEcosystem.jsx";
import SectionExchangeStats from "./components/pages/home/exchangestats/SectionExchangeStats.jsx";
import News from "./components/pages/home/News/News.jsx";
import BottomNav from "./components/shared/bottom-nav/BottomNav.jsx";
// import MainNav from "./components/shared/main-nav/MainNav";

function App() {
    return (
        <div>
            {/* <MainNav /> */}
            <section
                id="reactive-nav-bottom"
                className="reactive-nav-bottom light-theme theme-change"
            >
                <BottomNav />
            </section>
            <section
                id="other-element-container"
                className="other-element-container"
            >
                <ArrowButton />
            </section>
            <section
                id="partners-animation"
                className="first-container-partners theme-change light-theme"
                style={{ zIndex: 5 }}
            >
                <PartnersAnimation />
            </section>
            <section id="sec4-container" className="sec4-container">
                <ExchangeStatsOne />
            </section>
            <BuyCakeComponent />
            <SectionEcosystem />
            <SectionExchangeStats />
            <SectionCommunity />
            <section
                id="news"
                className="news-first-container theme-change light-theme"
                style={{ boxSizing: "border-box" }}
            >
                <News />
            </section>
            <SectionFooterBanner />
            <SectionFooter />
        </div>
    );
}

export default App;
