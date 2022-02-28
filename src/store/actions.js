import * as types from './actionTypes';

export const getSearchDataRequest = (data) => {
    console.log("data", data)
    return {
        type: types.GET_SEARCH_DATA_REQUEST,
        payload: data
    }
};

export const getSearchDataResponse = (searchedData, totalData) => ({
    type: types.GET_SEARCH_DATA_RESPONSE,
    payload: { searchedData, totalData }
});

export const setSearchNameActionData = (data) => ({
    type: types.SET_SEARCH_NAME_ACTION_DATA,
    payload: data
});