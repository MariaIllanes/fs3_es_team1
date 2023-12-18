import React from "react";
import "./ad.carrousel.css";
import AdCard1 from "./AdCarouselCards/AdCard1";
import AdCard2 from "./AdCarouselCards/AdCard2";
import AdCard3 from "./AdCarouselCards/AdCard3";
import AdCard4 from "./AdCarouselCards/AdCard4";
import AdCard5 from "./AdCarouselCards/AdCard5";

const AdCarouselInnerCards = () => {
  return (
    <div class="carousel-inner">
      <AdCard1 />
      <AdCard2 />
      <AdCard3 />
      <AdCard4 />
      <AdCard5 />
    </div>
  );
};

export default AdCarouselInnerCards;
