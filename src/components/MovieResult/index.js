import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";

import style from "./style";
import { withRouter } from "react-router-dom";

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
    const clases = style();

    const handleSeeMovieClick = () => {
        history.push(`/movie/${imdbID}`);
        // reenvía a la pagina de cada pelicula al hacer click al boton ver mar
    };

    return (
        <Card className={clases.cardContainer}>
            <Grid container>
                <Grid item>
                    <img
                        src={Poster}
                        alt={Title}
                        className={clases.poster} />
                </Grid>
                <Grid item className={clases.titlesContainer} > 
                    <Typography> {Title} </Typography>
                    <Typography> {Year} </Typography>
                    <Typography> {Type} </Typography>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick= {handleSeeMovieClick}>
                        VER MAS
                    </Button>
                </Grid>
            </Grid>

        </Card>
    )
}

export default withRouter(MovieResult);