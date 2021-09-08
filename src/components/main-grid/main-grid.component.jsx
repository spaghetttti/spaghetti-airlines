import React from "react";
import OptionsItem from "../options-item/options-item.component";

import "./main-grid.styles.scss";
import logo from '../../assets/heroimg.jpg';

const MainGrid = () => (
  <div className="main-grid">
    <div className="hero container">
      <div className="hero-img">
        <img
          src={logo}
          width="100%"
          alt="image of people in line"
        />
      </div>
      <div className="hero-text container">
        <h1>Next generation flying</h1>
        <p>Make your flying experience safer and more pleasant with us</p>
        <a href="/booking" className="button">
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
          <a href="#">Learn more &#10095;</a>
        </div>
      </div>
      <div className="options-grid container">
        <div className="options-item box">
          <div className="options-title">
            <a href="/booking">&#9992; BOOK A FLIGHT</a>
          </div>
          <div className="options-desc">
            Our modern booking technique will help you
          </div>
        </div>
        <div className="options-item box">
          <div className="options-title">
            <a href="/">&#9745; CHECK IN</a>
          </div>
          <div className="options-desc">
            Our modern checking in technique will help you
          </div>
        </div>
        <div className="options-item box">
          <div className="options-title">
            <a href="/booking">&#128348; FLIGHT STATUS</a>
          </div>
          <div className="options-desc">
            Our modern flight status checking technique will help you
          </div>
        </div>
        <div className="options-item box">
          <div className="options-title">
            <a href="/">&#128065; LOOK UP RESERVATIONS</a>
          </div>
          <div className="options-desc">
            Our modern reservation technique will do everything for you
          </div>
        </div>
      </div>
      <div className="img-box">
        <img
          className="center-fit "
          src="https://mobile.southwest.com/content/mkt/images/hero_shots/mHpHero1-ng-plane-20210803.jpg"
          alt="commercial"
        />
        <img
          className="center-fit "
          src="https://mobile.southwest.com/content/mkt/images/hero_shots/routing-aHpHero-chase-plus-wave4-40k-dining-compressed2.jpg"
          alt=""
        />
      </div>
      <div className="options-grid container">
        <div className="options-item box">
          <div className="options-title">
            <a href="#">Flying SpaghettiAirlines</a>
          </div>
          <div className="options-desc">
            Learn about our boarding process, what's available inflight & more
          </div>
        </div>
        <div className="options-item box">
          <div className="options-title">
            <a href="#">Start Earning Points</a>
          </div>
          <div className="options-desc">
            Sign up for a Rapid Rewards account and earn points on your next
            flight
          </div>
        </div>
        <div className="options-item box">
          <div className="options-title">
            <a href="#">Book a car with us</a>
          </div>
          <div className="options-desc">
            Great selection, unbeatable rates & Rapid Rewards
          </div>
        </div>
        <div className="options-item box">
          <div className="options-title">
            <a href="#">Special Offers</a>
          </div>
          <div className="options-desc">
            Vacation Special Offers and Travel Deals
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainGrid;
