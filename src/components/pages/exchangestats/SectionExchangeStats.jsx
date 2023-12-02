import React from 'react'
import ExchangeStats from './ExchangeStats'
import './SectionExchangeStats.module.scss'


export default function SectionExchangeStats() {
    return (
      <div className="exchangeStatsContainer change-theme ligth-theme">
        <h2 className='es-title change-theme ligth-theme'>CAKE <span>Figures</span></h2>
        <ExchangeStats />
      </div>
    );
  }
