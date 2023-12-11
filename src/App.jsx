import "./App.css";
import ArrowButton from "./components/pages/home/arrowbutton/arrow-button.jsx";
import SectionFooterBanner from "./components/pages/home/footerbanner/SectionFooterBanner.jsx"

function App() {
    return (
        <>
            <SectionFooterBanner />
            <section
                id="other-element-container"
                className="other-element-container"
            >
                <ArrowButton />
            </section>

        </>
    );
}

export default App;
