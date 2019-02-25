import React, { Component } from 'react'
import PropTypes from 'prop-types'

// @material-ui/core
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authActions } from '../../../redux-flow/_actions/auth.action';

// @material-ui/icons
import AccountCircle from '@material-ui/icons/AccountCircle'

// @material-ui/styles
import { withStyles } from '@material-ui/core/styles'

//CoreComponents
import { GridItem } from '../../../components/Grids';

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

class MenuProfile extends Component {

    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };


    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        const { logout } = this.props
        return (
            <GridItem>
                <IconButton aria-owns={open ? 'menu-profile' : null} aria-haspopup="true" onClick={this.handleClick} color="inherit">
                    <AccountCircle />
                </IconButton>

                <Menu
                    id="menu-profile"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Minha conta</MenuItem>
                    <MenuItem onClick={() => logout()}>Sair</MenuItem>
                </Menu>
            </GridItem>
        )
    }
}

MenuProfile.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(authActions, dispatch)

export default connect(null, mapDispatchToProps)(withStyles(styles)(MenuProfile))