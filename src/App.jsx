import "./App.css";
import ArrowButton from "./components/pages/home/arrowbutton/arrow-button.jsx";
import SectionCommunity from "./components/pages/home/community/SectionCommunity.jsx"

function App() {
    return (
        <>
            <section
                id="other-element-container"
                className="other-element-container"
            >
                <ArrowButton />
            </section>
            <SectionCommunity />
        </>
    );
}

export default App;
