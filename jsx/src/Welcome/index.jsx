// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE FUNCTION BASED COMPONENT
const Welcome = () => {
  return (
    <div className="breadcrumbs-container">
      <div className="container-breadcrumbs">
        <ol className="breadcrumbs">
          <li className="breadcrumbs-item">
            <a href="/" className="breadcrumbs-item-1">
              Welcome to EnglishParts.com, your home for Jaguar, MG, Triumph and
              Austin Healey Parts!
            </a>
          </li>
        </ol>
        <div className="breadcrumbs-links"></div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Welcome;
