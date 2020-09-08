import { toastrConstants } from "../_constants";

const success = message => ({ type: toastrConstants.SUCCESS, payload: message })

const error = message => ({ type: toastrConstants.ERROR, payload: message })

const warning = message => ({ type: toastrConstants.WARNING, payload: message })

const info = message => ({ type: toastrConstants.INFO, payload: message })

const close = () => ({ type: toastrConstants.CLOSE, payload: false })

export const toastrActions = {
    success,
    error,
    warning,
    info,
    close,
}