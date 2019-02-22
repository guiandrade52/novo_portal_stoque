import React, { Component } from 'react'

// @material-ui/core
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import { Badge, Typography } from '@material-ui/core';

// @material-ui/icons
import NotificationsIcon from '@material-ui/icons/Notifications'

//CoreComponents
import { GridItem } from '../../../components/Grids';

const notify = [
    { id: 1, title: 'lorem temos uma nova notificação de teste' },
    { id: 2, title: 'lorem temos uma nova notificação de teste lorem temos uma nova notificação de teste' },
]


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

    render() {
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        return (
            <GridItem>
                <IconButton aria-owns={open ? 'menu-profile' : null} aria-haspopup="true" onClick={this.handleClick} color="inherit">
                    <Badge badgeContent={notify.length} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <Menu id="menu-profile" anchorEl={anchorEl} open={open} onClose={this.handleClose}>
                    {notify.map(item =>
                        <MenuItem key={item.id} onClick={this.handleClose}>
                            <Typography>
                                {item.title}
                            </Typography>
                        </MenuItem>
                    )}
                </Menu>
            </GridItem>
        )
    }
}

export default MenuNotify