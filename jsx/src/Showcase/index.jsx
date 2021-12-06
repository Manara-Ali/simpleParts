// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import heroes from "./../files/images/parts/heroes/default.jpg";

// 3. CREATE FUNCTION BASED COMPONENT
const Showcase = () => {
  return (
    <div
      className="jumbotron-dealer"
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${heroes})`,
          width: "31.2%",
          height: "260px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: "#072847",
          width: "75%",
          height: "260px",
        }}
      >
        <div
          className="panel-heading"
          style={{
            padding: "20px 20px 10px 20px",
            width: "593.750px",
            height: "78px",
            // borderBottom: "1px solid #fff",
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontFamily: "Verdana,sans-serif",
              fontWeight: "bold",
              fontSize: "22px",
              margin: "0",
              width: "593.750px",
              height: "48px",
            }}
          >
            Premium Austin Healey, Jaguar, MG, and Triumph Parts
          </h2>
        </div>
        <div
          className="panel-body"
          style={{
            width: "682.50px",
            height: "132px",
            padding: "10px 20px 20px 20px",
            fontFamily: "'Roboto',sans-serif",
            lineHeight: "17px",
            color: "#fff",
            fontSize: "12px",
          }}
        >
          <span>
            Unmistakable style. That's what you love about your Austin Healey,
            Jaguar, MG, or Triumph. At EnglishParts.com, we carry a large
            selection of premium repair, maintenance and restoration parts for
            classic British cars. You know you can count on us because we're
            located in Kalamazoo, MI. Finding the right premium repair parts has
            always been our first priority. Our state of the art premium parts
            diagrams ensure that you're getting the perfect part the first time.
            Our experienced team knows these cars inside and out, and is here to
            help. Excellence. The first time, every time.
          </span>
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Showcase;
