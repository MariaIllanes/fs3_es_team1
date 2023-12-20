import React, { useState } from 'react';
import ConnectWalletList from './ConnectWalletList';

const CWRightContent = () => {
  const [customContent, setCustomContent] = useState(null);
 
  setCustomContent(walletContent);

  const handleWalletItemClick = (description, index) => {
    const content = customizedContent(description);
    setCustomContent(content || defaultContent);
  };

  return (
    <div>
      {customContent || defaultContent}
      <ConnectWalletList onWalletItemClick={handleWalletItemClick} />
    </div>
  );
};

export default CWRightContent;
