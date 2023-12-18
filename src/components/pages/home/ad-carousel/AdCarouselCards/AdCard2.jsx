import React from "react";
import "./ad.carrousel.css";

const AdCard2 = () => {
  return (
    <div class="carousel-item" id="carousel-item2">
      <div class="card2AC" id="card2">
        <div class="text-container">
          <div class="logoCont">
            <img
              src="/assets/Ad-caroussel/bunnylogo.png"
              alt="PancakeSwap"
              id="bunny-logo2"
            />
            |
            <img
              src="/assets/Navbar/bnb.png"
              alt="PancakeSwap"
              id="bnb-logo2"
            />
          </div>
          <div class="titleAC2">
            <h3>PancakeSwap Now Live on opBNB!</h3>
          </div>
          <div class="subtitleAC2">
            <h4>Swap and provide liquidity now</h4>
          </div>
          <div class="CTA2">
            <button class="btn-sec" id="main">
              Get Started
            </button>
          </div>
        </div>
        <div class="caroussel-img">
          <img
            src="/assets/Ad-caroussel/card2/opbnb-bunny.webp"
            id="base-bunny2"
          />
        </div>
      </div>
    </div>
  );
};

export default AdCard2;
