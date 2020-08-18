import React, { useEffect } from "react";
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { movieResult as movieResultSelector } from "../../redux/selector";
import { searchMovieById } from "../../redux/actions/search";

export default ({ match }) => {
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));

    // console.log(movieResult);
    useEffect(() => {
        const movieId = match.params.id;

        // si la pelicula no existe, entra a hacer un dispatch
        // o si la peliucula ya existe y el resultado del ID es diferente al nuevo q estoy tbn va a entrar al dispatch
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) {
            dispatch(searchMovieById({ movieId }));
        }
    });

    if (!movieResult) {
        return <CircularProgress size={100} color="primary" />
    }

    return (
        <Container >
            <Typography variant="h3">
                {movieResult.Title}
            </Typography>
            <br/>
            <img
                src={movieResult.Poster}
                alt={movieResult.Title}
            />
            <br/>
            <br/>
            <Typography>
                <strong> Actores: </strong> {movieResult.Actors}
            </Typography>
            <Typography>
                <strong> Idioma: </strong> {movieResult.Language}
            </Typography>
            <Typography>
                <strong> Año: </strong> {movieResult.Year}
            </Typography>
            <Typography>
                <strong> Género: </strong> {movieResult.Genre}
            </Typography>
            <Typography>
                <strong> País: </strong> {movieResult.Country}
            </Typography>
            <Typography>
                <strong> Duración: </strong> {movieResult.Runtime}
            </Typography>
            <Typography>
                <strong> Actores: </strong> {movieResult.Actors}
            </Typography>
            <Typography>
                <strong> Premios: </strong> {movieResult.Awards}
            </Typography>
            <Typography>
                <strong> Sinopsis: </strong> {movieResult.Plot}
            </Typography>
        </Container>
    )

}