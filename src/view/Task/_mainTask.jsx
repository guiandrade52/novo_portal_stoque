import React from 'react'

//Redux
import { connect } from 'react-redux'

//Material UI
import { Hidden, Paper, Typography, withStyles } from '@material-ui/core';

//ComponentCore
import { Grow } from '../../components/Transitions/Grow';
import { TaskList } from './taskList';
import { GridContainer, GridItem } from '../../components/Grids';
import { TaskFilter } from './taskFilter';
import { TaskContainer } from './taskContainer';

const styles = theme => ({
    noSelect: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        paddgin: 10
    }
});


const MainTask = ({ classes, selected }) =>
    <Grow>
        <GridContainer direction="row" justify="flex-start" alignItems="flex-start" spacing={8}>
            <GridItem xs={12} sm={3} md={3} >
                <TaskFilter />
                <TaskList />
            </GridItem>
            <GridItem xs={12} sm={9} md={9} className={classes.container}>
                <Hidden xsDown>
                    {!selected &&
                        <Paper elevation={1} className={classes.noSelect}>
                            <Typography variant='h5' align='center'>
                                Selecione uma tarefa para mais detalhes
                            </Typography>
                        </Paper>
                    }
                </Hidden>
                {selected && <TaskContainer />}
            </GridItem>
        </GridContainer>
    </Grow>

const mapStateToProps = state => ({
    selected: state.taskList.selected
})

export default connect(mapStateToProps)(withStyles(styles)(MainTask))