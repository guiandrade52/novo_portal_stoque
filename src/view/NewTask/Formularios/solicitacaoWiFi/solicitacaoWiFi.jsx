import React, { Component, Fragment } from 'react'

//Redux-form
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, CircularProgress } from '@material-ui/core';

//CoreComponents
import { GridItem, GridContainer } from '../../../../components/Grids';
import { TextField } from '../../../../components/Fields';
import { Divider } from 'semantic-ui-react';
import { bindActionCreators } from '../../../../../../../../../../Users/fagner.gomes/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import { mailActions } from '../../../../redux-flow/_actions/mail.actions';
import { configMail } from '../../../../appConfig';
import { Sol_WiFi_Mail } from '../../../../components/MailTemplates/solicitacaoWiFi';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

class SolicitacaoWiFi extends Component {

    handleSubmit = (values) => {
        configMail.html = Sol_WiFi_Mail(values)
        configMail.subject = 'Solicitação de WI-FI'
        configMail.formreset = 'formSolicitacaoWiFi'

        this.props.sendMail(configMail)
    }

    render() {
        const { classes, handleSubmit, isFetching } = this.props
        return (
            <GridContainer spacing={16}>
                <GridItem xs={12} sm={12} md={12}>
                    <Paper elevation={1} className={classes.paper}>
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <GridContainer spacing={16} justify='center'>
                                {!isFetching &&
                                    <Fragment>
                                        <GridItem xs={12} sm={12} md={12} >
                                            <Typography variant='h6' align='center'>
                                                Dados do solicitante
                                    </Typography>
                                            <Divider />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={5} >
                                            < Field
                                                name="nome_sol"
                                                component={TextField}
                                                label="Nome Completo"
                                                placeholder='Nome do Solicitante'
                                                fullWidth
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4} >
                                            < Field
                                                name="setor_sol"
                                                component={TextField}
                                                label="Setor"
                                                placeholder='Setor do Solicitante'
                                                fullWidth
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3} >
                                            < Field
                                                name="telefone_sol"
                                                component={TextField}
                                                label="Telefone"
                                                placeholder='Telefone do Solicitante'
                                                fullWidth
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={12} >
                                            <Typography variant='h6' align='center'>
                                                Dados Usuario
                                    </Typography>
                                            <Divider />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={5} >
                                            < Field
                                                name="nome_usuario"
                                                component={TextField}
                                                label="Nome Usuário"
                                                placeholder='Nome do Usuário'
                                                fullWidth
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={4} >
                                            < Field
                                                name="email_usuario"
                                                component={TextField}
                                                label="E-mail"
                                                placeholder='E-mail Usuário'
                                                fullWidth
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={3} >
                                            < Field
                                                name="telefone__usuario"
                                                component={TextField}
                                                label="Telefone"
                                                placeholder='Telefone do usuário'
                                                fullWidth
                                                type='number'
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={12}>
                                            <Divider />
                                            <Button style={{ float: 'right' }} variant='outlined' color='primary' type='submit'>Enviar</Button>
                                        </GridItem>
                                    </Fragment>
                                }
                                {isFetching &&
                                    <GridItem>
                                        <CircularProgress size={100} />
                                    </GridItem>
                                }
                            </GridContainer>
                        </form>
                    </Paper>
                </GridItem>
            </GridContainer>
        )
    }
}

const validate = values => {
    const errors = {}
    const requiredFields = [
        'nome_sol',
        'setor_sol',
        'telefone_sol',
        'nome_usuario',
        'email_usuario',
        'telefone__usuario'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Campo obrigatório'
        }
    })
    if (values.email_usuario && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_usuario)) {
        errors.email_usuario = 'E-mail inválido.'
    }
    return errors
}

SolicitacaoWiFi = reduxForm({
    form: 'formSolicitacaoWiFi',
    validate
})(SolicitacaoWiFi)

const mapDispatchToProps = dispatch => bindActionCreators(mailActions, dispatch)

const mapStateToProps = state => ({
    isFetching: state.mail.isFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SolicitacaoWiFi))