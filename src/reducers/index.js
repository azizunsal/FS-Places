import {combineReducers} from 'redux';
import places from '../components/AutoComplete/reducers';
import venues from '../components/Venues/reducers';

export default combineReducers({
  places,
  venues
});
