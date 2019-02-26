import createReducer from "../_helpers/create-reducer";
import { newTaskConstants } from "../_constants/newTask.constants";

const INITIAL_STATE = {
    isFetching: false,
    btnNew: false
}

export const newTaskReducer = createReducer(INITIAL_STATE, {
    [newTaskConstants.REQUEST]: (state) => ({ ...state, isFetching: true }),
    [newTaskConstants.SUCCESS]: (state, action) => ({ ...state, isFetching: false, ocorrencia: action.payload, btnNew: true }),
    [newTaskConstants.FAILURE]: (state) => ({ ...state, isFetching: false, btnNew: false }),
    [newTaskConstants.UPDATE_DATA]: (state, action) => ({ ...state, data: action.payload }),
    [newTaskConstants.NEW_TASK]: () => (INITIAL_STATE)
})