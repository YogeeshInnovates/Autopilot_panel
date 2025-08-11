import React from 'react';
import './Option.css';

function Defaultpage() {
  return (
    <div className="main_content">
      
      {/* Box 1 — Firmware & Hardware */}
      <div className="settings-panel">
        <h3>Firmware & Hardware</h3>
        <p>
          Our application supports all compatible hardware.  
          Check the firmware section for detailed compatibility lists and tools.
        </p>

        <ul>
          <li><a href="#">Download Firmware Viewer</a></li>
          <li><a href="#">Download TX Lua Scripts</a></li>
          <li>Firmware source code available <a href="#">here</a></li>
        </ul>

        <p>
          For older devices using CP210x USB to Serial chips:  
          Latest drivers can be downloaded <a href="#">here</a>.
        </p>
      </div>

      {/* Box 2 — Contributing */}
      <div className="settings-panel">
        <h3>Contributing</h3>
        <p>You can help improve this project in many ways:</p>
        <ul>
          <li>Update content on our <a href="#">Wiki</a> or answer questions in forums.</li>
          <li>Contribute code for new features, bug fixes, or improvements.</li>
          <li>Test pre-release versions and provide feedback.</li>
          <li>Help others by responding to issues in our <a href="#">Issue Tracker</a>.</li>
          <li>Translate the application into your language.</li>
        </ul>
      </div>

      {/* Box 3 — Open Source / Donations */}
      <div className="settings-panel">
        <h3>Open Source / Donation Notice</h3>
        <p>
          This software is <strong>open source</strong> and provided for free,  
          without warranty. Your support helps keep development active.
        </p>
        <button className="donate-button">Donate</button>
        <p>
          You can also become a regular supporter via  
          <a href="#"> Patreon</a> and get early access to new features.
        </p>
      </div>

    </div>
  );
}

export default Defaultpage;
