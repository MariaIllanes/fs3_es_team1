import React, { useEffect } from "react";
import "./arrow-button.css";

const ArrowButton = () => {
    const svgStyle = {
        marginLeft: "0px",
    };

    useEffect(() => {
        const arrowButton = document.querySelector(".other-element-button");
        const buttonContainer = document.querySelector(
            ".other-element-container"
        );
        const scrollThreshold = 0.25;

        const handleButtonClick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            arrowButton.style.transform = "scale(0.95)";

            setTimeout(() => {
                arrowButton.style.transform = "scale(1)";
            }, 200);
        };

        arrowButton.addEventListener("click", handleButtonClick);

        const toggleSectionVisibility = () => {
            const scrollPosition = window.scrollY;
            const pageHeight = document.body.clientHeight;

            if (scrollPosition >= pageHeight * scrollThreshold) {
                buttonContainer.style.display = "block";
            } else {
                buttonContainer.style.display = "none";
            }
        };

        window.addEventListener("scroll", toggleSectionVisibility);

        toggleSectionVisibility();

        return () => {
            arrowButton.removeEventListener("click", handleButtonClick);
            window.removeEventListener("scroll", toggleSectionVisibility);
        };
    }, []);

    return (
        <section
                id="other-element-container"
                className="other-element-container"
            >
        <div className="arrow-div-container">
            <button
                className="other-element-button light-theme theme-change"
                width="48"
                height="48"
                variant="primary"
                scale="md"
            >
                <svg
                    viewBox="0 0 24 24"
                    color="invertedContrast"
                    ml="0.5rem"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    style={svgStyle}
                >
                    <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path>
                </svg>
            </button>
        </div>
        </section>
    );
};

export default ArrowButton;
