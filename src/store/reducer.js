import * as types from './actionTypes';

const initialState = {
    searchedData: '',
    PreviosSearchData: '',
    totalData: '',
    actionData: ''
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SEARCH_DATA_RESPONSE:
            state = {
                ...state,
                searchedData: action.payload.searchedData,
                PreviosSearchData: [state.searchedData, { ...action.payload.searchedData }],
                totalData: action.payload.totalData
            }
            break;
        case types.SET_SEARCH_NAME_ACTION_DATA:
            state = {
                ...state,
                actionData: action.payload
            }
            break;
        default:
            state = { ...state }
    }
    return state
}
export default Reducer