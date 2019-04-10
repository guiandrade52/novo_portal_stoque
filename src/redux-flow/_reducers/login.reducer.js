import createReducer from "../_helpers/create-reducer";
import { loginConstants } from "../_constants";

const INITIAL_STATE = {
    isFetching: false,
    home: true,

    checkLogin: undefined,
    checkCodigo: undefined,
    checkPassword: undefined,
    register: undefined,
    passExpired: false
}

export const loginReducer = createReducer(INITIAL_STATE, {
    [loginConstants.CHANGE_WINDOW]: (state, action) => ({ ...INITIAL_STATE, home: false, [action.payload]: true }),

    [loginConstants.REQUEST_MAIL]: (state) => ({ ...state, isFetching: true }),
    [loginConstants.SUCCESS_MAIL]: (state, action) => ({ ...state, isFetching: false, checkCodigo: true, checkLogin: false, email: action.payload.email, id: action.payload.id }),
    [loginConstants.FAILURE_MAIL]: (state) => ({ ...state, isFetching: false }),

    [loginConstants.REQUEST_COD]: (state) => ({ ...state, isFetching: true, checkCodigo: true, checkPassword: false }),
    [loginConstants.SUCCESS_COD]: (state, action) => ({ ...state, isFetching: false, checkCodigo: false, checkPassword: true, codigo: action.payload.codigo }),
    [loginConstants.FAILURE_COD]: (state) => ({ ...state, isFetching: false, checkCodigo: true, checkPassword: false }),

    [loginConstants.REQUEST_PASSWORD]: (state) => ({ ...state, isFetching: true, checkCodigo: false, checkPassword: true }),
    [loginConstants.SUCCESS_PASSWORD]: (state) => ({ ...state, isFetching: false, checkCodigo: false, checkPassword: true }),
    [loginConstants.FAILURE_PASSWORD]: (state) => ({ ...state, isFetching: false, checkCodigo: false, checkPassword: true }),

    [loginConstants.CANCELL]: () => ({ ...INITIAL_STATE }),
    [loginConstants.SHOW_RESET_PASSWORD]: (state, action) => ({ ...state, passExpired: action.payload }),
})