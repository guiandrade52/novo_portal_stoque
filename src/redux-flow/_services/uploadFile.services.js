import axios from "axios";
import { appConfig } from "../../appConfig";

const upload = (files, executionId) => {
    const upload = new FormData()
    files.forEach(file => {
        upload.append('file', file)
    })
    return axios.post(`${appConfig.URL_BASE}/UploadFile?executionId=${executionId}`, upload, { headers: { 'content-type': 'multipart/form-data' } })
}

export const uploadFilesServices = {
    upload
}