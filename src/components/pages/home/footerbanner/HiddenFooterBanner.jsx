import React from 'react';
import ConnectWalletList from './ConnectWalletList';
// import FooterBannerCard from './FooterBannerCard'
// import Card1Img from 'https://cdn.pancakeswap.com/wallets/wallet_intro.png'
// import Card2Img from 'https://cdn.pancakeswap.com/wallets/world_lock.png'
// import Carousel from './Carousel';
const HiddenFooterBanner = () => {
    return (
        <div className="footer-tabs theme-change light-theme">
                <div className="footer-tab-container">
                    <div id="footer-tab2" className="footer-tab theme-change light-theme">
                    <a className="#footer-tab2">What's a Web3 Wallet?</a>
                        <div id="w3-container">
                          <div className="footer-tab-content theme-change light-theme" id="footer-tab-content2">
                            <div className="w3-content">
                                {/* <Carousel>
                                    <div className="footer-slideshow-container theme-change light-theme">
                                        <FooterBannerCard cardClass={"footer-card1"} cardTitle={"Your first step in the DeFi world"} cardImg={Card1Img} 
                                        cardDescription={"A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more."}/>
                                        <FooterBannerCard cardClass={"footer-card2"} style={display=none} cardTitle={"Login using a wallet connection"} cardImg={Card2Img} 
                                        cardDescription={"A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more."}/>
                                    </div>
                                </Carousel> */}

            
                                    {/* <div className="footer-slideshow-buttons theme-change light-theme">
                                    <button className="w3-slide-button" id="w3-slide-button1" onclick="showCard(1)"></button>
                                    <button className="w3-slide-button" id="w3-slide-button2" onclick="showCard(2)"></button>
                                    </div>*/}
                                {/* <div className="fb-button" id="fb-w3-button"> 
                                    <p>
                                    <a href="https://docs.pancakeswap.finance/get-started/wallet-guide">Learn How to Connect
                                        <svg xmlns="http://www.w3.org/2000/svg" id="fb-icon-link" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#eee" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                            <path d="M11 13l9 -9" />
                                            <path d="M15 4h5v5" />
                                        </svg>
                                    </a>
                                    </p>
                                </div> */}
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
                          <h4>Haven't got a wallet yet?</h4>
                          <img id="fb-cw-img" src="https://cdn.pancakeswap.com/wallets/wallet_intro.png" width="180" height="160" />
                          <p>
                            <a href="https://docs.pancakeswap.finance/get-started/wallet-guide">Learn How to Connect
                                <svg xmlns="http://www.w3.org/2000/svg" id="fb-icon-link" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#eee" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                  <path d="M11 13l9 -9" />
                                  <path d="M15 4h5v5" />
                                </svg>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div> 
                </div> 
            </div>
            
            
        </div>
    )
}

export default HiddenFooterBanner;