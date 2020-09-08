import { filterConstants } from "../_constants";


const changeAdvancedFilter = filter => ({ type: filterConstants.CHANGE, payload: filter })
const changeInputFilter = search => ({ type: filterConstants.CHANGEINPUT, payload: search })

const applyFilter = values => dispatch => {
    let filter = {}
    Object.keys(values).forEach(key => filter[key] = Array.isArray(values[key]) && values[key].length > 0 ? values[key].map(item => item.value).toString() : values[key])
    dispatch(changeAdvancedFilter(filter))
}


const resetFilter = () => ({ type: filterConstants.RESET })

export const filterActions = {
    changeInputFilter,
    applyFilter,
    resetFilter
}