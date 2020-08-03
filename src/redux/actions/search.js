import { SEARCH_NOVIE_START, SEARCH_NOVIE_BY_ID_START } from "../../consts/actionTypes";

// devuelve un objeto
export const searchMovie = payload => ({
    type: SEARCH_NOVIE_START,
    payload
});

export const searchMovieById = payload => ({
    type: SEARCH_NOVIE_BY_ID_START,
    payload
});