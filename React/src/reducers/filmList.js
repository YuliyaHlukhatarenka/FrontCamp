import {
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    GET_DATA_STARTED,
  } from '../actions/types';
  
  const initialState = {
    loading: false,
    error: null,
    data: [],
    total: 0,
  };
  
  export default function filmList(state = initialState, action) {
    switch (action.type) {
      case GET_DATA_STARTED:
        return {
          ...state,
          loading: true
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload.data,
          total: action.payload.total
        };
      case GET_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  }