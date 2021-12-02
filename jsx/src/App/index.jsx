// IMPORT STYLE
import "./styles.css";

// 1. IMPORT REACT
import React from "react";

// 2. ADDITION IMPORTS
import Header from "./../Header";
import Navbar from "../Navbar";

// 3. CREATE A FUNCTION BASED COMPONENT
const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
