import { inputFileConstants } from "../_constants/inputFile.constants";

const add = file => ({ type: inputFileConstants.ADD, payload: file })

const remove = name => ({ type: inputFileConstants.REMOVE, payload: name })

const removeAll = () => ({ type: inputFileConstants.REMOVEALL })

export const inputFileActions = {
    add,
    remove,
    removeAll,
}
