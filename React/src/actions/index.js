import {
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    GET_DATA_STARTED,
    CHANGE_SEARCH_STRING,
    CHANGE_SEARCH_FILTER,
    CHANGE_SORT_FILTER,
    SHOW_FILMS
} from './types';

import dataService from '../services/getDataService';

export const getData = ( searchStr, searchBy, sortBy ) => {
    console.log('here');
    return dispatch => {
        dispatch(getDataStarted());
        dispatch(changeSearchString(searchStr));

        const articles = dataService.getData(searchStr, searchBy, sortBy);
        articles
            .then(res => {
                setTimeout(() => {
                    dispatch(getDataSuccess(res));
                }, 2500);
            })
            .catch(err => {
                dispatch(getDataFailure(err.message));
            });
    }

};

const getDataSuccess = data => ({
    type: GET_DATA_SUCCESS,
    payload: data
});

const getDataStarted = () => ({
    type: GET_DATA_STARTED
});

const getDataFailure = error => ({
    type: GET_DATA_FAILURE,
    payload: error
});

const changeSearchString = value => ({
    type: CHANGE_SEARCH_STRING,
    payload: value
});

export const changeSearchFilter = value => ({
    type: CHANGE_SEARCH_FILTER,
    payload: value
});

export const showFilms = () => ({
    type: SHOW_FILMS,
});

export const changeSortFilter = value => ({
    type: CHANGE_SORT_FILTER,
    payload: value
});