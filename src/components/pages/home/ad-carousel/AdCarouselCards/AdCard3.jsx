import React from "react";
import "./ad.carrousel.css";

const AdCard3 = () => {
  return (
    <div class="carousel-item" id="carousel-item3">
      <div class="card3AC" id="card3">
        <div class="text-container">
          <div class="logoCont">
            <img
              src="https://assets.pancakeswap.finance/web/banners/liquidStakingTitle.png"
              alt="PancakeSwap"
              id="bunny-logo3"
            />
          </div>
          <div class="titleAC3">
            <h3>Liquid Staking Integration for WBETH</h3>
          </div>
          <div class="subtitleAC3">
            <h4>ETH to WBETH conversion and earn ETH staking rewards</h4>
          </div>
          <div class="CTA3">
            <button class="btn-sec" id="">
              Get Started
            </button>
          </div>
        </div>
        <div class="caroussel-img">
          <img
            src="/assets/Ad-caroussel/card3/liquidStakingBunnyimg.png"
            id="base-bunny3"
          />
          <img
            src="/assets/Ad-caroussel/card3/alt-bunny.png"
            id="base-bunny3-alt"
          />
          <img
            src="/assets/Ad-caroussel/card3/liquidStakingBunnyBg1.png"
            id="bunny-bg3"
          />
          <img
            src="/assets/Ad-caroussel/card3/liquidStakingBunnyBg2.png"
            id="bunny-bg3-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AdCard3;
