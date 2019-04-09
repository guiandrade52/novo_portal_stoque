import React, { Component, Fragment } from 'react'

// @material-ui/styles
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/core
import { IconButton, InputBase, Divider, Paper, Menu, MenuItem, CircularProgress, Dialog, DialogTitle, DialogContentText, DialogActions, Button, DialogContent } from '@material-ui/core';

//icos
import MenuIcon from '@material-ui/icons/Menu'
import ClearIcon from '@material-ui/icons/Clear';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { taskListActions, filterActions } from '../../../redux-flow/_actions';

// Core components
import Filtercontainer from './filtercontainer';
import { relatorioActions } from '../../../redux-flow/_actions/relatorio.action';

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

    state = {
        anchorEl: null,
        open: false
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });

    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleCloseRelatorio = () => {
        this.setState({ open: false })
    }

    handleChange = async (value) => {
        await this.props.changeInputFilter(value)
        if (wait) {
            wait = false
            this.props.fetchTasks(this.props.filter)
            setTimeout(() => {
                wait = true
                if (this.props.filter.search !== value) {
                    this.props.fetchTasks(this.props.filter)
                }
            }, 1500)
        }
        return
    }

    handleClickRelatorio = () => {
        this.setState({ open: true })
        this.handleClose()
    }

    handleFetchRelatorio = () => {
        this.props.fetchRelatorio(this.props.filter)
        this.handleCloseRelatorio()
    }

    render() {
        const { classes, filter: { search }, isFetchingRelatorio } = this.props
        const { anchorEl } = this.state;
        return (
            <Paper className={classes.root} elevation={1}>
                {!isFetchingRelatorio &&
                    < Fragment >
                        <IconButton onClick={this.handleClick} className={classes.iconButton} aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClickRelatorio}>Exportar relátorio</MenuItem>
                        </Menu>

                        {/* Dialog Decisão */}
                        <Dialog
                            open={this.state.open}
                            keepMounted
                            onClose={this.handleCloseRelatorio}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title">
                                Atenção
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Recomendamos que realize filtros para otimizar o relatório. Caso não o tenha feito, o processo pode demorar mais que o esperado.
                                    <br /><br />
                                    <strong>Deseja continuar?</strong>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleFetchRelatorio}>
                                    Sim
                                </Button>
                                <Button onClick={this.handleCloseRelatorio} color="primary">
                                    Não
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <InputBase
                            onChange={e => this.handleChange(e.target.value)}
                            className={classes.input}
                            value={search}
                            placeholder="Pesquisar Atividade"
                        />
                    </Fragment>
                }
                {isFetchingRelatorio &&
                    < CircularProgress />
                }
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
    isFetching: state.taskList.isFetching,
    isFetchingRelatorio: state.relatorio.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...taskListActions, ...filterActions, ...relatorioActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TaskFilter))