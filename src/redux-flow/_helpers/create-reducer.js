const createReducer = (INITIAL_STATE, handleActions) => (
    (state = INITIAL_STATE, action) => (
        (handleActions.hasOwnProperty(action.type))
            ? handleActions[action.type](state, action)
            : state
    )
)

export default createReducer