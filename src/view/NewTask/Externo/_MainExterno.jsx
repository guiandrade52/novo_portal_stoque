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


//CoreComponents
import { GridContainer, GridItem } from '../../../components/Grids';
import Serie from './serie';
import Contato from './contato';
import Severidade from './severidade';
import Actions from './actions';
import Resumo from './resumo';
import Descricao from './descricao';
import { Grow } from '../../../components/Transitions';
import { Breadcrumb } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';



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

function getSteps(severidade) {
    console.log('severidade', severidade)
    const array = [];

    array.push({ index: 0, label: 'Diga-me qual a Série/Licença para iniciarmos' })
    array.push({ index: 1, label: 'Agora quem é o contato responsável para acompanhamento' })
    if(severidade) array.push({ index: 2, label: 'Informe a severidade.' })
    array.push({ index: 3, label: 'Me informe o problema detalhadamente.' })

    return array
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Serie />
        case 1:
            return <Contato />
        case 2:
            return <Severidade />
        case 3:
            return <Descricao />
        default:
            return ''

    }
}

class Externo extends React.Component {

    render() {
        const { classes, activeStep, home, isFetching, ocorrencia,interno, clienteAb } = this.props      
        let cliente =  clienteAb.split(',')
        console.log(cliente)
        
        const steps = getSteps(Boolean(cliente.find(item => item * 1 === 7948)))

        return (
            <GridContainer spacing={8}>
                {interno === 'S' &&
                    <GridItem xs={12} sm={12} md={12}>
                        <div style={{ marginBottom: 10 }}>
                            <Grow>
                                <Breadcrumb>
                                    <Breadcrumb.Section onClick={() => home(0)} link >Dash</Breadcrumb.Section>
                                    <Breadcrumb.Divider icon='right angle' />
                                    <Breadcrumb.Section active >Série/Licença</Breadcrumb.Section>
                                </Breadcrumb>
                            </Grow>
                        </div>
                    </GridItem>
                }
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
                {activeStep === steps.length &&
                    < GridItem xs={12} sm={12} md={8}>
                        <Paper square elevation={1} className={classes.resetContainer}>
                            <Resumo />
                        </Paper>
                    </GridItem>
                }
            </GridContainer>
        )
    }
}

Externo.propTypes = {
    classes: PropTypes.object,
}

const mapStateToProps = state => ({
    activeStep: state.step.activeStep,
    interno: state.usuario.dados.ClienteInterno,
    ...state.newTask,
    clienteAb: state.usuario.dados.ClienteAb !== undefined ? state.usuario.dados.ClienteAb : ""
})

const mapDispatchToProps = dispatch => bindActionCreators({ reset }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Externo))
