import { usuarioConstants } from "../_constants";
import axios from "axios";
import { appConfig } from "../../appConfig";
import { helpersActions } from "../_helpers";

const request = () => ({ type: usuarioConstants.REQUEST })
const success = produtos => ({ type: usuarioConstants.SUCCESS, payload: produtos })
const failure = () => ({ type: usuarioConstants.FAILURE })

const fetchUsuario = () => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Usuario`)
        .then(resp => {

            dispatch(success(serialize(resp.data)))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const openDetailsUsuario = () => ({ type: usuarioConstants.OPEN_DETAILS, payload: true });

const closeDetailsUsuario = () => ({ type: usuarioConstants.OPEN_DETAILS, payload: false });

const editUsuario = () => ({ type: usuarioConstants.EDIT })


export const usuarioActions = {
    fetchUsuario,
    openDetailsUsuario,
    closeDetailsUsuario,
    editUsuario
}

function serialize(data) {
    if (data.Permissoes.Perfil === 'C')
        data.Permissoes.Perfil = 'Cliente'
    else if (data.Permissoes.Perfil === 'G')
        data.Permissoes.Perfil = 'Gestor'
    else if (data.Permissoes.Perfil === 'T')
        data.Permissoes.Perfil = 'Técnico'
    else if (data.Permissoes.Perfil === 'CO')
        data.Permissoes.Perfil = 'Consulta'

    return {
        ...data.Usuario,
        perfil: data.Permissoes.Perfil,
        registraOcor: data.Permissoes.RgtOcorrencia === 'S' ? true : false,
        contratos: data.Contratos,
        clienteInterno: data.Permissoes.ClienteInterno

    }
}