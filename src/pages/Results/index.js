import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import queryString from "query-string"; //hace parse del query que viene en la url y lo transforma en un object

import { searchMovie } from "../../redux/actions/search";
import { useDispatch, useSelector } from "react-redux";

export default ({ location }) => {

    const dispatch = useDispatch();
    const movies = useSelector(state => {
        console.log(state);
    })

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        dispatch(searchMovie({ movieName }));
    });

    return (
        <Container>
            Results
        </Container>
    )
}