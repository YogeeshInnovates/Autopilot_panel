import React from 'react';
import './Documentation.css';
function Documentation() {
return (
    <div className="flasher-container">
      {/* Left Panel */}
      <div className="flasher-left">
       <div className="section-title">Documentation / Manual</div>
<p>AutoPilot documentation is available in release notes and wiki</p>

  <hr style={{marginTop:"20px"}}></hr>
  <p>
    AutoPilot is a great resource for information, and it can be found in{" "}
    <a href="#">click here</a>
  </p>

   <hr style={{marginTop:"10px"}}></hr>
  <p>
    The release note for firmware can be read at github release page{" "}
    <a href="#">click here</a>
  </p>
      </div>

      {/* Right Panel */}
      <div className="flasher-right-horizontal">
        {[...Array(1)].map((_, index) => (
          <div className="horizontal-box" key={index}>
            <div className="warning-header">⚠ Warning</div>
            <ul className="warning-text">
              <li><strong>Do not</strong> flash unsupported hardware</li>
              <li>Do <strong>not disconnect</strong> the board</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Documentation;



