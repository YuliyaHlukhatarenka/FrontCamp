import { CHANGE_SEARCH_STRING } from '../actions/types';

export default function(state = { searchString: ''}, action) {
  switch (action.type) {
    case CHANGE_SEARCH_STRING:
      return { searchString: action.payload };
    default:
      return state;
  }
}
