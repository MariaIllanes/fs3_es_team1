import React from 'react';
import Farm from './EcosystemAssets/earn-farm.png'
import FarmPurple from './EcosystemAssets/earn-farm-purple.png'
import Pools from './EcosystemAssets/earn-pools.png'
import PoolsPurple from './EcosystemAssets/earn-pools-purple.png'
import Liquidity from './EcosystemAssets/earn-liquidity-staking.png'
import LiquidityPurple from './EcosystemAssets/earn-liquidity-staking-purple.png'
import Simple from './EcosystemAssets/earn-fixed-staking.png'
import SimplePurple from './EcosystemAssets/earn-fixed-staking-purple.png'
import BigEarnImg from './EcosystemAssets/earn-big-img.png'

const EarnCard = () => {
    const EarnData = [
        {
            earnURL: "https://pancakeswap.finance/farms",
            earnimageSrc: FarmPurple,
            earnHoveredImage: Farm,
            earnTitle: "Farm",
            earnDescription: "Stake LP tokens, harvest CAKE",
            earnLink: "Stake Now >",
          },
        
          {
            earnURL: "https://pancakeswap.finance/pools",
            earnimageSrc: PoolsPurple,
            earnHoveredImage: Pools,
            earnTitle: "Pools",
            earnDescription: "Stake CAKE, earn various rewards",
            earnLink: "Stake Now >",
          },
        
          {
            earnURL: "https://pancakeswap.finance/liquid-staking",
            earnimageSrc: LiquidityPurple,
            earnHoveredImage: Liquidity,
            earnTitle: "Liquid Staking",
            earnDescription: "Earn rewards while retaining asset flexibility",
            earnLink: "Stake Now >",
          },
        
          {
            earnURL: "https://pancakeswap.finance/simple-staking",
            earnimageSrc: SimplePurple,
            earnHoveredImage: Simple,
            earnTitle: "Simple Staking",
            earnDescription: "Earn rewards hassle-free with single-sided staking",
            earnLink: "Stake Now >",
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
        <div class="ecosystem-card-container theme-change light-theme" id="earn-container">
            <img src={BigEarnImg} alt="" class="ecosystem-big-img" id="earn-img" />
            <div class="earn-card-container-all theme-change light-theme">
                <h3> Earn </h3>
                <div class="earn-cards-container theme-change light-theme">
                {EarnData.map((data, index) => (
                    <a key={index} href={data.earnURL}
                    onMouseOver={(e) => handleMouseOver(e, data.earnHoveredImage)}
                    onMouseOut={(e) => handleMouseOut(e, data.earnimageSrc)}
                    >
                    <div className="earn-card">
                        <div className="earn-img">
                        <img src={data.earnimageSrc} data-hover-image={data.earnHoveredImage} alt="Trade" />
                        </div>
                        <h4>{data.earnTitle}</h4>
                        <p className="ecosystem-description">{data.earnDescription}</p>
                        <p className="ecosystem-link theme-change light-theme">{data.earnLink}</p>
                    </div>
                    </a>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default EarnCard;
