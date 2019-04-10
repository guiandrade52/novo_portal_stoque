import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

//Redux-form
import { reduxForm, Field, SubmissionError } from 'redux-form'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { usuarioActions, loginActions } from '../../redux-flow/_actions';
import { GridContainer, GridItem } from '../../components/Grids';
import { Paper, CircularProgress } from '@material-ui/core';
import { TextField } from '../../components/Fields';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    container: {
        marginTop: 50
    },
    contentButton: {
        marginTop: 20
    }
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RestPassword extends React.Component {

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
        const { classes, handleSubmit, usuario, open, isFetching, resetPassword } = this.props;
        return (
            <div>
                <Dialog fullScreen open={open} onClose={resetPassword} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton onClick={() => resetPassword(false)} disabled={usuario.AltPassword === 'S' ? true : false} color="inherit" aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                Alterar senha
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <GridContainer spacing={16} alignItems="flex-end" justify='center'>
                        <GridItem xs={4} sm={4} md={4}>
                            <div className={classes.container}>
                                <Paper className={classes.paper}>
                                    {!isFetching &&
                                        <form onSubmit={handleSubmit(this.handleSubmit)}>
                                            <GridContainer spacing={8}>
                                                <GridItem xs={12} sm={12} md={12} >
                                                    <Typography align='center' variant='h6'>
                                                        Alterar a senha
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
                                                <Button onClick={() => resetPassword(false)} disabled={usuario.AltPassword === 'S' ? true : false} style={{ float: 'left' }} className={classes.buttons} >Cancelar</Button>
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
                        </GridItem>
                    </GridContainer>
                </Dialog>
            </div>
        );
    }
}


RestPassword = reduxForm({
    form: 'formRestPassword',
})(RestPassword)

const mapStateToProps = state => ({
    usuario: state.usuario.dados,
    open: state.login.passExpired,
    isFetching: state.login.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...usuarioActions, ...loginActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RestPassword))
