import React, { useState } from "react";
import { Container, Card, Grid, Typography, TextField, Button } from "@material-ui/core"
import styles from "./style";

export default ({ history }) => {
   
    // se importa el useState como searchText y se pone como valor del TextField
   // searchText es el State del input
    const [searchText, setSearchText] = useState("");
    const clases = styles();

    const handleSearchTextChange = e => {
        setSearchText(e.target.value);
        // cambia el valor del setSearchText cada vez que se escribe en el TextField (q es el setState)
    }; 

    const hanleCleanTextClick = e => {
        setSearchText("");
        // hace setState y vacia el state
    };

    const handleSearchTextClick = e => {
        history.push(`/results?movieName=${searchText}`);
        // me manda al link donde esta la pelicula que busco
    };

    return (
        <Container className={clases.container}>
            <Card className={clases.cardContainer}>
                <Grid container className={clases.titleGridContainer}>
                    <Grid>
                        <h3>
                            Buscador de peliculas y series
                        </h3>
                    </Grid>
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