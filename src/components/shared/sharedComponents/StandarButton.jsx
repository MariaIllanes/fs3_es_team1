import React from 'react';

const StandardButton = ({ href, text }) => {
  return (
    <div className='general-button'>
        <a href={href}>
            <p>{text}</p>
        </a>
    </div>
  );
};

export default StandardButton;