import { contratoConstants } from "../_constants";
import { requestServices } from "../_services";
import { helpersActions } from "../_helpers";

const request = () => ({ type: contratoConstants.REQUEST })
const success = contratos => ({ type: contratoConstants.SUCCESS, payload: contratos })
const failure = () => ({ type: contratoConstants.FAILURE })

const fetchContratos = (search = '') => dispatch => {
    dispatch(request())
    requestServices.get('Contrato', { search })
        .then(resp => dispatch(success(resp.data)))
        .catch(error => {
            helpersActions.checkErrorResponse(error, dispatch)
            dispatch(failure())
        })
}

const fetchContratoDetails = (contrato) => dispatch => {
    dispatch(request())
    requestServices.get('Contrato', contrato)
        .then(resp => dispatch(success(resp.data)))
        .catch(error => {
            helpersActions.checkErrorResponse(error, dispatch)
            dispatch(failure())
        })
}

export const contratoActions = {
    fetchContratos,
    fetchContratoDetails
}