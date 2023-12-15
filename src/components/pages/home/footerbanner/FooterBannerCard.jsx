import React from 'react';

const FooterBannerCard = ({ cardTitle, cardDescription, cardImg, cardClass }) => {
  return (
    <>
      <div className={`footer-card-slide ${cardClass}`}>
        <h3>{cardTitle}</h3>
        <img src={cardImg} width="250" height="250" alt="Card Image" />
        <p className="theme-change light-theme">{cardDescription}</p>
      </div>
    </>
  );
};

export default FooterBannerCard;
