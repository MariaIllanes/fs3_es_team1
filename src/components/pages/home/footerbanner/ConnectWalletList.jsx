import React, { useState } from 'react';

const ConnectWalletList = () => {
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
      src: 'https://assets.pancakeswap.finance/web/wallets/mathwallet.png',
      description: 'MathWallet',
    },
    {
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-dots"
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
      ),
      description: 'More',
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
  
  const initialShowMore = false;
  const [showMore, setShowMore] = useState(initialShowMore);
  const [showIcon, setShowIcon] = useState(true);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    setShowIcon(!showIcon)
  };

  console.log("footerBannerData.length:", footerBannerData.length);
console.log("showMore:", showMore);

  return (
    <div className="cw-cards">
      {footerBannerData.slice(0, showMore ? footerBannerData.length : 8).map((item, index) => (
        <div key={index} className="cw-card theme-change light-theme">
          {typeof item.src === 'string' ? (
            <img src={item.src} alt={item.description} width="50" height="50" />
          ) : (
            item.src
          )}
          <p>{item.description}</p>
        </div>
      ))}
      {!showMore && (
        <div className="cw-card theme-change light-theme" onClick={toggleShowMore}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-dots"
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
          <p>Show more</p>
        </div>
      )}
    </div>
  );
};
export default ConnectWalletList;
