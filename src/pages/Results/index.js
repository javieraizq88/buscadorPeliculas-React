import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import queryString from "query-string"; //hace parse del query que viene en la url y lo transforma en un object

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selector";

export default ({ location }) => {
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    console.log(movies);

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);

        if (movieName && !movies) {
            dispatch(searchMovie({ movieName }));
        }

    });

    return (
        <Container>
            Results
        </Container>
    )
}