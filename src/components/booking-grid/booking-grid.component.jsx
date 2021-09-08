import React from "react";
import OptionsItem from "../options-item/options-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFlight } from "../../redux/flights/flights.selector";

import logo from '../../assets/booking.jpg';
import "./booking-grid.styles.scss";

const BookingGrid = ({ flight }) => ({
  render() {
    return (
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
        <h1>Trending flights</h1>
        <p className='brw'>
          Browse trending flights
        </p>
      </div>
    </div>
        <div className="options-grid container">
        {flight.map((item) => (
          <OptionsItem
            key={item.id}
            title={item.country}
            sub_title={item.city}
            add_text={`Fight time : ${item.time} hours`}
          />
        ))}
        </div>
      </div>
    );
  },
});

const mapStateToProps = createStructuredSelector({
  flight: selectFlight,
});

export default connect(mapStateToProps)(BookingGrid);
