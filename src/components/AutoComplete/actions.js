import fetch from 'isomorphic-fetch';
import Config from '../../config/Config';
import * as actions from './constants';
import {browserHistory} from 'react-router';

import {fetchVenues} from '../../components/Venues/actions';

/**
 * sync actions
 */
export function requestSearch(searchText) {
  return {
    type: actions.REQUEST_SEARCH,
    searchText
  };
}

export function searchSucceeded(searchText, matchedItems) {
  return {
    type: actions.SEARCH_SUCCEEDED,
    searchText,
    matchedItems
  };
}

export function searchFailed(searchText) {
  return {
    type: actions.REQUEST_PLACE_SEARCH,
    searchText
  };
}

export function itemActivated(activeItemEl) {
  return {
    type: actions.ITEM_ACTIVATED,
    activeItemEl
  };
}

function _itemSelected(selectedItem) {
  return {
    type: actions.ITEM_SELECTED,
    selectedItem
  };
}

export function disposeSearchResults() {
  return {
    type: actions.DISPOSE_SEARCH_RESULTS
  };
}

/**
 * Async actions, via thunk middleware.
 */
 export function fetchPlaces(searchText) {
   return dispatch => {
     dispatch(requestSearch(searchText));
     return fetch(
       `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=pk.eyJ1IjoiYXppenVuc2FsIiwiYSI6ImNpcTgyMGZ2eDAwMzFocmtxbWlmcHVkejYifQ.VZoOABamLIV3Q9530qxaUw`
     )
     .then(response => response.json())
     .then(matchedItems => matchedItems.features)
     .then(matchedItems => dispatch(searchSucceeded(searchText, matchedItems)))
   };
 }

export function itemSelected(selectedItem) {
  const ll = getLL(selectedItem);
  return dispatch => {
    dispatch(_itemSelected(selectedItem));
    return dispatch(fetchVenues(ll)).then( ()=> {
      console.warn("oki venues fetched now it is time for routing!");
      dispatch(routeToVenuesList(ll));
    });
  };
}

function getLL(selectedItem) {
  const lng = selectedItem.geometry.coordinates[0];
  const lat = selectedItem.geometry.coordinates[1];

  const ll = lat + ',' + lng;
  console.log("ll ", ll);
  const encodedLL = encodeURIComponent(ll);
  console.log("Encoded ll is ", encodedLL);
  return encodedLL;
}

 function routeToVenuesList(ll) {
   return dispatch => {
     browserHistory.push(`/ll/${ll}/venues`);
   };
 }
