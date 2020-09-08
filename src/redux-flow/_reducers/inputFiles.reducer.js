import createReducer from "../_helpers/create-reducer";
import { inputFileConstants } from "../_constants/inputFile.constants";

export const inputFiles = createReducer([], {
    [inputFileConstants.ADD]: (state, action) => [...state, ...action.payload],
    [inputFileConstants.REMOVE]: (state, action) => state.filter(item => item.name !== action.payload),
    [inputFileConstants.REMOVEALL]: (state, action) => []
})