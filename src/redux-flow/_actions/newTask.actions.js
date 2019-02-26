import { newTaskConstants } from "../_constants/newTask.constants";
import { requestServices, uploadFilesServices } from "../_services";
import { helpersActions } from "../_helpers";
import { toastrActions } from "./toastr.actions";

const request = () => ({ type: newTaskConstants.REQUEST })
const success = ocorrencia => ({ type: newTaskConstants.SUCCESS, payload: ocorrencia })
const failure = () => ({ type: newTaskConstants.FAILURE })


const updateDataResumo = data => ({ type: newTaskConstants.UPDATE_DATA, payload: data })

const uploadFile = (files, ocorrencia) => dispatch => {
    uploadFilesServices.upload(files, ocorrencia)
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const save = data => dispatch => {
    dispatch(request())
    requestServices.post('Task', data)
        .then(resp => {
            data.files.length > 0 && dispatch(uploadFile(data.files, resp.data))
            dispatch(toastrActions.success(`Sua ocorrência foi criada com sucesso, N°: ${resp.data}`))
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const newTask = () => ({ type: newTaskConstants.NEW_TASK })

export const newTaskActions = {
    updateDataResumo,
    save,
    newTask,
    uploadFile
}