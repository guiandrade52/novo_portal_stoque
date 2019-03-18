import axios from "axios";
import { chartsConstants } from "../_constants";
import { appConfig } from "../../appConfig";
import { helpersActions } from "../_helpers";


const request = () => ({ type: chartsConstants.REQUEST })
const success = data => ({ type: chartsConstants.SUCCESS, payload: data })
const failure = error => ({ type: chartsConstants.FAILURE, payload: error })

const fetchChartLine = () => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Charts`)
        .then(resp => dispatch(success(resp.data)))
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const chartsActions = {
    fetchChartLine
}