import { SEARCH_NOVIE_START } from "../../consts/actionTypes";

// devuelve un objeto
export const searchMovie = payload => ({
    type: SEARCH_NOVIE_START,
    payload
});
