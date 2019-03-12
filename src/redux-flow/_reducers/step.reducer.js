import createReducer from "../_helpers/create-reducer";
import { stepConstants } from "../_constants/step.constants";

const INITIAL_STATE = {
    activeStep: 0,
}

export const steppersReducer = createReducer(INITIAL_STATE, {
    [stepConstants.NEXT]: (state, action) => ({ ...state, activeStep: action.payload }),
    [stepConstants.BACK]: (state, action) => ({ ...state, activeStep: action.payload }),
    [stepConstants.RESET]: (state, action) => ({ ...state, activeStep: action.payload }),
})