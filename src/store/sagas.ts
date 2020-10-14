import { call, put, takeLatest, all } from "redux-saga/effects";
import { Entry, MainActionsTypes } from "../types"
import Actions from "./actions";
import Api from "./api"

function* fetchEntries() {
    try {
        let response = yield call(Api.getEntries);
        // ONLY ENTRIES WITH releaseYear >= 2010
        response = response.data.entries.filter((item: Entry) => item.releaseYear ? item.releaseYear >= 2010 : true)
        yield put(Actions.getEntriesSucceeded(response))
    } catch (err) {
        yield put(Actions.getEntriesFailed(err))
    }
}

function* AscendingSortSeries() {
    yield put(Actions.ascendingSortSeriesBy("title"))
}

function* AscendingSortMovies() {
    yield put(Actions.ascendingSortMoviesBy("title"))
}

function* actionWatcher() {
    yield takeLatest(MainActionsTypes.GET_ENTRIES_REQUESTED, fetchEntries)
    yield takeLatest(MainActionsTypes.GET_SERIES_OF_ENTRIES, AscendingSortSeries)
    yield takeLatest(MainActionsTypes.GET_MOVIES_OF_ENTRIES, AscendingSortMovies)
}

export default function* rootSaga() {
    yield all([
      actionWatcher(),
    ]);
  }