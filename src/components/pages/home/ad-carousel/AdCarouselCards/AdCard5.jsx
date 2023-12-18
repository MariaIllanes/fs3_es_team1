import React from "react";
import "./ad.carrousel.css";

const AdCard5 = () => {
  return (
    <div class="carousel-item" id="carousel-item6">
      <div class="card6AC" id="card6">
        <div class="text-container">
          <div class="subtitleAC6">
            <h4>Trade to earn rewards</h4>
          </div>
          <div class="titleAC6">
            <h3>10% trading rebates to be earned</h3>
          </div>
          <div class="CTA6">
            <button class="btn-main-blue theme-change light-theme" id="">
              Trade Now
            </button>
            <button class="btn-main-white" id="">
              Learn more
            </button>
          </div>
        </div>
        <div class="caroussel-img">
          <img
            src="/assets/Ad-caroussel/card6/trading-reward-bunny.webp"
            id="base-bunny6"
          />
          <img src="/assets/Ad-caroussel/card6/butterbg.webp" id="bunny-bg6" />
          <img
            src="/assets/Ad-caroussel/card6/love-butterbg.webp"
            id="bunny-bg6-2"
          />
          <img
            src="/assets/Ad-caroussel/card6/butterbg.webp"
            id="bunny-bg6-3"
          />
        </div>
      </div>
    </div>
  );
};

export default AdCard5;
