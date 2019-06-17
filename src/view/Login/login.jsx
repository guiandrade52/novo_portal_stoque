import React from 'react'

// @material-ui 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { Typography, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

// Components core
import { GridContainer } from '../../components/Grids'
import { GridItem } from '../../components/Grids'

//Semantic UI
import { Divider } from 'semantic-ui-react';

// Redux
import { connect } from 'react-redux'
import { authActions } from '../../redux-flow/_actions/auth.action';
import { bindActionCreators } from 'redux';
import { loginActions } from '../../redux-flow/_actions';

const styles = theme => ({
    container: {
        padding: theme.spacing.unit * 2,
        marginTop: '25vh',
        color: '#fff',
        margin: 30
    },
    button: {
        margin: theme.spacing.unit * 2
    },
    buttonRegister: {
        margin: theme.spacing.unit * 2,
        float: 'right'
    },

})

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        submitted: false,
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state

        if (username && password) {
            this.props.login(username, password)
        }
    }
    render() {
        const { classes, title, loggedIn, loading, changeWindow } = this.props
        const { submitted, password, username } = this.state
        return (
            < GridContainer direction="row" justify="center" alignItems="center">
                <GridItem >
                    <Paper>
                        <div className={classes.container}>
                            <Typography variant='h3' align='center' color='primary'>
                                {title}
                            </Typography>
                            <Divider />
                            <Typography align='center'>
                                SEJA BEM VINDO
                        </Typography>
                            <Divider />
                            <form name="form" onSubmit={e => this.handleSubmit(e)}>
                                <GridItem>
                                    <TextField
                                        name='username'
                                        label='Usuário'
                                        fullWidth
                                        disabled={submitted && loggedIn}
                                        onChange={e => this.handleChange(e)}
                                        error={(submitted && !username)}
                                    />
                                </GridItem>
                                <GridItem>
                                    <TextField
                                        name='password'
                                        label='Senha'
                                        fullWidth
                                        type='password'
                                        disabled={submitted && loggedIn}
                                        onChange={e => this.handleChange(e)}
                                        error={(submitted && !password)}
                                    />
                                </GridItem>
                                <GridItem>
                                    <Button disabled={submitted && loggedIn} className={classes.button} type='submit' color="primary" variant="outlined">Login</Button>
                                    <Button onClick={() => changeWindow('register')} disabled={submitted && loggedIn} className={classes.buttonRegister} color="primary" variant="outlined">Registrar</Button>
                                    <div align='center'>
                                        {<Button onClick={() => changeWindow('checkLogin')} disabled={submitted && loggedIn} variant="text">Esqueci a senha</Button>}
                                    </div>
                                </GridItem>
                            </form>
                            {submitted && loading && <LinearProgress />}
                        </div>
                    </Paper>
                </GridItem>
            </GridContainer>
        )
    }
}
const mapStateToProps = state => ({
    title: state.app.title,
    ...state.auth
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...loginActions, ...authActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))