// IMPORT STYLE
import "./styles.css";

// 1. IMPORT REACT
import React from "react";

// 2. ADDITION IMPORTS
import Header from "./../Header";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";

// 3. CREATE A FUNCTION BASED COMPONENT
const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <SearchBar />
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
