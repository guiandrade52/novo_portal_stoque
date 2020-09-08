import createReducer from "../_helpers/create-reducer";
import { relatorioConstants } from "../_constants/relatorio.constants";

const INITIAL_STATE = {
    isFetching: false,
    start: false
}

export const relatorioReducer = createReducer(INITIAL_STATE, {
    [relatorioConstants.REQUEST]: () => ({ isFetching: true }),
    [relatorioConstants.SUCCESS]: () => ({ isFetching: false }),
    [relatorioConstants.FAILURE]: () => ({ isFetching: false }),

    [relatorioConstants.START]: (state, action) => ({ ...state, start: action.payload }),
})