// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import body from "./../files/images/parts/tiles/body.jpg";
import brake from "./../files/images/parts/tiles/brake-system.jpg";
import cables from "./../files/images/parts/tiles/cables.jpg";
import carCare from "./../files/images/parts/tiles/car-care.jpg";
import competitionParts from "./../files/images/parts/tiles/competition-parts.jpg";
import convertible from "./../files/images/parts/tiles/tops-covers.jpg";
import cooling from "./../files/images/parts/tiles/cooling.jpg";
import electrical from "./../files/images/parts/tiles/electrical-components.jpg";
import engine from "./../files/images/parts/tiles/engine-driveline.jpg";
import exhaust from "./../files/images/parts/tiles/exhaust-emission.jpg";
import exterior from "./../files/images/parts/tiles/exterior.jpg";
import fuel from "./../files/images/parts/tiles/fuel-system.jpg";
import interior from "./../files/images/parts/tiles/interior.jpg";
import maintenance from "./../files/images/parts/tiles/maintenance.jpg";
import oil from "./../files/images/parts/tiles/oil-system.jpg";
import performance from "./../files/images/parts/tiles/performance-handling.jpg";
import suspension from "./../files/images/parts/tiles/suspension.jpg";
import transmission from "./../files/images/parts/tiles/transmission.jpg";

// 3. CREATE FUNCTION BASED COMPONENT
const Category = () => {
  return (
    <div id="content-page-body-category">
      <div id="content-page-body-category-selector">
        <div className="content-page-body-category-container">
          <div id="seo-category-title">
            <h2>Select a Category</h2>
          </div>
          <div className="content-page-category-result">
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img className="category-img" src={body} alt="body image" />
                </div>
                <div className="category-text">Body</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={brake}
                    alt="brake-system image"
                  />
                </div>
                <div className="category-text">Brake System</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={cables}
                    alt="cables image"
                  />
                </div>
                <div className="category-text">Cables</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={carCare}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">
                  Car Care, Tools, and Shop Supplies
                </div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={competitionParts}
                    alt="competition-parts image"
                  />
                </div>
                <div className="category-text">
                  Competition <br /> Parts
                </div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={convertible}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">
                  Convertible Tops, Hard Tops, and Tonneau Covers
                </div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={cooling}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Cooling System</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={electrical}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Electrical Components</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={engine}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Engine and Driveline</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={exhaust}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Exhaust and Emissions</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={exterior}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Exterior</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={fuel}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Fuel System</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={interior}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Interior</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={maintenance}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Maintenance</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={oil}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Oil System</div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={performance}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Performance & Handling </div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={suspension}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Suspension </div>
              </div>
            </a>
            <a href="/" className="seo-link-category-item">
              <div className="category-wrapper">
                <div className="image-wrapper">
                  <img
                    className="category-img"
                    src={transmission}
                    alt="car-care image"
                  />
                </div>
                <div className="category-text">Transmission</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Category;
