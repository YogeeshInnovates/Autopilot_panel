import './FirmwareFlasher.css';
import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import { DeviceContext } from './DeviceContext';
const API_BASE_URL = 'http://localhost:8000';
function FirmwareFlasher() {
   const { isConnected, deviceName, addLog } = useContext(DeviceContext);
   const [expertMode, setExpertMode] = useState(false);
   const[reboot,setReboot]=useState(true);
   const [releaseCandidates,setReleaseCandidates]=useState(false);
   const [boards, setBoards] = useState([]);
  const [versions, setVersions] = useState([]);
  const [options, setOptions] = useState([]);

  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const boardsRes = await axios.get(`${API_BASE_URL}/boards`);
        console.log("Boards fetched:", boardsRes.data); 
        setBoards(boardsRes.data.map((b) => ({ id: b, name: b })));

        const optionsRes = await axios.get(`${API_BASE_URL}/options`);
        setOptions(optionsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Failed to load firmware data. Is the backend running?');
      }
    };
    fetchInitialData();
  }, []);
  useEffect(() => {
    if (!selectedBoard) { 
      setVersions([]);
      setSelectedVersion('');
      return;
    }

  const fetchVersions = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/versions/${selectedBoard}`);
        console.log(`Versions for ${selectedBoard}:`, res.data);
        setVersions(res.data);
        setSelectedVersion('');
      } catch (error) {
        console.error('Error fetching versions:', error);
        setVersions([]);
        setSelectedVersion('');
        setMessage('No firmware versions found for this board.');
      }
    };

    fetchVersions();
  }, [selectedBoard]);

  const handleBuildFirmware = async () => {
    // UPDATED: Check for connection before flashing
    if (!isConnected) {
      setMessage("Please connect a device before flashing firmware.");
      addLog("Flashing failed: No device connected.");
      return;
    }
    if (!selectedBoard || !selectedVersion) {
      setMessage("Please select a flight controller and a firmware version.");
      return;
    }

    // UPDATED: Log to global state
    addLog(`Flashing firmware for ${deviceName} with version ${selectedVersion}`);
    setMessage("Firmware flash initiated successfully.");

    // Simulate a delay for the flashing process
    await new Promise(resolve => setTimeout(resolve, 3000));

    // UPDATED: Log completion to global state
    addLog("Firmware flash completed successfully.");
    setMessage("Firmware flash completed successfully. Device will now reboot.");
  };

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
           <input 
            type="checkbox" 
            checked={expertMode}
            onChange={() => setExpertMode(!expertMode)} 
          />
            <span className="slider" />
          </label>
          <span>Enable Expert Mode</span>
        </div>



        <div className="option-block">
          <label className="toggle-switch">
            <input type="checkbox" checked={releaseCandidates} onChange={()=>setReleaseCandidates(!releaseCandidates)} />
            <span className="slider" />
          </label>
          <span>Show Release Candidates</span>
        </div>

{releaseCandidates && (

  <select className="dropdown">
          <option>Release</option>
          <option>Release & Release Candidate</option>
           <option>Development</option>
        </select>

)}



        <select className="dropdown" value={selectedBoard} onChange={e => setSelectedBoard(e.target.value)}>
          <option value="">Choose a Board</option>
          {boards.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
        
        </select>

        <select className="dropdown" value={selectedVersion} onChange={(e) => setSelectedVersion(e.target.value)}
          disabled={!selectedBoard}>
          <option>Choose a Firmware version</option>
          {versions.map((v)=> (
              <option key={v} value={v}>{v}</option>
            ))}
          {/* <option>Version 1</option> */}
        </select>
        <div className="options-checkbox-container">
            <h3>Firmware Options</h3>
            {options.map(o => (
              <div key={o.id} className="option-block-checkbox">
                <input
                  type="checkbox"
                  id={`option-${o.id}`}
                  value={o.name}
                  checked={selectedOptions.includes(o.name)}
                  onChange={e => {
                    if (e.target.checked) {
                      setSelectedOptions([...selectedOptions, o.name]);
                    } else {
                      setSelectedOptions(selectedOptions.filter(opt => opt !== o.name));
                    }
                  }}
                />
                <label htmlFor={`option-${o.id}`}>{o.name}</label>
              </div>
            ))}
          </div>


        
    {expertMode && (
      <>
       <div className="option-block">
          <label className="toggle-switch">
           <input 
            type="checkbox" 
            checked={reboot}
            onChange={() => setReboot(!reboot)} 
          />
            <span className="slider" />
          </label>
          <span>No reboot sequence</span>
        </div>


{reboot &&(
    <div className="option-block">
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
          <span>Flash on Connect</span>
        </div>
)}
      

        
        <div className="option-block">
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
          <span>Full chip erase</span>
        </div>

          <div className="option-block">
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
          <span>Manual baud rate</span>
        </div>
        <select className="dropdownbaud">
          <option>19200</option>
          <option>19200</option>
            <option>28800</option>
              <option>38400</option>
                <option>57600</option>
                  <option>115200</option>
                    <option>230400</option>
                       <option>256000</option>
                          <option>460800</option>
                             <option>921600</option>
        </select>
        </>
      )}
      
     <button onClick={handleBuildFirmware} className="flash-firmware-button" disabled={!isConnected}>
            Flash Firmware
          </button>
          {message && <p className="flash-message">{message}</p>}
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
