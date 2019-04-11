import { usuarioConstants } from "../_constants";
import axios from "axios";
import { appConfig } from "../../appConfig";
import { helpersActions } from "../_helpers";
import { reset } from 'redux-form'
import { toastrActions } from "./toastr.actions";
import { loginActions } from "./login.actions";

const request = () => ({ type: usuarioConstants.REQUEST })
const success = produtos => ({ type: usuarioConstants.SUCCESS, payload: produtos })
const failure = () => ({ type: usuarioConstants.FAILURE })

const fetchUsuario = () => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Usuario`)
        .then(resp => {
            dispatch(success(serialize(resp.data)))
            if (resp.data.Permissoes.AltPassword === 'S' || resp.data.Permissoes.PassCript === 0)
                dispatch(loginActions.resetPassword(true))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

const openDetailsUsuario = () => ({ type: usuarioConstants.OPEN_DETAILS, payload: true });

const closeDetailsUsuario = () => ({ type: usuarioConstants.OPEN_DETAILS, payload: false });

const editUsuario = () => ({ type: usuarioConstants.EDIT })

const sendMail = values => dispatch => {
    dispatch({ type: usuarioConstants.SEND_MAIL, payload: true })
    axios.post(`${appConfig.URL_BASE}/api/NovoUsuario`, values)
        .then(resp => {
            dispatch(reset('formRegister'))
            dispatch(toastrActions.success('E-mail enviado com sucesso, nossa equipe entrará em contato brevemente.'))
            dispatch({ type: usuarioConstants.SEND_MAIL, payload: false })
        })
        .catch(error => {
            dispatch({ type: usuarioConstants.SEND_MAIL, payload: false })
            helpersActions.checkErrorResponse(error, dispatch)
        })
}


export const usuarioActions = {
    fetchUsuario,
    openDetailsUsuario,
    closeDetailsUsuario,
    editUsuario,
    sendMail
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
        ...data.Permissoes,
        ...data.Usuario,
        perfil: data.Permissoes.Perfil,
        registraOcor: data.Permissoes.RgtOcorrencia === 'S' ? true : false,
        contratos: data.Contratos,
        clienteInterno: data.Permissoes.ClienteInterno

    }
}