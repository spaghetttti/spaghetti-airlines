import React from "react";

import "./main-grid.styles.scss";

import { ReactComponent as Logo} from '../../assets/takeoff.svg'

//import { ReactComponent as Hero } from "../../assets/4769.svg";


const MainGrid = () => (
  <div className="main-grid">
    <div className="hero container">
      <div className="hero-img">
        <img src='https://image.freepik.com/free-vector/queue-immigrants-standing-holding-luggage-waiting-departure-airport-group-tourists-with-globe-map-pointers-destination-line-background-travel-immigration-concept_74855-10142.jpg' width="100%" />
      </div>
      <div className="hero-text container">
         <h1>Next generation flying</h1>
         <p>Make your flying experience safer and more pleasant with us</p>
         <a href="/" className="button">Purchase tickets</a> 
      </div>
      
    </div>
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
            
        </div>
    </div>
  </div>
);

export default MainGrid;
