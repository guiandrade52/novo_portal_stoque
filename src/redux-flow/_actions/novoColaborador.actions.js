import { novoColaboradorConstants } from "../_constants/novoColaborador.constants";
import axios from 'axios';
import { appConfig } from "../../appConfig";
import { helpersActions } from "../_helpers";
import { novoColaboradorServices } from "../_services/novoColaborador.services";

const request = () => ({ type: novoColaboradorConstants.REQUEST })
const success = ocorrencia => ({ type: novoColaboradorConstants.SUCCESS, payload: ocorrencia })
const failure = () => ({ type: novoColaboradorConstants.FAILURE })

const postNewColaborador = data => dispatch => {
    dispatch(request())
    axios.post(`${appConfig.URL_BASE}/api/NovoColaborador`, novoColaboradorServices.serialize(data))
        .then(resp => {
            dispatch(success())
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const novoColaboradorActions = {
    postNewColaborador
}