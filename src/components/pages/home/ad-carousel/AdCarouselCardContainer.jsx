import React from "react";
import "./ad.carrousel.css";
import AdCarouselInnerCards from "./AdCarouselInner";
import AdCarouselIndicators from "./AdCarouselIndicators";

const AdCarouselCardContainer = () => {
  return (
    <div class="caroussel-card">
      <div class="carousel slide" id="carouselExampleIndicators">
        <AdCarouselIndicators />
        <AdCarouselInnerCards />
      </div>
    </div>
  );
};

export default AdCarouselCardContainer;
