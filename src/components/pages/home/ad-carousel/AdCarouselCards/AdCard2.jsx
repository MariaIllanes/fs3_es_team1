import "../ad.carrousel.css";
import BunnyLogo from "../../../../../assets/Ad-caroussel/bunnylogo.png";
import BaseBunny2 from "../../../../../assets/Ad-caroussel/card2/opbnb-bunny.webp";
import BNBLogo from "../../../../../assets/bnb.png";

const AdCard2 = () => {
  return (
    <div class="carousel-item" id="carousel-item2">
      <div class="card2AC" id="card2">
        <div class="text-container">
          <div class="logoCont">
            <img src={BunnyLogo} alt="PancakeSwap" id="bunny-logo2" />
            |
            <img src={BNBLogo} alt="PancakeSwap" id="bnb-logo2" />
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
          <img src={BaseBunny2} id="base-bunny2" />
        </div>
      </div>
    </div>
  );
};

export default AdCard2;
