// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import dropdownArrow from "./../files/images/icons/default/utilitybar-arrow.png";
import cartWidgetIcon from "./../files/images/icons/default/cart-empty.png";
import magnifier from "./../files/images/icons/default/utilitybar-search.png";

// 3. CREATE A FUNCTION BASED COMPONENT
const SearchBar = () => {
  return (
    <div className="utility-bar">
      <div className="utility-bar-container">
        <div className="utility-bar-search-input">
          <img
            className="magnifying-glass-icon"
            src={magnifier}
            alt="magnifying-glass-icon"
          />
          <input
            type="text"
            className="input-bar"
            placeholder="Search by Keywords, Part Numbers or VIN"
          />
        </div>
        <button type="button" className="btn search-btn">
          Go
        </button>
        <div className="utility-bar-garage">
          <div type="text" className="utility-bar-garage-input">
            Select Your Vehicle
          </div>
        </div>
        <button type="button" className="dropdown-btn">
          <img
            className="dropdown-icon"
            src={dropdownArrow}
            alt="dropdown icon"
          />
        </button>
        <div className="utility-bar-cart">
          <button type="button" className="cart-widget-button">
            <span className="cart-widget-button-icon">
              <img src={cartWidgetIcon} alt="cart empty icon" />
            </span>
            <span className="cart-num-items">0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default SearchBar;
