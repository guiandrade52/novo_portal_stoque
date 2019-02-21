import createReducer from '../_helpers/create-reducer'
import { appConstants } from '../_constants';

const INITIAL_STATE = { title: '' }

export const appReducer = createReducer(INITIAL_STATE, {
    [appConstants.CHANGE_TITLE]: (state, action) => {
        debugger
        return { title: action.payload }
    }
})