import createReducer from '../_helpers/create-reducer'
import { chartsConstants } from '../_constants';

const INITIAL_STATE = { chartLine: [], chartRound: [] }

export const chartReducer = createReducer(INITIAL_STATE, {
    [chartsConstants.REQUEST]: (state) => ({ ...state, isFetch: true }),
    [chartsConstants.FAILURE]: () => ({ chartLine: [], chartRound: [], isFetch: false }),
    [chartsConstants.SUCCESS]: (state, action) => ({ ...state, chartLine: action.payload.ChartsLine, chartRound: action.payload.ChartsRound, isFetch: false })
})