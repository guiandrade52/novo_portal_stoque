import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, CircularProgress } from '@material-ui/core';

import { Divider } from 'semantic-ui-react';

//Normalize Redux From
import { validate } from './validate'

//CoreComponents
import { GridItem, GridContainer } from '../../../../components/Grids';
import { TextField, Checkbox } from '../../../../components/Fields';
import { configMail, Ocor_Template } from '../../../../appConfig';
import { Novo_Colaborador_template } from '../../../../components/MailTemplates/novoColaborador';
import { mailActions } from '../../../../redux-flow/_actions/mail.actions';
import { newTaskActions } from '../../../../redux-flow/_actions/newTask.actions';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,

    },
    cancell: {
        color: 'red'
    }
});


class NovoColaborador extends Component {

    handleReset = () => {
        this.props.reset()
    }

    handleSubmit = values => {
        configMail.html = Novo_Colaborador_template({ ...values, ...this.props.usuario })
        configMail.assunto = 'Solicitação de novo colaborador'
        configMail.formreset = 'formNovoColaborador'

        this.props.sendMail(configMail)

        const objeto = Ocor_Template({ ...values, ...this.props.usuario })
        objeto.Descricao = `Eu ${this.props.usuario.Nome.trim()}, solicito acessos para o novo colaborador ${values.Fun_Nome}, alocado na unidade ${values.Fun_Alocado}, 
CPF ${values.Fun_CPF}, cargo ${values.Fun_Cargo}, setor ${values.Fun_Setor}.

Deve criar os seguintes login: ${values.Log_Email ? 'E-mail' : ''}, ${values.Log_Rede ? 'Rede' : ''}, ${values.Log_Abaris ? 'Ábaris' : ''}, ${values.Log_Sankhya ? 'Sankhya' : ''}, ${values.Log_PortalStoque ? 'Portal Stoque' : ''}

Copiar o perfil de: ${values.Log_PerfilCopiar}

Grupos de e-mail: ${values.Log_GrupoEmail}
Observação: ${values.Log_Observacao ? values.Log_Observacao : 'Não possui'}

Deve instalar os seguintes softwares: ${values.Soft_AlterdataERP ? 'Alterdata' : ''}, ${values.Soft_Contaction ? 'Contaction' : ''}, ${values.Soft_Sigep ? 'Sigep' : ''}, ${values.Soft_VisualStudio ? 'Visual Studio' : ''}
Observação: ${values.Soft_Observacao}

Ocorrência gerada automaticamente pelo portal.`

        this.props.save(objeto)
    }

