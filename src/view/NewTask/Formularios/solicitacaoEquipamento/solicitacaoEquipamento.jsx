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
import { Sol_Equip_Mail } from '../../../../components/MailTemplates/solicitacaoEquipamentos';
import { configMail } from '../../../../appConfig';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

class SolicitacaoEquipamento extends Component {

    handleSubmit = (values) => {
        configMail.html = Sol_Equip_Mail(values)
        configMail.subject = 'Solicitação de equipamentos'
        configMail.formreset = 'formSolicitacaoEquipamento'

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
                                        <GridItem xs={12} sm={12} md={6} >
                                            < Field
                                                name="email_sol"
                                                component={TextField}
                                                label="Email"
                                                placeholder='Email do Solicitante'
                                                fullWidth
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={6} >
                                            < Field
                                                name="cargo_sol"
                                                component={TextField}
                                                label="Cargo"
                                                placeholder='Cargo do Solicitante'
                                                fullWidth
                                            />
                                        </GridItem>
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

const mapDispatchToProps = dispatch => bindActionCreators(mailActions, dispatch)

const mapStatetoProps = state => ({
    isFetching: state.mail.isFetching
})

export default connect(mapStatetoProps, mapDispatchToProps)(withStyles(styles)(SolicitacaoEquipamento))