import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ArrowButton from "./components/pages/home/arrowbutton/arrow-button.jsx";
import News from "./components/pages/home/News/News.jsx";

function App() {
    return (
        <>
            <section
                id="other-element-container"
                className="other-element-container"
            >
                <ArrowButton />
            </section>
            <section id="news">
                <News />
            </section>
        </>
    );
}

export default App;
