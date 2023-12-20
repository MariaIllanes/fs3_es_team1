import React, { useState } from 'react';
import ConnectWalletList from './ConnectWalletList';

const CWRightContent = () => {
  const [customContent, setCustomContent] = useState(null);

  const customContentData = [
    {
      title: 'Metamask is not installed',
      src: 'metamaskImg',
      button: 'Install',
      description: 'Metamask', // Add a description field corresponding to wallet
    },
    // Other custom content objects
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
      {customContent ? (
        customContent // Show the custom content if available
      ) : (
        <div>
          <h4>Haven't got a wallet yet?</h4>
          {/* Your default content */}
        </div>
      )}
      <ConnectWalletList onWalletItemClick={handleWalletItemClick} />
    </div>
  );
};

export default CWRightContent;

