import React from "react";
import { useCountAnimation } from "./CountingComponent";

export default function ExchangeStats() {
    useCountAnimation("count-circulating", 1000000, 224752258, 1);
    useCountAnimation("count-total-supply", 2500000, 387913445, 1);
    useCountAnimation("count-token-burn", 10000000, 1027180086, 1);

    const list = [
        {
            h3: "Circulating Supply",
            id: "count-circulating",
            number: "0",
        },
        {
            h3: "Total Supply",
            id: "count-total-supply",
            number: "0",
        },
        {
            h3: "Market cap",
            id: "",
            number: "$540 million",
        },
        {
            h3: "Token Burn",
            id: "count-token-burn",
            number: "0",
        },
        {
            h3: "Current emissions",
            id: "",
            number: "1,36/block",
        },
    ];

    return (
        <>
            <div
                className="exchange-statistics-container"
                id="exchange-counter"
            >
                {list.map((item, index) => (
                    <div className="exchange-info-container" key={index}>
                        <div className="exsElementText">
                            <h3 className="exchange-titles light-theme theme-change">
                                {item.h3}
                            </h3>
                            <p
                                className="exchange-counters light-theme theme-change"
                                id={item.id}
                            >
                                {item.number}
                            </p>
                        </div>
                        {/* <hr /> */}
                    </div>
                ))}
            </div>
        </>
    );
}
