import React from 'react'

//Material UI
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { LinearProgress } from '@material-ui/core';

//Redux
import { connect } from 'react-redux'

//Redux-form
import { reset } from 'redux-form'


//CoreComponents
import Contratos from './contratos';
import Produtos from './produtos';
import GrupoProduto from './grupoProduto';
import Serie from './serie';
import Contato from './contato';
import Actions from './actions';
import Resumo from './resumo';
import Descricao from './descricao';
import InternoSystem from './internoSystem';

import { GridContainer, GridItem } from '../../../components/Grids'
import { Grow } from '../../../components/Transitions';
import { Breadcrumb } from 'semantic-ui-react';

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

function getSteps(props) {
    const step = [
        { index: 0, label: 'Me informe qual contrato' },
        { index: 1, label: 'Agora qual serviço desejado' },
        { index: 2, label: 'Diga-me o produto' },
        { index: 3, label: 'Está tentando registrar pra alguma destas séries' },
        { index: 4, label: 'Quem será o contato reponsável' },
        { index: 5, label: 'Me informe detalhadamente o problema' }
    ]

    if (props.series && props.series.length === 1 && props.series[0].Controle === null) {
        step[3] = { index: 6, label: `O produto ${props.series[0].DescrProd} não possui série` }
    }
    return step
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Contratos />
        case 1:
            return <GrupoProduto />
        case 2:
            return <Produtos />
        case 3:
            return <Serie />
        case 4:
            return <Contato />
        case 5:
            return <Descricao />
        case 6:
            return <InternoSystem />
        default:
            return 'Error'

    }
}

class Interno extends React.Component {

    render() {
        const { classes, activeStep, home, sending } = this.props
        const steps = getSteps(this.props)
        return (
            <GridContainer >
                <Grow>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <div style={{ marginBottom: 10 }}>
                                <Grow>
                                    <Breadcrumb>
                                        <Breadcrumb.Section onClick={() => home(0)} link >Dash</Breadcrumb.Section>
                                        <Breadcrumb.Divider icon='right angle' />
                                        <Breadcrumb.Section active >Serviços Internos</Breadcrumb.Section>
                                    </Breadcrumb>
                                </Grow>
                            </div>
                        </GridItem>
                    </GridContainer>
                </Grow>

                <GridItem xs={12} sm={12} md={activeStep === steps.length || activeStep === steps.length + 1 ? 4 : 12}>
                    <Grow>
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
                                    {!sending &&
                                        <div>
                                            <Typography>*Confirme as informações no resumo, caso estejam corretas finalize a requisição</Typography>
                                            <Actions hidden={false} handleBack={() => this.props.dispatch(reset('resumo'))} />
                                        </div>
                                    }
                                    {sending &&
                                        <LinearProgress />
                                    }
                                </Paper>
                            )}
                        </Paper>
                    </Grow>
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

const mapStateToProps = state => ({
    activeStep: state.step.activeStep
})

export default connect(mapStateToProps)(withStyles(styles)(Interno))