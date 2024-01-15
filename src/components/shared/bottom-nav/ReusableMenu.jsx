import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const ReusableMenu = ({
    menuId,
    menuTitle,
    menuOptions,
    buttonContent,
    menuContent,
    menuStyle,
}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const timeoutId = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                hideMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = () => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            setMenuVisible((prevVisible) => !prevVisible);
        } else {
            clearTimeout(timeoutId.current);
            showMenu();
        }
    };

    const handleMouseOut = () => {
        timeoutId.current = setTimeout(() => hideMenu(), 21497284632000);
    };

    const keepMenuVisible = () => {
        clearTimeout(timeoutId.current);
        setMenuVisible(true);
    };

    const showMenu = () => {
        setMenuVisible(true);
    };

    const hideMenu = () => {
        setMenuVisible(false);
    };

    return (
        <div className={`option-container menu-container-${menuId}`}>
            <div
                className={`option-${menuId}`}
                onClick={handleClick}
                onMouseOut={handleMouseOut}
            >
                <button
                    type="button"
                    className="option-button theme-change light-theme"
                >
                    {buttonContent}
                </button>
            </div>

            {menuVisible && (
                <div
                    className={`menu-${menuId} dropdown-menu-${menuId} theme-change light-theme ${
                        menuVisible ? "visible" : ""
                    }`}
                    onMouseOver={keepMenuVisible}
                    onMouseOut={hideMenu}
                    style={{
                        ...menuStyle,
                        display: menuVisible ? "block" : "none",
                    }}
                >
                    {menuContent}
                </div>
            )}
        </div>
    );
};

ReusableMenu.propTypes = {
    menuId: PropTypes.string.isRequired,
    menuTitle: PropTypes.string.isRequired,
    menuOptions: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
    buttonContent: PropTypes.node.isRequired,
    menuContent: PropTypes.node.isRequired,
    menuStyle: PropTypes.object, // Nueva propiedad para los estilos del menú
};

export default ReusableMenu;
