import createReducer from "../_helpers/create-reducer";
import { serieConstants } from "../_constants/serie.constants";
import { contatoConstants } from "../_constants";

const INITIAL_STATE = {
    isFetching: false,
    series: [],
    contatos: [],
    serieDetails: {}

}

export const repositoryReducer = createReducer(INITIAL_STATE, {
    [serieConstants.REQUEST]: (state) => ({ ...state, isFetching: true }),
    [serieConstants.SUCCESS]: (state, action) => ({ ...state, series: action.payload, isFetching: false }),
    [serieConstants.FAILURE]: () => ({ isFetching: false }),

    [serieConstants.REQUEST_DETAILS]: (state) => ({ ...state, isFetching: true }),
    [serieConstants.SUCCESS_DETAILS]: (state, action) => ({ ...state, serieDetails: action.payload, isFetching: false }),
    [serieConstants.FAILURE_DETAILS]: () => ({ isFetching: false }),

    [contatoConstants.REQUEST]: (state) => ({ ...state, contatos: [], isFetching: true }),
    [contatoConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, contatos: action.payload }),
    [contatoConstants.FAILURE]: () => ({ contatos: {}, isFetching: false })

})