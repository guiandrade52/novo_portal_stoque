import createReducer from '../_helpers/create-reducer';
import { toastrConstants } from '../_constants';


const INITIAL_STATE = {
    open: false,
    message: 'texto Padrão',
    vertical: 'bottom',
    horizontal: 'right',
    variant: 'success',
    autoHideDuration: 10000
}

export const toastr = createReducer(INITIAL_STATE, {
    [toastrConstants.SUCCESS]: (state, action) => ({ ...state, open: true, variant: 'success', message: action.payload }),
    [toastrConstants.ERROR]: (state, action) => ({ ...state, open: true, variant: 'error', message: action.payload }),
    [toastrConstants.WARNING]: (state, action) => ({ ...state, open: true, variant: 'warning', message: action.payload }),
    [toastrConstants.INFO]: (state, action) => ({ ...state, open: true, variant: 'info', message: action.payload }),
    [toastrConstants.CLOSE]: (state, action) => ({ ...state, open: action.payload })
})