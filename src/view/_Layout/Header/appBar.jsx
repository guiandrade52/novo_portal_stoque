import React from 'react'
import PropTypes from 'prop-types'

// @material-ui/core
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu'

//Redux
import { connect } from 'react-redux'

// @material-ui/styles
import { withStyles } from '@material-ui/core/styles'

//CoreComponents
import MenuProfile from './menuProfile'
import MenuNotify from './menuNotify'

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        paddingTop: 0
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
})

const Header = ({ classes, title }) =>
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer" className={classes.menuButton} >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
                Portal {title}
            </Typography>

            <MenuNotify />
            <MenuProfile />

        </Toolbar>
    </AppBar>

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapstateToPros = state => ({
    ...state.app
})


export default connect(mapstateToPros)(withStyles(styles)(Header))