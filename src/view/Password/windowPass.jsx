import React, { Component } from 'react'

//Redux-form
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { connect } from 'react-redux'

//Material UI
import { withStyles } from '@material-ui/core/styles';

//CoreComponents
import { GridContainer, GridItem } from '../../components/Grids';
import { Paper, CircularProgress, Typography, Button } from '@material-ui/core';
import { TextField } from '../../components/Fields';
import { bindActionCreators } from '../../../../../../../../Users/fagner.gomes/AppData/Local/Microsoft/TypeScript/3.4/node_modules/redux';
import { usuarioActions, loginActions } from '../../redux-flow/_actions';

const styles = theme => ({
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        margin: 0
    },
    contentButton: {
        margin: 20
    }
});


class WindowPassword extends Component {

    handleSubmit = (values) => {
        if (!values.password1)
            throw new SubmissionError({ password1: 'Informe a senha' })

        if (!values.password2)
            throw new SubmissionError({ password2: 'Repita a senha' })

        if (values.password1 !== values.password2)
            throw new SubmissionError({ password1: 'Senhas não conferem', password2: 'Senhas não conferem' })

        this.props.changePassword({ password: values.password1, id: this.props.usuario.IdUsuario, codigo: 34653670 })
    }

    render() {
        const { classes, isFetching, handleSubmit, resetPassword, usuario } = this.props
        return (

            <div className={classes.container}>
                <Paper className={classes.paper}>
                    {!isFetching &&
                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                            <GridContainer spacing={8}>
                                <GridItem xs={12} sm={12} md={12} >
                                    <Typography align='center' variant='h6'>
                                        Nova senha
                                            </Typography>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} >
                                    < Field
                                        name="password1"
                                        component={TextField}
                                        label="Senha"
                                        placeholder='Nova Senha'
                                        fullWidth
                                        type="password"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} >
                                    < Field
                                        name="password2"
                                        component={TextField}
                                        label="Repita a senha"
                                        placeholder='Repita a senha'
                                        fullWidth
                                        type="password"
                                    />
                                </GridItem>
                            </GridContainer>
                            <div align='right' className={classes.contentButton}>
                                <Button onClick={() => resetPassword(false)} disabled={(usuario.AltPassword === 'S' || usuario.PassCript === 0) ? true : false} style={{ float: 'left' }} className={classes.buttons} >Cancelar</Button>
                                <Button type='submit' className={classes.buttons} color='primary' variant='outlined' >Salvar</Button>
                            </div>
                        </form>
                    }
                    {isFetching &&
                        <GridItem xs={12} sm={12} md={12} >
                            <div align='center'>
                                <CircularProgress size={150} />
                            </div>
                        </GridItem>
                    }
                </Paper>
            </div>
        )
    }
}

WindowPassword = reduxForm({
    form: 'formRestPassword',
})(WindowPassword)

const mapStateToProps = state => ({
    usuario: state.usuario.dados,
    open: state.login.passExpired,
    isFetching: state.login.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...usuarioActions, ...loginActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(WindowPassword))