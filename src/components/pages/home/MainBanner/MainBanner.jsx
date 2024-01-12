import React from "react";
import './MainBannerStyle.css'
import MainBannerIMG from "./MainBannerIMG";
import MainBannerText from "./MainBannerText";
import "../../../shared/sharedComponents/sharedStyles/style.css";

const MainBannerComponent = () => {
  return (
    <section className="main-banner theme-change light-theme">
      <div className="mbcontainer">
       <MainBannerText />
        <MainBannerIMG />
      </div>
      <svg viewBox="0 0 1660 339" className="ktVOoD theme-change light-theme" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"></path><defs><linearGradient id="paint0_linear_dark" x1="830" y1="83.5" x2="830" y2="338.5" gradientUnits="userSpaceOnUse"><stop stop-color="#08060B" stop-opacity="0.2"></stop><stop offset="0.545554" stop-color="#08060B" stop-opacity="0.5"></stop><stop offset="1" stop-color="#08060B"></stop></linearGradient></defs></svg>
    </section>
  );
};

export default MainBannerComponent;


// Ahora mismo el degradado del bg solo se ve en dark-theme