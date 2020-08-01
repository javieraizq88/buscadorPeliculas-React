import { get } from "lodash"; 
import { SEARCH_NOVIE_START, SEARCH_NOVIE_ERROR, SEARCH_NOVIE_COMPLETE } from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_NOVIE_START:
            return { ...state };
            break;
        case SEARCH_NOVIE_ERROR:
            return { ...state };
            break;

        case SEARCH_NOVIE_COMPLETE:
            return { ...state };
            break;

        default:
            return { ...state };
    }
}