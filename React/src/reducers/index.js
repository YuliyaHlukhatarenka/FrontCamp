import { combineReducers } from 'redux';

import searchString from './searchString';
import searchFilter from './searchFilter';
import sortFilter from './sortFilter';
import filmList from './filmList';

export default combineReducers({
  searchString,
  searchFilter,
  sortFilter,
  filmList
});
