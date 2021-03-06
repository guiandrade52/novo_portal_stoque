import { newTaskConstants } from "../_constants/newTask.constants";
import { helpersActions } from "../_helpers";
import { toastrActions } from "./toastr.actions";
import { stepActions } from "./step.actions";
import axios from 'axios'
import { reset as resetForm } from 'redux-form'
import { appConfig } from "../../appConfig";
import { inputFileActions } from "./inputFile.actions";

const request = () => ({ type: newTaskConstants.REQUEST })
const success = ocorrencia => ({ type: newTaskConstants.SUCCESS, payload: ocorrencia })
const failure = () => ({ type: newTaskConstants.FAILURE })
const updateDataResumo = data => ({ type: newTaskConstants.UPDATE_DATA, payload: data })
const reset = () => ({ type: newTaskConstants.RESET_NEWTASK })

const uploadFile = (files, ocorrencia) => dispatch => {
    const upload = new FormData()
    files.forEach(file => upload.append('file', file))
    axios.post(`${appConfig.URL_BASE}/UploadFile?executionId=${ocorrencia}`, upload, { headers: { 'content-type': 'multipart/form-data' } })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const save = data => dispatch => {
    dispatch(request())
    axios.post(`${appConfig.URL_BASE}/api/Task`, data)
        .then(resp => {
            data.files && data.files.length > 0 && dispatch(uploadFile(data.files, resp.data))
            dispatch(toastrActions.success(`Sua ocorrência foi criada com sucesso, N°: ${resp.data}`))
            dispatch(success(resp.data))
            dispatch(inputFileActions.removeAll())
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const newTask = () => ({ type: newTaskConstants.NEW_TASK })

const resetNewTask = () => dispatch => {
    dispatch(reset())
    dispatch(resetForm('formInterno'))
    dispatch(resetForm('formExterno'))
    dispatch(updateDataResumo(undefined))
    dispatch(stepActions.reset())
    dispatch(failure())
    dispatch(inputFileActions.removeAll())
}

export const newTaskActions = {
    updateDataResumo,
    save,
    newTask,
    uploadFile,
    resetNewTask
}