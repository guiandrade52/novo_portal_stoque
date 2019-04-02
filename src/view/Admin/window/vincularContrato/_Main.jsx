import React from 'react'
import PropTypes from 'prop-types'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

//Redux
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import { bindActionCreators } from 'redux';


//CoreComponents
import { GridContainer, GridItem } from '../../../../components/Grids';
import UsuarioPortal from './usuarioPortal';
import Actions from './actions';
import ParceiroContrato from './parceiroContrato';
import ParceiroAtendido from './parceiroAtendido';
import Contratos from './contratos';
import Resumo from './resumo';
import { Slide } from '@material-ui/core';


const styles = theme => ({
    root: {
        width: '100%',
        border: '2px solid'
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
    paper: {
        padding: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: 5,
        height: '100%'
    },
})

function getSteps() {
    return [
        { index: 0, label: 'Qual usuário portal?' },
        { index: 1, label: 'Agora deseja vincular o usuário a qual(is) parceiro(s)?' },
        { index: 2, label: 'Qual(is) o(s) contrato(s) o usuário pode visualizar?.' },
        { index: 3, label: 'Qual(is) o(s) parceiros(s) atendido(s)?.' },
    ]
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <UsuarioPortal />
        case 1:
            return <ParceiroContrato />
        case 2:
            return <Contratos />
        case 3:
            return <ParceiroAtendido />
        default:
            return null

    }
}

class Externo extends React.Component {
    render() {
        const { classes, activeStep, isFetching, ocorrencia } = this.props
        const steps = getSteps(this.props)
        return (
            <GridContainer spacing={8}>
                <GridItem xs={12} sm={12} md={activeStep === steps.length || activeStep === steps.length + 1 ? 4 : 12}>
                    <Paper>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map(item => {
                                return (
                                    <Step key={item.index}>
                                        <StepLabel>{item.label}</StepLabel>
                                        <StepContent>
                                            {getStepContent(item.index)}
                                        </StepContent>
                                    </Step>
                                )
                            })}
                        </Stepper>

                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                                {!isFetching && !ocorrencia && < Typography >* Confirme as informações no resumo, caso estejam corretas finalize a requisição</Typography>}
                                {!isFetching && ocorrencia && <Typography variant='subtitle2'>Ocorrência registrada com sucesso, número: {ocorrencia}</Typography>}
                                <Actions hidden={false} handleBack={() => this.props.reset('resumo')} />
                            </Paper>
                        )}
                    </Paper>
                </GridItem>
                <Slide direction="left" in={activeStep === steps.length} mountOnEnter unmountOnExit style={{ transitionDelay: activeStep === steps.length ? '400ms' : '0ms' }}>
                    < GridItem xs={12} sm={12} md={8}>
                        <Paper square elevation={1} className={classes.resetContainer}>
                            <Resumo />
                        </Paper>
                    </GridItem>
                </Slide>
            </GridContainer>
        )
    }
}

Externo.propTypes = {
    classes: PropTypes.object,
}

const mapStateToProps = state => ({
    activeStep: state.step.activeStep,
    ...state.newTask
})

const mapDispatchToProps = dispatch => bindActionCreators({ reset }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Externo))
