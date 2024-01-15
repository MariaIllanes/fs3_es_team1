// ------------------------------------CODIGO MAS SIMPLE

// import React, { useState } from 'react';
// import './PurpleBanner.css';

// const SectionPurpleBanner = () => {
//     const [isVisible, setIsVisible] = useState(true);

//     const handleClose = () => {
//         setIsVisible(false);
//     };

//     return (
//         <>
//             {isVisible && (
//                 <div className="purpleBanner">
//                     <div className="purpleFirst">
//                         <img
//                             src="https://pancakeswap.finance/images/decorations/phishing-warning-bunny.webp"
//                             id="purple-banner-img"
//                             alt="Phishing warning"
//                         />
//                         <p>
//                             <span>PHISHING WARNING:</span> please make sure you're visiting{' '}
//                             <span> https://pancakeswap.finance </span> - check the URL carefully.
//                         </p>
//                     </div>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="icon icon-tabler icon-tabler-x"
//                         width="25"
//                         height="25"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="#fff"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         onClick={handleClose}
//                     >
//                         <path d="M0 0h24v24H0z" fill="none" />
//                         <path d="M18 6l-12 12" />
//                         <path d="M6 6l12 12" />
//                     </svg>
//                 </div>
//             )}
//         </>
//     );
// };

// export default SectionPurpleBanner;




// ---------------------ME FUNCIONABA HACE DOS SEMANAS

// import React, { useState, useEffect } from 'react';
// import './PurpleBanner.css';

// const PurpleBanner = () => {
//     const [isClosed, setIsClosed] = useState(false);

//     useEffect(() => {
//         const isClosedStored = localStorage.getItem('isPurpleBannerClosed');
//         setIsClosed(isClosedStored === 'false');
//     }, []);

//     const closeBanner = () => {
//         setIsClosed(true);
//         localStorage.setItem('isPurpleBannerClosed', 'true');
//     };

//     if (isClosed) {
//         return null;
//     }

//     return (
//         <div className="purpleBanner">
//             <div className="purpleFirst">
//                 <img src="https://pancakeswap.finance/images/decorations/phishing-warning-bunny.webp" id="purple-banner-img" />
//                 <p>
//                     <span>PHISHING WARNING:</span> please make sure you're visiting{' '}
//                     <span> https://pancakeswap.finance </span> - check the URL carefully.{' '}
//                 </p>
//             </div>
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-x"
//                 width="25"
//                 height="25"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="#fff"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 onClick={closeBanner}
//             >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M18 6l-12 12" />
//                 <path d="M6 6l12 12" />
//             </svg>
//         </div>
//     );
// };

// export default PurpleBanner;





// -----------------COPIADO DE SEC11 

// import React, { useState } from 'react';
// import './PurpleBanner.css';

// const SectionPurpleBanner = () => {
//     const [isClosed, setIsClosed] = useState(false);

//     const toggleClosed = () => {
//         setIsClosed(!isClosed);
//     };

//     return (
//         <div className={`purpleBanner ${isClosed ? 'hiddenBanner' : ''}`}>
//             <div className="purpleFirst">
//                 <img
//                     src="https://pancakeswap.finance/images/decorations/phishing-warning-bunny.webp"
//                     id="purple-banner-img"
//                     alt="Phishing warning"
//                 />
//                 <p>
//                     <span>PHISHING WARNING:</span> please make sure you're visiting{' '}
//                     <span> https://pancakeswap.finance </span> - check the URL carefully.{' '}
//                 </p>
//             </div>
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-x"
//                 width="25"
//                 height="25"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="#fff"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 onClick={toggleClosed}
//             >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M18 6l-12 12" />
//                 <path d="M6 6l12 12" />
//             </svg>
//         </div>
//     );
// };

// export default SectionPurpleBanner;








import React, { useState } from 'react';
import './PurpleBanner.css';

const PurpleBanner = () => {
    const [isClosed, setIsClosed] = useState(false);

    const closeBanner = () => {
        setIsClosed(!isClosed);
    };

return (
    <div>
      {isClosed ? null : (
        <div className="purpleBanner">
          <div className="purpleFirst">
            <img
              src="https://pancakeswap.finance/images/decorations/phishing-warning-bunny.webp"
              id="purple-banner-img"
            />
            <p>
              <span>PHISHING WARNING:</span> please make sure you're visiting{" "}
              <span> https://pancakeswap.finance </span> - check the URL
              carefully.{" "}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={closeBanner}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default PurpleBanner;
