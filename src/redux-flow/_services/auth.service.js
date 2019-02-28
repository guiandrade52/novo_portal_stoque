import axios from 'axios';
import qs from 'qs';
import { appConfig } from '../../appConfig';



const login = (username, password) =>
    axios.post(`${appConfig.URL_BASE}/token`, qs.stringify({ username, password, grant_type: 'password' }))
        .then(handleResponse)
        .catch(handleResponse)


const register = data => {

}

const validatedToken = token => {
    axios.defaults.headers.common['Authorization'] = token
    return axios.get(`${appConfig.URL_BASE}/api/Oauth`)
        .then(handleValidatedToken)
        .catch(handleValidatedToken)
}


function handleResponse(response) {
    return response.status === 200
        ? axios.defaults.headers.common['Authorization'] = 'bearer ' + response.data.access_token
        : Promise.reject(response)
}

function handleValidatedToken(response) {
    return response.status === 200
        ? response
        : Promise.reject(response)
}

export const authService = {
    login,
    register,
    validatedToken
}