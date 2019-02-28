import { toastrActions } from "../_actions/toastr.actions";
import { authActions } from "../_actions/auth.action";


function checkErrorResponse(error, dispatch) {
    if (!error.response && error.message === 'Network Error') {
        dispatch(toastrActions.error(`${error.message}: O servidor remoto encontra-se offiline, gentileza entrar em contato com suporte.`))
        return
    }

    if (error.response.status === 401) {
        dispatch(toastrActions.warning('Sua sessão expirou, gentileza realizar login novamente.'))
        setTimeout(() => {
            dispatch(authActions.logout())
        }, 3000);
    }
    else if (error.response.data.error === "invalid_login") {
        dispatch(toastrActions.error(error.response.data.error_description))
    }
    else
        dispatch(toastrActions.error(error.response.data.MessageDetail))
}

export const helpersActions = {
    checkErrorResponse
}