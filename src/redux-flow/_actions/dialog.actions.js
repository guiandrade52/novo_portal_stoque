import { dialogConstants } from "../_constants/dialog.constants";

const selected = (id) => ({ type: dialogConstants.SELECTED, payload: id })

const showDialog = (id) => dispatch => {
    dispatch(selected(id))
    dispatch({ type: dialogConstants.SHOW, payload: id })
}

const hideDialog = () => ({ type: dialogConstants.HIDE })

export const dialogActions = {
    showDialog,
    hideDialog,
}