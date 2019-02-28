import React, { Component } from 'react'

// @material-ui/styles
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/core
import { IconButton, InputBase, Divider, Paper } from '@material-ui/core';

//icos
import MenuIcon from '@material-ui/icons/Menu'
import ClearIcon from '@material-ui/icons/Clear';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { taskListActions, filterActions } from '../../../redux-flow/_actions';

// Core components
import Filtercontainer from './filtercontainer';

const styles = theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        marginBottom: theme.spacing.unit * 1
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
})

let wait = true
class TaskFilter extends Component {

    handleChange = async (value) => {
        await this.props.change('search', value)
        if (wait) {
            wait = false
            this.props.fetch(this.props.filter)
            setTimeout(() => {
                wait = true
                if (this.props.filter.search !== value) {
                    this.props.fetch(this.props.filter)
                }
            }, 1500)
        }
        return
    }

    render() {
        const { classes, filter: { search } } = this.props
        return (
            <Paper className={classes.root} elevation={1}>
                <IconButton className={classes.iconButton} aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    onChange={e => this.handleChange(e.target.value)}
                    className={classes.input}
                    value={search}
                    placeholder="Pesquisar Atividade"
                />
                {this.props.filter.search &&
                    <IconButton onClick={() => this.handleChange('')} className={classes.iconButton} aria-label="Search">
                        <ClearIcon />
                    </IconButton>
                }
                <Divider className={classes.divider} />
                <Filtercontainer />
            </Paper >
        )
    }
}

const mapStateToProps = state => ({
    filter: state.filter,
    isFetching: state.taskList.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...taskListActions, ...filterActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TaskFilter))