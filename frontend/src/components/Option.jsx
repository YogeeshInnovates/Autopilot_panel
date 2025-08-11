
import React, { useState, useEffect,useRef } from 'react';
import './Option.css';

function Option() {
  const [settings, setSettings] = useState({
    reopenLastTab: false,
    disableInternet: false,
    optOutStats: false,
    advancedCLI: true,
    manualConnection: false,
    virtualConnection: false,
    legacyRendering: false,
    darkTheme: "Auto", // Auto, on,off
    devTools: false,
    showNotifications: false,
    backup: "Backup enabled",
    language: "System Default",
    showSerialDevices: false,
    cliOnlyMode: false,
    showWarnings: false
  });
  const mainContentRef = useRef(null);

  // Apply dark theme when setting changes
  // useEffect(() => {
  //   if (settings.darkTheme === "Enable") {
  //     document.body.classList.add("dark-theme");
  //   } else if (settings.darkTheme === "Disable") {
  //     document.body.classList.remove("dark-theme");
  //   } else {
  //     // Auto: Remove custom theme and rely on system preference
  //     document.body.classList.remove("dark-theme");
  //   }
  // }, [settings.darkTheme]);
useEffect(() => {
    if (mainContentRef.current) {
      if (settings.darkTheme === "on") {
        // mainContentRef.current.classList.add("dark-theme");
        document.body.classList.add("dark-theme");
      } else {
        // Disable or Auto
        //mainContentRef.current.classList.remove("dark-theme");
        document.body.classList.remove("dark-theme");
      }
    }
  }, [settings.darkTheme]);
  // Generic toggle for checkboxes
  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[[key]] }));
  };

  // Handle select changes
  const handleSelectChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="main_content" ref={mainContentRef}>
      <div className="settings-panel">
        <div className="section-title">Options</div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.reopenLastTab}
              onChange={() => toggleSetting("reopenLastTab")}
            />
            <span className="slider"></span>
          </label>
          <span>Reopen last tab on connect</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.disableInternet}
              onChange={() => toggleSetting("disableInternet")}
            />
            <span className="slider"></span>
          </label>
          <span>Disable internet access (for metered or slow connections)</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.optOutStats}
              onChange={() => toggleSetting("optOutStats")}
            />
            <span className="slider"></span>
          </label>
          <span>Opt out of the anonymised collection of statistics data</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.advancedCLI}
              onChange={() => toggleSetting("advancedCLI")}
            />
            <span className="slider"></span>
          </label>
          <span>Advanced CLI AutoComplete</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.manualConnection}
              onChange={() => toggleSetting("manualConnection")}
            />
            <span className="slider"></span>
          </label>
          <span>Enable manual connection mode</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.virtualConnection}
              onChange={() => toggleSetting("virtualConnection")}
            />
            <span className="slider"></span>
          </label>
          <span>Enable virtual connection mode</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.legacyRendering}
              onChange={() => toggleSetting("legacyRendering")}
            />
            <span className="slider"></span>
          </label>
          <span>Enable legacy rendering for 3D model (for low performance devices)</span>
        </div>

        <div className="inline-setting">
          <select
            value={settings.darkTheme}
            onChange={(e) => handleSelectChange("darkTheme", e.target.value)}
          >
            <option>Auto</option>
            <option>on</option>
            <option>off</option>
          </select>
          <span>Enable dark theme</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.devTools}
              onChange={() => toggleSetting("devTools")}
            />
            <span className="slider"></span>
          </label>
          <span>Automatically open DevTools in development mode</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.showNotifications}
              onChange={() => toggleSetting("showNotifications")}
            />
            <span className="slider"></span>
          </label>
          <span>Show notifications for long operations</span>
        </div>

        <div className="inline-setting">
          <select
            value={settings.backup}
            onChange={(e) => handleSelectChange("backup", e.target.value)}
          >
            <option>Backup enabled</option>
            <option>Backup disabled</option>
          </select>
          <span>Create a backup before flashing new target</span>
        </div>

        <div className="inline-setting">
          <select
            value={settings.language}
            onChange={(e) => handleSelectChange("language", e.target.value)}
          >
            <option>System Default</option>
            <option>English</option>
            <option>Spanish</option>
          </select>
          <span>Select default language</span>
        </div>
      </div>

      {/* Second Box */}
      <div className="settings-panel">
        <div className="section-title">Development Setting</div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.showSerialDevices}
              onChange={() => toggleSetting("showSerialDevices")}
            />
            <span className="slider"></span>
          </label>
          <span>Show all serial devices (for manufacture or development)</span>
        </div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.cliOnlyMode}
              onChange={() => toggleSetting("cliOnlyMode")}
            />
            <span className="slider"></span>
          </label>
          <span>Enable CLI only mode</span>
        </div>
      </div>

      {/* Third Box */}
      <div className="settings-panel">
        <div className="section-title">Show Warnings</div>

        <div className="setting-option">
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.showWarnings}
              onChange={() => toggleSetting("showWarnings")}
            />
            <span className="slider"></span>
          </label>
          <span>
            Please make sure you backup your current configuration ('Save backup' button or via CLI if the button is disabled) before picking and applying presets. Otherwise there is no way to return to previous configuration after applying presets.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Option;
