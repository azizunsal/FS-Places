import fetch from 'isomorphic-fetch';
import Config from '../../config/Config';
import * as actions from './constants';
import {browserHistory} from 'react-router';

export function fetchVenues(ll) {
  console.log("Fetch venues for ll ", ll);
  return dispatch => {
    dispatch(requestVenues(ll));
    return fetch(`${Config.FourSquare.apiUrl}v2/venues/explore?ll=${ll}&client_id=${Config.FourSquare.clientId}&client_secret=${Config.FourSquare.clientSecret}
      &v=20140601&limit=${Config.FourSquare.limit}&section=${Config.FourSquare.section.topPicks}`)
      .then(response => response.json())
      .then(json => dispatch(finalizeVenueFetch(ll, json)));
  }
}

function requestVenues(ll) {
  return {
    type: actions.REQUEST_VENUES,
    ll
  }
}

function receiveVenues(ll, json) {
  console.log('Inside --receiveVenues');
  return {
    type: actions.RECEIVE_VENUES,
    ll,
    venues: json.response.groups[0].items,
    receivedAt: Date.now()
  }
}

function finalizeVenueFetch(ll, json) {
  return dispatch => {
    console.log('Inside finalizeVenueFetch..');
    dispatch(receiveVenues(ll, json));
  };
}

/**
 * First fetch tips for venue then do the routing.
 */
export function commentClicked(venueId) {
  console.log("Comment clicked for %s", venueId);
  return dispatch => {
    dispatch(requestTips(venueId));
    return dispatch(fetchTipsForVenue)
      .then( ()=> dispatch(routeToVenueComments(venueId)))
  };
}

function routeToVenueComments(venueId) {
  return dispatch => {
    browserHistory.push(`/venues/${venueId}/tips`)
  };
}


export function fetchTipsForVenue(venueId){
  console.warn("[fetchTipsForVenue] - venueId ", venueId);
  return dispatch => {
    dispatch(tipsRequested(venueId));
    return fetch(`${Config.FourSquare.apiUrl}v2/venues/${venueId}/tips/?sort=recent&v=20140601&client_id=${Config.FourSquare.clientId}&client_secret=${Config.FourSquare.clientSecret}`)
      .then(response => response.json())
      .then(json => json.response.tips.items)
      // .then(tips => dispatch(tipsReceived(tips)));
      .then(tips => dispatch(finalizeTipsFetch(venueId, tips)));
  };
}

function tipsRequested(venueId) {
  return {
    type: actions.REQUEST_TIPS,
    venueId
  }
}

function tipsReceived(venueId, tips) {
  return {
    type: actions.RECEIVE_TIPS,
    tips,
    receivedAt: Date.now()
  }
}

function finalizeTipsFetch(venueId, tips) {
  return dispatch => {
    console.log('finalizeTipsFetch for %s ', venueId, tips);
    dispatch(tipsReceived(venueId, tips));
    dispatch(routeToVenueComments(venueId));
  };
}
