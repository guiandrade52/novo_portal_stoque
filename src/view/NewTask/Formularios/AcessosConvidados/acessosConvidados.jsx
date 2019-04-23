import React, { Component, Fragment } from 'react'

//Redux-form
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, CircularProgress } from '@material-ui/core';

//CoreComponents
import { GridItem, GridContainer } from '../../../../components/Grids';
import { TextField, Checkbox } from '../../../../components/Fields';
import { Divider } from 'semantic-ui-react';
import { bindActionCreators } from '../../../../../../../../../../Users/fagner.gomes/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import { mailActions } from '../../../../redux-flow/_actions/mail.actions';
import { configMail, Ocor_Template } from '../../../../appConfig';
import { Sol_Acessos_Mail } from '../../../../components/MailTemplates/solicitacaoAcessos';
import { newTaskActions } from '../../../../redux-flow/_actions/newTask.actions';
import { normalizePhone } from '../../../../components/NormalizeReduxForm';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

class AcessosConvidado extends Component {

    handleSubmit = (values) => {
        configMail.html = Sol_Acessos_Mail({ ...values, ...this.props.usuario })
        configMail.assunto = 'Solicitação de Acessos internos'
        configMail.formreset = 'formAcessosConvidado'

        this.props.sendMail(configMail)

        const objeto = Ocor_Template({ ...values, ...this.props.usuario })
        objeto.Descricao = `Eu ${this.props.usuario.Nome.trim()}, solicito acesso interno para o usuário ${values.nome_usuario}, telefone ${values.telefone_usuario}, E-mail ${values.email_usuario}.
O mesmo irá utilizar: ${values.Abaris ? 'Abaris ' : ''}, ${values.PortalStoque ? 'PortalStoque ' : ''}, ${values.Sankhya ? 'Sankhya ' : ''}, ${values.Rede ? 'Rede ' : ''}.
                
Observação: ${values.observacoes}

Ocorrência gerada automaticamente pelo portal.`
        this.props.save(objeto)
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
                                                Dados Usuário
                                            </Typography>
                                            <Divider />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={5} >
                                            < Field
                                                name="nome_usuario"
                                                component={TextField}
                                                label="Nome do Usuário"
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
                                                name="telefone_usuario"
                                                component={TextField}
                                                label="Telefone"
                                                placeholder='Telefone do usuário'
                                                fullWidth
                                                normalize={normalizePhone}
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={12} >
                                            <Typography variant='h6' align='center'>
                                                Quais acessos o usuário necessita
                                            </Typography>
                                            <Divider />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={2} >
                                            < Field
                                                name="Email"
                                                component={Checkbox}
                                                label="E-mail"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            < Field
                                                name="Rede"
                                                component={Checkbox}
                                                label="Rede"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            < Field
                                                name="Abaris"
                                                component={Checkbox}
                                                label="Ábaris"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            < Field
                                                name="Sankhya"
                                                component={Checkbox}
                                                label="Sankhya"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            < Field
                                                name="PortalStoque"
                                                component={Checkbox}
                                                label="Portal Stoque"
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={12} >
                                            < Field
                                                name="observacoes"
                                                component={TextField}
                                                label="Observações"
                                                placeholder='Observações'
                                                fullWidth
                                                type='textarea'
                                                multiline
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={12}>
                                            <Divider />
                                            <Button style={{ float: 'right' }} variant='contained' color='primary' type='submit'>Enviar</Button>
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
        'nome_usuario',
        'email_usuario',
        'telefone_usuario'
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

AcessosConvidado = reduxForm({
    form: 'formAcessosConvidado',
    validate
})(AcessosConvidado)

const mapDispatchToProps = dispatch => bindActionCreators({ ...mailActions, ...newTaskActions }, dispatch)

const mapStateToProps = state => ({
    isFetching: state.mail.isFetching,
    usuario: state.usuario.dados
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AcessosConvidado))