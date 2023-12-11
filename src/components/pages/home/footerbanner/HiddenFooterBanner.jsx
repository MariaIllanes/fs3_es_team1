import React from 'react';

const HiddenFooterBanner = () => {
    return (
        <div id="footer-banner-hidden-section">
            <div class="footer-tabs theme-change light-theme">
                <div class="footer-tab-container">
                    <div id="footer-tab2" class="footer-tab theme-change light-theme">
                      <a href="#footer-tab2">What's a Web3 Wallet?</a>
                      <div id="w3-container">
                        <div class="footer-tab-content theme-change light-theme" id="footer-tab-content2">
                          <div class="w3-content">
                                <div class="footer-slideshow-container theme-change light-theme">
                                    <div class="footer-card-slide footer-card1">
                                    <h3>Your first step in the DeFi world</h3>
                                    <img src="https://cdn.pancakeswap.com/wallets/wallet_intro.png" width="250" height="250" />
                                    <p class="theme-change light-theme">A Web3 Wallet allows you to send and receive crypto assets like bitcoin, BNB, ETH, NFTs and much more.</p>
                                    </div>
                                    
                                    <div class="footer-card-slide footer-card2 theme-change light-theme" style="display: none;">
                                    <h3>Login using a wallet connection </h3>
                                    <img src="https://cdn.pancakeswap.com/wallets/world_lock.png"  width="250" height="250" />
                                    <p class="theme-change light-theme">Instead of setting up new accounts and passwords for every website, simply set up your wallet in one go, and connect it to your favorite DApps.</p>
                                    </div>
                                </div>
          
                            <div class="footer-slideshow-buttons theme-change light-theme">
                              <button class="w3-slide-button" id="w3-slide-button1" onclick="showCard(1)"></button>
                              <button class="w3-slide-button" id="w3-slide-button2" onclick="showCard(2)"></button>
                            </div>
          
                            <div class="fb-button" id="fb-w3-button"> 
                                <p>
                                  <a href="https://docs.pancakeswap.finance/get-started/wallet-guide">Learn How to Connect
                                      <svg xmlns="http://www.w3.org/2000/svg" id="fb-icon-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#eee" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                
                <div id="footer-tab1" class="footer-tab theme-change light-theme">
                    <a href="#footer-tab1">Connect Wallet</a>
                    <div class="footer-tab-content theme-change light-theme">
                      <div class="footer-tab-content-cw">
                        <div class="theme-change light-theme" id="cw-left">
                          <div class="theme-change light-theme" id="cw-left-text">
                            <h3>Connect Wallet</h3>
                            <p>Start by connecting with one of the wallets below. Be sure to store your private 
                              keys or seed phrase securely. Never share them with anyone.</p>
                          </div>
                          <div id="cw-left-grid">
                            <div class="cw-cards">
                              
                              <div class="cw-card theme-change light-theme">
                                <img src="https://assets.pancakeswap.finance/web/wallets/metamask.png" width="50" height="50">
                                <p>Metamask</p>
                              </div>
      
                              <div class="cw-card theme-change light-theme">
                                  <img src="https://assets.pancakeswap.finance/web/wallets/binance.png" width="50" height="50">
                                  <p>Binance Wallet</p>
                              </div>
      
                              <div class="cw-card theme-change light-theme">
                                  <img src="https://assets.pancakeswap.finance/web/wallets/coinbase.png" width="50" height="50">
                                  <p>Coinbase Wallet</p>
                              </div>
      
                              <div class="cw-card theme-change light-theme">
                                  <img src="https://assets.pancakeswap.finance/web/wallets/trust.png" width="50" height="50">
                                  <p>Trust Wallet</p>
                              </div>
      
                              <div class="cw-card theme-change light-theme">
                                <img src="https://assets.pancakeswap.finance/web/wallets/walletconnect.png" width="50" height="50">
                                <p>WalletConnect</p>
                              </div>
      
                              <div class="cw-card theme-change light-theme">
                                  <img src="https://assets.pancakeswap.finance/web/wallets/opera.png" width="50" height="50">
                                  <p>Opera Wallet</p>
                              </div>
      
                              <div class="cw-card theme-change light-theme">
                                  <img src="https://assets.pancakeswap.finance/web/wallets/brave.png" width="50" height="50">
                                  <p>Brave Wallet</p>
                              </div>
      
                              <div class="cw-card theme-change light-theme">
                                  <img src="https://assets.pancakeswap.finance/web/wallets/mathwallet.png" width="50" height="50">
                                  <p>MathWallet</p>
                              </div>
      
                              <div class="cw-card theme-change light-theme" id="see-more-cards-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-dots" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                  <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                </svg>
                                <p>More</p>
                              </div>
      
                              <span class="cw-more-cards">
                                <div class="cw-card theme-change light-theme">
                                  <img src="https://assets.pancakeswap.finance/web/wallets/tokenpocket.png"width="50" height="50">
                                  <p>TokenPocket</p>
                                </div>
                                <div class="cw-card theme-change light-theme">
                                  <img src="https://assets.pancakeswap.finance/web/wallets/safepal.png" width="50" height="50">
                                  <p>SafePal</p>
                                </div>
        
                                <div class="cw-card theme-change light-theme">
                                    <img src="https://assets.pancakeswap.finance/web/wallets/coin98.png" width="50" height="50">
                                    <p>Coin98</p>
                                </div>
        
                                <div class="cw-card theme-change light-theme">
                                    <img src="https://assets.pancakeswap.finance/web/wallets/blocto.png" width="50" height="50">
                                    <p>Blocto</p>
                                </div>
        
                                <div class="cw-card theme-change light-theme">
                                    <img src="https://assets.pancakeswap.finance/web/wallets/ledger.png"width="50" height="50">
                                    <p>Ledger</p>
                                </div>
                              </span>
      
                              
                            </div>
                          </div>
                        </div>
                        <div class="fb-button theme-change light-theme" id="cw-right"> 
                          <h4>Haven't got a wallet yet?</h4>
                          <img id="fb-cw-img" src="https://cdn.pancakeswap.com/wallets/wallet_intro.png" width="180" height="160">
                          <p>
                            <a href="https://docs.pancakeswap.finance/get-started/wallet-guide">Learn How to Connect
                                <svg xmlns="http://www.w3.org/2000/svg" id="fb-icon-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#eee" fill="none" stroke-linecap="round" stroke-linejoin="round">
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