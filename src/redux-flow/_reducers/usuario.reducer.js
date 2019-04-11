import createReducer from "../_helpers/create-reducer";
import { usuarioConstants } from "../_constants";

const INITIAL_STATE = {
    isFetch: false,
    openDetails: false,
    edit: false,
    dados: {},
    isSendMail: false,
}

export const usuarioReducer = createReducer(INITIAL_STATE, {
    [usuarioConstants.REQUEST]: (state) => ({ ...state, isFetch: true }),
    [usuarioConstants.SUCCESS]: (state, action) => ({ ...state, dados: action.payload, isFetch: false }),
    [usuarioConstants.FAILURE]: () => ({ ...INITIAL_STATE }),

    [usuarioConstants.REQUEST_UPDATE]: (state) => ({ ...state, isFetch: true }),
    [usuarioConstants.SUCCESS_UPDATE]: (state) => ({ ...state, isFetch: false }),
    [usuarioConstants.FAILURE_UPDATE]: (state) => ({ ...state, isFetch: false }),

    [usuarioConstants.OPEN_DETAILS]: (state, action) => ({ ...state, openDetails: action.payload }),
    [usuarioConstants.EDIT]: (state) => ({ ...state, edit: !state.edit }),
    [usuarioConstants.SEND_MAIL]: (state, action) => ({ ...state, isSendMail: action.payload }),
})