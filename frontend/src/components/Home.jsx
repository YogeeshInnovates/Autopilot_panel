import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import Documentation from './Documentation';
import Option from './Option';

import Defaultpage from './Defaultpage';
import FirmwareFlasher from './FirmwareFlasher';
import './Home.css';
function Home({selectedPage, setSelectedPage }) {
//  const [selectedPage, setSelectedPage] = useState('privacy');

  const renderRightPanel = () => {
    switch (selectedPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'defaultpage':
        return <Defaultpage />
      case 'documentation':
        return <Documentation />;
   case 'option':
        return <Option />;
        // return <Option changeLanguage={changeLanguage} />;
      case 'firmware':
  return <FirmwareFlasher />;

      default:
        return <p>Welcome! Select an option from the left.</p>;
    }
  };
  
  return (
   <div className="layout-container">
  <div className="left-panel">
    {/* Left side content goes here */}
    <div className='welcomenote' onClick={() => setSelectedPage('defaultpage')}>
 <p>Wellcome</p>
    </div>

<div className="list_of_item" >
    <p onClick={() => setSelectedPage('privacy')}>
            <img src="https://res.cloudinary.com/dri6pzxgx/image/upload/v1754671362/2800747-200_hvvypk.png" className="icon" />
            Privacy Policy
          </p>
          <p onClick={() => setSelectedPage('documentation')}>
            <img src="https://res.cloudinary.com/dri6pzxgx/image/upload/v1754671480/218-2188765_more-practice-documentation-icon-vector_zqq6mw.jpg" className="icon" />
            Documentation & Support
          </p>
          <p onClick={() => setSelectedPage('option')}>
            <img src="https://res.cloudinary.com/dri6pzxgx/image/upload/v1754671534/settings-or-gear-icon-cog-setting-vector-illustration_dcyvyx.jpg" className="icon" />
            Option
          </p>
          <p onClick={() => setSelectedPage('firmware')}>
            <img src="https://res.cloudinary.com/dri6pzxgx/image/upload/v1754671640/360_F_783941607_e1yFqbjehE3NrSEcVPtQ5lxWVFGj5ViE_biislh.jpg" className="icon" />
            Firmware Flasher
          </p>
</div>



  </div>

 <div className="right-panel">
 
  {renderRightPanel()}
</div>

</div>

  );
}

export default Home;
