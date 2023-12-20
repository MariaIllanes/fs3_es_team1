import React, { useState } from 'react';

const ConnectWalletList = ({onWalletItemClick}) => {
  const footerBannerData = [
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/metamask.png',
      description: 'Metamask',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/binance.png',
      description: 'Binance Wallet',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/coinbase.png',
      description: 'Coinbase wallet',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/trust.png',
      description: 'Trust Wallet',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/walletconnect.png ',
      description: 'WalletConnect',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/opera.png ',
      description: 'Opera Wallet',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/brave.png',
      description: 'Brave Wallet',
    },
    
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/rabby.png',
      description: 'Rabby Wallet',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/mathwallet.png',
      description: 'MathWallet',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/tokenpocket.png',
      description: 'TokenPocket',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/safepal.png',
      description: 'SafePal',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/coin98.png',
      description: 'Coin98',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/blocto.png',
      description: 'Blocto',
    },
    {
      src: 'https://assets.pancakeswap.finance/web/wallets/ledger.png',
      description: 'Ledger',
    },
  ];
  
  // const initialShowMore = false;
  // const [showMore, setShowMore] = useState(initialShowMore);
  // const [showSVG, setShowSVG] = useState(true); // New state to control SVG visibility

  // const toggleShowMore = () => {
  //   setShowMore(!showMore);
  //   setShowSVG(true); // Ensure SVG is shown when toggling to initial state
  // };

  // const toggleAdditionalData = () => {
  //   setShowMore(!showMore);
  //   setShowSVG(!showSVG); // Toggle SVG visibility when showing additional data
  // };

  // const ParentComponent = () => {
  //   const [customContent, setCustomContent] = useState(null);
    
  // const handleWalletItemClick = (description) => {
  //   // Call the onWalletItemClick function from props with the clicked wallet's description
  //   onWalletItemClick(description);
  // };

  const [showMore, setShowMore] = useState(false);
  const [showSVG, setShowSVG] = useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    setShowSVG(true);
  };

  const toggleAdditionalData = () => {
    setShowMore(!showMore);
    setShowSVG(!showSVG);
  };

  const ParentComponent = () => {
    const [customContent, setCustomContent] = useState(null);

    const handleWalletItemClick = (description, index) => {
      setCustomContent({
        title: description,
        src: footerBannerData[index].src,
        button: 'Button Text', // Change this to your button text
        optionalText: 'Optional Text', // Optional text
      });
    };

    return (
      <div>
        <h3>{customContent && customContent.title}</h3>
        {customContent && <img src={customContent.src} alt={customContent.title} />}
        <p>{customContent && customContent.button}</p>
        {customContent && customContent.optionalText && <p>{customContent.optionalText}</p>}
      </div>
    );
  };


  return (
    <div className="cw-cards">
      {footerBannerData.slice(0, showMore ? footerBannerData.length : 8).map((item, index) => (
        <div key={index} className="cw-card theme-change light-theme"
        onClick={() => handleWalletItemClick(item.description)}>
          <img src={item.src} alt={item.description} width="50" height="50" />
          <p>{item.description}</p>
        </div>
      ))}
      {showMore && (
        <div className={`cw-card theme-change light-theme ${showSVG ? 'button-disspear' : ''}`} onClick={toggleAdditionalData} style={{
          display: "none"
        }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-dots theme-change light-theme"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          <p>More!!!!!</p>
        </div>
      )}

      {!showMore && (
        <div className="cw-card theme-change light-theme" onClick={toggleShowMore}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-dots theme-change light-theme"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
          <p>More</p>
        </div>
      )}

      {showMore && !showSVG && (
        <div className="cw-card theme-change light-theme">
          {footerBannerData.slice(8).map((item, index) => (
            <div key={index} className="cw-card theme-change light-theme"
            onClick={() => onWalletItemClick(item.description)}>
              <img src={item.src} alt={item.description} width="50" height="50" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  }

export default ConnectWalletList;