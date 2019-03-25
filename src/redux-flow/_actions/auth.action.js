import { authConstants } from "../_constants";
import { authService } from "../_services/auth.service";
import { toastrActions } from "./toastr.actions";
import { helpersActions } from "../_helpers";
import { cryptoServices } from "../_services/crypto";

const request = username => ({ type: authConstants.REQUEST, payload: username })
const success = token => ({ type: authConstants.SUCCESS, payload: token })
const failure = error => ({ type: authConstants.FAILURE, payload: error })

const login = (username, password) => dispatch => {
    dispatch(request(username))
    authService.login(username, password)
        .then(token => {
            dispatch(success({ token, username: cryptoServices.crypt(username), password: cryptoServices.crypt(password) }))
        },
            error => {
                dispatch(failure(error))
                helpersActions.checkErrorResponse(error, dispatch)
            }
        )
}

const logout = () => dispatch => {
    dispatch(toastrActions.warning('Obrigado pela visita, sempre que necessario retorne para acompanhar sua ocorrência'))
    dispatch({ type: authConstants.LOGOUT })
}

const token_validated = token => dispatch => {
    authService.validatedToken(token)
        .then(
            success => { },
            error => helpersActions.checkErrorResponse(error, dispatch)
        )

    return { type: authConstants.TOKEN_VALIDATED }
}

const sectionExpired = status => ({ type: authConstants.SECTION, payload: status })

export const authActions = {
    login,
    logout,
    token_validated,
    sectionExpired
}