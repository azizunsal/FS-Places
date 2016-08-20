import fetch from 'isomorphic-fetch';
import Config from '../../config/Config';
import _ from 'underscore';
import * as actions from './constants';

const initialState = {
  searchText: '',
  matchedItems: []
};

function places(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_SEARCH:
      return Object.assign({}, state, {
          inProgress: true
      });
    case actions.SEARCH_SUCCEEDED:
      return Object.assign({}, state, {
          inProgress: false,
          success: true,
          searchText: action.searchText,
          matchedItems: action.matchedItems
      });
    case actions.SEARCH_FAILED:
      return Object.assign({}, state, {
          inProgress: false,
          failed: true
      });
    case actions.ITEM_ACTIVATED:
      return Object.assign({}, state, {
          activeItemEl: action.activeItemEl
      });
    case actions.ITEM_SELECTED:
      return Object.assign({}, state, {
          selectedItem: action.selectedItem,
          matchedItems: []
      });
    case actions.DISPOSE_SEARCH_RESULTS:
      return Object.assign({}, state, {
          activeItemEl: null,
          selectedItem: null,
          matchedItems: []
      });
    default: {
      return state;
    }
  }
}

export default places;
