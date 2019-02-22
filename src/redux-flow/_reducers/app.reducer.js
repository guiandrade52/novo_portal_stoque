import createReducer from '../_helpers/create-reducer'
import { appConstants } from '../_constants';

const INITIAL_STATE = { title: '' }

export const app = createReducer(INITIAL_STATE, {
    [appConstants.CHANGE_TITLE]: (state, action) => {
        return { ...state, title: action.payload }
    }
})