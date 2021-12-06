// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import Showcase from "../Showcase";

// 3. CREATE FUNCTION BASED COMPONENT
const Wrapper = () => {
  return (
    <div
      id="content-wrapper"
      style={{
        marginLeft: "-8px",
        marginRight: "-8px",
      }}
    >
      <Showcase />
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Wrapper;
