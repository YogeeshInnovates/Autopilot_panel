import React, { useState,useEffect } from 'react';
import './Header.css'; // Make sure this CSS file is in the same folder
import { Link } from "react-router-dom";

import FirmwareFlasher from './FirmwareFlasher';
function Header({ setSelectedPage }) {
  const [autoConnect, setAutoConnect] = useState(false);
 
  const handleToggle = () => setAutoConnect(prev => !prev);
  
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());


const [selectedDevice, setSelectedDevice] = useState(null);


  // New states for modal and devices
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [connectType, setConnectType] = useState(null); // 'usb', 'bluetooth', 'dfu'
  const [devices, setDevices] = useState([]);

const [pairedDeviceAddress, setPairedDeviceAddress] = useState(null);

const [pairedDevice, setPairedDevice] = useState(null);




  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000); // updates every second

    return () => clearInterval(interval); // clean up
  }, []);





  



  


  // Fetch devices from browser APIs instead of backend
async function fetchDevices(type) {
  try {
    if (type === 'bluetooth') {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'] // Add more UUIDs if needed
      });
      setDevices([{
        name: device.name,
        address: device.id, // No address in WebBluetooth, using ID
        gatt: device.gatt
      }]);
    } 
    else if (type === 'usb') {
      const device = await navigator.usb.requestDevice({ filters: [] }); // No filters → list all
      setDevices([{
        product: device.productName,
        vendorId: device.vendorId,
        productId: device.productId,
        device
      }]);
    } 
    else if (type === 'dfu') {
      alert('DFU mode detection needs special handling.');
      setDevices([]);
    }
  } catch (error) {
    console.error(`${type} scan error:`, error);
    setDevices([]);
  }
}





async function openConnectModal(type) {
  try {
    if (type === "bluetooth") {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service']
      });
      setSelectedDevice({
        name: device.name,
        address: device.id,
        gatt: device.gatt
      });
      setPairedDevice({
        name: device.name,
        address: device.id,
        gatt: device.gatt
      });
      alert(`Paired with Bluetooth device: ${device.name}`);
    } 
    else if (type === "usb") {
      const device = await navigator.usb.requestDevice({ filters: [] });
      setSelectedDevice({
        product: device.productName,
        vendorId: device.vendorId,
        productId: device.productId,
        device
      });
      setPairedDevice({
        product: device.productName,
        vendorId: device.vendorId,
        productId: device.productId,
        device
      });
      alert(`Paired with USB device: ${device.productName}`);
    }
  } catch (error) {
    console.error(`${type} scan error:`, error);
  }
}

  function closeConnectModal() {
    setShowConnectModal(false);
    setConnectType(null);
    setDevices([]);
  }



async function handleConnectClick() {
  if (!selectedDevice) {
    alert("No device paired! Please pair a device first.");
    return;
  }

  try {
    if (connectType === 'bluetooth' || selectedDevice.gatt) {
      const server = await selectedDevice.gatt.connect();
      alert(`Connected to Bluetooth device: ${selectedDevice.name || selectedDevice.address}`);
      console.log('Bluetooth GATT Server:', server);
    } 
    else if (connectType === 'usb' || selectedDevice.device) {
      const dev = selectedDevice.device;
      await dev.open();
      if (dev.configuration === null) {
        await dev.selectConfiguration(1);
      }
      await dev.claimInterface(0);
      alert(`Connected to USB device: ${selectedDevice.product}`);
      console.log('USB Device:', dev);
    } 
    else {
      alert('Unknown device type.');
    }
  } catch (e) {
    alert("Connection failed: " + e.message);
  }
}



function pairDevice(device) {
  alert(`Pairing with ${device.product || device.address || device.name || device.type}`);
  setSelectedDevice(device); 
  setPairedDevice(device);
  closeConnectModal();
}




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





<select
  className="usb-dropdown"
  defaultValue=""
  onChange={(e) => {
    const val = e.target.value;

    if (val === "usb" || val === "bluetooth" || val === "dfu") {
      openConnectModal(val);
    } else if (val.startsWith("paired:")) {
      const addr = val.replace("paired:", "");
      handleConnectClick(addr); // directly try to connect
    }

    e.target.value = ""; // reset dropdown
  }}
>
  <option value="" disabled>
    Select your device
  </option>
  <option value="usb">Connect USB device</option>
  <option value="bluetooth">Connect Bluetooth device</option>
  <option value="dfu">Connect DFU device</option>

  {pairedDevice && (
    <option value={`paired:${pairedDevice.address}`}>
      Paired: {pairedDevice.name || pairedDevice.address}
    </option>
  )}
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









 <a
  href="#"
  className="connect-image-link"
  title="Connect"
  onClick={(e) => {
    e.preventDefault();
    handleConnectClick();
  }}
>
  <img
    src="https://res.cloudinary.com/dri6pzxgx/image/upload/v1754655810/imgbin-usb-computer-icons-electrical-cable-electrical-connector-data-connector-icon-MzdG2L2m8dCe9zFKWeZF4J82W_spzwyu-removebg-preview_fqqpcd.png"
    alt="Connect"
    className="status-image"
  />
  <p style={{ color: "black" }}>Connect</p>
   <p style={{color:"black",marginTop:"12px"}}>Show log</p>
</a>

      </div>











{/* 
{showConnectModal && (
<div className="connect-modal">

    <h4 style={{ marginTop: 0, marginBottom: '10px' }}>
      {connectType.charAt(0).toUpperCase() + connectType.slice(1)} Devices
    </h4>
    {devices.length === 0}
   








  <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '20px' }}>
  {devices.map((device, idx) => {
    const isUsbError =
      device.product?.startsWith("USB scan error:") ||
      device.name?.startsWith("USB scan error:");

    return (
      <li key={idx} style={{ marginBottom: '8px' }}>
        <strong>{device.product || device.address || device.name || 'Unknown Device'}</strong>
        <div style={{ marginTop: '4px' }}>
          {!isUsbError ? (
            <>
              <button onClick={() => pairDevice(device)} style={{ marginRight: '10px' }}>
                Pair
              </button>
              <button onClick={closeConnectModal}>Cancel</button>
            </>
          ) : null}
        </div>
      </li>
    );
  })}
</ul>

<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
  <button 
    onClick={() => fetchDevices(connectType)} 
    style={{ width: '48%' }}
  >
    Rescan
  </button>
  <button 
    onClick={closeConnectModal} 
    style={{ width: '48%' }}
  >
    Close
  </button>
</div>


  </div>
)} */}

    </header>
  );
}

export default Header;
