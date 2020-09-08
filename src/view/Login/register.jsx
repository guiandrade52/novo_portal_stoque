import React from 'react'

// @material-ui-core/style
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography, Button, CircularProgress } from '@material-ui/core';

//Redux-form
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

//CoreComponents
import { Divider } from 'semantic-ui-react';
import { GridContainer, GridItem } from '../../components/Grids';
import { TextField } from '../../components/Fields';
import { normalizePhone, cnpj_cpfNormalise } from '../../components/NormalizeReduxForm';
import { bindActionCreators } from 'redux';
import { loginActions } from '../../redux-flow/_actions';

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginRight: 280,
        marginLeft: 280,
        marginTop: 30
    },
    actions: {
        marginTop: 10,
    },
    buttons: {
        margin: 10
    }
});


const validate = values => {
    const errors = {}
    const requiredFields = [
        'nome',
        'telefone',
        'email',
        'cnpj',
        'empresa',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Campo obrigatório'
        }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'E-mail inválido.'
    }
    return errors
}

let Register = ({ classes, handleSubmit, changeWindow, isFetching }) => {
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {!isFetching &&
                    <form onSubmit={handleSubmit}>
                        <GridContainer spacing={16}>
                            <GridItem xs={12} sm={12} md={12} >
                                <Typography variant='h6' align='center'>
                                    Cadastrar novo usuário
                                </Typography>
                                <Divider />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12} >
                                < Field
                                    name="nome"
                                    component={TextField}
                                    label="Nome"
                                    placeholder='Nome Completo'
                                    fullWidth
                                />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={12} >
                                < Field
                                    name="telefone"
                                    component={TextField}
                                    label="Telefone"
                                    placeholder='(31) 9999-9999'
                                    fullWidth
                                    normalize={normalizePhone}
                                />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={12} >
                                < Field
                                    name="email"
                                    component={TextField}
                                    label="E-mail"
                                    placeholder='email@dominio.com.br'
                                    fullWidth
                                />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={12} >
                                < Field
                                    name="cnpj"
                                    component={TextField}
                                    label="CNPJ/CPF"
                                    placeholder='Ex. 01.001.001/0001-01'
                                    fullWidth
                                    normalize={cnpj_cpfNormalise}
                                />
                            </GridItem>

                            <GridItem xs={12} sm={12} md={12} >
                                < Field
                                    name="empresa"
                                    component={TextField}
                                    label="Empresa/Unidade"
                                    placeholder='Empresa/Unidade'
                                    fullWidth
                                />
                            </GridItem>
                        </GridContainer>
                        <div align='right' className={classes.actions}>
                            <Button className={classes.buttons} onClick={() => changeWindow('home')}>Voltar</Button>
                            <Button type='submit' className={classes.buttons} color='primary' variant='outlined' >Enviar</Button>
                        </div>
                    </form>
                }
                {isFetching &&
                    <div align='center' >
                        <CircularProgress size={150} />
                    </div>
                }
            </Paper>
        </div>
    )
}

Register = reduxForm({
    form: 'formRegister',
    destroyOnUnmount: false,
    validate
})(Register)

const mapStateToProps = state => ({ ...state.login })

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register))