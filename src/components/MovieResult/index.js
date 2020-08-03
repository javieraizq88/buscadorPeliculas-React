import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";

import style from "./style";

const MovieResult = ({ Title, Year, Type, imdID, Poster }) => {
    const clases = style();

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
                        variant="contained">
                        Ver más
                    </Button>
                </Grid>
            </Grid>

        </Card>
    )
}

export default MovieResult;