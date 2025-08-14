// src/components/Footer.js
import React,{ useContext} from 'react';
import './Footer.css';
import { DeviceContext } from './DeviceContext.jsx';

function Footer() {
  const { isConnected, deviceName, deviceLogs } = useContext(DeviceContext);
  return (
    <div className="fixed-footer">
      <span>
        {/* UPDATED: Display connection status */}
        {isConnected ? `Connected: ${deviceName}` : "Disconnected"}
      </span>
      <div className="footer-logs">
        {deviceLogs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
      <span>
        Configurator: 11.0.0 (a80b170)
      </span>
    </div>
  );
}

export default Footer;
