// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import austin from "./../files/images/parts/tiles/austin-healey.png";
import jaguar from "./../files/images/parts/tiles/jaguar.png";
import mg from "./../files/images/parts/tiles/mg.png";
import triumph from "./../files/images/parts/tiles/triumph.png";

// 3. CREATE FUNCTION BASED COMPONENT
const Make = () => {
  return (
    <div id="content-page-body">
      <div id="content-page-body-vehicle-selector">
        <div className="content-page-body-container">
          <div id="seo-title">
            <h2>Select a Make</h2>
          </div>
          <div
            className="content-page-body-result"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a href="/" className="seo-link-item">
              <img className="austin-img" src={austin} alt="austin healey" />
              <div className="austin">Austin Healey</div>
            </a>
            <a href="/" className="seo-link-item">
              <img className="austin-img" src={jaguar} alt="jaguar" />
              <div className="austin">Jaguar</div>
            </a>
            <a href="/" className="seo-link-item">
              <img className="austin-img" src={mg} alt="mg" />
              <div className="austin">MG</div>
            </a>
            <a href="/" className="seo-link-item">
              <img className="austin-img" src={triumph} alt="triumph" />
              <div className="austin">Triumph</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Make;
