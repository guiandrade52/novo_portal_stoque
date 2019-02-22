import React from 'react'

import { SidebarRouter } from '../../_Routers'
import { withRouter, Link } from 'react-router-dom'

//Material UI
import { List, Hidden, ListItem, ListItemIcon } from '@material-ui/core';

const ItemList = ({ classes, location: { pathname } }) =>
    <div>
        <Hidden xsDown>
            <div className={classes.toolbar} />
        </Hidden>

        <List disablePadding>
            {SidebarRouter.map((route) => {
                return (
                    <ListItem key={route.name} button component={Link} to={route.path} selected={route.path === pathname} >
                        <ListItemIcon>
                            {<route.icon fontSize="large" />}
                        </ListItemIcon>
                    </ListItem>
                )
            })}
        </List>
    </div>


export default withRouter(ItemList)