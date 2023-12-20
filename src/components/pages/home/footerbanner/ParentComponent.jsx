// ParentComponent.jsx
import React, { useState } from 'react';
// import CWRightContent from './CWRightContent';
// import ConnectWalletList from './ConnectWalletList';
import metamaskImg from './FooterBannerAssets/bf-rock1.webp';

const ParentComponent = () => {

  const defaultContent = () => {
    <div>
      <p>ho</p>
    </div>
  }
  const [customContent, setCustomContent] = useState(defaultContent());

  const customContentData = [
    {
      title: 'Metamask is not installed',
      src: metamaskImg,
      button: 'Install',
      description: 'Metamask', // Add a description field corresponding to wallet
    },
    {
      title: 'Metamask is not installed',
      src: metamaskImg,
      button: 'Install',
      description: 'Metamask', // Add a description field corresponding to wallet
    },{
      title: 'Metamask is not installed',
      src: metamaskImg,
      button: 'Install',
      description: 'Metamask', // Add a description field corresponding to wallet
    },{
      title: 'Metamask is not installed',
      src: metamaskImg,
      button: 'Install',
      description: 'Metamask', // Add a description field corresponding to wallet
    },{
      title: 'Metamask is not installed',
      src: metamaskImg,
      button: 'Install',
      description: 'Metamask', // Add a description field corresponding to wallet
    },{
      title: 'Metamask is not installed',
      src: metamaskImg,
      button: 'Install',
      description: 'Metamask', // Add a description field corresponding to wallet
    },{
      title: 'Metamask is not installed',
      src: metamaskImg,
      button: 'Install',
      description: 'Metamask', // Add a description field corresponding to wallet
    },
  ];

  const customizedContent = (description) => {
    const index = customContentData.findIndex((content) => content.description === description);
    if (index !== -1) {
      const selectedContent = customContentData[index];
      return (
        <div>
          <h3>{selectedContent.title}</h3>
          <img src={selectedContent.src} alt={selectedContent.title} />
          <button>{selectedContent.button}</button>
        </div>
      );


    }
    return null;
  };

  const handleWalletItemClick = (description) => {
    const content = customizedContent(description);
    setCustomContent(content);
  };

  return (
    <div>
      {customContent}
    </div>
  );
};

export default ParentComponent;
