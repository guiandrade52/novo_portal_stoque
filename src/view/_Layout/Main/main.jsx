import React, { Fragment, Component } from 'react'

//Material UI
import withStyles from '@material-ui/core/styles/withStyles'

//CoreComponents
import { GridContainer } from '../../../components/Grids';
import Header from '../Header';
import Drawer from '../Drawer';
import { Usuario } from '../../Usuario';
import { Modal } from '../../../components/Dialogs';

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

class Main extends Component {

    state = {
        drawer: false
    }

    handleDrawerToogle = () => {
        this.setState({ drawer: !this.state.drawer })
    }

    render() {
        const { classes, children } = this.props
        return (
            <Fragment>
                <div className={classes.root}>
                    <Header handleDrawerToogle={this.handleDrawerToogle} />
                    <Drawer handleDrawerToogle={this.handleDrawerToogle} drawer={this.state.drawer} />
                    <div className={classes.content}>
                        <div className={classes.toolbar}></div>
                        <GridContainer>
                            {children}
                        </GridContainer>
                    </div>
                </div>
                <Usuario />
                <Modal />
            </Fragment>
        )
    }
}


export default withStyles(styles)(Main)