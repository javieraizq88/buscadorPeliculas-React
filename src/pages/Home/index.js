import React, { useState } from "react";
import { Container, Card, Grid, Typography, TextField, Button } from "@material-ui/core"
import styles from "./style";

export default () => {
    const [searchText, setSearchText] = useState("");
    const clases = styles();

    

    const handleSearchTextChange = e => {
        setSearchText(e.target.value);
    };

    const hanleCleanTextClick = e => {
        console.log("hice click en limpiar");

    };
    const handleSearchTextClick = e => {
        console.log("hice click en buscar");
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
                    <Grid>
                        <lavel>Icono</lavel>
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