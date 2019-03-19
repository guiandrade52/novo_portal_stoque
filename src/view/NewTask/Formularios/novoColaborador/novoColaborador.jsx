import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field } from 'redux-form'

import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

import { Divider } from 'semantic-ui-react';

//Normalize Redux From
import normalizePhone from '../../../../components/NormalizeReduxForm/normalizePhone';
import { validate } from './validate'

//CoreComponents
import { GridItem, GridContainer } from '../../../../components/Grids';
import { Field as TextField, Checkbox } from '../../../../components/Fields';


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

    render() {
        const { handleSubmit, classes, submitting, pristine, submitFailed } = this.props
        console.log(this.props)
        return (
            <GridItem xs={12} sm={12} md={12}>
                <form onSubmit={handleSubmit}>
                    <Paper className={classes.root} elevation={1}>
                        <GridContainer spacing={16}>

                            <GridItem xs={12} sm={12} md={12} >
                                <Typography variant='h6' align='center'>
                                    Dados do solicitante
                                </Typography>
                                <Divider />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={6} >
                                < Field
                                    name="Sol_Solicitante"
                                    component={TextField}
                                    label="Solicitante"
                                    placeholder='Nome do Solicitante'
                                    fullWidth
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6} >
                                < Field
                                    name="Sol_Setor"
                                    component={TextField}
                                    label="Setor"
                                    placeholder='Setor'
                                    fullWidth
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6} >
                                < Field
                                    name="Sol_Cargo"
                                    component={TextField}
                                    label="Cargo"
                                    placeholder='Cargo'
                                    fullWidth
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6} >
                                < Field
                                    name="Sol_Telefone"
                                    component={TextField}
                                    label="Telefone"
                                    placeholder='Telefone ou Ramal'
                                    fullWidth
                                    normalize={normalizePhone}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6} >
                                < Field
                                    name="Sol_Email"
                                    component={TextField}
                                    label="E-mail"
                                    placeholder='E-mail'
                                    fullWidth
                                />
                            </GridItem>

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
                                    Dados sobre Instalações, Hardware e Periféricos
                                </Typography>
                                <Divider />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={12}>
                                <Typography variant='subtitle1'>
                                    Selecione quais equipamentos o usuário necessitará
                                </Typography>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} >
                                <Field
                                    name="Hard_Gabinete"
                                    component={Checkbox}
                                    label="Gabinete"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} >
                                <Field
                                    name="Hard_Monitor"
                                    component={Checkbox}
                                    label="Monitor"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} >
                                <Field
                                    name="Hard_Notebook"
                                    component={Checkbox}
                                    label="Notebook"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} >
                                <Field
                                    name="Hard_Teclado"
                                    component={Checkbox}
                                    label="Teclado"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} >
                                <Field
                                    name="Hard_Mouse"
                                    component={Checkbox}
                                    label="Mouse"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} >
                                <Field
                                    name="Hard_Celular"
                                    component={Checkbox}
                                    label="Celular Corporativo"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} >
                                <Field
                                    name="Hard_Chip"
                                    component={Checkbox}
                                    label="Chip Corporativo"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2} >
                                <Field
                                    name="Hard_Telefone"
                                    component={Checkbox}
                                    label="Telefone"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4} >
                                <Field
                                    name="Hard_EquipamentosDisponiveis"
                                    component={Checkbox}
                                    label="Irá utilizar os equipamentos disponíveis"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4} >
                                <Field
                                    name="Hard_NaoNecessitaEquipamentos"
                                    component={Checkbox}
                                    label="Não necessita nenhum equipamento"
                                />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={12} >
                                <Field
                                    name="Hard_Observacao"
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
                    </Paper>
                </form>
            </GridItem >
        )
    }
}

NovoColaborador = reduxForm({
    form: 'formNovoColaborador',
    destroyOnUnmount: false,
    validate
})(NovoColaborador)

export default withStyles(styles)(NovoColaborador)