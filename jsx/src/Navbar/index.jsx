// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import logo from "./../files/logo.png";
import location from "./../files/images/icons/default/header-location.png";
import phone from "./../files/images/icons/default/header-phone.png";
import envelop from "./../files/images/icons/default/header-email.png";
import arrowDown from "./../files/images/icons/default/arrow-down.png";
import arrowRight from "./../files/images/icons/default/arrow-entervin-hover.png";

// CREATE A FUNCTION BASED COMPONENT
const Navbar = () => {
  return (
    <div className="content-place-holder-container">
      <div className="navbar">
        <div className="navbar-container">
          <div className="header-logo">
            <a href="/" className="navbar-brand">
              <img className="navbar-image" src={logo} alt="british-flag" />
            </a>
          </div>
          <div className="navbar-text">
            <div className="business-information" href="/">
              <h3>EnglishParts.com</h3>
              <ul className="navbar-link-group">
                <li>
                  <a href="" className="dropdown-toggle">
                    Parts
                  </a>
                  <img
                    className="arrow-down"
                    src={arrowDown}
                    alt="arrow-down-icon"
                  />
                </li>
                <li>
                  <a href="/" className="dropdown-toggle">
                    About Us
                  </a>
                </li>
                <img
                  className="arrow-right"
                  src={arrowRight}
                  alt="arrow-down-icon"
                />
              </ul>
            </div>
            <div className="business-contact">
              <div className="business-contact-location">
                <img
                  className="header-location"
                  src={location}
                  alt="location-icon"
                />{" "}
                5850 Stadium Dr, Kalamazoo, MI 49009
              </div>
              <div className="business-contact-phone">
                <img className="header-phone" src={phone} alt="phone-icon" />{" "}
                866.467.1776
              </div>
              <div className="business-contact-email">
                <a href="/" className="small">
                  <img
                    className="header-envelop"
                    src={envelop}
                    alt="envelop-icon"
                  />
                  sales@englishparts.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Navbar;
