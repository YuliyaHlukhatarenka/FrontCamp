import { CHANGE_SEARCH_FILTER } from '../actions/types';

export default function(state = {searchBy: 'title'}, action) {
  switch (action.type) {
    case CHANGE_SEARCH_FILTER:
      return { searchBy: action.payload };
    default:
      return state;
  }
}
