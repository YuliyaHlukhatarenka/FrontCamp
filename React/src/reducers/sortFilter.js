import { CHANGE_SORT_FILTER } from '../actions/types';

export default function(state = { sortBy: 'release_date'}, action) {
  switch (action.type) {
    case CHANGE_SORT_FILTER:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
}
