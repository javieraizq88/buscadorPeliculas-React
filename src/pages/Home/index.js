import React, { useState } from "react";
import { Container, Card, Grid, Typography, TextField, Button } from "@material-ui/core"

export default () => {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = e => {
        setSearchText(e.target.value);
    };

   const hanleCleanTextClick = e => {
    console.log(10);

   };
   const handleSearchTextClick = e => {
    console.log(12);
   };
    console.log(searchText);

    return (
        <Container>
            <Card>
                <Grid container>
                    <Grid>
                        <Typography>
                            Bienvenido!
                        </Typography>
                    </Grid>
                    <Grid>
                        <lavel>
                            Icono
                        </lavel>
                    </Grid>
                </Grid>
                <TextField
                    value={searchText}
                    placeholder="Buscar..."
                    onChange={handleSearchTextChange}
                />
                <Grid>
                    <Button variant="contained" onClick={hanleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained" color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>

                </Grid>
            </Card>
        </Container>

    )
}