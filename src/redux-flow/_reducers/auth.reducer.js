import createReducer from "../_helpers/create-reducer";
import { authConstants } from "../_constants";

const localStorageKey = 'portal_keyData'

let user = JSON.parse(localStorage.getItem(localStorageKey))

const INITIAL_STATE = user
    ? { user, loggedIn: true, error: false, loading: true }
    : {}

export const auth = createReducer(INITIAL_STATE, {
    [authConstants.REQUEST]: (state) => ({ ...state, loading: true }),
    [authConstants.FAILURE]: (state) => ({ ...state, loading: false, error: true }),
    [authConstants.SUCCESS]: (state, action) => {
        localStorage.setItem(localStorageKey, JSON.stringify(action.payload))
        return { ...state, loggedIn: true }
    },
    [authConstants.LOGOUT]: () => {
        localStorage.removeItem(localStorageKey)
        return {}
    },
    [authConstants.TOKEN_VALIDATED]: (state) => ({ ...state })
})