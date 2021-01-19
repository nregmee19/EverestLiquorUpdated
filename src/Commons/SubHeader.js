import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import GoogleMap from "../Resources/Images/GoogleMapEdited.png"
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

export default function SubHeader() {
    function handleAddress() {
        window.open("https://www.google.com/maps/place/Everest+Liquor/@30.2617623,-97.7269071,19z/data=!4m6!3m5!1s0x8644b5b8c9b437bd:0x459f9aab3a2db721!4b1!8m2!3d30.2617623!4d-97.7263599")
    }

    return (
        <Grid container spacing={1} justify={"space-evenly"}>
            <Grid item xs={12} sm={5}>
                <Box bgcolor="primary.main" color="primary.contrastText" p={22}>
                    <Typography variant={"h4"}>Address:</Typography>
                    <Typography  variant="subtitle2" >
                        1601 E 5th Street Unit #130
                    </Typography>
                    <Typography variant="subtitle2" >
                        Austin, TX 78702
                    </Typography>
                    <Typography  variant="subtitle2" >
                        ph: (737) 203-8975
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box bgcolor="primary.main" color="secondary.contrastText" p={1}>
                    <img src={GoogleMap} onClick={handleAddress} />
                </Box>
            </Grid>

        </Grid>
    );
}
