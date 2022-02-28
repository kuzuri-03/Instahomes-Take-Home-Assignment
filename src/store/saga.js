import { all, takeEvery, put } from '@redux-saga/core/effects';
import * as types from './actionTypes';
import * as actions from './actions';

function* getData(action) {
    console.log("Hello Saga!");

    const json = yield fetch('https://pokeapi.co/api/v2/pokemon/').then(response => response.json(),);
    const totalData = json?.results
    const searchedName = json?.results?.find(x => x.name === action.payload.searchName);
    yield put(actions.getSearchDataResponse(searchedName ? searchedName : action.payload.searchName, totalData));

    console.log("getData", { json, totalData, searchedName })
}

function* sagaWatcher() {
    yield takeEvery(types.GET_SEARCH_DATA_REQUEST, getData);

}

function* saga() {
    yield all([sagaWatcher()])
}

export default saga