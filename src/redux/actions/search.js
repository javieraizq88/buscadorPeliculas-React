import { SEARCH_NOVIE_START } from "../../consts/actionTypes";

export const searchMovie = payload => ({
    type: SEARCH_NOVIE_START,
    payload
});