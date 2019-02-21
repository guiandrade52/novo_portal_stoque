import { appConstants } from '../_constants'

const changeTitle = title => ({ type: appConstants.CHANGE_TITLE, payload: title })

export const appActions = {
    changeTitle
}