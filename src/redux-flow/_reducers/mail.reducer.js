import createReducer from "../_helpers/create-reducer";
import { mailConstants } from "../_constants";

const INITIAL_STATE = {
    isFetching: false
}
export const mailReducer = createReducer(INITIAL_STATE, {
    [mailConstants.REQUEST]: () => ({ isFetching: true }),
    [mailConstants.SUCCESS]: () => ({ isFetching: false }),
    [mailConstants.FAILURE]: () => ({ isFetching: false })
})