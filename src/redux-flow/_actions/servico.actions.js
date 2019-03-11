import axios from "axios";
import { servicoConstants } from "../_constants";
import { appConfig } from "../../appConfig";
import { helpersActions } from "../_helpers";

const request = () => ({ type: servicoConstants.REQUEST })
const success = servicos => ({ type: servicoConstants.SUCCESS, payload: servicos })
const failure = () => ({ type: servicoConstants.FAILURE })

const fetchServicos = () => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Servico`)
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            helpersActions.checkErrorResponse(error, dispatch)
            dispatch(failure())
        })
}

export const servicoActions = {
    fetchServicos
}