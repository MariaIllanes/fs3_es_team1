// import React, { useState } from 'react';

// const ConnectWalletList = () => {
//     const footerBannerImagesGrid = [
//         { 
//             src: 'https://assets.pancakeswap.finance/web/wallets/metamask.png',
//             description: 'Metamask',
//         },

//         { 
//             src: 'https://assets.pancakeswap.finance/web/wallets/binance.png',
//             description: 'Binance Wallet',
//         },

//         { 
//             src: 'https://assets.pancakeswap.finance/web/wallets/coinbase.png',
//             description: 'Coinbase',
//         },
//         { 
//             src: 'https://assets.pancakeswap.finance/web/wallets/trust.png',
//             description: 'Trust Wallet',
//             },
//         { 
//             src: 'https://assets.pancakeswap.finance/web/wallets/walletconnect.png ',
//             description: 'WalletConnect',
//         },

//         { 
//             src: 'https://assets.pancakeswap.finance/web/wallets/opera.png ',
//             description: 'Opera Wallet',
//             },   
            
//         { 
//             src: 'https://assets.pancakeswap.finance/web/wallets/brave.png',
//             description: 'Brave Wallet',
//         },

//         { 
//           src: 'https://assets.pancakeswap.finance/web/wallets/rabby.png',
//           description: 'Rabby Wallet',
//       },

//       { 
//         src: (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="icon-dots"
//               width="30"
//               height="30"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="#2c3e50"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//               <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
//               <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
//               <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
//             </svg>
//           ),
//           description: 'More',
//         },




//         { 
//             src: 'https://assets.pancakeswap.finance/web/wallets/mathwallet.png',
//             description: 'MathWallet',
//         },

//         { 
//           src: 'https://assets.pancakeswap.finance/web/wallets/tokenpocket.png',
//           description: 'TokenPocket',
//         },

//         { 
//           src: 'https://assets.pancakeswap.finance/web/wallets/safepal.png',
//           description: 'SafePal',
//         },

//         { 
//           src: 'https://assets.pancakeswap.finance/web/wallets/coin98.png',
//           description: 'Coin98',
//         },

//         { 
//         src: 'https://assets.pancakeswap.finance/web/wallets/blocto.png',
//         description: 'Blocto',
//         },  

//         { 
//           src: 'https://assets.pancakeswap.finance/web/wallets/ledger.png',
//           description: 'Ledger',
//         },

        
//     ]

//     const initialShowMore = false; // Initial state for displaying more items
//     const [footerBannerGrid, setFooterBannerGrid] = useState(footerBannerImagesGrid); // Update to use footerBannerImagesGrid instead of initialGrid
//     const [showMore, setShowMore] = useState(initialShowMore);

//     const toggleShowMore = () => {
//         setShowMore(!showMore);
//     };
//     return (
//       <div className="cw-cards">
//           {footerBannerGrid.slice(0, showMore ? footerBannerGrid.length : 5).map((item, index) => (
//                       <div key={index} className="footer-tab theme-change light-theme">
//                           {/* Conditionally render SVG or image based on item type */}
//                           {typeof item.src === 'string' ? (
//                               <img src={item.src} alt={item.description} width="50" height="50" />
//                           ) : (
//                               item.src
//                           )}
//                           <p>{item.description}</p>
//                       </div>
//                   ))}
//                   {!showMore && (
//                       <div className="cw-cards theme-change light-theme" >
//                           <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="icon-dots"
//                               width="30"
//                               height="30"
//                               viewBox="0 0 24 24"
//                               strokeWidth="1.5"
//                               stroke="#2c3e50"
//                               fill="none"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                           >
//                               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                               <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
//                               <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
//                               <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
//                           </svg>
//                           <p>Show more</p>
//                       </div>
//                   )}
//               </div>
//   );
// };

// export default ConnectWalletList;



import React, { useState } from 'react';

const ConnectWalletList = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const moreCards = (
        <span className="cw-more-cards">
            <div className="cw-card theme-change light-theme">
                <img src="https://assets.pancakeswap.finance/web/wallets/tokenpocket.png" width="50" height="50" alt="TokenPocket" />
                <p>TokenPocket</p>
            </div>
            {/* Add other more cards here */}
        </span>
    );

    return (
        <div id="cw-left-grid">
            <div className="cw-cards">
                {/* First set of cards */}
                <div className="cw-card theme-change light-theme">
                    <img src="https://assets.pancakeswap.finance/web/wallets/metamask.png" width="50" height="50" alt="Metamask" />
                    <p>Metamask</p>
                </div>
                {/* Add other cards here */}

                {/* Button to toggle more cards */}
                <div className="cw-card theme-change light-theme" id="see-more-cards-btn" onClick={toggleShowMore}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-dots" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                    <p>More</p>
                </div>

                {/* Show more cards if 'showMore' state is true */}
                {showMore ? moreCards : null}
            </div>
        </div>
    );
};

export default ConnectWalletList;



