import React from 'react';
import '../buycake/BuyCakeStyle.css';
import '../sharedComponents/style.css';

const LearnBTN = ({ href, text }) => {
  return (
    <button className='btn-sec theme-change light-theme'>
        <a href={href}>
            {text} <i className="fa-solid fa-share-from-square"></i>
        </a>
    </button>
  );
};

export default LearnBTN;