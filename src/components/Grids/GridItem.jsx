import React from "react";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";

export default ({ children, ...resp }) =>
    <Grid item {...resp}>
        {children}
    </Grid>