import { requestServices } from "../_services";
import { serieConstants } from "../_constants/serie.constants";
import { helpersActions } from "../_helpers";

const request = () => ({ type: serieConstants.REQUEST })
const success = (series) => ({ type: serieConstants.SUCCESS, payload: series })
const failure = () => ({ type: serieConstants.FAILURE })

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

const requestDetails = () => ({ type: serieConstants.REQUEST_DETAILS })
const successDetails = (series) => ({ type: serieConstants.SUCCESS_DETAILS, payload: series })
const failureDetails = () => ({ type: serieConstants.FAILURE_DETAILS })

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
    fetchSerieDetails
}