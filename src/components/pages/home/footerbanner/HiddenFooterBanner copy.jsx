import React, { useState } from 'react';
import ConnectWalletList from "./ConnectWalletList copy";
import Carousel from "./Carousel";
// import CWRightContent from './CWRightContent';
// import ParentComponent from './ParentComponent';
import isDark from '../../../shared/sharedComponents/ThemeChange';
const HiddenFooterBanner = () => {
  const [cwRightContent, setCwRightContent] = useState(null); // State to hold custom content

  const handleWalletItemClick = (contentFunction) => {
    contentFunction(setCwRightContent);
  };

  

  return (
    <div className="footer-tabs theme-change light-theme">
      <div className="footer-tab-container theme-change light-theme">
        <div id="footer-tab2" className="footer-tab theme-change light-theme">
          <a href="#footer-tab2">What's a Web3 Wallet?</a>
          <div id="w3-container">
            <div
              className="footer-tab-content theme-change light-theme"
              id="footer-tab-content2"
            >
              <div className="w3-content theme-change light-theme">
                <Carousel />
              </div>
            </div>
          </div>
        </div>

        <div id="footer-tab1" className="footer-tab theme-change light-theme">
          <a href="#footer-tab1">Connect Wallet</a>
          <div className="footer-tab-content theme-change light-theme">
            <div className="footer-tab-content-cw">
              <div className="theme-change light-theme" id="cw-left">
                <h3>Connect Wallet</h3>
                <p>
                  Start by connecting with one of the wallets below. Be sure to
                  store your private keys or seed phrase securely. Never share
                  them with anyone.
                </p>
                <div id="cw-left-grid">
                  <ConnectWalletList onWalletItemClick={handleWalletItemClick} />
                </div>
              </div>
              <div className="fb-button theme-change light-theme" id="cw-right">
                {/* Display custom content in this section */}
                  {cwRightContent && (
                    <div id='cw-right-content' className='theme-change light-theme'>
                      <h3>{cwRightContent.title}</h3>
                      {cwRightContent.src && (
                        <img src={cwRightContent.src} alt={cwRightContent.title} className='cw-img'/>
                      )}
                      {cwRightContent.text && <p className='cw-text theme-change light-theme' style={{
                          backgroundColor: "unset",
                          color: isDark === "dark-theme" ? "#000" : "#b8add2",
                          textAlign: "center",
                          boxShadow: "none"
                        }}
                        >{cwRightContent.text}</p>}
                      {cwRightContent.button1 && <p style={{
                          backgroundColor: isDark === "light-theme" ? "#7a3535" : "#b8add2",
                          fontWeight: "bold",
                          padding: "10px 12px",
                          borderRadius: "10px",
                          display: "flex",
                          width: "fit-content",
                        }}>{cwRightContent.button1}</p>}
                      {cwRightContent.button2 && <p
                      style={{
                        backgroundColor: "#b8add2",
                        color: isDark === "light-theme" ? "" : "#3d2a54",
                        fontWeight: "bold",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        display: "flex",
                        width: "fit-content",
                      }}>{cwRightContent.button2}</p>}
                      
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default HiddenFooterBanner;
