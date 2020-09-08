import React, { Component } from 'react'
//Material UI
import { withStyles } from '@material-ui/core/styles'

//CoreComponents
import Register from './register';
import CheckLogin from './checkLogin';
import Login from './login';
import CheckCodigo from './checkCodigo';
import CheckPassword from './checkPassword';

//Redux
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'

//Background
import { Slide } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { usuarioActions, loginActions } from '../../redux-flow/_actions';

const styles = theme => ({
    root: {
        backgroundImage: theme.login_background,
        backgroundSize: 'cover',
        height: '100%',
        alignContent: 'center'
    },
})

class Main extends Component {

    handleSubimitCadastro = values => this.props.sendMailCadastro(values)

    handleSubimitValidaLogin = login => this.props.validaLogin(login)

    handleSubmitCodigo = codigo => {
        codigo.id = this.props.id
        this.props.validaCodigo(codigo)
    }

    handleSubmitChangePassword = values => {
        if (!values.password1)
            throw new SubmissionError({ password1: 'Informe a senha' })

        if (!values.password2)
            throw new SubmissionError({ password2: 'Repita a senha' })

        if (values.password1 !== values.password2)
            throw new SubmissionError({ password1: 'Senhas não conferem', password2: 'Senhas não conferem' })

        this.props.changePassword({ password: values.password1, id: this.props.id, codigo: this.props.codigo })
    }

    render() {
        const { classes, isSendMailCadastro, checkCodigo, checkPassword, register, checkLogin, home } = this.props
        return (
            <div className={classes.root} align='center'>
                <Slide direction="left" in={register} mountOnEnter unmountOnExit style={{ transitionDelay: register ? '400ms' : '0ms' }}>
                    <Register isSendMail={isSendMailCadastro} onSubmit={this.handleSubimitCadastro} />
                </Slide>

                <Slide direction="left" in={checkLogin} mountOnEnter unmountOnExit style={{ transitionDelay: checkLogin ? '400ms' : '0ms' }}>
                    <CheckLogin onSubmit={this.handleSubimitValidaLogin} />
                </Slide>

                <Slide direction="left" in={checkCodigo} mountOnEnter unmountOnExit style={{ transitionDelay: checkCodigo ? '400ms' : '0ms' }}>
                    <CheckCodigo onSubmit={this.handleSubmitCodigo} />
                </Slide>

                <Slide direction="left" in={checkPassword} mountOnEnter unmountOnExit style={{ transitionDelay: checkPassword ? '400ms' : '0ms' }}>
                    <CheckPassword onSubmit={this.handleSubmitChangePassword} />
                </Slide>

                <Slide direction="left" in={home} mountOnEnter unmountOnExit style={{ transitionDelay: home ? '400ms' : '0ms' }}>
                    <Login />
                </Slide>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    isSendMailCadastro: state.usuario.isSendMail,
    ...state.login
})

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMailCadastro: usuarioActions.sendMail,
    ...loginActions,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main))