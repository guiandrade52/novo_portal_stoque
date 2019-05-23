import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//Redux-form
import { reset as resetReduxForm, formValueSelector } from 'redux-form'
import { newTaskActions, stepActions } from '../../../redux-flow/_actions';

//Material UI
import { withStyles, Button, LinearProgress } from '@material-ui/core'


const styles = theme => ({
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
})

class Actions extends Component {

    handleNext = () => {
        const { activeStep, next } = this.props
        next(activeStep)
    }

    handleBack = () => {
        const { activeStep, back } = this.props
        back(activeStep)
        this.props.handleBack()
    }

    handleReset = () => {
        this.props.reset()
        this.props.resetReduxForm('formExterno')

    }

    handleSave = () => {
        const { serieDetails, contato, descricao, contatos, files, processoRel,ocorTerceiro } = this.props
        const filterContato = contatos.find(item => item.CodContato === contato.value)

        this.props.save({ ...serieDetails, ...filterContato, descricao, processoRel,ocorTerceiro, files })
    }

    handleCreateNewTask = () => {
        this.handleReset()
        this.props.newTask()
    }

    render() {
        const { classes, activeStep, disabled, hidden, isFetching, btnNew } = this.props
        return (
            <div className={classes.actionsContainer}>
                {!isFetching && !btnNew &&
                    < div >
                        {
                            !hidden &&
                            <Button onClick={this.handleReset} className={classes.button}>
                                Reset
                            </Button>
                        }
                        <Button disabled={activeStep === 0} onClick={this.handleBack} className={classes.button} >
                            Voltar
                        </Button>
                        <Button variant="contained" color="primary" disabled={disabled} onClick={hidden ? this.handleNext : this.handleSave} className={classes.button}>
                            {hidden ? 'Proxmo' : 'Finalizar'}
                        </Button>
                    </div>
                }
                {isFetching && !btnNew && <LinearProgress />}
                {!isFetching && btnNew &&
                    <Button variant="contained" color="primary" onClick={this.handleCreateNewTask} className={classes.button}>
                        nova ocorrência
                    </Button>
                }
            </div>
        )
    }
}

Actions.defaultProps = {
    hidden: true
}

const selector = formValueSelector('formExterno')

const mapStateToProps = state => ({
    activeStep: state.step.activeStep,
    serieDetails: state.repository.serieDetails,
    contatos: state.repository.contatos,
    serie: selector(state, 'serie'),
    contato: selector(state, 'contato'),
    descricao: selector(state, 'descricao'),
    processoRel: selector(state, 'processoRelacionado'),
    ocorTerceiro: selector(state, 'ocorTerceiro'),
    ...state.newTask,
    files: state.inputFiles,
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...stepActions, resetReduxForm, ...newTaskActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Actions))