import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { authActions } from '../../redux-flow/_actions/auth.action';

// @material-ui-core/style
import { withStyles } from '@material-ui/core/styles'

// @material-ui 
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

// Components core
import Alert from '../../components/Alerts'
import { GridContainer } from '../../components/Grids'
import { GridItem } from '../../components/Grids'
import { Typography, LinearProgress } from '@material-ui/core';

const styles = theme => ({
    root: {
        background: theme.palette.primary.main,
        height: 'inherit',
    },
    container: {
        padding: theme.spacing.unit * 2,
        marginTop: '25vh',
        color: '#fff',
    },
    button: {
        margin: theme.spacing.unit * 2
    },
    buttonRegister: {
        margin: theme.spacing.unit * 2,
        float: 'right'
    }
})


class Login extends Component {

    state = {
        username: '',
        password: '',
        submitted: false
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state
        const { dispatch } = this.props

        if (username && password) {
            dispatch(authActions.login(username, password))
        }
    }

    render() {
        const { username, password, submitted } = this.state
        const { classes, title, loggedIn, error, loading } = this.props
        return (
            <div className={classes.root}>
                <GridContainer direction="row" justify="center" alignItems="center">
                    <Alert />
                    <GridItem >
                        <Paper>
                            <div className={classes.container}>
                                <Typography variant='h3' align='center' color='primary'>
                                    {title}
                                </Typography>
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
                                        <Button disabled={submitted && loggedIn} className={classes.buttonRegister} color="primary" variant="outlined">Registrar</Button>
                                        <div align='center'>
                                            {error && <Button disabled={submitted && loggedIn} variant="text">Esqueci a senha</Button>}
                                        </div>
                                    </GridItem>
                                </form>
                                {submitted && loading && <LinearProgress />}
                            </div>
                        </Paper>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    title: state.app.title,
    ...state.auth
})

export default connect(mapStateToProps)(withStyles(styles)(Login))