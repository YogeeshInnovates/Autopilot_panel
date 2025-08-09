import React, { useState,useEffect } from 'react';
import './Header.css'; // Make sure this CSS file is in the same folder
import { Link } from "react-router-dom";

import FirmwareFlasher from './FirmwareFlasher';
function Header({ setSelectedPage }) {
  const [autoConnect, setAutoConnect] = useState(false);
 
  const handleToggle = () => setAutoConnect(prev => !prev);
  
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000); // updates every second

    return () => clearInterval(interval); // clean up
  }, []);

  return (
    <header className="header">
        {/* Company Icon */}
      <img
        src="https://res.cloudinary.com/dri6pzxgx/image/upload/v1754713544/ANI-20240527115815_n1uuye-removebg-preview_dhunf3.png" // replace with your logo path
        alt="Company Logo"
        className="company-logo"
      />

       <div className="header-title">

      
      
    <span style={{ color: 'orange' }}>AUTO</span>
    <span style={{ color: 'black' }}>PILOT</span>
    <div className='inide_header'>
  </div>
    <p style={{ fontSize: '12px', margin: '0', paddingTop: '0px', color: '#555' }}>
    Configurator: 11.0.0(a80B170)
  </p>
  
  {/* This second <p> will appear farther down */}
  <p style={{ fontSize: '12px', marginTop: '5vh', paddingTop: '4px', color: '#555' }}>
    {currentDateTime}
  </p>

  </div>
  


      <div className="header-controls">

         <div className="usb-wrapper">

 <div className='header_icon_position_align'>
<select className="usb-dropdown" defaultValue="">
  <option value="" disabled>
     Select your device
  </option>
        <option>--- I can't find my USB device ---</option>
        <option>---I can't fid my Bluetooth device---</option>
        <option>---I can't find my DFU device---</option>
      </select>

  <div className="autoconnect-wrapper">
  <label className="switch-container">
  <input type="checkbox" checked={autoConnect} onChange={handleToggle} />
  <span className="header-slider"></span>
  <span className="label-text">Auto-Connect</span>
</label>

    </div>
    </div>
</div>

        {/* Connect Button Image */}
        <a className="connect-image-link" 
        href="#"
        onClick={(e) => {
          e.preventDefault();
         setSelectedPage("firmware");
        }}
      >
          <img
            src="https://res.cloudinary.com/dri6pzxgx/image/upload/v1754655473/ChatGPT_Image_Aug_8_2025_05_19_26_PM_uxadbb-removebg-preview_cda4m2.png"
            alt="Connect"
            className="connect-image"
          />
          <p style={{color:"black"}}>Update Firmware</p>
      </a>



 <a href="#" className="connect-image-link" title="Connect">
          <img
            src="https://res.cloudinary.com/dri6pzxgx/image/upload/v1754655810/imgbin-usb-computer-icons-electrical-cable-electrical-connector-data-connector-icon-MzdG2L2m8dCe9zFKWeZF4J82W_spzwyu-removebg-preview_fqqpcd.png"
            alt="Connect"
            className="status-image"
          />
          <p style={{color:"black"}}>Connect</p>
           
            <p style={{color:"black",marginTop:"12px"}}>Show log</p>
        </a>

 
      </div>
    </header>
  );
}

export default Header;
