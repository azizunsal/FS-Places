import React from 'react';
import Config from '../../config/Config';
import VenuesList from './components/VenuesList/index';
// import {fetchVenues} from './actions';
import {connect} from 'react-redux';

class VenuesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  sort(venues) {
    const sortedVenues = venues.sort(function(a, b) {
      if (a.venue.rating>b.venue.rating) return 1;
      if (a.venue.rating<b.venue.rating) return -1;
      return 0;
    }).reverse();

    return sortedVenues;
  }

  render() {
    console.log("[VenuesContainer] render - venues :", this.props.venues.venues);
    return(
      <VenuesList
        className={this.props.className}
        venues={this.props.venues}
        ll={this.props.ll}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log("[VenuesContainer] - mapStateToProps:: state : %O, ownProps : %O", state, ownProps);
  const {selectedVenue, venues, selectedItem} = state;
  const {ll} = ownProps;

  return {
    selectedItem, ll, selectedVenue, venues: venues.venues
  };
}

export default connect(mapStateToProps)(VenuesContainer);
