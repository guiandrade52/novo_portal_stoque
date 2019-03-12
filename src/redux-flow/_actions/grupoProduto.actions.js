import axios from 'axios'
import { grupoProdutosConstants } from "../_constants";
import { appConfig } from '../../appConfig';
import { helpersActions } from '../_helpers';

const request = () => ({ type: grupoProdutosConstants.REQUEST })
const success = grupoProduto => ({ type: grupoProdutosConstants.SUCCESS, payload: grupoProduto })
const failure = () => ({ type: grupoProdutosConstants.FAILURE })

const fetchGrupoProduto = contrato => dispatch => {
    dispatch(request())
    axios.get(`${appConfig.URL_BASE}/api/GrupoProduto`, { params: { contrato } })
        .then(resp => {
            dispatch(success(resp.data))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const grupoProdutoActions = {
    fetchGrupoProduto
}