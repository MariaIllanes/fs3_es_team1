import React from 'react';
import ConnectWalletList from './ConnectWalletList';
import Carousel from './Carousel';
import customizedContent from './CWRightContent'


const HiddenFooterBanner = () => {
    return (
        <div className="footer-tabs theme-change light-theme">
                <div className="footer-tab-container theme-change light-theme">
                    <div id="footer-tab2" className="footer-tab theme-change light-theme">
                    <a href="#footer-tab2">What's a Web3 Wallet?</a>
                        <div id="w3-container">
                          <div className="footer-tab-content theme-change light-theme" id="footer-tab-content2">
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
                          <div className="theme-change light-theme" id="cw-left-text">
                            <h3>Connect Wallet</h3>
                            <p>Start by connecting with one of the wallets below. Be sure to store your private 
                              keys or seed phrase securely. Never share them with anyone.</p>
                          </div>
                          <div id="cw-left-grid">
                            <ConnectWalletList />
                          </div>
                        </div>
                        <div className="fb-button theme-change light-theme" id="cw-right"> 
                          <customizedContent/>
                          {/* <ConnectWalletList /> */}
                        </div>
                      </div>
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default HiddenFooterBanner;