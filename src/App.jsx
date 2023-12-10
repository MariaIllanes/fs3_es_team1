import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ArrowButton from "./components/pages/home/arrowbutton/arrow-button.jsx";
import PartnersAnimation from "./components/pages/home/partners-animation/PartnersAnimation.jsx";

function App() {
    return (
        <>
            <section
                id="other-element-container"
                className="other-element-container"
            >
                <ArrowButton />
            </section>
            <section id="partners-animation" style={{ zIndex: 5 }}>
                <PartnersAnimation />
            </section>
        </>
    );
}

export default App;
