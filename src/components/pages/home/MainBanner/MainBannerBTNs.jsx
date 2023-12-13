import React from "react";
import "../../../shared/sharedComponents/sharedStyles/style.css";
import "../MainBanner/MainBannerStyle.css";
import ConnectWalletBTN from "../../../shared/sharedComponents/ConnectWalletBTN"

const MainBannerBTNs = () => {
  return (
    <>
      <ConnectWalletBTN text="Connect Wallet" />
      <button
        className="btn-sec-mb btn-expanded-mb theme-change light-theme"
        id=""
      >
        <a href="https://pancakeswap.finance/swap">Trade Now</a>
      </button>
    </>
  );
};

export default MainBannerBTNs;
