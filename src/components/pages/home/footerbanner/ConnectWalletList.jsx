import React from 'react';

const ConnectWalletList = () => {
    const footerBannerGrid = [
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
            description: 'Coinbase',
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
    ]

    const initialShowMore = false; // Initial state for displaying more items
  const [footerBannerGrid, setFooterBannerGrid] = useState(initialGrid);
  const [showMore, setShowMore] = useState(initialShowMore);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="footer-banner-hidden-section">
      <div className="footer-tabs theme-change light-theme">
        <div className="footer-tab-container">
          {footerBannerGrid.slice(0, showMore ? footerBannerGrid.length : 5).map((item, index) => (
            <div key={index} className="footer-tab theme-change light-theme">
              {/* Conditionally render SVG or image based on item type */}
              {typeof item.src === 'string' ? (
                <img src={item.src} alt={item.description} width="50" height="50" />
              ) : (
                item.src
              )}
              <p>{item.description}</p>
            </div>
          ))}
          {!showMore && (
            <div className="footer-tab theme-change light-theme" onClick={toggleShowMore}>
              {/* Toggle button for showing/hiding more items */}
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
      </div>
    </div>
  );
};
}

export default ConnectWalletList;