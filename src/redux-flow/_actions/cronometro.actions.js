import { cronometroConstants } from "../_constants";
import { loginActions } from "./login.actions";

const change = values => ({ type: cronometroConstants.CHANGE, payload: values })
const reset = () => ({ type: cronometroConstants.RESET })

let interval = null

const startCronometro = timestemp => dispatch => {
    let minut = ((timestemp / 60) - 1) > 0 ? ((timestemp / 60) - 1) : 0
    let second = timestemp < 60 ? timestemp : 59
    interval = setInterval(() => {

        if (second === 0 && minut === 0) {
            clearInterval(interval)
            dispatch(loginActions.failure_mail())
        }

        timestemp--

        if (second === -1) {
            second = 59
            minut--
        }

        dispatch(change({ timestemp, display: `00:${minut >= 10 ? `${minut}` : `0${minut}`}:${second >= 10 ? second-- : `0${second--}`}` }))

    }, 1000);
}

const stopCronometro = () => dispatch => {
    clearInterval(interval)
    dispatch(reset())
}

export const cronometroActions = {
    startCronometro,
    stopCronometro
}