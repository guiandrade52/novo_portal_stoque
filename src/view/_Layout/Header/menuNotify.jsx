import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { dialogActions } from '../../../redux-flow/_actions/dialog.actions';

// @material-ui/core
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import { Badge, Typography } from '@material-ui/core';

// @material-ui/icons
import NotificationsIcon from '@material-ui/icons/Notifications'

//CoreComponents
import { GridItem } from '../../../components/Grids';



class MenuNotify extends Component {

    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleShow = id => {
        this.setState({ anchorEl: null });
        this.props.showDialog(id)
    }

    calcNotify = () => this.props.notify.filter(item => item.enable === true).length

    render() {
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        const { notify } = this.props

        return (
            <GridItem>
                <IconButton aria-owns={open ? 'menu-profile' : null} aria-haspopup="true" onClick={this.handleClick} color="inherit">
                    <Badge badgeContent={this.calcNotify()} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <Menu id="menu-profile" anchorEl={anchorEl} open={open} onClose={this.handleClose}>
                    {notify.map(item =>
                        <MenuItem key={item.id} onClick={() => this.handleShow(item.id)}>
                            <Typography>
                                {item.enable && <strong>{item.title}</strong>}
                                {!item.enable && item.title}
                            </Typography>
                        </MenuItem>
                    )}
                </Menu>
            </GridItem>
        )
    }
}

const mapStateToProps = state => ({
    notify: state.dialog.notify
})
const mapDispatchToPros = dispatch => bindActionCreators(dialogActions, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(MenuNotify)