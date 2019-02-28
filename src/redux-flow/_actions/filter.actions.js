import { filterConstants } from "../_constants";

const change = (key, value) => ({ type: filterConstants.CHANGE, payload: { key, value } })




export const filterActions = {
    change
}