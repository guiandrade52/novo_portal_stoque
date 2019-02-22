import React from 'react'

// @material-ui/core
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

// Core components
//import ItemList from './itemList'

// @material-ui/styles
import { withStyles } from '@material-ui/core/styles'
import ItemList from './itemList';

const styles = theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 70,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 70,
    },
})

const Navbar = ({ classes, container, mobileOpen, handleDrawerToggle }) => (
    <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                open={false}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <ItemList classes={classes} />
            </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                <ItemList classes={classes} />
            </Drawer>
        </Hidden>
    </nav>
)

export default withStyles(styles)(Navbar)