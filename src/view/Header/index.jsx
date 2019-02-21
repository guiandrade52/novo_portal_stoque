import React, { Component } from 'react'
import PropTypes from 'prop-types'

// @material-ui/core
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'

// @material-ui/icons
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'

//Redux
import { connect } from 'react-redux'

// @material-ui/styles
import { withStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core';

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

class Header extends Component {

    render() {
        const { classes, fetching, handleDrawerToggle, handleMenu, auth, anchorEl, empresa, handleClose, logoff } = this.props
        const open = Boolean(anchorEl)

        return (
            <AppBar position="fixed" className={classes.appBar}>
                {fetching && <LinearProgress />}
                <Toolbar>
                    <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerToggle} className={classes.menuButton} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
                        Portal {empresa}
                    </Typography>

                    {auth && (
                        <Grid item>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"

                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                                <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                                <MenuItem onClick={logoff}>Sair</MenuItem>
                            </Menu>

                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapstateToPros = state => ({
    fetching: false
})


export default connect(mapstateToPros)(withStyles(styles)(Header))