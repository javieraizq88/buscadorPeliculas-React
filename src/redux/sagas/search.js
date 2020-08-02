import { put, call, takeLatest } from "redux-saga/effects";
import { SEARCH_NOVIE_START, SEARCH_NOVIE_ERROR, SEARCH_NOVIE_COMPLETE } from "../../consts/actionTypes";

export function* searchMovie({ payload }) {
    try {
        console.log("Accion inicial llamada");
    } catch (error) {

    }
}

export default function* search() {
    yield takeLatest(SEARCH_NOVIE_START, searchMovie);
}