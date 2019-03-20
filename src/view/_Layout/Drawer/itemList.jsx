import React from 'react'

import { SidebarRouter } from '../../_Routers'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

//Material UI
import { List, Hidden, ListItem, ListItemIcon } from '@material-ui/core';


const ItemList = ({ classes, location: { pathname }, contratos }) =>
    <div>
        <Hidden xsDown>
            <div className={classes.toolbar} />
        </Hidden>

        <List disablePadding>
            {SidebarRouter.map((route) => {
                return (
                    <ListItem disabled={!contratos} key={route.name} button component={Link} to={route.path} selected={route.path === pathname} >
                        <ListItemIcon>
                            {<route.icon fontSize="large" />}
                        </ListItemIcon>
                    </ListItem>
                )
            })}
        </List>
    </div>

const mapStateToProps = state => ({
    contratos: state.usuario.dados.contratos
})

export default connect(mapStateToProps)(withRouter(ItemList))