import axios from 'axios'
import { produtosConstants } from "../_constants";
import { appConfig } from '../../appConfig';
import { helpersActions } from '../_helpers';

const request = () => ({ type: produtosConstants.REQUEST })
const success = produtos => ({ type: produtosConstants.SUCCESS, payload: produtos })
const failure = () => ({ type: produtosConstants.FAILURE })

const fetchProdutos = (codGrupo, contrato) => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/Produto`, { params: { codGrupo, contrato } })
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const produtosActions = {
    fetchProdutos
}