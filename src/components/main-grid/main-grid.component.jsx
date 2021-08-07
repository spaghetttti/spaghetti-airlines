import React from "react";

import "./main-grid.styles.scss";

import { ReactComponent as Logo} from '../../assets/takeoff.svg'


const MainGrid = () => (
  <div className="main-grid">
    <div className="grid-container">
      <div>
        <ul>
          <li>COVID-19 travel restrictions, quarantine & testing information</li>
          <li>Face coverings required</li>
        </ul> 
        <div className="learn-more-link">Learn more &#10095;</div>
      </div>
    </div>
    <div className="grid-container">&#9992; BOOK A FLIGHT</div>
    <div className="grid-container">&#9745; CHECK IN</div>
    <div className="grid-container">&#128348; FLIGHT STATUS</div>
    <div className="adds">
      <div className="banner"></div>
    </div>

    <div className="minor-grid">
      <div className="grid-container">&#9992; BOOK A FLIGHT</div>
      <div className="grid-container">&#9745; CHECK IN</div>
      <div className="grid-container">&#128348; FLIGHT STATUS</div>
      <div className="grid-container">&#128348; FLIGHT STATUS</div>
    </div>
    <div className="main-grid">
        <div className="grid-container">
            <div className="grid-container-text">
                Flying Spaghetti Airlines <br/>
                <span>Learn about our boarding process, what's available inflight & more</span>
            </div>
            <Logo className='grid-container-logo'/>
        </div>
    </div>
  </div>
);

export default MainGrid;
