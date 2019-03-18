import createReducer from '../_helpers/create-reducer'
import { chartsConstants } from '../_constants';

const INITIAL_STATE = { chartLine: [] }

export const chartReducer = createReducer(INITIAL_STATE, {
    [chartsConstants.REQUEST]: (state) => ({ ...state, isFetch: true }),
    [chartsConstants.FAILURE]: () => ({ chartLine: [], isFetch: false }),
    [chartsConstants.SUCCESS]: (state, action) => ({ ...state, chartLine: action.payload, isFetch: false })
})