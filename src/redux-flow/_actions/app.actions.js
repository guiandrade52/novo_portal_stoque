import { appConstants } from '../_constants'

function changeTitle(title) {
    document.title = title
    return ({ type: appConstants.CHANGE_TITLE, payload: title })
}

export const appActions = {
    changeTitle
}