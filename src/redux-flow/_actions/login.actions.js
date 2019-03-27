import { loginConstants } from "../_constants";
import axios from "axios";
import { appConfig } from "../../appConfig";
import { reset } from 'redux-form'
import { toastrActions } from "./toastr.actions";
import { helpersActions } from "../_helpers";
import { cronometroActions } from "./cronometro.actions";


const request_cod = () => ({ type: loginConstants.REQUEST_COD })
const success_cod = produtos => ({ type: loginConstants.SUCCESS_COD, payload: produtos })
const failure_cod = () => ({ type: loginConstants.FAILURE_COD })

const request_pass = () => ({ type: loginConstants.REQUEST_PASSWORD })
const success_pass = produtos => ({ type: loginConstants.SUCCESS_PASSWORD, payload: produtos })
const failure_pass = () => ({ type: loginConstants.FAILURE_PASSWORD })

const request_mail = () => ({ type: loginConstants.REQUEST_MAIL })
const success_mail = email => ({ type: loginConstants.SUCCESS_MAIL, payload: email })
const failure_mail = () => ({ type: loginConstants.FAILURE_MAIL })


const validaCodigo = values => dispatch => {
    dispatch(request_cod())
    axios.post(`${appConfig.URL_BASE}/api/ResetPassword?codigo=${values.codigo * 1}&idUsuario=${values.id}`)
        .then(resp => {
            dispatch(reset('formCheckCodigo'))
            dispatch(success_cod(resp.data))
        })
        .catch(error => {
            dispatch(failure_cod())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const validaLogin = values => dispatch => {
    dispatch(request_mail())
    axios.post(`${appConfig.URL_BASE}/api/ResetPassword?login=${values.login}`)
        .then(resp => {
            dispatch(reset('formCheckLogin'))
            dispatch(success_mail(resp.data))
            dispatch(cronometroActions.startCronometro(300))
        })
        .catch(error => {
            dispatch(failure_mail())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const cancellReset = (id, codigo) => dispatch => {
    dispatch({ type: loginConstants.CANCELL })
    dispatch(cronometroActions.stopCronometro())
    axios.post(`${appConfig.URL_BASE}/api/ResetPassword?codigoCleared=${codigo}&idUsuario=${id}`)
        .catch(error => {
            dispatch(failure_cod())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const changePassword = values => dispatch => {
    dispatch(request_pass())
    axios.post(`${appConfig.URL_BASE}/api/ResetPassword?password=${values.password}&idUsuario=${values.id}&codigo=${values.codigo}`)
        .then(resp => {
            dispatch(reset('formCheckPassword'))
            dispatch(success_pass(resp.data))
            dispatch(cronometroActions.stopCronometro())
            dispatch(toastrActions.success('A senha foi alterada com sucesso.'))
        })
        .catch(error => {
            dispatch(failure_pass())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const changeWindow = window => ({ type: loginConstants.CHANGE_WINDOW, payload: window })


export const loginActions = {
    validaLogin,
    failure_mail,
    validaCodigo,
    cancellReset,
    changePassword,
    changeWindow
}