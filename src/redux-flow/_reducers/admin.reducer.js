import createReducer from "../_helpers/create-reducer";
import { adminConstants } from "../_constants/admin.constants";

const INITIAL_STATE = {
    isFetching: false,
    contratos: []
}

export const adminReducer = createReducer(INITIAL_STATE, {
    [adminConstants.REQUEST_SYNC]: (state) => ({ ...state, isFetching: true }),
    [adminConstants.SUCCESS_SYNC]: () => ({ isFetching: false }),
    [adminConstants.FAILURE_SYNC]: () => ({ ...INITIAL_STATE, isFetching: false }),

    [adminConstants.REQUEST_LIST]: (state) => ({ ...state, isFetching: true }),
    [adminConstants.SUCCESS_LIST]: (state, action) => ({ isFetching: false, contratos: action.payload }),
    [adminConstants.FAILURE_LIST]: () => ({ ...INITIAL_STATE, isFetching: false }),

    [adminConstants.REQUEST_DELETE]: (state) => ({ ...state, isFetching: true }),
    [adminConstants.SUCCESS_DELETE]: (state, action) => ({ ...state }),
    [adminConstants.FAILURE_DELETE]: () => ({ ...INITIAL_STATE, isFetching: false }),
})