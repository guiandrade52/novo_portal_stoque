import axios from "axios";
import { contatoConstants } from "../_constants";
import { requestServices } from "../_services";
import { helpersActions } from "../_helpers";
import { appConfig } from "../../appConfig";

const request = () => ({ type: contatoConstants.REQUEST })
const success = contatos => ({ type: contatoConstants.SUCCESS, payload: contatos })
const failure = () => ({ type: contatoConstants.FAILURE })

const fetchContatoSemSerie = (contrato, codParc, search = '') => dispatch => {
    dispatch(request())
    requestServices.get('contato', { contrato, codParc, search })
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const fetchContatoComSerie = (serie) => dispatch => {
    dispatch(request())
    requestServices.get('contato', { serie })
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const fetchContatos = (search = '') => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Contato`, { params: { search } })
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const contatoActions = {
    fetchContatoSemSerie,
    fetchContatoComSerie,
    fetchContatos
}