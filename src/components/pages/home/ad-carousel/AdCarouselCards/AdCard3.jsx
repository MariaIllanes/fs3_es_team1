import "../ad.carrousel.css";
import BaseBunny3 from "../../../../../assets/Ad-caroussel/card3/liquidStakingBunnyimg.png";
import BaseBunny3Alt from "../../../../../assets/Ad-caroussel/card3/alt-bunny.png";
import BaseBunny3BG from "../../../../../assets/Ad-caroussel/card3/liquidStakingBunnyBg1.png";
import BaseBunny3BG2 from "../../../../../assets/Ad-caroussel/card3/liquidStakingBunnyBg2.png";

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
          <img src={BaseBunny3} id="base-bunny3" />
          <img src={BaseBunny3Alt} id="base-bunny3-alt" />
          <img src={BaseBunny3BG} id="bunny-bg3" />
          <img src={BaseBunny3BG2} id="bunny-bg3-2" />
        </div>
      </div>
    </div>
  );
};

export default AdCard3;
