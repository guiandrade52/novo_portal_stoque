import axios from 'axios';
import { usuarioPortalConstants } from '../_constants'
import { appConfig } from '../../appConfig';
import { helpersActions } from '../_helpers';

const request = () => ({ type: usuarioPortalConstants.REQUEST })
const success = usuarioPortal => ({ type: usuarioPortalConstants.SUCCESS, payload: usuarioPortal })
const failure = () => ({ type: usuarioPortalConstants.FAILURE })

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

export const usuarioPortalActions = {
    fetchUsuariosPortal
}