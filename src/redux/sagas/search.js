import { put, call, takeLatest } from "redux-saga/effects";
import { SEARCH_NOVIE_START, SEARCH_NOVIE_ERROR, SEARCH_NOVIE_COMPLETE } from "../../consts/actionTypes";

import { apiCall } from "../api";

export function* searchMovie({ payload }) {
    try {
        // console.log("Accion inicial llamada");
        const results = yield call(apiCall, `&s=${payload.movieName}`, null, null, `GET`);
        yield put({ type: SEARCH_NOVIE_COMPLETE, results });
    } catch (error) {
        yield put({ type: SEARCH_NOVIE_ERROR, error });
    }
}

export default function* search() {
    yield takeLatest(SEARCH_NOVIE_START, searchMovie);
}