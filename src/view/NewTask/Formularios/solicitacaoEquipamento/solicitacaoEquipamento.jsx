import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';

//CoreComponents
import { GridItem, GridContainer } from '../../../../components/Grids';
import { TextField, Checkbox } from '../../../../components/Fields';
import { Divider } from 'semantic-ui-react';
import { bindActionCreators } from '../../../../../../../../../../Users/fagner.gomes/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux';
import { mailActions } from '../../../../redux-flow/_actions/mail.actions';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

class SolicitacaoEquipamento extends Component {

    handleSubmit = (values) => {
        this.props.sendMail(values)
    }

    render() {
        const { classes, handleSubmit } = this.props
        return (
            <GridContainer spacing={16}>
                <GridItem xs={12} sm={12} md={12}>
                    <Paper elevation={1} className={classes.paper}>
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <GridContainer spacing={16}>
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
                            </GridContainer>
                        </form>
                    </Paper>
                </GridItem>
            </GridContainer>
        )
    }
}

SolicitacaoEquipamento = reduxForm({
    form: 'formNovoColaborador'
})(SolicitacaoEquipamento)

const mapDispatchToProps = dispatch => bindActionCreators(mailActions, dispatch)

export default connect(null, mapDispatchToProps)(withStyles(styles)(SolicitacaoEquipamento))