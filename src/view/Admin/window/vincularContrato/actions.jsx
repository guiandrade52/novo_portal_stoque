import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
//Redux-form
import { reset as resetReduxForm, formValueSelector } from 'redux-form'
import { stepActions, adminActions } from '../../../../redux-flow/_actions';

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
        this.props.resetReduxForm('formVincularContrato')

    }

    handleSave = () => {
        const { usuarioPortal, contratos, parceiroAb, parceiroAt, activeStep } = this.props
        const values = {
            idUsuario: usuarioPortal.value,
            contrato: contratos.value,
            codParc: parceiroAb.value,
            codParcAt: parceiroAt.map(item => item.value).toString(),
            activeStep
        }
        this.props.saveSyncContrato(values)
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

const selector = formValueSelector('formVincularContrato')

const mapStateToProps = state => ({
    usuarioPortal: selector(state, 'usuarioPortal'),
    parceiroAb: selector(state, 'parceiroAb'),
    contratos: selector(state, 'contrato'),
    parceiroAt: selector(state, 'parceiroAt'),
    activeStep: state.step.activeStep,
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...stepActions, resetReduxForm, ...adminActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Actions))