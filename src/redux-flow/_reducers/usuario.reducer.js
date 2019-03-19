import createReducer from "../_helpers/create-reducer";
import { usuarioConstants } from "../_constants";

const INITIAL_STATE = {
    openDetails: false,
    edit: false
}

export const usuarioReducer = createReducer(INITIAL_STATE, {
    [usuarioConstants.REQUEST]: (state) => ({ ...state }),
    [usuarioConstants.SUCCESS]: (state, action) => ({ ...state, dados: action.payload }),
    [usuarioConstants.FAILURE]: () => ({ ...INITIAL_STATE }),
    [usuarioConstants.OPEN_DETAILS]: (state, action) => ({ ...state, openDetails: action.payload }),
    [usuarioConstants.EDIT]: (state) => ({ ...state, edit: !state.edit }),
})