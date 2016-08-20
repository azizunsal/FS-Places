import fetch from 'isomorphic-fetch';
import Config from '../../config/Config';
import _ from 'underscore';
import * as actions from './constants';

const initialState = {
    venues: [],
    tips: []
};

const venues = (state = initialState, action) => {
  switch(action.type) {
    case actions.REQUEST_VENUES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case actions.RECEIVE_VENUES:
      return Object.assign({}, state, {
          isFetching: true,
          venues: action.venues
      });
    case actions.REQUEST_TIPS:
      const selectedVenueItem =  _.filter(state.venues, (venue) => venue.venue.id === action.venueId);
      const selectedVenue = (selectedVenueItem && selectedVenueItem.length > 0 ) ? selectedVenueItem[0].venue : null;
      return Object.assign({}, state, {
          isFetching: true,
          selectedVenue: selectedVenue
      });
      break;
    case actions.RECEIVE_TIPS:
      return Object.assign({}, state, {
          isFetching: false,
          tips: action.tips
      });
      break;
    default: {
      return state;
    }
  }
};

export default venues;
