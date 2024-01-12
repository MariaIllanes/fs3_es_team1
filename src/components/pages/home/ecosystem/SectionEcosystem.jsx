import React from "react";
import TradeCard from "./TradeCard.jsx";
import GamesCard from "./GamesCard.jsx";
import EarnCard from "./EarnCard.jsx";
import EcosystemImg from "./EcosystemAssets/ecosystem-logo.png";
import "./EcosystemStyle.css";

const SectionEcosystem = () => {
  return (
    <div className="ecosystem theme-change light-theme">
      <div 
      id="triangle-eco"
      className="triangle-eco light-theme theme-change">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="triangle-ecosystem light-theme theme-change"
        >
          <path d="M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z"></path>
        </svg>
      </div>

      <img src={EcosystemImg} alt="" id="ecosystem-section-logo"/>
      <h2 className="ecosystem-title theme-change light-theme">
        Discover the <span className="theme-change light-theme">Ecosystem</span>
      </h2>
      <div className="ecosystem-container">
        <TradeCard />
        <EarnCard />
        <GamesCard />
      </div>
    </div>
  );
};

export default SectionEcosystem;
