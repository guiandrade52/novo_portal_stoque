import axios from 'axios'
import { appConfig } from "../../appConfig";
import { parceiroAbConstants, parceiroAtConstants } from "../_constants";
import { helpersActions } from "../_helpers";

const requestAb = () => ({ type: parceiroAbConstants.REQUEST })
const successAb = parceiros => ({ type: parceiroAbConstants.SUCCESS, payload: parceiros })
const failureAb = () => ({ type: parceiroAbConstants.FAILURE })

const requestAt = () => ({ type: parceiroAtConstants.REQUEST })
const successAt = parceiros => ({ type: parceiroAtConstants.SUCCESS, payload: parceiros })
const failureAt = () => ({ type: parceiroAtConstants.FAILURE })

const fetchParceiroAb = (search = '') => dispatch => {
    dispatch(requestAb())
    axios.get(`${appConfig.URL_BASE}/api/ParceiroAb`, { params: { search } })
        .then(resp => {
            dispatch(successAb(resp.data))
        })
        .catch(error => {
            dispatch(failureAb())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const fetchParceiroAt = (search = '') => dispatch => {
    dispatch(requestAt())
    axios.get(`${appConfig.URL_BASE}/api/ParceiroAt`, { params: { search } })
        .then(resp => {
            dispatch(successAt(resp.data))
        })
        .catch(error => {
            dispatch(failureAt())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}
export const parceirosActions = {
    fetchParceiroAb,
    fetchParceiroAt
}