// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import Showcase from "../Showcase";
import Make from "../Make";
import Category from "../Category";

// 3. CREATE FUNCTION BASED COMPONENT
const Wrapper = () => {
  return (
    <div id="content-wrapper">
      <Showcase />
      <Make />
      <Category />
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Wrapper;
