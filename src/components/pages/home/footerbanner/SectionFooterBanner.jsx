import React, {useEffect, useState} from 'react';
import './FooterBannerStyle.css'
import bfRock1 from "./FooterBannerAssets/bf-rock1.webp"
import bfRock2 from "./FooterBannerAssets/bf-rock2.webp"
import bfRock3 from "./FooterBannerAssets/bf-rock3.webp"
import bfRock4 from "./FooterBannerAssets/bf-rock4.webp"
// import StandarButton from "../../../../components/pages/shared/StandardButton"
import ConnectWalletList from './ConnectWalletList';

const SectionFooterBanner = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
      setIsHidden(!isHidden);
  };

  const handleOutsideClick = (event) => {
      const hiddenFooterBanner = document.querySelector("#footer-banner-hidden-section");
      const footerBannerButton = document.getElementById("button-s11");

      if (
          !hiddenFooterBanner.contains(event.target) &&
          event.target !== footerBannerButton &&
          !isHidden
      ) {
          setIsHidden(true);
          console.log("Clicked outside. footerBannerisHidden:", isHidden);
      }
  };

  useEffect(() => {
      document.addEventListener("click", handleOutsideClick);

      return () => {
          document.removeEventListener("click", handleOutsideClick);
      };
  }, [isHidden]);
    
    return (
        <div className='footer-banner theme-change light-theme'>
            <div id='footerbanner-visible-section'>
                <img src={bfRock1} width="120" height="120" alt="animation" class="footer-banner-img" id="footer-banner1" />
                <img src={bfRock2} width="120" height="120" alt="animation" class="footer-banner-img" id="footer-banner3" />
                <div class="footer-banner-text">
                    <h2>Join Everyone's Favorite DEX Now!</h2>
                    <button id="button-s11"  />
                </div>
                <img src={bfRock3} width="120" height="94" alt="animation" class="footer-banner-img" id="footer-banner2" />
                <img src={bfRock4} width="160" height="160" alt="animation" class="foote r-banner-img" id="footer-banner4" />
                <ConnectWalletList />
            </div>

           
        </div>  
    
    )
}

export default SectionFooterBanner;

