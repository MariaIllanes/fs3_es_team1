import React, {useState, useRef, useEffect } from "react";
import "../sharedComponents/sharedStyles/style.css";
import "../../pages/home/MainBanner/MainBannerStyle.css";
import "../../pages/home/footerbanner/FooterBannerStyle.css"
import HiddenFooterBanner from "../../pages/home/footerbanner/HiddenFooterBanner";

const ConnectWalletBTN = ({ text }) => {

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
    <div>
      
    <button
      className="btn-main-blue btn-expanded theme-change light-theme"
      id="btn-banner"
      onClick= { toggleHidden }
    >
      {text}
    </button>

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

export default ConnectWalletBTN;
