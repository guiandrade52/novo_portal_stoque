import { authConstants } from "../_constants";
import { authService } from "../_services/auth.service";
import { toastrActions } from "./toastr.actions";
import { helpersActions } from "../_helpers";

const request = username => ({ type: authConstants.REQUEST, payload: username })
const success = token => ({ type: authConstants.SUCCESS, payload: { token } })
const failure = error => ({ type: authConstants.FAILURE, payload: error })

const login = (username, password) => dispatch => {
    dispatch(request(username))
    authService.login(username, password)
        .then(token => dispatch(success(token)),
            error => {
                dispatch(failure(error))
                dispatch(toastrActions.error(error))
            }
        )
}


const logout = () => ({ type: authConstants.LOGOUT })

const token_validated = token => dispatch => {
    authService.validatedToken(token)
        .then(
            success => { },
            error => helpersActions.checkErrorResponse(error, dispatch)
        )

    return { type: authConstants.TOKEN_VALIDATED }
}

export const authActions = {
    login,
    logout,
    token_validated
}