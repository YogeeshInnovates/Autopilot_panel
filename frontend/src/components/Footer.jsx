// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="fixed-footer">
      <span>
        Port utilization: D:0% U:0% | Packet error: 0 | I2C error: 0 | Cycle Time: 0 | CPU Load: 0%
      </span>
      <span>
        Configurator: 11.0.0 (a80b170)
      </span>
    </div>
  );
}

export default Footer;
