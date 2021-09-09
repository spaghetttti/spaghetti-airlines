import { updateCollections } from "./flights.actions";
import ShopActionTypes from "./flights.types";

const FLIGHTS_DATA = {
  flightsData: [
    {
      id: 1,
      country: "from USA to Canada",
      city: "Texas -> Toronto",
      imageUrl: "",
      time: 3,
    },
    {
      id: 2,
      country: "from Canada to Colombia",
      city: "Toronto -> Bogotá",
      imageUrl: "",
      time: 5,
    },
    {
      id: 3,
      country: "from France to Greece",
      city: "Paris -> Athens",
      imageUrl: "",
      time: 11,
    },
    {
      id: 4,
      country: "from Spain to Australia",
      city: "Madrid -> Canberra",
      imageUrl: "",
      time: 9,
    },
    {
      id: 5,
      country: "from Uzbekistan to UK",
      city: "Bukhara -> Manchester",
      imageUrl: "",
      time: 18,
    },
    {
      id: 6,
      country: "from China to Germany",
      city: "Hong-Kong -> Munich",
      imageUrl: "  ",
      time: 3,
    },
  ],
};

const flightsReducer = (state = FLIGHTS_DATA, action) => {
  switch (action.type) {
    case (ShopActionTypes.UPDATE_COLLECTIONS):
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default flightsReducer;
