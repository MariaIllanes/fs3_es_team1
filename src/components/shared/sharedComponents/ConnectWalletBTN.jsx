import React from "react";
import "../sharedComponents/sharedStyles/style.css";
import "../../pages/home/MainBanner/MainBannerStyle.css";

const ConnectWalletBTN = ({ text }) => {
  return (
    <button
      className="btn-main-blue btn-expanded theme-change light-theme"
      id="btn-banner"
    >
      {text}
    </button>
  );
};

export default ConnectWalletBTN;
