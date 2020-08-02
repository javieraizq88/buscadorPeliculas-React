import React from "react";
import { Container } from "@material-ui/core";
import queryString from "query-string"; //hace parse del query que viene en la url y lo transforma en un object

export default ({ location}) => {
    console.log(queryString.parse(location.search));
    return (
        <Container>
            Results
        </Container>
    )
}