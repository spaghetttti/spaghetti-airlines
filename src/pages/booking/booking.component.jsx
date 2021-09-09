import React from "react";
import BookingGrid from "../../components/booking-grid/booking-grid.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFlight } from "../../redux/flights/flights.selector";

import {
    firestore,
    convertCollectionsSnapshotToMap,
  } from "../../firebase/firebase.utlls";

  
import { updateCollections } from "../../redux/flights/flights.actions";


import "./booking.styles.scss";

const BookingGridWithSpinner = WithSpinner(BookingGrid);

class BookingPage extends React.Component {
    constructor() {
    super();

    this.state = {
      loading: true,
    };
  }
  
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );

    
    
  }
  render() {
       
    return (
      <div className="booking-grid">
        <BookingGridWithSpinner isLoading={this.state.loading} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    flight: selectFlight,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);