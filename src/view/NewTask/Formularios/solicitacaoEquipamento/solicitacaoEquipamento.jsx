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
import { bindActionCreators } from 'redux';
import { mailActions } from '../../../../redux-flow/_actions/mail.actions';
import { Sol_Equip_Mail, getHardwares } from '../../../../components/MailTemplates/solicitacaoEquipamentos';
import { configMail, Ocor_Template } from '../../../../appConfig';
import { newTaskActions } from '../../../../redux-flow/_actions/newTask.actions';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

class SolicitacaoEquipamento extends Component {

    handleSubmit = (values) => {
        configMail.html = Sol_Equip_Mail({ ...values, ...this.props.usuario })
        configMail.assunto = 'Equipamentos de TI'
        configMail.formreset = 'formSolicitacaoEquipamento'

        this.props.sendMail(configMail)

        const objeto = Ocor_Template({ ...values, ...this.props.usuario })
        objeto.Descricao = `Eu ${this.props.usuario.Nome.trim()}, solicito os seguintes equipamentos:
${getHardwares(values)}
                
Observação: ${values.observacoes ? values.observacoes : 'Não possui'}

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
                                                Hardware e Periféricos
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
                                                name="Gabinete"
                                                component={Checkbox}
                                                label="Gabinete"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            <Field
                                                name="Monitor"
                                                component={Checkbox}
                                                label="Monitor"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            <Field
                                                name="Notebook"
                                                component={Checkbox}
                                                label="Notebook"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            <Field
                                                name="Teclado"
                                                component={Checkbox}
                                                label="Teclado"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            <Field
                                                name="Mouse"
                                                component={Checkbox}
                                                label="Mouse"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            <Field
                                                name="Celular"
                                                component={Checkbox}
                                                label="Celular Corporativo"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            <Field
                                                name="Chip"
                                                component={Checkbox}
                                                label="Chip Corporativo"
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={2} >
                                            <Field
                                                name="Telefone"
                                                component={Checkbox}
                                                label="Telefone Headset"
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={12} >
                                            <Field
                                                name="Observacao"
                                                component={TextField}
                                                label="Observações"
                                                placeholder='Observações do usuário'
                                                fullWidth
                                                multiline
                                            />
                                        </GridItem>

                                        <GridItem xs={12} sm={12} md={12}>
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
        'email_sol',
        'cargo_sol'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Campo obrigatório'
        }
    })
    if (values.email_sol && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.v)) {
        errors.email_sol = 'E-mail inválido.'
    }
    return errors
}

SolicitacaoEquipamento = reduxForm({
    form: 'formSolicitacaoEquipamento',
    validate
})(SolicitacaoEquipamento)

const mapDispatchToProps = dispatch => bindActionCreators({ ...mailActions, ...newTaskActions }, dispatch)

const mapStatetoProps = state => ({
    isFetching: state.mail.isFetching,
    usuario: state.usuario.dados
})

export default connect(mapStatetoProps, mapDispatchToProps)(withStyles(styles)(SolicitacaoEquipamento))