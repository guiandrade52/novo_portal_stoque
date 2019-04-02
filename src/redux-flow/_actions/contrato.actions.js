import { contratoConstants } from "../_constants";
import { helpersActions } from "../_helpers";
import axios from 'axios';
import { appConfig } from "../../appConfig";

const request = () => ({ type: contratoConstants.REQUEST })
const success = contratos => ({ type: contratoConstants.SUCCESS, payload: contratos })
const failure = () => ({ type: contratoConstants.FAILURE })

const request_details = () => ({ type: contratoConstants.REQUEST_DETAILS })
const success_details = contratos => ({ type: contratoConstants.SUCCESS_DETAILS, payload: contratos })
const failure_details = () => ({ type: contratoConstants.FAILURE_DETAILS })

const fetchContratos = (search = '') => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Contrato`, { params: { search } })
        .then(resp => dispatch(success(resp.data)))
        .catch(error => {
            helpersActions.checkErrorResponse(error, dispatch)
            dispatch(failure())
        })
}

const fetchContratoDetails = contrato => dispatch => {
    dispatch(request_details())
    axios.get(`${appConfig.URL_BASE}/api/Contrato`, { params: { contrato } })
        .then(resp => dispatch(success_details(resp.data)))
        .catch(error => {
            helpersActions.checkErrorResponse(error, dispatch)
            dispatch(failure_details())
        })
}

const fetchContratoPParceiro = parceiros => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Contrato`, { params: { parceiros } })
        .then(resp => dispatch(success(resp.data)))
        .catch(error => {
            helpersActions.checkErrorResponse(error, dispatch)
            dispatch(failure())
        })
}

export const contratoActions = {
    fetchContratos,
    fetchContratoDetails,
    fetchContratoPParceiro
}