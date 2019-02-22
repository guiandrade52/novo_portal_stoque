import React, { Fragment } from 'react'

//CoreComponents
import { GridContainer } from '../../../components/Grids';
import Header from '../Header';
import Drawer from '../Drawer';

import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        width: '-webkit-fill-available',
        height: '-webkit-fill-available',
        padding: 5
    },
    root: {
        display: 'flex',
    }
})

const Main = ({ classes, children }) =>
    <Fragment>
        <div className={classes.root}>
            <Header />
            <Drawer />
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <GridContainer>
                    {children}
                </GridContainer>
            </div>
        </div>
    </Fragment>

export default withStyles(styles)(Main)