import { relatorioConstants } from "../_constants/relatorio.constants";
import axios from "axios";
import { appConfig } from "../../appConfig";
import { helpersActions } from "../_helpers";

const request = () => ({ type: relatorioConstants.REQUEST })
const success = () => ({ type: relatorioConstants.SUCCESS })
const failure = () => ({ type: relatorioConstants.FAILURE })

const fetchRelatorio = filter => dispatch => {
    dispatch(request())
    axios({
        url: `${appConfig.URL_BASE}/api/Relatorio`,
        method: 'GET',
        params: filter,
        responseType: 'blob' //important
    })
        .then(resp => {
            const url = window.URL.createObjectURL(new Blob([resp.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `Relatório Portal ${new Date().toLocaleTimeString()}.xlsx`);
            document.body.appendChild(link);
            link.click();
            dispatch(success())
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const relatorioActions = { fetchRelatorio }
