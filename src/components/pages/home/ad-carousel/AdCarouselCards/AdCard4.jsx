import React from "react";
import "../ad.carrousel.css";
import IMG5 from "../../../../../assets/Ad-caroussel/card5/perpetualimg.webp";

const AdCard4 = () => {
  return (
    <div className="carousel-item " id="carousel-item5">
      <div className="card5AC" id="card5">
        <div className="text-container">
          <div className="subtitleAC5">
            <h4>Perpetual Futures</h4>
          </div>
          <div className="titleAC5">
            <h3>UP TO 100X LEVERAGE</h3>
          </div>
          <div className="CTA5">
            <button className="btn-main-blue theme-change light-theme" id="">
              Trade Now
            </button>
          </div>
        </div>
        <div className="caroussel-img">
          <img src={IMG5} id="base-bunny5" />
        </div>
      </div>
    </div>
  );
};

export default AdCard4;
