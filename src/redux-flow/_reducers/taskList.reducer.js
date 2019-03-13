import createReducer from "../_helpers/create-reducer";
import { taskListConstants } from "../_constants";

const INITIAL_STATE = {
    isFetching: false,
    tasks: [],
    viewMobile: true
}

export const taskListReducer = createReducer(INITIAL_STATE, {
    [taskListConstants.REQUEST]: (state) => ({ ...state, tasks: [], isFetching: true }),
    [taskListConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, ...action.payload }),
    [taskListConstants.FAILURE]: () => ({ ...INITIAL_STATE }),
    [taskListConstants.SELECTED]: (state, action) => ({ ...state, viewMobile: true, selected: state.tasks.find(x => x.ExecutionId === action.payload) }),
    [taskListConstants.CLOSE_VIEW_MOBILE]: (state) => ({ ...state, viewMobile: false })
})