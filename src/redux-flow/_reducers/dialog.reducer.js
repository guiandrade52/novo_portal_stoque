import createReducer from '../_helpers/create-reducer'
import { dialogConstants } from '../_constants/dialog.constants';

const INITIAL_STATE = {
    notify: [
        { id: 1, title: 'Novidades do sistema', enable: true },
        { id: 2, title: 'Atenção Sistema parado', enable: true },
    ], open: false,
    selected: {}
}

export const dialogReducer = createReducer(INITIAL_STATE, {
    [dialogConstants.SHOW]: (state, action) => {
        const result = state.notify.map(item => {
            if (item.id === action.payload)
                item.enable = false;
            return item
        })
        return { ...state, notify: result, open: true };
    },
    [dialogConstants.HIDE]: (state) => ({ ...state, open: false, selected: {} }),
    [dialogConstants.SELECTED]: (state, action) => ({ ...state, selected: state.notify.find(item => item.id === action.payload) })
})