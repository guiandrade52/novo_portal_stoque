import axios from "axios";
import { toastrActions } from "./toastr.actions";
import { helpersActions } from "../_helpers";
import { mailConstants } from "../_constants";
import { Sol_Equip_Mail } from "../../components/MailTemplates";

const request = () => ({ type: mailConstants.REQUEST })
const success = () => ({ type: mailConstants.SUCCESS })
const failure = () => ({ type: mailConstants.FAILURE })

const sendMail = values => dispatch => {
    const mail = Sol_Equip_Mail(values);
    dispatch(request())
    axios.post('/api/form', { mail })
        .then(res => {
            dispatch(success())
            dispatch(toastrActions.success("E-mail enviado com sucesso"))
        })
        .catch(error => {
            dispatch(failure())
            helpersActions.checkErrorResponse(error, dispatch)
        })
}

export const mailActions = {
    sendMail
}