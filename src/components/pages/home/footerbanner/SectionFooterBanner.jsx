import React from "react";
import "./FooterBannerStyle.css";
import bfRock1 from "./FooterBannerAssets/bf-rock1.webp";
import bfRock2 from "./FooterBannerAssets/bf-rock2.webp";
import bfRock3 from "./FooterBannerAssets/bf-rock3.webp";
import bfRock4 from "./FooterBannerAssets/bf-rock4.webp";
import HiddenFooterBanner from "./HiddenFooterBanner";

const SectionFooterBanner = () => {
    const [isHidden, setIsHidden] = useState(true);
    const containerRef = useRef(null);
    const overlayRef = useRef(null);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    const handleOverlayClick = () => {
        setIsHidden(true); // Hides HiddenFooterBanner when overlay is clicked
    };

    const handleOutsideClick = (event) => {
        if (
            containerRef.current &&
            overlayRef.current &&
            !containerRef.current.contains(event.target) &&
            event.target === overlayRef.current
        ) {
            handleOverlayClick();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isHidden]);

    return (
        <div
            className="footer-banner theme-change light-theme"
            ref={containerRef}
        >
            <div id="footerbanner-visible-section">
                <img
                    src={bfRock1}
                    width="120"
                    height="120"
                    alt="animation"
                    className="footer-banner-img"
                    id="footer-banner1"
                />
                <img
                    src={bfRock2}
                    width="120"
                    height="120"
                    alt="animation"
                    className="footer-banner-img"
                    id="footer-banner3"
                />
                <div className="footer-banner-text">
                    <h2>Join Everyone's Favorite DEX Now!</h2>
                    <button
                        className="btn-main-blue"
                        id="button-s11"
                        onClick={toggleHidden}
                    >
                        Connect Wallet
                    </button>
                </div>
                <img
                    src={bfRock3}
                    width="120"
                    height="94"
                    alt="animation"
                    className="footer-banner-img"
                    id="footer-banner2"
                />
                <img
                    src={bfRock4}
                    width="160"
                    height="160"
                    alt="animation"
                    className="footer-banner-img"
                    id="footer-banner4"
                />
            </div>
            <div
                className="footerbanner-hidden-section"
                id="footer-banner-hidden-section"
            >
                <div
                    className="theme-change light-theme"
                    style={{ display: isHidden ? "none" : "block" }}
                >
                    <HiddenFooterBanner />
                    <div
                        className="overlay"
                        ref={overlayRef}
                        onClick={handleOverlayClick}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default SectionFooterBanner;
