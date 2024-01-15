import React, { useEffect, useState } from "react";

const ThemeChange = ({ id }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const themeChangeElements = document.querySelectorAll(".theme-change");

        const handleButtonClick = () => {
            setIsDark(!isDark);

            themeChangeElements.forEach((element) => {
                setTimeout(() => {
                    if (isDark) {
                        element.classList.replace("dark-theme", "light-theme");
                    } else {
                        element.classList.replace("light-theme", "dark-theme");
                    }
                }, 500);
            });
        };

        const button = document.getElementById(id);
        button.addEventListener("click", handleButtonClick);

        return () => {
            button.removeEventListener("click", handleButtonClick);
        };
    }, [isDark]);

    return null;
};

export default ThemeChange;
