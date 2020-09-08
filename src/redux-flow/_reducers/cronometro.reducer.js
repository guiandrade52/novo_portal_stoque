import createReducer from "../_helpers/create-reducer";
import { cronometroConstants } from "../_constants";

const INITIAL_STATE = {
    display: '',
    timestemp: 0
}

export const cronometroReducer = createReducer(INITIAL_STATE, {
    [cronometroConstants.CHANGE]: (state, action) => ({ ...state, ...action.payload }),
    [cronometroConstants.RESET]: () => ({ ...INITIAL_STATE })
})