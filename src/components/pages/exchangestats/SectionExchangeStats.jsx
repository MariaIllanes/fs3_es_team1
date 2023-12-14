import React from "react";
import ExchangeStats from "./ExchangeStats";
import "./SectionExchangeStats.css";

export default function SectionExchangeStats() {
    return (
        <>
            <div className="exchange-stats2-title light-theme theme-change">
                <h2 className="exchange-cake theme-change light-theme">
                    CAKE{" "}
                    <span
                        id="exchange-figures"
                        className="exchange-figures light-theme theme-change"
                    >
                        Figures
                    </span>
                </h2>
            </div>
            <div className="exchange-container light-theme theme-change">
                <ExchangeStats />
            </div>
        </>
    );
}
