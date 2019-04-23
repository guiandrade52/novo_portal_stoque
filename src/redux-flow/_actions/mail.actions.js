import axios from "axios";
import { toastrActions } from "./toastr.actions";
import { helpersActions } from "../_helpers";
import { mailConstants } from "../_constants";
import {reset} from 'redux-form'

const request = () => ({ type: mailConstants.REQUEST })
const success = () => ({ type: mailConstants.SUCCESS })
const failure = () => ({ type: mailConstants.FAILURE })

const sendMail = mail => dispatch => {
    dispatch(request())
    axios.post('/api/SendMail', mail)
        .then(res => {
            dispatch(success())
            dispatch(toastrActions.success("E-mail enviado com sucesso"))
            dispatch(reset(mail.formreset))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const mailActions = {
    sendMail
}