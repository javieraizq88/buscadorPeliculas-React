import { get } from "lodash"; 
import { SEARCH_NOVIE_START, SEARCH_NOVIE_ERROR, SEARCH_NOVIE_COMPLETE } from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_NOVIE_START:
            return { ...state, isLoading: true };
            break;
        case SEARCH_NOVIE_ERROR:
            console.log(action);
            return { 
                ...state, isLoading: false, movies: null };
            break;
        case SEARCH_NOVIE_COMPLETE:
            return { ...state, isLoading: false, movieResults: action.results.data };
            break;
        default:
            return { ...state };
    }
}