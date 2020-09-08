import axios from "axios";
import { appConfig } from "../../appConfig";


const get = (url, params) => axios.get(`${appConfig.URL_BASE}/api/${url}`, { params })

const post = (url, params) => axios.post(`${appConfig.URL_BASE}/api/${url}`, params)

export const requestServices = {
    get,
    post
}