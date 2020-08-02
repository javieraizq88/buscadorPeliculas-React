import React, { useState } from "react";
import { Container, Card, Grid, Typography, TextField, Button } from "@material-ui/core"
import styles from "./style";

export default ({ history }) => {
    console.log(history);
    const [searchText, setSearchText] = useState("");
    const clases = styles();

    const handleSearchTextChange = e => {
        setSearchText(e.target.value);
    };

    const hanleCleanTextClick = e => {
        // console.log("hice click en limpiar");
        setSearchText("");

    };
    const handleSearchTextClick = e => {
        // console.log("hice click en buscar");
        history.push(`/results?movieName=${searchText}`);
        // me manda al link donde esta la pelicula que busco
    };
    console.log(searchText);

    return (
        <Container className={clases.container}>
            <Card className={clases.cardContainer}>
                <Grid container className={clases.titleGridContainer}>
                    <Grid>
                        <Typography className={clases.title}>
                            Bienvenido!
                        </Typography>
                    </Grid>
                    {/* <Grid>
                            <MovieIcon className={clases.movieIcon} />
                    </Grid> */}
                </Grid>
                <TextField
                    value={searchText}
                    placeholder="Buscar..."
                    onChange={handleSearchTextChange}
                    className={clases.textFieldSearch}
                />
                <Grid className={clases.buttonsContainer}>
                    <Button variant="contained" onClick={hanleCleanTextClick}>Limpiar</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSearchTextClick}
                        className={clases.searchButton}
                    >
                        Buscar
                        </Button>

                </Grid>
            </Card>
        </Container>

    )
}