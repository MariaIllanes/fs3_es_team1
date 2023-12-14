import React from 'react';
import Swap from './EcosystemAssets/trade-swap.png'
import SwapPurple from './EcosystemAssets/trade-swap-purple.png'
import Liquidity from './EcosystemAssets/trade-liquidity.png'
import LiquidityPurple from './EcosystemAssets/trade-liquidity-purple.png'
import Bridge from './EcosystemAssets/trade-bridge.png'
import BridgePurple from './EcosystemAssets/trade-bridge-purple.png'
import Perpetual from './EcosystemAssets/trade-perpetual.png'
import PerpetualPurple from './EcosystemAssets/trade-perpetual-purple.png'
import Crypto from './EcosystemAssets/trade-buy-crypto.png'
import CryptoPurple from './EcosystemAssets/trade-buy-crypto-purple.png'
import BigTradeImg from './EcosystemAssets/trade-big-img.png'

const TradeCard = () => {
  const tradeCardData = [
    {
        tradeURL: "https://pancakeswap.finance/swap",
        tradeimageSrc: SwapPurple,
        tradeHoveredImage: Swap,
        tradeTitle: "Swap",
        tradeDescription: "Trade crypto instantly across multiple chains",
        tradeLink: "Trade Now >",
      },
    
      {
        tradeURL: "https://pancakeswap.finance/liquidity",
        tradeimageSrc: LiquidityPurple,
        tradeHoveredImage: Liquidity,
        tradeTitle: "Liquidity",
        tradeDescription: "Fund liquidity pools, earn trading fees",
        tradeLink: "Add Now >",
      },
    
      {
        tradeURL: "https://bridge.pancakeswap.finance/",
        tradeimageSrc: BridgePurple,
        tradeHoveredImage: Bridge,
        tradeTitle: "Bridge",
        tradeDescription: "Seamlessly transfer assets across chains",
        tradeLink: "Bridge Now >",
      },
    
      {
        tradeURL: "https://pancakeswap.finance/buy-crypto",
        tradeimageSrc: PerpetualPurple,
        tradeHoveredImage: Perpetual,
        tradeTitle: "Perpetual",
        tradeDescription: "Trade endlessly without expiration dates",
        tradeLink: "Trade Now >",
      },
    
      {
        tradeURL: "https://pancakeswap.finance/buy-crypto",
        tradeimageSrc: CryptoPurple,
        tradeHoveredImage: Crypto,
        tradeTitle: "Buy Crypto",
        tradeDescription:
          "Buy crypto with your preferred currency and payment method",
        tradeLink: "Buy Now >",
      },
  ];

  const handleMouseOver = (event, hoverImage) => {
    event.currentTarget.querySelector('img').src = hoverImage;
    event.currentTarget.querySelector('.ecosystem-link').style.color = '#1fc7d4';
  };

  const handleMouseOut = (event, normalImage) => {
    event.currentTarget.querySelector('img').src = normalImage;
    event.currentTarget.querySelector('.ecosystem-link').style.color = 'initial';
  };

  return (


    <div class="ecosystem-container">
        <div class="ecosystem-card-container theme-change light-theme">
            <img src={BigTradeImg} alt="" class="ecosystem-big-img" id="trade-img" />
            <div class="trade-card-container-all theme-change light-theme">
                <h3 >Trade</h3>
                <div class="trade-cards-container theme-change light-theme">
                {tradeCardData.map((data, index) => (
                    <a key={index} href={data.tradeURL} className="trade"
                    onMouseOver={(e) => handleMouseOver(e, data.tradeHoveredImage)}
                    onMouseOut={(e) => handleMouseOut(e, data.tradeimageSrc)}
                    >
                    <div className="trade-card">
                        <div className="trade-img">
                        <img src={data.tradeimageSrc} data-hover-image={data.tradeHoveredImage} alt="Trade" />
                        </div>
                        <h4>{data.tradeTitle}</h4>
                        <p className="ecosystem-description">{data.tradeDescription}</p>
                        <p className="ecosystem-link theme-change light-theme">{data.tradeLink}</p>
                    </div>
                    </a>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default TradeCard;
