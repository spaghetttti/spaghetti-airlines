import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import flightsReducer from "./flights/flights.reducer";

export default combineReducers({
    user: userReducer,
    flight: flightsReducer
});
