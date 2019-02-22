import { toastrActions } from "../_actions/toastr.actions";
import { authActions } from "../_actions/auth.action";


function checkErrorResponse(error, dispatch) {
    if (error.response.status === 401) {
        dispatch(toastrActions.warning('Sua sessão expirou, gentileza realizar login novamente.'))
        setTimeout(() => {
            dispatch(authActions.logout())
        }, 3000);
    }
    else {
        dispatch(toastrActions.error(error.response.data.MessageDetail))
    }
}

export const helpersActions = {
    checkErrorResponse
}