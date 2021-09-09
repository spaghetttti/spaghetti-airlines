import { createSelector } from "reselect";

const selectFlights = state => state.flight;

export const selectFlight = createSelector(
    [selectFlights],
    flight => flight.collections ? flight : null
)