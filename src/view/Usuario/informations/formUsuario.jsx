import React, { Component } from 'react'

//Redux
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

//Material UI
import { withStyles } from '@material-ui/core/styles';
import { Chip, Typography, Avatar } from '@material-ui/core';

//CoreComponents
import { TextField, Checkbox } from '../../../components/Fields';
import { GridContainer, GridItem } from '../../../components/Grids';
import { normalizePhone } from '../../../components/NormalizeReduxForm';

const styles = theme => ({
    root: { margin: 10 },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
    },
    chip: {
        margin: theme.spacing.unit,
    },
})

class FormUsuario extends Component {
    render() {
        const { handleSubmit, classes, edit } = this.props
        return (
            <div className={classes.root}>
                <form onSubmit={handleSubmit}>
                    <GridContainer spacing={24} justify='center' align='center'>
                        <GridItem xs={12} sm={12} md={5} >
                            <Field
                                name="Nome"
                                component={TextField}
                                label="Nome"
                                placeholder='Nome'
                                fullWidth
                                disabled={!edit}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3} >
                            <Field
                                name="Telefone"
                                component={TextField}
                                label="Telefone"
                                placeholder='Telefone'
                                fullWidth
                                normalize={normalizePhone}
                                disabled={!edit}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} >
                            <Field
                                name="Email"
                                component={TextField}
                                label="E-mail"
                                placeholder='E-mail'
                                fullWidth
                                disabled={!edit}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} >
                            <Field
                                name="perfil"
                                component={TextField}
                                label="Perfil"
                                placeholder='Perfil'
                                fullWidth
                                disabled={true}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2} >
                            <Field
                                name="registraOcor"
                                component={Checkbox}
                                label="Registra Ocorrência"
                                disabled={true}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} >
                            <Typography variant='subtitle1'>
                                Contratos
                            </Typography>
                            {this.props.contratos.map((contrato, key) =>
                                <Chip
                                    key={key}
                                    avatar={<Avatar>{contrato.Contrato}</Avatar>}
                                    label={`${contrato.CodParc} - ${contrato.Nome}`}
                                    className={classes.chip}
                                />
                            )}
                            {this.props.contratos.length === 0 &&
                                <Typography>
                                    Não encontramos nenhum contrato cadastrado para este usuário.
                                    </Typography>
                            }
                        </GridItem>
                    </GridContainer>
                </form>
            </div>
        )
    }
}

FormUsuario = reduxForm({
    form: 'formUsuario',
})(FormUsuario)

const mapStateToProps = state => ({
    initialValues: state.usuario.dados,
    edit: state.usuario.edit,
    contratos: state.usuario.dados.contratos ? state.usuario.dados.contratos : []
})

export default connect(mapStateToProps)(withStyles(styles)(FormUsuario))