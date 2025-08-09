

// import React from 'react';
// import './Option.css';

// function FirmwareFlasher() {
//   return (
//     <div className="main_content">
//     <div className="settings-panel">
//       <div className="section-title">Options</div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Reopen last tab on connect</span>
//       </div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Disable internet access (for metered or slow connections)</span>
//       </div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Opt out of the anonymised collection of statistics data</span>
//       </div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" defaultChecked />
//           <span className="slider"></span>
//         </label>
//         <span>Advanced CLI AutoComplete</span>
//       </div>

//  <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Enable manual connection mode</span>
//       </div>
//       {/* Add more options below as needed using the same pattern */}
//  <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Enable virtual connection mode</span>
//       </div>

//        <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Enable legacy rendering for 3D model (for low performance device)</span>
//       </div>


//       <div className="inline-setting">
//         <select>
//           <option>Auto</option>
//           <option>Enable</option>
//           <option>Disable</option>
//         </select>
//         <span>Enable dark theme</span>
//       </div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Automatically open DevTools in development mode</span>
//       </div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Show notifications for long operations</span>
//       </div>

//       <div className="inline-setting">
//         <select>
//           <option>Backup enabled</option>
//           <option>Backup disabled</option>
//         </select>
//         <span>Create a backup before flashing new target</span>
//       </div>

//       <div className="inline-setting">
//         <select>
//           <option>System Default</option>
//           <option>English</option>
//           <option>Spanish</option>
//         </select>
//         <span>Select default language</span>
//       </div>
//     </div>

// {/* Second box */}


//    <div className="settings-panel">
//       <div className="section-title">Development Setting</div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Show all serial devices ( for manufacture or development)</span>
//       </div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>Enable CLI only mode</span>
//       </div>

//     </div>

//      {/* 3rd box */}
     


//    <div className="settings-panel">
//       <div className="section-title">Show Warnings</div>

//       <div className="setting-option">
//         <label className="switch">
//           <input type="checkbox" />
//           <span className="slider"></span>
//         </label>
//         <span>
// Please make sure you backup your current configuration ('Save backup' button or via CLI if the button is disabled) before picking and applying presets. Otherwise there is no way to return to previous configuration after applying presets.</span>
//       </div>

     

//     </div>
// </div>

//   );
// }

// export default FirmwareFlasher;


import React from 'react';
import './FirmwareFlasher.css';

function FirmwareFlasher() {
  return (
    <div>
      
  <h2 style={{fontSize:"40px",color:"black"}}>
    Firmware Flasher
    {/* <a href="#">click here</a> */}
  </h2>
  <hr  style={{
    marginTop: "20px",
    border: "none",
    borderTop: "2px solid orange"
  }}></hr>
    <div className="flasher-container">
      {/* Left Panel */}
      
      <div className="flasher-left">
        <div className="option-block">
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
          <span>Enable Expert Mode</span>
        </div>

        <div className="option-block">
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
          <span>Show Release Candidates</span>
        </div>

        <select className="dropdown">
          <option>Choose a Board</option>
          <option>Board 1</option>
        </select>

        <select className="dropdown">
          <option>Choose a Firmware version</option>
          <option>Version 1</option>
        </select>
      </div>

      {/* Right Panel */}
      <div className="flasher-right-horizontal">
        {[...Array(1)].map((_, index) => (
          <div className="horizontal-box" key={index}>
            <div className="warning-header">⚠ Warning</div>
            <ul className="warning-text">
              <li><strong>Do not</strong> flash unsupported hardware</li>
              <li>Do <strong>not disconnect</strong> the board </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default FirmwareFlasher;
