import createReducer from "../_helpers/create-reducer";
import { usuarioConstants } from "../_constants";

const INITIAL_STATE = {
    isFetch: false,
    openDetails: false,
    edit: false,
    dados: {}
}

export const usuarioReducer = createReducer(INITIAL_STATE, {
    [usuarioConstants.REQUEST]: (state) => ({ ...state, isFetch: true }),
    [usuarioConstants.SUCCESS]: (state, action) => ({ ...state, dados: action.payload, isFetch: false }),
    [usuarioConstants.FAILURE]: () => ({ ...INITIAL_STATE }),
    [usuarioConstants.OPEN_DETAILS]: (state, action) => ({ ...state, openDetails: action.payload }),
    [usuarioConstants.EDIT]: (state) => ({ ...state, edit: !state.edit }),
})