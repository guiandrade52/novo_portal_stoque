import React, { Component, Fragment } from 'react'



// @material-ui/styles
import withStyles from '@material-ui/core/styles/withStyles'
import ScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css'

// @material-ui/core
import Paper from '@material-ui/core/Paper'
import { Loading } from '../../../components/Loading'
import { IconButton, Select, Tooltip } from '@material-ui/core'

//Semantic UI
import { Pagination, Message } from 'semantic-ui-react';

//icons
import FilterListIcon from '@material-ui/icons/FilterList'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { taskListActions, filterActions } from '../../../redux-flow/_actions';
import {reset} from 'redux-form'


import IconRefresh from '@material-ui/icons/Refresh'

// Core components
import { GridItem, GridContainer } from '../../../components/Grids'
import TaskItem from './taskItem'


const styles = theme => ({
    container: {
        height: 'calc(100vh - 190px)'
    },
    paper: {
        padding: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 2,
    },
    buttonOnFilter: {
        padding: 5
    }
})

class TaskList extends Component {

    handleFetchTask = (e, { activePage = 1 }) => {
        this.props.filter.activePage = activePage
        this.props.fetchTasks(this.props.filter)
    }

    handleFetchTaskSelect = (value) => {
        this.props.filter.activePage = value
        this.props.fetchTasks(this.props.filter)
    }

    handleResetFilter = async () => {
        await this.props.resetFilter()
        this.props.fetchTasks(this.props.filter)
        this.props.reset('formFilter')
    }

    componentWillMount() {
        this.props.fetchTasks(this.props.filter)
    }

    render() {
        const { tasks, isFetching, totalOcor, filter: { activePage, ativo }, totalPages, classes, selected } = this.props
        return (
            <Paper className={classes.paper} elevation={1}>
                <Fragment>
                    {!isFetching && tasks.length > 0 &&
                        <GridContainer >
                            <GridItem xs={2} sm={2} md={2}>
                                <IconButton style={{ padding: 3 }} onClick={e => this.handleFetchTask(e, activePage)}>
                                    <IconRefresh />
                                </IconButton>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                                {totalPages > 1 &&
                                    <Select
                                        style={{ fontSize: 12 }}
                                        value={activePage}
                                        variant='outlined'
                                        native
                                        onChange={(e) => this.handleFetchTaskSelect(e.target.value)}
                                    >
                                        {
                                            [...Array(totalPages)].map((x, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)
                                        }
                                    </Select>
                                }
                                {ativo &&
                                    <Tooltip title='Limpar Filtro'>
                                        <IconButton className={classes.buttonOnFilter} onClick={this.handleResetFilter} >
                                            <FilterListIcon color='error' />
                                        </IconButton>
                                    </Tooltip>
                                }
                            </GridItem>
                            <GridItem xs={4} sm={4} md={4}>
                                <i>{tasks.length} de {totalOcor}</i>
                            </GridItem>
                        </GridContainer>
                    }
                    {tasks.length === 0 && !isFetching &&
                        <Fragment>
                            {ativo &&
                                <Tooltip title='Limpar Filtro'>
                                    <IconButton className={classes.buttonOnFilter} onClick={this.clearAllFilter} >
                                        <FilterListIcon color='error' />
                                    </IconButton>
                                </Tooltip>
                            }
                            <Message
                                icon='info'
                                header='Desculpe'
                                content='Não encontramos nenhuma ocorrência.'
                            />
                        </Fragment>
                    }
                    {!isFetching && tasks.length > 0 &&
                        <div className={classes.container}>
                            < ScrollBar component="div"  >
                                <div style={{ padding: 10 }}>
                                    {tasks.map((task, key) => (
                                        <div key={key} onClick={() => selected(task.ExecutionId)}>
                                            < TaskItem task={task} />
                                        </div>
                                    ))}
                                </div>
                                {totalPages > 1 &&
                                    <div style={{ textAlign: 'center', marginBottom: 20 }}>
                                        <Pagination
                                            size='mini'
                                            boundaryRange={1}
                                            defaultActivePage={activePage}
                                            ellipsisItem={null}
                                            firstItem={null}
                                            lastItem={null}
                                            siblingRange={1}
                                            totalPages={totalPages}
                                            pointing
                                            secondary
                                            onPageChange={this.handleFetchTask}
                                        />
                                    </div>
                                }
                            </ScrollBar>
                        </div>
                    }
                    {isFetching && <Loading />}
                </Fragment>
            </Paper >
        )
    }
}

const mapStateToProps = state => ({
    ...state.taskList,
    initialValue: state.form.search,
    filter: state.filter
})

const mapDispatchToprops = dispatch => bindActionCreators({ ...taskListActions, ...filterActions,reset }, dispatch)
export default connect(mapStateToProps, mapDispatchToprops)(withStyles(styles, { withTheme: true })(TaskList))