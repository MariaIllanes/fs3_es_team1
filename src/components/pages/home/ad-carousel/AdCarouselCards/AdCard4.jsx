import React from "react";
import "../ad.carrousel.css";
import IMG5 from "../../../../../assets/Ad-caroussel/card5/perpetualimg.webp";

const AdCard4 = () => {
  return (
    <div class="carousel-item " id="carousel-item5">
      <div class="card5AC" id="card5">
        <div class="text-container">
          <div class="subtitleAC5">
            <h4>Perpetual Futures</h4>
          </div>
          <div class="titleAC5">
            <h3>UP TO 100X LEVERAGE</h3>
          </div>
          <div class="CTA5">
            <button class="btn-main-blue theme-change light-theme" id="">
              Trade Now
            </button>
          </div>
        </div>
        <div class="caroussel-img">
          <img src={IMG5} id="base-bunny5" />
        </div>
      </div>
    </div>
  );
};

export default AdCard4;
