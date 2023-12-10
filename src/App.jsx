import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ArrowButton from "./components/pages/home/arrowbutton/arrow-button.jsx";
import ExchangeStatsOne from "./components/pages/home/Exchange-stats-1/ExchangeStatsOne.jsx";

function App() {
    return (
        <>
            <section
                id="other-element-container"
                className="other-element-container"
            >
                <ArrowButton />
            </section>
            <section id="sec4-container" className="sec4-container">
                <ExchangeStatsOne />
            </section>
        </>
    );
}

export default App;
