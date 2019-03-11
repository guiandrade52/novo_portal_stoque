import createReducer from "../_helpers/create-reducer";
import { serieConstants, usuarioPortalConstants, parceiroAbConstants, parceiroAtConstants } from "../_constants";
import { contatoConstants, contratoConstants, servicoConstants } from "../_constants";

const INITIAL_STATE = {
    isFetching: false,
    series: [],
    contatos: [],
    serieDetails: {},
    contratos: [],
    servicos: [],
    usuarioPortal: [],
    parceiroAb: [],
    parceiroAt: []

}

export const repositoryReducer = createReducer(INITIAL_STATE, {
    [serieConstants.REQUEST]: (state) => ({ ...state, series: [], isFetching: true }),
    [serieConstants.SUCCESS]: (state, action) => ({ ...state, series: action.payload, isFetching: false }),
    [serieConstants.FAILURE]: (state) => ({ ...state, isFetching: false, series: [] }),

    [serieConstants.REQUEST_DETAILS]: (state) => ({ ...state, isFetching: true }),
    [serieConstants.SUCCESS_DETAILS]: (state, action) => ({ ...state, serieDetails: action.payload, isFetching: false }),
    [serieConstants.FAILURE_DETAILS]: (state) => ({ ...state, isFetching: false }),

    [contatoConstants.REQUEST]: (state) => ({ ...state, contatos: [], isFetching: true }),
    [contatoConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, contatos: action.payload }),
    [contatoConstants.FAILURE]: (state) => ({ ...state, contatos: [], isFetching: false }),

    [contratoConstants.REQUEST]: (state) => ({ ...state, contratos: [], isFetching: true }),
    [contratoConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, contratos: action.payload }),
    [contratoConstants.FAILURE]: (state) => ({ ...state, contratos: [], isFetching: false }),

    [servicoConstants.REQUEST]: (state) => ({ ...state, servicos: [], isFetching: true }),
    [servicoConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, servicos: action.payload }),
    [servicoConstants.FAILURE]: (state) => ({ ...state, servicos: [], isFetching: false }),

    [usuarioPortalConstants.REQUEST]: (state) => ({ ...state, usuarioPortal: [], isFetching: true }),
    [usuarioPortalConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, usuarioPortal: action.payload }),
    [usuarioPortalConstants.FAILURE]: (state) => ({ ...state, usuarioPortal: [], isFetching: false }),

    [parceiroAbConstants.REQUEST]: (state) => ({ ...state, parceiroAb: [], isFetching: true }),
    [parceiroAbConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, parceiroAb: action.payload }),
    [parceiroAbConstants.FAILURE]: (state) => ({ ...state, parceiroAb: [], isFetching: false }),

    [parceiroAtConstants.REQUEST]: (state) => ({ ...state, parceiroAt: [], isFetching: true }),
    [parceiroAtConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, parceiroAt: action.payload }),
    [parceiroAtConstants.FAILURE]: (state) => ({ ...state, parceiroAt: [], isFetching: false }),
})