import React from "react";
import ExchangeStats from "./ExchangeStats";
import "./SectionExchangeStats.css";

export default function SectionExchangeStats() {
    return (
        <>
            <div className="exchange-stats2-title light-theme theme-change">
                <h2>
                    CAKE <span id="exchange-figures">Figures</span>
                </h2>
            </div>
            <div className="exchange-container light-theme theme-change">
                <ExchangeStats />
            </div>
        </>
    );
}
