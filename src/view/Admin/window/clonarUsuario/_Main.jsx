import React from 'react'
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { GridContainer, GridItem } from '../../../../components/Grids';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: 5,
        height: '100%'
    }
})

const ClonarUsuario = ({ classes }) => {
    return (
        <GridContainer justify="center" alignItems="center">
            <GridItem>
                <Paper className={classes.paper}>
                    Clone
                </Paper>
            </GridItem>
        </GridContainer>
    )
}

export default withStyles(styles)(ClonarUsuario)