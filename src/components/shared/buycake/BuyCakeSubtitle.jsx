import React from 'react';
import '../buycake/BuyCakeStyle.css';
import '../sharedComponents/style.css';

const BuyCakeSubtitle = ({text})=> {
return (
    <div className="buy-subtitle">
    <h2>
      {text}
    </h2>
  </div>
)}

export default BuyCakeSubtitle