import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CircularProgress } from "@material-ui/core";
import queryString from "query-string"; //hace parse del query que viene en la url y lo transforma en un object
import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selector";
import MovieResult from "../../components/MovieResult";

export default ({ location }) => {
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));
    const isLoading = useSelector(state => isSearchLoading(state));
    console.log(movies);

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);

        if (movieName && !movies) {
            dispatch(searchMovie({ movieName }));
        }

    });

    const renderMovies = () => {
        if (movies) {
            return movies.map((value, index) => <MovieResult key={index} {...value} />);
        } else if (isLoading) {
            return <CircularProgress size={100} color="primary" />
        }
        // si movies existe, devuelve componentes de MovieResult
        // movies.map para recorrer el arreglo 
        // {...value} le paso las propiedades del objeto
        return <div></div>;
    };

    return (
        <Container>
            {renderMovies()}
        </Container>
    )
}