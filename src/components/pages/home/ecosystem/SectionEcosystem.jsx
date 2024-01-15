import React from 'react';
import TradeCard from './TradeCard.jsx';
import GamesCard from './GamesCard.jsx';
import EarnCard from './EarnCard.jsx';
import EcosystemImg from './EcosystemAssets/ecosystem-logo.png'
import './EcosystemStyle.css'

const SectionEcosystem = () => {
  return (
    <div className="ecosystem theme-change light-theme">
        <div className="theme-change light-theme" id="ecosystem-triangle"></div>
        <img src={EcosystemImg} alt="Ecosystem's logo" width="90" height="90" id="ecosystem-section-logo"/>
        <h2 className="ecosystem-title theme-change light-theme">Discover the <span>Ecosystem</span></h2>

        <div className="ecosystem-container">
            < TradeCard />
            < EarnCard />
            < GamesCard />
          
        </div>
    </div>
  )
};

export default SectionEcosystem;
