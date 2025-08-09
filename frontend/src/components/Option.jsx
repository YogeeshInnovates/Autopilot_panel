// import React from 'react';
// import './Option.css';

// function Option() {
//   return (
 
//     <div className="settings-panel">
//       <div className="section-title">Options</div>

//       <label className="setting-option">
//         <input type="checkbox" />
//         Reopen last tab on connect
//       </label>

//       <label className="setting-option">
//         <input type="checkbox" />
//         Disable internet access (for metered or slow connections)
//       </label>

//       <label className="setting-option">
//         <input type="checkbox" />
//         Opt out of the anonymised collection of statistics data
//       </label>

//       <label className="setting-option">
//         <input type="checkbox" defaultChecked />
//         Advanced CLI AutoComplete
//       </label>

//       <label className="setting-option">
//         <input type="checkbox" />
//         Enable manual connection mode
//       </label>

//       <label className="setting-option">
//         <input type="checkbox" />
//         Enable virtual connection mode
//       </label>

//       <label className="setting-option">
//         <input type="checkbox" />
//         Enable legacy rendering for 3D model (for low performance devices)
//       </label>

//       <div className="inline-setting">
//         <select>
//           <option>Auto</option>
//           <option>Enable</option>
//           <option>Disable</option>
//         </select>
//         <span>Enable dark theme</span>
//       </div>

//       <label className="setting-option">
//         <input type="checkbox" />
//         Automatically open DevTools in development mode
//       </label>

//       <label className="setting-option">
//         <input type="checkbox" />
//         Show notifications for long operations
//       </label>

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
   
//   );
// }

// export default Option;

import React from 'react';
import './Option.css';

function Option() {
  return (
    <div className="main_content">
    <div className="settings-panel">
      <div className="section-title">Options</div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Reopen last tab on connect</span>
      </div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Disable internet access (for metered or slow connections)</span>
      </div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Opt out of the anonymised collection of statistics data</span>
      </div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
        <span>Advanced CLI AutoComplete</span>
      </div>

 <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Enable manual connection mode</span>
      </div>
      {/* Add more options below as needed using the same pattern */}
 <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Enable virtual connection mode</span>
      </div>

       <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Enable legacy rendering for 3D model (for low performance device)</span>
      </div>


      <div className="inline-setting">
        <select>
          <option>Auto</option>
          <option>Enable</option>
          <option>Disable</option>
        </select>
        <span>Enable dark theme</span>
      </div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Automatically open DevTools in development mode</span>
      </div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Show notifications for long operations</span>
      </div>

      <div className="inline-setting">
        <select>
          <option>Backup enabled</option>
          <option>Backup disabled</option>
        </select>
        <span>Create a backup before flashing new target</span>
      </div>

      <div className="inline-setting">
        <select>
          <option>System Default</option>
          <option>English</option>
          <option>Spanish</option>
        </select>
        <span>Select default language</span>
      </div>
    </div>

{/* Second box */}


   <div className="settings-panel">
      <div className="section-title">Development Setting</div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Show all serial devices ( for manufacture or development)</span>
      </div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>Enable CLI only mode</span>
      </div>

    </div>

     {/* 3rd box */}
     


   <div className="settings-panel">
      <div className="section-title">Show Warnings</div>

      <div className="setting-option">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <span>
Please make sure you backup your current configuration ('Save backup' button or via CLI if the button is disabled) before picking and applying presets. Otherwise there is no way to return to previous configuration after applying presets.</span>
      </div>

     

    </div>
</div>

  );
}

export default Option;
