import React from "react";
import './MainBannerStyle.css'
import MainBannerIMG from "./MainBannerIMG";
import MainBannerText from "./MainBannerText";
import "../../../shared/sharedComponents/sharedStyles/style.css";

const MainBannerComponent = () => {
  return (
    <section className="main-banner theme-change light-theme">
      <div className="mbcontainer">
       <MainBannerText />
        <MainBannerIMG />
      </div>
      <div className="diagonal-color theme-change light-theme" />
    </section>
  );
};

export default MainBannerComponent;


// Ahora mismo el degradado del bg solo se ve en dark-theme