import { get } from "lodash"; // modo para la obtencion del valor
import { SEARCH_NOVIE_START, SEARCH_NOVIE_ERROR, SEARCH_NOVIE_COMPLETE, SEARCH_NOVIE_BY_ID_START, SEARCH_NOVIE_BY_ID_ERROR, SEARCH_NOVIE_BY_ID_COMPLETE } from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_NOVIE_START:
            return { ...state, isLoading: true };
            break;
        case SEARCH_NOVIE_ERROR:
            return {...state, isLoading: false, movieResults: null };
            break;
        case SEARCH_NOVIE_COMPLETE:
            return { ...state, isLoading: false, movieResults: action.results.data };
            break;
            case SEARCH_NOVIE_BY_ID_START:
                return { ...state, isLoading: true, movieResult: null };
                break;
            case SEARCH_NOVIE_BY_ID_ERROR:
                return {...state, isLoading: false, movieResult: null };
                break;
            case SEARCH_NOVIE_BY_ID_COMPLETE:
                console.log(action)
                return { ...state, isLoading: false, movieResult: action.movie.data };
                break;
        default:
            return { ...state };
    }
}