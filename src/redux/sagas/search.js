import { put, call, takeLatest } from "redux-saga/effects";
import { SEARCH_NOVIE_START, SEARCH_NOVIE_ERROR, SEARCH_NOVIE_COMPLETE, SEARCH_NOVIE_BY_ID_COMPLETE, SEARCH_NOVIE_BY_ID_ERROR, SEARCH_NOVIE_BY_ID_START } from "../../consts/actionTypes";

import { apiCall } from "../api";

// uso el export pq lo voy a usar en otro componente
export function* searchMovie({ payload }) {
    try {
        // console.log("Accion inicial llamada");
        const results = yield call(apiCall, `&s=${payload.movieName}`, null, null, `GET`);
        yield put({ type: SEARCH_NOVIE_COMPLETE, results });
    } catch (error) {
        yield put({ type: SEARCH_NOVIE_ERROR, error });
    }
}

export function* searchMovieById ({ payload }) {
    try {
        const movie = yield call(apiCall, `&i=${payload.movieId}`, null, null, `GET`);
        yield put({ type: SEARCH_NOVIE_BY_ID_COMPLETE, movie });
    } catch (error) {
        yield put({ type: SEARCH_NOVIE_BY_ID_ERROR, error });
    }
}

export default function* search() {
    yield takeLatest(SEARCH_NOVIE_START, searchMovie);
    yield takeLatest(SEARCH_NOVIE_BY_ID_START, searchMovieById);
}