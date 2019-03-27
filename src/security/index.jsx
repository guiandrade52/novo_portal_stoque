import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { authActions } from '../redux-flow/_actions/auth.action';
import { appActions } from '../redux-flow/_actions/app.actions';

//CoreComponents
import { Login } from '../view/Login'
import App from '../App'

//Material  UI
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

//Configure Temes
import { themes } from '../assets/config';
import '../assets/css/app.css'
import Toastr from '../components/Alerts';

class AuthOrApp extends Component {

    componentWillMount() {
        const { dispatch, user } = this.props

        dispatch(appActions.changeTitle(themes.title))
        user && dispatch(authActions.token_validated(user.token))
    }

    render() {
        const { loggedIn } = this.props
        return (
            <MuiThemeProvider theme={themes.themeProvider}>
                <CssBaseline />
                <Toastr />
                {loggedIn && <App />}
                {!loggedIn && <Login />}
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = state => ({ ...state.auth })


export default connect(mapStateToProps)(AuthOrApp)