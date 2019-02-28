import React, { Component } from 'react'

// @material-ui/core
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'

// @material-ui/styles
import { withStyles } from '@material-ui/core/styles'
import Scrollbar from 'perfect-scrollbar-react';
import 'perfect-scrollbar-react/dist/style.min.css';

// Core components
import TaskTabs from './taskTabs'
import ViewMobile from '../taskList/viewMobile';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
    },
    container: {
        display: 'flex',
        maxHeight: 'calc(100vh - 92px)',
        padding: 10
    }
})

class TaskContainer extends Component {
    render() {
        const { classes, open } = this.props
        return (
            <div>
                <Hidden xsDown>
                    <Paper className={classes.paper} elevation={1}>
                        <Scrollbar style={{ border: '2px solid' }}>
                            <div className={classes.container}>
                                <TaskTabs />
                            </div>
                        </Scrollbar>
                    </Paper>
                </Hidden>
                <Hidden only={['lg', 'md', 'xl']}>
                    <ViewMobile open={open}>
                        <TaskTabs />
                    </ViewMobile>
                </Hidden>
            </div>
        )
    }
}

export default withStyles(styles)(TaskContainer)