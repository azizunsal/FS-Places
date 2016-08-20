import React from 'react';
import {connect} from 'react-redux';
import VenueListItem from '../Venues/components/VenuesList/components/VenueListItem/index';
import style from './style.scss';

const VenueDetails = (props) => (
  <div className="venueDetails">
    <h1>{props.selectedVenue.name}<small> Rating {props.selectedVenue.rating}</small></h1>
    Toplam {props.selectedVenue.stats.tipCount} yorum var!
  </div>
);

const mapStateToProps = (state) => {
const {selectedVenue} = state.venues;
  return {
    selectedVenue
  }
}

export default connect(mapStateToProps)(VenueDetails);
