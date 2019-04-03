import { requestServices } from "../_services";
import { serieConstants } from "../_constants/serie.constants";
import { helpersActions } from "../_helpers";
import axios from 'axios'
import { appConfig } from "../../appConfig";
import { stepActions } from "./step.actions";

const request = () => ({ type: serieConstants.REQUEST })
const success = (series) => ({ type: serieConstants.SUCCESS, payload: series })
const failure = () => ({ type: serieConstants.FAILURE })

const requestDetails = () => ({ type: serieConstants.REQUEST_DETAILS })
const successDetails = (series) => ({ type: serieConstants.SUCCESS_DETAILS, payload: series })
const failureDetails = () => ({ type: serieConstants.FAILURE_DETAILS })

const fetchSeries = (search = '') => dispatch => {
    dispatch(request())
    requestServices.get('Serie', { search })
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}


const fetchSeriesSteppInterno = (contrato, codProd, codGrupo) => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Serie`, { params: { contrato, codProd, codGrupo } })
        .then(resp => {
            dispatch(success(resp.data))
            if (!resp.data[0].Controle)
                dispatch(stepActions.next(3))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const fetchSerieParcCon = (serieParcCon = '') => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Serie`, { params: { serieParcCon } })
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const fetchSerieDetails = serie => dispatch => {
    dispatch(requestDetails())
    requestServices.get('Serie', { serie })
        .then(resp => {
            dispatch(successDetails(resp.data))
        })
        .catch(error => {
            dispatch(failureDetails())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const serieActions = {
    fetchSeries,
    fetchSerieDetails,
    fetchSeriesSteppInterno,
    fetchSerieParcCon
}