    render() {
        const { handleSubmit, classes, submitting, pristine, submitFailed, isFetching } = this.props
        return (
            <GridItem xs={12} sm={12} md={12}>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Paper className={classes.root} elevation={1}>
                        {!isFetching &&
                            <GridContainer spacing={16}>
                                <GridItem xs={12} sm={12} md={12} >
                                    <Typography variant='h6' align='center'>
                                        Dados do novo funcionário
                                </Typography>
                                    <Divider />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={6} >
                                    < Field
                                        name="Fun_Nome"
                                        component={TextField}
                                        label="Nome"
                                        placeholder='Nome completo'
                                        fullWidth
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} >
                                    < Field
                                        name="Fun_Alocado"
                                        component={TextField}
                                        label="Alocado"
                                        placeholder='Funcionário será alocado: (na Stoque ou nome do cliente)'
                                        fullWidth
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} >
                                    < Field
                                        name="Fun_CPF"
                                        component={TextField}
                                        label="CPF"
                                        placeholder='CPF'
                                        fullWidth
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} >
                                    < Field
                                        name="Fun_Cargo"
                                        component={TextField}
                                        label="Cargo"
                                        placeholder='Cargo'
                                        fullWidth
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} >
                                    < Field
                                        name="Fun_Setor"
                                        component={TextField}
                                        label="Setor"
                                        placeholder='Setor'
                                        fullWidth
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12} >
                                    <Typography variant='h6' align='center'>
                                        Dados para criação de Login
                                </Typography>
                                    <Divider />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12} >
                                    <Typography variant='subtitle1'>
                                        Informe quais contas de usuário deverão ser criados para o novo colaborado
                                </Typography>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={2} >
                                    < Field
                                        name="Log_Email"
                                        component={Checkbox}
                                        label="E-mail"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} >
                                    < Field
                                        name="Log_Rede"
                                        component={Checkbox}
                                        label="Rede"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} >
                                    < Field
                                        name="Log_Abaris"
                                        component={Checkbox}
                                        label="Ábaris"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} >
                                    < Field
                                        name="Log_Sankhya"
                                        component={Checkbox}
                                        label="Sankhya"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={2} >
                                    < Field
                                        name="Log_PortalStoque"
                                        component={Checkbox}
                                        label="Portal Stoque"
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12}>
                                    <Typography variant='subtitle1'>
                                        Informe de qual perfil poderemos copiar para criar as contas selecionadas
                                </Typography>
                                    <Field
                                        name="Log_PerfilCopiar"
                                        component={TextField}
                                        label="Perfil"
                                        placeholder='Perfil a ser copiado'
                                        fullWidth
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12}>
                                    <Typography variant='subtitle1'>
                                        Informe qual grupo de e-mail o(a) novo(a) colaborador(a) deverá fazer parte
                                </Typography>
                                    <Field
                                        name="Log_GrupoEmail"
                                        component={TextField}
                                        label="Grupo de e-mail"
                                        placeholder='Grupo de e-mail a copiar'
                                        fullWidth
                                        multiline
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12}>
                                    <Typography variant='subtitle1'>
                                        Alguma observação quanto a criação das contas de usuários?
                                </Typography>
                                    <Field
                                        name="Log_Observacao"
                                        component={TextField}
                                        label="Observações"
                                        placeholder='Observações do usuário'
                                        fullWidth
                                        multiline
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12} >
                                    <Typography variant='h6' align='center'>
                                        Dados sobre Instalação de Softwares
                                </Typography>
                                    <Divider />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12}>
                                    <Typography variant='subtitle1'>
                                        Informe quais softwares deverão ser instalados no computador do usuário
                                </Typography>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} >
                                    <Field
                                        name="Soft_AlterdataERP"
                                        component={Checkbox}
                                        label="Alterdata ERP"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} >
                                    <Field
                                        name="Soft_Contaction"
                                        component={Checkbox}
                                        label="Contaction"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} >
                                    <Field
                                        name="Soft_Sigep"
                                        component={Checkbox}
                                        label="Sigep"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3} >
                                    <Field
                                        name="Soft_VisualStudio"
                                        component={Checkbox}
                                        label="Visual Studio"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} >
                                    <Field
                                        name="Soft_Observacao"
                                        component={TextField}
                                        label="Observações"
                                        placeholder='Observações'
                                        fullWidth
                                        multiline
                                    />
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12} >
                                    <div align='right'>
                                        {submitFailed &&
                                            <Typography variant='subtitle2' color='error'>
                                                Existem campos obrigatórios a serem preenchidos.
                                        </Typography>
                                        }
                                        <Button disabled={pristine || submitting} onClick={this.handleReset} className={classes.cancell} size='large'>Limpar</Button>
                                        <Button disabled={submitting} type='submit' variant='contained' color='primary' size='large'>Enviar</Button>
                                    </div>
                                </GridItem>
                            </GridContainer >
                        }
                        {isFetching &&
                            <GridContainer justify='center'>
                                <GridItem>
                                    <CircularProgress size={100} />
                                </GridItem>
                            </GridContainer>
                        }
                    </Paper>
                </form>
            </GridItem >
        )
    }
}

NovoColaborador = reduxForm({
    form: 'formNovoColaborador',
    validate
})(NovoColaborador)

const mapDispatchToProps = dispatch => bindActionCreators({ ...mailActions, ...newTaskActions }, dispatch)

const mapStatetoProps = state => ({
    isFetching: state.mail.isFetching,
    usuario: state.usuario.dados
})

export default connect(mapStatetoProps, mapDispatchToProps)(withStyles(styles)(NovoColaborador))