import { adminConstants } from "../_constants/admin.constants";
import { appConfig } from "../../appConfig";
import axios from "axios";
import { helpersActions } from "../_helpers";
import { toastrActions } from "./toastr.actions";
import { stepActions } from "./step.actions";
import { reset } from 'redux-form'

const request_sync = () => ({ type: adminConstants.REQUEST_SYNC })
const success_sync = () => ({ type: adminConstants.SUCCESS_SYNC })
const failure_sync = () => ({ type: adminConstants.FAILURE_SYNC })

const request_delete = () => ({ type: adminConstants.REQUEST_DELETE })
const success_delete = contratos => ({ type: adminConstants.SUCCESS_DELETE, payload: contratos })
const failure_delete = () => ({ type: adminConstants.FAILURE_DELETE })

const request_list = () => ({ type: adminConstants.REQUEST_LIST })
const success_list = contratos => ({ type: adminConstants.SUCCESS_LIST, payload: contratos })
const failure_list = () => ({ type: adminConstants.FAILURE_LIST })


const saveSyncContrato = values => dispatch => {
    dispatch(request_sync())
    axios.get(`${appConfig.URL_BASE}/api/Contrato`, { params: values })
        .then(resp => {
            if (resp.status === 206) {
                dispatch(success_sync())
                dispatch(toastrActions.warning(`Alguns contratos estão duplicados e não foram cadastrados`))
            }
            else {
                dispatch(success_sync())
                dispatch(toastrActions.success('Contratos cadastrados com sucesso.'))
            }
            dispatch(stepActions.reset())
            dispatch(reset('formVincularContrato'))
        })
        .catch(error => {
            dispatch(failure_sync())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const listaContratoPUsuario = idUsuario => dispatch => {
    if (!idUsuario)
        return

    dispatch(request_list())
    axios.get(`${appConfig.URL_BASE}/api/Contrato`, { params: { idUsuario: idUsuario.value ? idUsuario.value : idUsuario } })
        .then(resp => dispatch(success_list(resp.data)))
        .catch(error => {
            dispatch(failure_list())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const deleteContrato = values => dispatch => {
    dispatch(request_delete())
    axios.get(`${appConfig.URL_BASE}/api/Contrato`, { params: values })
        .then(() => {
            dispatch(success_delete(values))
            dispatch(listaContratoPUsuario(values.idUsuario))
            dispatch(toastrActions.success(`O Cliente ${values.codParc} do contrato ${values.contrato} foi removido com sucesso`))
        })
        .catch(error => {
            dispatch(failure_delete())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}


export const adminActions = {
    saveSyncContrato,
    listaContratoPUsuario,
    deleteContrato
}