import React from "react";

import "./main-grid.styles.scss";

const MainGrid = () => (
  <div className="main-grid">
    <div className="hero container">
      <div className="hero-img">
        <img
          src="https://image.freepik.com/free-vector/queue-immigrants-standing-holding-luggage-waiting-departure-airport-group-tourists-with-globe-map-pointers-destination-line-background-travel-immigration-concept_74855-10142.jpg"
          width="100%"
          alt='image of people in line'
        />
      </div>
      <div className="hero-text container">
        <h1>Next generation flying</h1>
        <p>Make your flying experience safer and more pleasant with us</p>
        <a href="/" className="button">
          Purchase tickets
        </a>
      </div>
    </div>
    <div className="options container">
      <div className="options-atc">
        <ul>
          <li>
            COVID-19 travel restrictions, quarantine & testing information
          </li>
          <li>Face coverings required</li>
        </ul>
        <div className="learn-more-link">
          <a>Learn more &#10095;</a>
        </div>
      </div>
      <div className="options-grid container">
        <div className="options-item box">
          <div className="options-title"><a href='/'>&#9992;  BOOK A FLIGHT</a></div>
          <div className="options-desc">Our modern booking technique will help your dumb ass</div>
        </div>
        <div className="options-item box">
          <div className="options-title"><a href='/'>&#9745;  CHECK IN</a></div>
          <div className="options-desc">Our modern checking in technique will help you, retard</div>
        </div>
        <div className="options-item box">
          <div className="options-title"><a href='/'>&#128348;  FLIGHT STATUS</a></div>
          <div className="options-desc">Our modern flight status checking technique will help your, idiot</div>
        </div>
        <div className="options-item box">
          <div className="options-title"><a href='/'>&#128065;  LOOK UP RESERVATIONS</a></div>
          <div className="options-desc">Our modern reservation technique will do everything for you, moron</div>
        </div>
        <div className="img-box">
          <img className='center-fit' src='https://mobile.southwest.com/content/mkt/images/hero_shots/mHpHero1-ng-plane-20210803.jpg' alt='commercial'/>
        </div>
      </div>
    </div>
  </div>
);

export default MainGrid;
