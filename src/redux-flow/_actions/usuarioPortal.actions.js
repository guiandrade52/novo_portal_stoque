import axios from 'axios';
import { usuarioPortalConstants } from '../_constants'
import { appConfig } from '../../appConfig';
import { helpersActions } from '../_helpers';
import { reset } from 'redux-form'
import { toastrActions } from './toastr.actions';

const request = () => ({ type: usuarioPortalConstants.REQUEST })
const success = usuarioPortal => ({ type: usuarioPortalConstants.SUCCESS, payload: usuarioPortal })
const failure = () => ({ type: usuarioPortalConstants.FAILURE })

const request_clone = () => ({ type: usuarioPortalConstants.REQUEST_CLONE })
const success_clone = usuarioPortal => ({ type: usuarioPortalConstants.SUCCESS_CLONE, payload: usuarioPortal })
const failure_clone = () => ({ type: usuarioPortalConstants.FAILURE_CLONE })

const fetchUsuariosPortal = (search = '') => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/UsuarioPortal`, { params: { search } })
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const fetchCloneUsuario = values => dispatch => {
    dispatch(request_clone())
    axios.get(`${appConfig.URL_BASE}/api/UsuarioPortal`, { params: values })
        .then(resp => {
            dispatch(success_clone(resp.data))
            dispatch(reset('formClonaUsuarios'))
            dispatch(toastrActions.success('Usuário Clonado com sucesso.'))
        })
        .catch(error => {
            dispatch(failure_clone())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const usuarioPortalActions = {
    fetchUsuariosPortal,
    fetchCloneUsuario
}