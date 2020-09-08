import createReducer from "../_helpers/create-reducer";
import { authConstants } from "../_constants";
import { localStorageKey } from "../../appConfig";



let user = JSON.parse(localStorage.getItem(localStorageKey))

const INITIAL_STATE = user
    ? { user, loggedIn: true, error: false, loading: false, expired: false }
    : {}

export const auth = createReducer(INITIAL_STATE, {
    [authConstants.REQUEST]: (state) => ({ ...state, loading: true }),
    [authConstants.FAILURE]: (state) => ({ ...state, loading: false, error: true }),
    [authConstants.SUCCESS]: (state, action) => {
        localStorage.setItem(localStorageKey, JSON.stringify(action.payload))
        return { ...state, loggedIn: true, error: false, loading: false }
    },
    [authConstants.LOGOUT]: () => {
        localStorage.removeItem(localStorageKey)
        return {}
    },
    [authConstants.TOKEN_VALIDATED]: (state) => ({ ...state }),
    [authConstants.SECTION]: (state, action) => ({ ...state, expired: action.payload })
})