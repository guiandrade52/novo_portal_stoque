import createReducer from "../_helpers/create-reducer";
import { serieConstants, usuarioPortalConstants, parceiroAbConstants, parceiroAtConstants, grupoProdutosConstants, produtosConstants, newTaskConstants } from "../_constants";
import { contatoConstants, contratoConstants, servicoConstants } from "../_constants";

const INITIAL_STATE = {
    isFetching: false,
    series: [],
    contatos: [],
    serieDetails: undefined,
    contratoDetails: undefined,
    contratos: [],
    servicos: [],
    usuarioPortal: [],
    parceiroAb: [],
    parceiroAt: [],
    grupoProdutos: [],
    produtos: []
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

    [contratoConstants.REQUEST_DETAILS]: (state) => ({ ...state, contratoDetails: [], isFetching: true }),
    [contratoConstants.SUCCESS_DETAILS]: (state, action) => ({ ...state, isFetching: false, contratoDetails: action.payload }),
    [contratoConstants.FAILURE_DETAILS]: (state) => ({ ...state, contratoDetails: [], isFetching: false }),

    [servicoConstants.REQUEST]: (state) => ({ ...state, servicos: [], isFetching: true }),
    [servicoConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, servicos: action.payload }),
    [servicoConstants.FAILURE]: (state) => ({ ...state, servicos: [], isFetching: false }),

    [usuarioPortalConstants.REQUEST]: (state) => ({ ...state, usuarioPortal: [], isFetching: true }),
    [usuarioPortalConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, usuarioPortal: action.payload }),
    [usuarioPortalConstants.FAILURE]: (state) => ({ ...state, usuarioPortal: [], isFetching: false }),

    [usuarioPortalConstants.REQUEST_CLONE]: (state) => ({ ...state, isFetching: true }),
    [usuarioPortalConstants.SUCCESS_CLONE]: (state) => ({ ...state, isFetching: false }),
    [usuarioPortalConstants.FAILURE_CLONE]: (state) => ({ ...state, isFetching: false }),

    [parceiroAbConstants.REQUEST]: (state) => ({ ...state, parceiroAb: [], isFetching: true }),
    [parceiroAbConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, parceiroAb: action.payload }),
    [parceiroAbConstants.FAILURE]: (state) => ({ ...state, parceiroAb: [], isFetching: false }),

    [parceiroAtConstants.REQUEST]: (state) => ({ ...state, parceiroAt: [], isFetching: true }),
    [parceiroAtConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, parceiroAt: action.payload }),
    [parceiroAtConstants.FAILURE]: (state) => ({ ...state, parceiroAt: [], isFetching: false }),

    [grupoProdutosConstants.REQUEST]: (state) => ({ ...state, grupoProdutos: [], isFetching: true }),
    [grupoProdutosConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, grupoProdutos: action.payload }),
    [grupoProdutosConstants.FAILURE]: (state) => ({ ...state, grupoProdutos: [], isFetching: false }),

    [produtosConstants.REQUEST]: (state) => ({ ...state, produtos: [], isFetching: true }),
    [produtosConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, produtos: action.payload }),
    [produtosConstants.FAILURE]: (state) => ({ ...state, produtos: [], isFetching: false }),

    [newTaskConstants.RESET_NEWTASK]: () => (INITIAL_STATE)
})