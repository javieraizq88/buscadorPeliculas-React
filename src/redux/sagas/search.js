import { put, call, takeLatest } from "redux-saga";
import { SEARCH_NOVIE_START } from "../../consts/actionTypes";

export function* searchMovie({ payload}) {
    try {
 
    } catch (error) {

    } 
}

export default function* search() {
    yield takeLatest(SEARCH_NOVIE_START, searchMovie);
}